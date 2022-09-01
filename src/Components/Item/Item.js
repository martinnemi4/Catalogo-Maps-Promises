import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Item/Item.css"
import App from '../ItemListContainer/ItemCount';

export default function ImgMediaCard({nombre, precio, imagen}) {
    return (
    <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imagen}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {"$" + precio}
        </Typography>
        </CardContent>
        <CardActions>
        <App/>
        </CardActions> 
    </Card>
    );
}

