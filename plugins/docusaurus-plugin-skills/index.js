// Docusaurus content plugin: reads Agent Skills from a directory (the
// `external/skills` git submodule) and generates a catalog route plus one
// route per skill. Build-time Node code, so this file is CommonJS.
const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises');
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');
const {normalizeUrl} = require('@docusaurus/utils');

const md = new MarkdownIt({html: true, linkify: true, breaks: false});

// Recursively collect file paths under `dir`, relative to `base`, with
// forward slashes so they compose into GitHub URLs on any OS.
async function walkFiles(dir, base = dir) {
  const out = [];
  let entries;
  try {
    entries = await fsp.readdir(dir, {withFileTypes: true});
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walkFiles(full, base)));
    } else {
      out.push(path.relative(base, full).split(path.sep).join('/'));
    }
  }
  return out;
}

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = function skillsPlugin(context, options) {
  const {baseUrl} = context.siteConfig;
  const {
    skillsDir = './external/skills',
    repoUrl = '',
    branch = 'main',
    routeBasePath = 'skills',
  } = options || {};
  const skillsRoot = path.resolve(context.siteDir, skillsDir);

  return {
    name: 'docusaurus-plugin-skills',

    getPathsToWatch() {
      return [path.join(skillsRoot, '**/*.{md,json}')];
    },

    async loadContent() {
      let entries;
      try {
        entries = await fsp.readdir(skillsRoot, {withFileTypes: true});
      } catch {
        console.warn(
          `[skills] Could not read ${skillsRoot}. If you just cloned, run: ` +
            `git submodule update --init --recursive`,
        );
        return {skills: []};
      }

      const skills = [];
      for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        const skillDir = path.join(skillsRoot, entry.name);
        const skillMdPath = path.join(skillDir, 'SKILL.md');
        if (!fs.existsSync(skillMdPath)) continue;

        const raw = await fsp.readFile(skillMdPath, 'utf8');
        const {data, content} = matter(raw);
        const id = entry.name;
        const {name, description, ...rest} = data;

        const files = (await walkFiles(skillDir)).filter((f) => f !== 'SKILL.md');
        const tags = Array.isArray(rest.tags)
          ? rest.tags
          : rest.metadata && Array.isArray(rest.metadata.tags)
            ? rest.metadata.tags
            : [];

        skills.push({
          id,
          name: name || id,
          description: description || '',
          meta: rest, // license, allowed-tools, metadata, ...
          tags,
          bodyHtml: md.render(content),
          files,
          permalink: normalizeUrl([baseUrl, routeBasePath, id]),
          githubUrl: repoUrl ? `${repoUrl}/tree/${branch}/${id}` : null,
          fileBaseUrl: repoUrl ? `${repoUrl}/blob/${branch}/${id}` : null,
        });
      }

      skills.sort((a, b) => a.name.localeCompare(b.name));
      return {skills};
    },

    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;
      const {skills} = content;
      const catalogPermalink = normalizeUrl([baseUrl, routeBasePath]);

      // Catalog: a lightweight list without the heavy rendered bodies.
      const listItems = skills.map(({bodyHtml, files, meta, ...rest}) => rest);
      const listData = await createData(
        'skills-list.json',
        JSON.stringify(listItems),
      );
      addRoute({
        path: catalogPermalink,
        component: '@site/src/components/Skills/Catalog',
        modules: {skills: listData},
        exact: true,
      });

      // One detail route per skill.
      for (const skill of skills) {
        const data = await createData(
          `skill-${skill.id}.json`,
          JSON.stringify({...skill, catalogPermalink}),
        );
        addRoute({
          path: skill.permalink,
          component: '@site/src/components/Skills/Detail',
          modules: {skill: data},
          exact: true,
        });
      }
    },
  };
};
