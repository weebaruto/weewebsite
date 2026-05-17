import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Product Playbook',
    Svg: require('@site/static/img/strategy-planning-svgrepo-com.svg').default,
    description: (
      <>
        Highlighting the concepts and practices for “putting product at the center” of your delivery cycle.
      </>
    ),
  },
  {
    title: '90-in-90',
    Svg: require('@site/static/img/ninety-svgrepo-com.svg').default,
    description: (
      <>
        Part reset, part adventure, and a reminder that sometimes the best next step is simply to step back.
      </>
    ),
  },
  {
    title: 'Free Space',
    Svg: require('@site/static/img/for-rent-svgrepo-com.svg').default,
    description: (
      <>
        Future content
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
