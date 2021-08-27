import React from "react";
import { Process } from "./Process";
import { Section } from "components/organisms";
import { Box, Button, colors, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  disablePaddingTop: {
    paddingTop: 0,
  },
}));
export const ServicesView = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box margin="0 auto">
      <Section className={classes.disablePaddingTop}>
        <Process />
      </Section>
    </Box>
  );
};
