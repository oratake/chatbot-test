import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Chat } from './index';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

export default function Chats() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </List>
  );
};
