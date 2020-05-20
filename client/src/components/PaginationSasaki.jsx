import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {getData} from '../Variables/data';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    maxWidth:'80%',
    minWidth:'80%',
    maxHeight:'80%',
    minHeight:'80%',
    display: 'flex',
    justifyContent: 'center',
    textAlign:'center',
    margin:'auto',
    alignItems:'center',
    marginTop:100,
    backgroundColor:'green',
    // padding: 50,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  pages: {
    display: 'flex',
    textalign: 'center',
    position: 'absolute',
    bottom: 50,
    right: '23%',
    left: '23%',
    marginLeft:'auto',
    marginRight:'auto',
    maxWidth:350,
    minWidth:350,
  }
});

export default function SimpleCard() {
  const classes = useStyles();

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
      };

  const current_data = getData.filter((data) => {
    return data.CustomerID === page;
});
  return (
    <Card className={classes.root}>
        {current_data.map((data) => (
          <CardContent key={data.Contents_ID}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                    ContentsName:{data.ContentsName}
               </Typography>
              <Typography  variant="h5" component="h2">
                    ContentsClassID:{data.ContentsClassID}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    ContentsID:{data.Contents_ID}
                </Typography>
                <Typography variant="body2" component="p">
                    ContentsQuastion:{data.Contents_Question}
                </Typography>
                <Pagination className={classes.pages} count={getData.length} page={page} onChange={handleChange} />
          </CardContent>
        ))}
    </Card> 
    ); 
}