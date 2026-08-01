// plugins/docusaurus-plugin-lyrics/index.js
// Docusaurus content plugin: reads song METADATA (frontmatter only) from a
// directory (the `external/lyrics` git submodule) and generates a catalog
// route, a random route, and one route per song. No lyric text is stored or
// rendered — each song links out to Genius. Build-time Node code -> CommonJS.
const path = require('path');
const fsp = require('fs/promises');
const matter = require('gray-matter');
const {normalizeUrl} = require('@docusaurus/utils');

/** @type {import('@docusaurus/types').PluginModule} */
module.exports = function lyricsPlugin(context, options) {
  const {baseUrl} = context.siteConfig;
  const {
    lyricsDir = './external/lyrics',
    repoUrl = '',
    branch = 'main',
    routeBasePath = 'songbook',
  } = options || {};
  const lyricsRoot = path.resolve(context.siteDir, lyricsDir);

  return {
    name: 'docusaurus-plugin-lyrics',

    getPathsToWatch() {
      return [path.join(lyricsRoot, '**/*.md')];
    },

    async loadContent() {
      let entries;
      try {
        entries = await fsp.readdir(lyricsRoot, {withFileTypes: true});
      } catch {
        console.warn(
          `[lyrics] Could not read ${lyricsRoot}. If you just cloned, run: ` +
            `git submodule update --init --recursive`,
        );
        return {songs: []};
      }

      const songs = [];
      for (const entry of entries) {
        // Flat .md files only; skip dirs and the README.
        if (!entry.isFile()) continue;
        if (!entry.name.endsWith('.md')) continue;
        if (entry.name.toLowerCase() === 'readme.md') continue;

        const filePath = path.join(lyricsRoot, entry.name);
        const raw = await fsp.readFile(filePath, 'utf8');
        const {data} = matter(raw);
        const id = entry.name.replace(/\.md$/, '');
        const {title, artist, year, tags, geniusUrl, note, ...rest} = data;

        songs.push({
          id,
          title: title || id,
          artist: artist || '',
          year: year ?? null,
          tags: Array.isArray(tags) ? tags : [],
          geniusUrl: geniusUrl || '',
          note: note || '',
          meta: rest,
          permalink: normalizeUrl([baseUrl, routeBasePath, id]),
          githubUrl: repoUrl ? `${repoUrl}/blob/${branch}/${entry.name}` : null,
        });
      }

      songs.sort((a, b) => a.title.localeCompare(b.title));
      return {songs};
    },

    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;
      const {songs} = content;
      const catalogPermalink = normalizeUrl([baseUrl, routeBasePath]);
      const randomPermalink = normalizeUrl([baseUrl, routeBasePath, 'random']);

      // Single manifest — drives the catalog list, the client-side search,
      // and the random picker. (Entries are already lightweight: no body.)
      const listItems = songs.map(({meta, githubUrl, ...rest}) => rest);
      const listData = await createData(
        'lyrics-list.json',
        JSON.stringify(listItems),
      );

      // Catalog (search lives here).
      addRoute({
        path: catalogPermalink,
        component: '@site/src/components/Lyrics/Catalog',
        modules: {songs: listData},
        exact: true,
      });

      // Random picker — reuses the same manifest.
      addRoute({
        path: randomPermalink,
        component: '@site/src/components/Lyrics/Random',
        modules: {songs: listData},
        exact: true,
      });

      // One detail route per song (metadata + outbound Genius link).
      for (const song of songs) {
        const data = await createData(
          `song-${song.id}.json`,
          JSON.stringify({...song, catalogPermalink}),
        );
        addRoute({
          path: song.permalink,
          component: '@site/src/components/Lyrics/Detail',
          modules: {song: data},
          exact: true,
        });
      }
    },
  };
};
