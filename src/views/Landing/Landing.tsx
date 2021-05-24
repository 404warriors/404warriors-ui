import React from 'react';
import { Section } from 'components/organisms';
import {
  Hero,
  BragPromo,
} from './components';

const Landing = ():JSX.Element => {

  return (
    <div>
      <Hero />
      <Section>
        <BragPromo/>
      </Section>
    </div>
  );
};

export default Landing;
