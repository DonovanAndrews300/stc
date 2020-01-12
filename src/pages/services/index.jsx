import React from 'react';
import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import Wrapper from '../../components/wrapper';
import Link from 'gatsby-link';
import styles from './styles.module.css';
import profileSrc from './img/profile.png';

const Services = ({ location }) => (
  <ContentPage className={styles.services}>
    <Meta title="Services" location={location} />
    <Wrapper>
      <div className={styles.services} >
        <section className={styles.intro}>
          <h1>Service Overview</h1>
          <p>Our team can help you recruit and hire diverse staff members. We use a three part approach.</p>
          <ul>
            <li><h3>1. Public Speaking:</h3>With our combined 35+ years in the camping industry, we've accumulated a wealth of knowledge regarding racial interaction in the camp world. We've taken our experiences and research and transformed this information into various presentations that are both accessible and engaging. Providing camp professionals with practical means of creating a more inclusive and welcoming camp environment for their lesser represented participants. With a wide range of topics including staff recruitment, camp culture, and year-round community engagement we will give you the tools needed to create a well rounded diverse program.</li>
            <li><h3>2. Trainings and Workshops:</h3> With our workshops, we bring our presentations to life. We come prepared with interactive programming that gives participants a scope into seeing camp from an often unfamiliar lens. Through our use of engaging role-playing scenarios, lessons, and professionals panels with first-hand experience of what it's like to be a minority at one of the happiest places on earth. Our workshops leave participants with the information and confidence needed to ask all of the right questions and make even better changes.</li>
            <li><h3>3. Consulting:</h3> Sometimes, even with all the right information, it's still hard to know what the right plan of action is needed to create the change we're looking for. We get that! Let us help guide you through those difficult decisions. With both virtual and in-person consultations, we'll provide tangible action steps that are personalized to your unique program to improve the quality of experience you provide for the multi-cultural members of your camp family.</li>
          </ul>
          <p>Most of our contracts take place over two years. We are patient and thorough and our work lasts for the lifetime of your organization.  Once we know more about your needs, we can customize a plan that makes the most sense for your organization.
            <Link className={styles.link} to="/contact">Contact</Link> us for a free phone consultation.
          </p>
          <img src={profileSrc} />
        </section>
      </div>
    </Wrapper>
  </ContentPage>
);

export default Services;
