import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { SectionHeader } from "components/molecules";
import { Form } from "./components/";

const PreRegister = ({
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Pre registration open"
        subtitle="We are currently finalizing the dates and location of the first bootcamp.  By registering, you will be notified of any new details.  You will also secure yourself a seat in the first bootcamp."
        subtitleProps={{
          variant: "body1",
          color: "textPrimary",
        }}
        data-aos="fade-up"
        align={isMd ? "center" : "left"}
      />
      <Form />
    </div>
  );
};

export default PreRegister;
