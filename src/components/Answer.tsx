import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type Props = {
  content: String,
  nextId: String,
  key: String,
  select: () => void, 
};

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const Answer = (props: Props) => {
  // const classes = useStyles();

  return (
    <Button variant="contained" color="primary" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
  );
};

export default Answer;
