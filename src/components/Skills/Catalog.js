import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Breadcrumbs from '../Breadcrumbs';
import styles from './styles.module.css';

export default function Catalog({skills}) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState(null);

  const allTags = useMemo(() => {
    const set = new Set();
    skills.forEach((sk) => (sk.tags || []).forEach((t) => set.add(t)));
    return [...set].sort();
  }, [skills]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skills.filter((sk) => {
      const matchesQuery =
        !q ||
        sk.name.toLowerCase().includes(q) ||
        sk.description.toLowerCase().includes(q);
      const matchesTag = !activeTag || (sk.tags || []).includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [skills, query, activeTag]);

  return (
    <Layout
      title="Waza"
      description="Waza · Agent Skills, backed by a git repo.">
      <main className="container margin-vert--lg">
        <Breadcrumbs items={[{label: 'Waza'}]} />
        <header className={styles.header}>
          <h1>Waza · 技</h1>
          <p className={styles.subtitle}>
            <em>Waza</em> (技) means technique: in sumo, a move drilled until
            it's yours. These are the ones I've been teaching my AI agents, each
            a small, repeatable craft, kept and versioned in{' '}
            <Link to="https://github.com/weebaruto/weeskills">weeskills</Link>.
          </p>
        </header>

        <input
          className={styles.search}
          type="search"
          placeholder={`Search ${skills.length} waza...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search skills"
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
          {filtered.map((sk) => (
            <Link key={sk.id} to={sk.permalink} className={styles.card}>
              <h2 className={styles.cardTitle}>{sk.name}</h2>
              <p className={styles.cardDesc}>{sk.description}</p>
              {(sk.tags || []).length > 0 && (
                <div className={styles.cardTags}>
                  {sk.tags.map((t) => (
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
          <p className={styles.empty}>No waza match your search.</p>
        )}
      </main>
    </Layout>
  );
}
