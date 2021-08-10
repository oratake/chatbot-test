import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Chat } from './index';

type Props = {
  chats: {
    text: String,
    type: String
  }[]
};

const useStyles = makeStyles(() => 
  createStyles({
    "chats": {
      height: 400,
      padding: '0',
      overflow: 'auto',
    }
  }),
);

export default function Chats(props: Props) {
  const classes = useStyles();

  return (
    <List className={classes.chats} id={"scroll-area"}>
      {props.chats.map((chat, index) => (
        <Chat text={chat.text} type={chat.type} key={index.toString()} /> 
      ))}
    </List>
  );
};
