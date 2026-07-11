import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Same house icon Docusaurus uses in the docs breadcrumbs.
function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.breadcrumbHomeIcon}>
      <path
        d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

// `items` is an ordered array of {label, href?}. The last item renders as the
// active (non-link) crumb, matching the docs breadcrumb behaviour.
export default function Breadcrumbs({items}) {
  const homeHref = useBaseUrl('/');
  return (
    <nav className={styles.breadcrumbsContainer} aria-label="Breadcrumbs">
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <Link
            aria-label="Home page"
            className="breadcrumbs__link"
            href={homeHref}>
            <HomeIcon />
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li
              key={idx}
              className={clsx('breadcrumbs__item', {
                'breadcrumbs__item--active': isLast,
              })}>
              {isLast || !item.href ? (
                <span className="breadcrumbs__link">{item.label}</span>
              ) : (
                <Link className="breadcrumbs__link" href={item.href}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
