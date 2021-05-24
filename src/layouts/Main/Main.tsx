import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Topbar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

interface Props {
  children: React.ReactNode;
  themeToggler: Function;
  themeMode: string;
};

const Main = ({ children, themeToggler, themeMode }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar themeMode={themeMode} themeToggler={themeToggler} />
      <main>
        <Divider />
        {children}
      </main>
    </div>
  );
};

export default Main;
