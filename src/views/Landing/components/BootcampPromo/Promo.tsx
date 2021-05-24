import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { SectionHeader, DescriptionCta } from 'components/molecules';

const PromoNumbers = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            The first coding bootcamp is coming to {' '}
            <Typography component="span" variant="inherit" color="primary">Fort Bragg</Typography>
          </span>
        }
        subtitle="Become a
        Web Developer
        in 12 or 24 Weeks."
        fadeUp
      />
      <DescriptionCta
          title="Apply in 15 minutes"
          subtitle="Get your dream job without the hassle."
          primaryCta={<Button variant="outlined" color="primary" size="large">Learn More</Button>}
          secondaryCta={<Button variant="contained" color="primary" size="large">Apply now</Button>}
          align="left"
      />
    </div>
  );
};

export default PromoNumbers;
