import React from 'react';
import profileSrc from './img/profile.jpg';
import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import Wrapper from '../../components/wrapper';
import styles from './styles.module.css';

const Contact = ({ location }) => (
  <ContentPage className={styles.contact}>
    <Meta title="Contact" description="If you have any inquries or questions shoot us an email!" location={location} />
    <Wrapper>
    <div className={styles.contact}>
    <div className={styles.info}>
    <h1>Thanks for stopping by!</h1>
    <p className={styles.email}>
      If you have any questions or would like a consultation, you can reach us through the contact info bellow.
    </p>
      <ul>
        <li>email: info@stc.com</li>
        <li>phone: xxx-xxx-xxxx</li>
        <li></li>
      </ul>

    </div>
   
    <div>
      <img src={profileSrc} />
    </div>
  </div>
    </Wrapper>
  </ContentPage>
);

export default Contact;
