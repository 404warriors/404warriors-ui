import React from "react";
import { Grid, Button, colors } from "@material-ui/core";
import { SectionHeader, IconAlternate } from "components/molecules";
import { CardBase, DescriptionListIcon } from "components/organisms";

const data = [
  {
    icon: "fas fa-brain",
    title: "1. Idea",
    description:
      "We meet with your team to know more about your idea, project and goal. After that, our team sits to create an action plan and proposal for your project.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "2. Design",
    description:
      "We start by designing a mockup or prototype of your website/app, and present it to you. Once with the initial mockup, we start the revision process to perfect it.",
  },
  {
    icon: "fas fa-laptop-code",
    title: "3. Development",
    description:
      "We develop your website using the best practices and standards, so you have a perfectly responsive, lightning fast, and super scalable website.",
  },
  {
    icon: "fas fa-cogs",
    title: "4. Launch & Maintenance",
    description:
      "When the project is ready, we help you to launch it and push it live. After that, we meet with your team to train them on how to edit, update and scale it.",
  },
];

export const Process = ({
  className,
  ...rest
}: ViewComponentProps): JSX.Element => (
  <div className={className} data-aos="fade-up" {...rest}>
    <SectionHeader
      title="Services"
      subtitle="We are a small agency of talented designers & developers. We are grateful for every project that we are given the opportunity to work on as it is critical to our mission of training transitioning soldiers.  With this in mind, we will exceed your expectations. Contact us and we will walk you through our smooth and simple process."
      ctaGroup={[
        <Button color="primary" variant="contained" size="large">
          Contact us
        </Button>,
      ]}
      fadeUp
    />
    <Grid container spacing={4}>
      {data.map((item: any, index: number) => (
        <Grid
          key={index}
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={6}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined">
            <DescriptionListIcon
              icon={
                <IconAlternate
                  fontIconClass={item.icon}
                  color={colors.indigo}
                />
              }
              title={item.title}
              subtitle={item.description}
              align="left"
            />
          </CardBase>
        </Grid>
      ))}
      <Grid item container xs={12} justify="center">
        <Button variant="contained" size="large" color="primary">
          Contact us
        </Button>
      </Grid>
    </Grid>
  </div>
);

export default Process;
