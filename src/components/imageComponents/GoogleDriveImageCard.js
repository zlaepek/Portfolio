import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const googleDriveUrl = "https://drive.google.com/uc?export=view&id="

function ImageCards(props) {
  const { card } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            image={googleDriveUrl + card.id}
            alt={card.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

ImageCards.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageCards;
