import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

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
        ctaGroup={[
          <Button variant="outlined" color="primary" size="large">Learn More</Button>,
          <Button variant="contained" color="primary" size="large">Apply now</Button>
        ]}
      />
    </div>
  );
};

export default PromoNumbers;
