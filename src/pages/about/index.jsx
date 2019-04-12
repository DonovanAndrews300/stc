import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';

import ahmSrc from './img/ahm.png';
import inlightSrc from './img/inlight.png';
import lighthouseSrc from './img/lighthouse.png';


import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage className={styles.about}>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
        <h1>About</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat in nisi eu blandit. Curabitur aliquet mauris porta magna sodales vulputate. Suspendisse quis egestas libero. Sed porta pharetra enim sit amet elementum. Nulla facilisi. Donec vel viverra mauris. Phasellus a gravida est. Sed iaculis, tortor id tincidunt pharetra, orci sem egestas odio, nec semper elit eros ac mauris. Curabitur eget dignissim ipsum, in molestie nisi. In accumsan magna magna, eu auctor augue dapibus eget. Morbi id odio et purus bibendum iaculis. Nunc dui ligula, dignissim quis fringilla quis, scelerisque sit amet est. Nulla finibus pellentesque justo at ornare. Vivamus non nunc non tortor porta congue. Fusce ullamcorper maximus mauris ut eleifend.


        </p>
        <p>
        Suspendisse tempor sit amet felis ac lacinia. Curabitur tellus purus, commodo eu eros eget, luctus luctus tellus. Pellentesque luctus purus et dapibus cursus. Pellentesque accumsan enim sollicitudin, pulvinar lorem eget, tempor odio. Morbi vitae quam at nunc laoreet tincidunt ut vitae ipsum. Proin nunc enim, maximus quis lacus vel, finibus auctor metus. Vivamus nec massa blandit, imperdiet augue ut, placerat ligula. Vivamus interdum auctor ligula, vel aliquam tortor tempus et. Sed ac erat nulla.
        </p>
        <p>
  
        </p>

       <Link to="/contact">get in touch</Link>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Experience</h3>
            <h4>Presentations</h4>
            <p>blah blah blah</p>
            <h4>In-Field</h4>
            <p>Blah blah blah</p>
          </div>

        </aside>
      </div>

      <section>
        <h2>What people say</h2>
        <div className={styles.referrals}>
          <div className={styles.referral}>
            <img src={lighthouseSrc} alt="Lighthouse logo" />
            <div>
              <h4>Scott Arizala</h4>
              <p>“These guys are the bees knees”</p>
            </div>
          </div>

          <div className={styles.referral}>
            <img src={inlightSrc} alt="Inlight logo" />
            <div>
              <h4>Silvia van Meerten</h4>
              <p>“Cool cat certified :)”</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  </ContentPage>
);

export default About;
