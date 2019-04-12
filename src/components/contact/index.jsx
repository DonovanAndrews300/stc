import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (

  <div className={styles.contact}>
    <h1>{title || 'Thaks for stopping by!'}</h1>
    <p className={styles.email}>
      If you have any questions or would like a consultation:<br />
      <a href="mailto:info@stc.com" className={styles.link}>info@stc.com</a>
    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://twitter.com/xxx/">
          <Icon name="twitter" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.instagram.com/stc/">
          <Icon name="instagram" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Contact;
