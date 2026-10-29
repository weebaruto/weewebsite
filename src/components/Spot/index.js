import styles from './styles.module.css';

/**
 * A place, venue, person or event on an Off The Beaten Track page.
 * Children are the write-up, in Markdown.
 */
export default function Spot({title, href, place, kind, children}) {
  return (
    <div className={styles.spot}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {(kind || place) && (
          <div className={styles.tags}>
            {kind && <span className={styles.badge}>{kind}</span>}
            {place && <span className={styles.badge}>📍 {place}</span>}
          </div>
        )}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
