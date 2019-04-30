import React from 'react';
import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import Wrapper from '../../components/wrapper';
import Link from 'gatsby-link';
import styles from './styles.module.css';
import profileSrc from './img/profile.png'

const Services = ({ location }) => (
  <ContentPage className =   {styles.services}>
    <Meta title="Services" location={location} />
    <Wrapper>
      <div className = {styles.services} >
        <section className =   {styles.intro}>
        <h1>Service Overview</h1>
        <p>Our team can help you recruit and hire diverse staff members. We use a three part approach.</p>
            <ul>
                <li><h3>1. Organizational Assessment and Training:</h3> Before we recruit staff and create partnerships, we work with your team to make sure we understand your values and your organizational structure. Through this process, we design small-but-mighty changes that will make your organization more accessible to a diverse team. We will also create custom workshops for your existing staff to be ready to welcome a more diverse group of staff and customers. This process is gentle and fun and we understand that all organizations are starting from a different place when it comes to diversity. </li>
                <li><h3>2. Community Partnerships:</h3> We will help you connect with local organizations that match your values and can feed potential staff members into your interview process.  We will spend time in your local community, build trust with these partners and then bridge that trust to your internal team for future partnerships.</li>
                <li><h3>3. Active Recruting:</h3> We will meet and assess potential candidates to join your team who are already in your local community. Our team will develop a core group of diverse staff members who are ideal for your organization, and then help them join your team for their first year. Then we will help you collect helpful data about their experience, so we can improve the recruiting process for the future.</li>
            </ul>
        <p>Most of our contracts take place over two years. We are patient and thorough and our work lasts for the lifetime of your organization.  Once we know more about your needs, we can customize a plan that makes the most sense for your organization. 
       <Link className ={styles.link}  to='/contact'>Contact</Link> us for a free phone consultation. </p>
       <img src = {profileSrc} />
        </section>
      </div>
    </Wrapper>
  </ContentPage>
);

export default Services;
