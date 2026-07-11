import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Product Playbook',
    link: '/docs/product-playbook/',
    Svg: require('@site/static/img/strategy-planning-svgrepo-com.svg').default,
    description: 'Highlighting the concepts and practices for "putting product at the center" of your delivery cycle.',
  },
  {
    title: 'A Song For Life',
    link: '/docs/ikigai/',
    Svg: require('@site/static/img/ikigai-icon.svg').default,
    description: 'What started as a dog-eared "book" of lyrics, held together by a bull-chip is now a pet project.',
  },
  {
    title: '90-in-90',
    link: '/blog/',
    Svg: require('@site/static/img/ninety-svgrepo-com.svg').default,
    description: 'Part reset, part adventure, and a reminder that sometimes the best next step is simply to step back.',
  },
  {
    title: 'Waza',
    link: '/skills',
    Svg: require('@site/static/img/waza-icon.svg').default,
    description: '技, technique. A catalog of the Agent Skills I keep teaching my AI, each one a small, repeatable craft.',
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(({Svg, title, description, link}, idx) => (
            <div key={idx} className={clsx('col col--3')}>
              <div className="text--center">
                <Link to={link}><Svg className={styles.featureSvg} role="img" /></Link>
              </div>
              <div className="text--center padding-horiz--md">
                <Heading as="h3"><Link to={link}>{title}</Link></Heading>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
