import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Breadcrumbs from '../Breadcrumbs';
import styles from './styles.module.css';

// Surface any simple frontmatter fields (license, allowed-tools, ...) as badges.
function MetaBadges({meta, tags}) {
  const badges = [];
  (tags || []).forEach((t) => badges.push({key: `tag-${t}`, label: t}));
  if (meta && meta.license) {
    badges.push({key: 'license', label: `License: ${meta.license}`});
  }
  const allowed = meta && (meta['allowed-tools'] || meta.allowedTools);
  if (allowed) {
    const list = Array.isArray(allowed) ? allowed.join(', ') : String(allowed);
    badges.push({key: 'tools', label: `Tools: ${list}`});
  }
  if (badges.length === 0) return null;
  return (
    <div className={styles.cardTags}>
      {badges.map((b) => (
        <span key={b.key} className={styles.badge}>
          {b.label}
        </span>
      ))}
    </div>
  );
}

export default function Detail({skill}) {
  const {
    name,
    description,
    bodyHtml,
    files,
    meta,
    tags,
    githubUrl,
    fileBaseUrl,
    catalogPermalink,
  } = skill;

  return (
    <Layout title={name} description={description}>
      <main className="container margin-vert--lg">
        <Breadcrumbs
          items={[{label: 'Waza', href: catalogPermalink}, {label: name}]}
        />

        <header className={styles.detailHeader}>
          <h1 className={styles.detailTitle}>{name}</h1>
          {githubUrl && (
            <Link to={githubUrl} className={styles.ghLink}>
              View on GitHub ↗
            </Link>
          )}
        </header>

        <p className={styles.description}>{description}</p>

        <MetaBadges meta={meta} tags={tags} />

        {/* `markdown` class inherits Docusaurus's theme styling for the body. */}
        <div
          className="markdown"
          dangerouslySetInnerHTML={{__html: bodyHtml}}
        />

        {files && files.length > 0 && (
          <section className={styles.files}>
            <h2>Files</h2>
            <ul>
              {files.map((f) => (
                <li key={f}>
                  {fileBaseUrl ? (
                    <Link to={`${fileBaseUrl}/${f}`}>
                      <code>{f}</code>
                    </Link>
                  ) : (
                    <code>{f}</code>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </Layout>
  );
}
