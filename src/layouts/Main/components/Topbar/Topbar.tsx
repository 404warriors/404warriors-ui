import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Box,
} from '@material-ui/core';
import { DarkModeToggler } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
}));

interface Props {
  className?: string;
  themeMode: string;
  themeToggler: Function;
};

export const Topbar = ({ themeMode, themeToggler, className, ...rest }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
         <Box display='flex' flexDirection='row'>
          <Box fontSize='large' lineHeight='38px' fontWeight='fontWeightLight'>404</Box>
          <Box fontSize='x-large'fontWeight={500}>Warriors</Box>
        </Box>
      </div>
      <div className={classes.flexGrow} />
      <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
    </Toolbar>
  );
};