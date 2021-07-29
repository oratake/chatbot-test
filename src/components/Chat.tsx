import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemAvatar, Avatar } from '@material-ui/core';

const Chat = () => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <div className="p-chat__bubble">TEXT</div>
    </ListItem>
  );
};

export default Chat;
