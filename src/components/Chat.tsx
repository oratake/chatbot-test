import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemAvatar, Avatar } from '@material-ui/core';

type Props = {
  type: String,
  text: String,
};

const Chat = (props: Props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
