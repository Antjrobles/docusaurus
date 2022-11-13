import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'All my notes',
    Svg: require('@site/static/img/notes.svg').default,
    description: (
      <>
        A collection of notes gathered over the years while learning new technologies. This is where I will track my progress and ideas for the future. Some are good some are bad, but they are all here!
      </>
    ),
  },
  {
    title: 'Get clear and Focus on what matters',
    Svg: require('@site/static/img/coding.svg').default,
    description: (
      <>
        Focus on your docs, and we'll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. I'll take care of the formatting for you.
      </>
    ),
  },
  {
    title: 'Sara',
    Svg: require('@site/static/img/together.svg').default,
    description: (
      <>
        Sara's course agenda. Her digest for the finals and everything in between. Handle with care  🤎. 
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
        <h3>{title}</h3>
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
