import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getData } from '../Variables/data';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function SimpleCard() {
  const classes = useStyles();

  const current_data = getData.filter((data) => {
    return (
      <Card className ={classes.root}>
        {current_data.map((data) => (
          <CardContent key = {data.Contents_ID}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Contnts ID:{data.Contents_ID}
            </Typography>
            <Typography variant="h5" component="h2">
              Contents Name:{data.ContentsName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
               ContentsClassID:{data.ContentsClassID}
            </Typography>
            <Typography varient="body2" component="p">
              Contents Question:{data.Contents_Question}
            </Typography>
          </CardContent>
        
      )

        )}
      </Card>
    );
  }
  );
}