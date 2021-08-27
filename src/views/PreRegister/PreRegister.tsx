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
        title="Training"
        subtitle="Your path to becoming a software developer starts here. First submit the
        following form. Then you will be contacted and assigned a mentor. Your
        mentor will be your first point of contact. They will also help you
        determine the best path to gaining a baseline proficiency as a
        software developer. Once you have proven to your mentor that you are
        proficient you will be able gain experience by
        working for 404 Warriors as a entry level developer. You and your
        mentor will be assigned to a real project from a paying client and you
        will also be compensated for your time.."
        data-aos="fade-up"
      />
      <Form />
    </div>
  );
};

export default PreRegister;
