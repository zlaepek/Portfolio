import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'; 
import CardMedia from '@mui/material/CardMedia';

// Masonry 레이아웃 에 가중치 부여해서 구현
// 윗쪽으로 배치하는 옵션도 추가
const googleDriveUrl = "https://drive.google.com/uc?export=view&id="

function ImageCards(props) {
    const { card } = props;

    return (
        <Grid item xs={12} md={ card.size * 4 || 4 } justifyContent="space-between" alignItems="center">
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                    image={googleDriveUrl + card.id}
                    alt={card.imageLabel}
                />
            </Card>
        </Grid>
    );
}

ImageCards.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string.isRequired,
        size: PropTypes.number
    }).isRequired,
};

export default ImageCards;
