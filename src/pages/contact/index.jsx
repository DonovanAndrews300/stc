import React from 'react';

import ContentPage from '../../components/content-page';
import Contact from '../../components/contact';
import Meta from '../../components/meta';
import Wrapper from '../../components/wrapper';

const ContactPage = ({ location }) => (
  <ContentPage>
    <Meta title="Contact" description="If you have any inquries or questions shoot us an email!" location={location} />
    <Wrapper>
      <Contact />
    </Wrapper>
  </ContentPage>
);

export default ContactPage;
