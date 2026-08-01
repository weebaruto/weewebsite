// src/components/Lyrics/Detail.js
import React from 'react';
import Link from '@docusaurus/Link';
import Breadcrumbs from '../Breadcrumbs';
import SongForLifeLayout from './SongForLifeLayout';
import styles from './styles.module.css';

// Frontmatter key -> readable label: `album` -> `Album`,
// `allowed-tools` / `allowedTools` -> `Allowed tools`.
function labelFor(key) {
  const words = key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .trim()
    .toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function isEmpty(value) {
  if (value === null || value === undefined || value === '') return true;
  return Array.isArray(value) && value.length === 0;
}

export default function Detail({song}) {
  const {
    title,
    artist,
    year,
    tags = [],
    note,
    geniusUrl,
    meta = {},
    catalogPermalink,
    githubUrl,
  } = song;

  // Every field the entry carries: the known ones first, then whatever else
  // the frontmatter holds (album, writer, ...) in the order it was written.
  const rows = [
    ['Artist', artist],
    ['Year', year],
    ...Object.entries(meta).map(([k, v]) => [labelFor(k), v]),
  ].filter(([, value]) => !isEmpty(value));

  return (
    <SongForLifeLayout
      title={title}
      description={`${title}${artist ? ' · ' + artist : ''} — in my songbook`}>
      <Breadcrumbs
          items={[
            {label: 'Songbook MVP 1.0', href: catalogPermalink},
            {label: title},
          ]}
        />
        <header className={styles.detailHeader}>
          <h1>{title}</h1>
        </header>

        {note && <blockquote className={styles.note}>{note}</blockquote>}

        {(rows.length > 0 || tags.length > 0) && (
          <dl className={styles.meta}>
            {rows.map(([label, value]) => (
              <React.Fragment key={label}>
                <dt className={styles.metaKey}>{label}</dt>
                <dd className={styles.metaValue}>
                  {Array.isArray(value) ? value.join(', ') : String(value)}
                </dd>
              </React.Fragment>
            ))}
            {tags.length > 0 && (
              <>
                <dt className={styles.metaKey}>Tags</dt>
                <dd className={styles.metaValue}>
                  <div className={styles.cardTags}>
                    {tags.map((t) => (
                      <span key={t} className={styles.badge}>
                        {t}
                      </span>
                    ))}
                  </div>
                </dd>
              </>
            )}
          </dl>
        )}

        {geniusUrl && (
          <p className={styles.geniusButton}>
            <Link className="button button--primary" to={geniusUrl}>
              Read the full lyrics ↗
            </Link>
          </p>
        )}

        {githubUrl && (
          <p className={styles.sourceLink}>
            <Link to={githubUrl}>Edit this entry</Link>
          </p>
        )}
    </SongForLifeLayout>
  );
}
