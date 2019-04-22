import React from 'react';
import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import Wrapper from '../../components/wrapper';
import sylviaSrc from './img/sylvia.jpg';
import scottSrc from './img/scott.jpg';
import jamesSrc from './img/james.png'

import Link from 'gatsby-link';
import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage className={styles.about}>
    <Meta title="About" location={location} />
    <Wrapper>
        <section className={styles.intro}>
        <h1>About</h1>
        <h3>Who we are:</h3>
<p>See The Color Consulting LLC, is a diversity and inclusion consulting group specializing in strategic planning, training, public speaking, management, and recruitment. We serve youth development organizations in the US and abroad. STC helps organizations create diversity through community partnerships, targeted recruiting, and creative training. Our method is thorough and leaves your organization with sustainable practices to continue to diversify your staff and customer base.</p> 

<h3> Our Mission:</h3>
<p>We  are committed to working with our clients to develop solutions for their diversity needs. We understand that creating programs that work for many different demographics is difficult. Our team wants to use our many years of experience in the camp and childcare industry to make your team more inclusive to all!</p>

<ul>
A few benefits from improving organizational diversity:
  <li>1. Increased community involvement</li>
  <li>2. Increased customer base</li>
  <li>3. Unique experience for staff and customers</li>
</ul>

<p>We at STC believe that summer camp is a place where individuals from all walks of life should be able to learn how to be independence, work with others, and how to be their true selves. 

We look forward to working with you and developing the foundation for diversity at your organization!</p> 
<p>More about our <Link className ={styles.link}  to='/services'>Services</Link>.</p>
            <img src={jamesSrc}></img>
        </section>

      <section>
        <h2>Testimonitals</h2>
        <div className={styles.referrals}>
          <div className={styles.referral}>
            <img src={scottSrc} alt="Scott Arizala" />
            <div>
              <h4>Scott Arizala</h4>
              <h5>Founder of The Camp Counselor</h5>
              <p>“”</p>
            </div>
          </div>

          <div className={styles.referral}>
            <img src={sylviaSrc} alt="Sylvia van Meerten" />
            <div>
              <h4>Sylvia van Meerten</h4>
              <h5>Founder of empower autism</h5>
              <p>“”</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  </ContentPage>
);

export default About;
