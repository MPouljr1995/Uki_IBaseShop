import React from 'react';

import {Grid,Paper,Card,CardContent,Typography,Button, CardActions} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
 import Box from '@material-ui/core/Box';


import Photo from '/home/ukistu07/Desktop/Project_Final/PROJECT_ FILE/REACT/ibaseshop1/src/components/images/bacgroung.png'

import "./css/AllShop.css";


export default function AllShop() {

    const [value, setValue] = React.useState(2);

    return(
        <Box id="AllshopPageMainBox">
            <h1> Shops in IBaseShop</h1>
            <Grid container >
                <Grid item xs={10}>
                    <Card className= "AllshopCover" elevation= {10}>
                        <CardActionArea>
                            <Grid container>
                                <Grid item xs={2}>
                                    <CardMedia>
                                        <img src= {Photo} alt="Logo" className= "ShopProfilePhoto"/>
                                    </CardMedia>
                                </Grid>
                                <Grid item xs={10}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            SHOP NAME
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            ShopShop Shop ShopShopShopShop Shop........
                                        </Typography>
                                        <Rating name="read-only" value={value} readOnly />
                                    </CardContent>
                                </Grid>
                            </Grid>                            
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={10}>
                    <Card className= "AllshopCover" elevation= {10}>
                        <CardActionArea>
                            <Grid container>
                                <Grid item xs={2}>
                                    <CardMedia>
                                        <img src= {Photo} alt="Logo" className= "ShopProfilePhoto"/>
                                    </CardMedia>
                                </Grid>
                                <Grid item xs={10}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            SHOP NAME
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            ShopShop Shop ShopShopShopShop Shop........
                                        </Typography>
                                        <Rating name="read-only" value={value} readOnly />
                                    </CardContent>
                                </Grid>
                            </Grid>                            
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    )    
}