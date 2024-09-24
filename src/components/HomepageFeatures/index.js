import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Translate, {translate} from '@docusaurus/Translate';

function Feature({ illustration, title, description, fetchPriority, idx }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          src={illustration}
          className={styles.featureImg}
          width="450px"
          height="100%"
          role="img"
          alt=""
          fetchpriority={fetchPriority}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h2><Translate id={"homepage.featureList." + idx + ".title"}>{title}</Translate></h2>
        <p><Translate id={"homepage.featureList." + idx + ".description"}>{description}</Translate></p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.features}>
      <div className={`container ${styles.featuresContainer}`}>
        <div className="row">
          {siteConfig.customFields.featureList.map((props, idx) => (
            <Feature key={idx} idx={idx} fetchPriority={idx ? 'low' : 'high'} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
