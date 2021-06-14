import { makeStyles } from "@material-ui/core/styles";

export const useFormStyles = makeStyles((theme) => ({
    form: {
      maxWidth: 550,
      margin: `0 auto`,
      marginTop: theme.spacing(5),
      [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(10),
      },
      "& .MuiTextField-root": {
        background: theme.palette.background.paper,
      },
      "& .MuiOutlinedInput-input": {
        background: theme.palette.background.paper,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        border: "solid 1px rgba(0, 0, 0, 0.2)",
      },
    },
    inputTitle: {
      fontWeight: 700,
      marginBottom: theme.spacing(1),
    },
  }));