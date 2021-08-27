import React from "react";
import { makeStyles, Theme, ThemeProvider } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Toolbar } from "@material-ui/core";
import { PreRegister, ServicesView } from "./views";
import CssBaseline from "@material-ui/core/CssBaseline";
import getTheme from "theme";
import { SectionHeader } from "components/molecules";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box width="calc(100vw - 401px)" marginLeft="75px" marginRight="75px">
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  contentRoot: {
    marginTop: "50px",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    width: "225px",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  flexGrow: {
    flexGrow: 1,
  },
  toolbar: {
    zIndex: 999,
    width: "100%",
    margin: "0 auto",
    padding: "0px 225px",
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 32,
    },
  },
  root: {},
}));

export function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={getTheme("light")}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <div className={classes.root}>
        <Toolbar disableGutters className={classes.toolbar}>
          <div className={classes.logoContainer}>
            <Box display="flex" flexDirection="row">
              <Box
                fontSize="large"
                lineHeight="38px"
                fontWeight={400}
                marginTop={"1px"}
              >
                404
              </Box>
              <Box fontSize="x-large" lineHeight="38px" fontWeight={600}>
                Warriors
              </Box>
            </Box>
          </div>
        </Toolbar>
        <div className={classes.contentRoot}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            className={classes.tabs}
          >
            <Tab label="Mission" {...a11yProps(0)} />
            <Tab label="Training" {...a11yProps(1)} />
            <Tab label="Services" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <SectionHeader
              title="Mission"
              subtitle="Discipline. Leadership. Integrity. Teamwork. The qualities drilled
        into you as a US soldier. Top employers are searching for
        candidates with these exact qualities. However, they have to pass
        on our soldiers because they lack certain technical skills. 404
        Warriors brings advanced technical development to our military.
        This leverages our soldiers' proven ability for accelerated
        learning by delivering them content, concepts, guidance, and
        training in a way that is accustomed to them. Therefore, allowing
        our soldiers to transition into the job market with the skills and
        confidence to earn the competitive salaries that they deserve."
              data-aos="fade-up"
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PreRegister />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ServicesView />
          </TabPanel>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
