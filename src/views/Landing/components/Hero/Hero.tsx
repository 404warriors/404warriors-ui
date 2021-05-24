import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import image from "./developers-huge.jpg"
const useStyles = makeStyles(() => ({
  image: {
    objectFit: 'cover',
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              title={
                <span>
                  <Typography component="span" variant="inherit" color="primary">
                    Learn new skills,
                  </Typography>{' '}
                  gain more experience
                </span>
              }
              subtitle="Our mission is to spread education that is easy accessible and everyone can learn."
              ctaGroup={[
                <Button variant="contained" color="primary" size="large">
                  Start now
                </Button>,
              ]}
              align="left"
              titleVariant="h3"
            />
          </div>
        }
        rightSide={
          <Image
            src={image}
            alt="..."
            className={classes.image}
            lazyProps={{
              width: '100%',
              height: '100%',
            }}
          />
        }
      />
    </div>
  );
};

export default Hero;
