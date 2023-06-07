import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    marginTop: 15,
  },
  media: {
    height: 140,
  },
});

export default function PricingCard({
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  flatPrice,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {monthlyPrice ? (
          <>
            <Typography variant="body2" color="textSecondary" component="p">
              Monthly - ${monthlyPrice}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Yearly - ${yearlyPrice}
            </Typography>
          </>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            Flat Price - ${flatPrice}
          </Typography>
        )}
      </CardActions>
    </Card>
  );
}
