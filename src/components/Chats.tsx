import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Chat } from './index';

type Props = {
  chats: {
    text: String,
    type: String
  }[]
};

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

export default function Chats(props: Props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.chats.map((chat, index) => (
        <Chat text={chat.text} key={index.toString()} /> 
      ))}
    </List>
  );
};
