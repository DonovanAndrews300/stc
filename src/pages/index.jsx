import React from 'react';
import Link from 'gatsby-link';
import Fullscreen from '../components/fullscreen';
import Meta from '../components/meta';
import Wrapper from '../components/wrapper';
import styles from './styles.module.css';

const Index = ({ location }) => (
  <div>
    <Meta location={location} />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>
          See The Color
          <br/>
          <br/>
          Here to diversify.
          <br/>
          <br/>
          Learn more about us <Link className={styles.link} to="/about">here</Link>.
        </h1>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default Index;
