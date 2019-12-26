import React from 'react';
import Icon from '../icon';
import OutboundLink from '../outbound-link';
import styles from './styles.module.css';
import profileSrc from './img/profile.jpg';

const Contact = ({ title }) => (

  <div className={styles.contact}>
    <h1>{title || 'Thanks for stopping by!'}</h1>
    <p className={styles.email}>
      If you have any questions or would like a consultation, you can reach us through the contact info bellow.<br />
      <div className={styles.info}>
        <ul>
          <li>email:<a href="mailto:seethecolorllc@gmail.com" className={styles.link}>seethecolorllc@gmail.com</a></li>
        </ul>
      </div>

    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://twitter.com//">
          <Icon name="twitter" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.instagram.com/stc/">
          <Icon name="instagram" />
        </OutboundLink>
      </li>
    </ul>
    <div>
      <img alt="" src={profileSrc} />
    </div>
  </div>
);

export default Contact;
