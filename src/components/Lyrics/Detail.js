// src/components/Lyrics/Detail.js
import React from 'react';
import Link from '@docusaurus/Link';
import Breadcrumbs from '../Breadcrumbs';
import SongForLifeLayout from './SongForLifeLayout';
import styles from './styles.module.css';

export default function Detail({song}) {
  const {
    title,
    artist,
    year,
    tags = [],
    note,
    geniusUrl,
    catalogPermalink,
    githubUrl,
  } = song;

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
          {(artist || year) && (
            <p className={styles.byline}>
              {artist}
              {artist && year ? ' · ' : ''}
              {year || ''}
            </p>
          )}
        </header>

        {note && <blockquote className={styles.note}>{note}</blockquote>}

        {tags.length > 0 && (
          <div className={styles.cardTags}>
            {tags.map((t) => (
              <span key={t} className={styles.badge}>
                {t}
              </span>
            ))}
          </div>
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
