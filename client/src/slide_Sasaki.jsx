import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getData } from './Variables/data';
import { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';





export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },

  root: {
    minWidth: 500,
    display: 'flex',
    position: 'abusolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bullet: {
    display: 'flex',
    position: 'absolute',
    margin: '0 2px',
    transform: 'scale(0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));



  


export default function PaginationRounded () {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [page, setPage] = useState(1);
  const handlechange = (event, value) => {
    setPage(value);
  };
  const current_data = getData.filter((data) => {
    return data.Contents_ID === page;
  });
  // const Img = current_data.map((data) => (<li key={data.Contents_ID}>{data.ContentsName}</li>));
  return (<div className={classes.root}>
    <Pagination count={getData.length} variant="outlined" shape="rounded" onChange={handlechange} />
    <div>
  <Card className={classes.root}>
  <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      研修名
    </Typography>
    <Typography variant="h5" component="h2">
      {current_data.map((data) =>(<li key={data.Contents_ID} style={{listStyle: 'none'}}>{data.ContentsName}</li>))}
    </Typography>
    <Typography className={classes.pos} color="textSecondary">
      問題
    </Typography>
    <Typography variant="body2" component="p">
    {current_data.map((data) =>(<li key={data.Contents_ID} style={{listStyle: 'none'}}>{data.Contents_Question}</li>))}
      <br />
      {'"a benevolent smile"'}
    </Typography>
  </CardContent>
</Card>
</div>
  </div>
  );
}
