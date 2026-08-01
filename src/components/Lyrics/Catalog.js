// src/components/Lyrics/Catalog.js
import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Breadcrumbs from '../Breadcrumbs';
import SongForLifeLayout from './SongForLifeLayout';
import styles from './styles.module.css';

export default function Catalog({songs}) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const randomHref = useBaseUrl('/songbook/random');

  const allTags = useMemo(() => {
    const set = new Set();
    songs.forEach((s) => (s.tags || []).forEach((t) => set.add(t)));
    return [...set].sort();
  }, [songs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return songs.filter((s) => {
      const haystack = [s.title, s.artist, s.note]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      const matchesTag = !activeTag || (s.tags || []).includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [songs, query, activeTag]);

  return (
    <SongForLifeLayout
      title="Songbook"
      description="A curated catalogue of songs that matter to me.">
      <Breadcrumbs items={[{label: 'Songbook MVP 1.0'}]} />
        <header className={styles.header}>
          <h1>Songbook MVP 1.0</h1>
          <p className={styles.subtitle}>
            The songs I keep coming back to, the ones that bring me back to
            myself and keep my feet on the ground. Search them, or{' '}
            <Link to={randomHref}>let one find you</Link>. Full lyrics open on
            the publisher's own site.
          </p>
        </header>

        <input
          className={styles.search}
          type="search"
          placeholder={`Search ${songs.length} songs...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search songs"
        />

        {allTags.length > 0 && (
          <div className={styles.tagFilter}>
            <button
              type="button"
              className={clsx(styles.tagButton, !activeTag && styles.tagActive)}
              onClick={() => setActiveTag(null)}>
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={clsx(
                  styles.tagButton,
                  activeTag === tag && styles.tagActive,
                )}
                onClick={() => setActiveTag(tag)}>
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className={styles.grid}>
          {filtered.map((s) => (
            <Link key={s.id} to={s.permalink} className={styles.card}>
              <h2 className={styles.cardTitle}>{s.title}</h2>
              {/* No artist on the card — the song page carries the full
                  metadata. Search still matches on artist. */}
              {s.note && (
                <p className={styles.cardDesc}>
                  <em>{s.note}</em>
                </p>
              )}
              {(s.tags || []).length > 0 && (
                <div className={styles.cardTags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.badge}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No songs match your search.</p>
        )}
    </SongForLifeLayout>
  );
}
