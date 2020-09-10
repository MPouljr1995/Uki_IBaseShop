import React, { Component } from 'react';

import {Grid,Paper,Card,CardContent,Typography,Button, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


import Photo from '/home/ukistu07/Desktop/Project_Final/PROJECT_ FILE/REACT/ibaseshop1/src/components/images/bacgroung.png'

import "./css/ShopProfile.css";

import {DataContext} from '../components/DataProvider';




class ShopProfile extends Component {
// function ShopProfile() {

    // const [value, setValue] = React.useState(2);

    // static contextType = DataContext;

    render(){

        const {products} = this.DataProvider;

        return(
          <Box id="shopPageMainBox">
            <Grid container >
                <Grid item xs={12}>
                    <Card className= "shopCover" elevation= {10}>
                        <CardActionArea>
                                <CardMedia>
                                    <img src= {Photo} alt="Logo" className= "ShopProfilePhoto"/>
                                </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    SHOP NAME
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                ShopShop Shop ShopShopShopShop Shop........
                                </Typography>

                                {/* <Rating name="read-only" value={value} readOnly /> */}

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>


            <Grid item xs={12}>
                <Paper className= "itemPaper">

                    <Grid container spacing={3}>
                        products.map(product =>
                            <Grid item xs={3}>
                                <Card className= "itemCover" elevation= {5}>
                                    <CardActionArea>

                                        <CardMedia>
                                            <img src= {Photo}  alt="Logo" className= "ShopItemPhoto"  />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            ShopShop Shop ShopShopShopShop Shop........
                                            </Typography> <br/>
                                            <Typography variant="h5" component="h4">
                                                Rs 5000/=
                                            </Typography>

                                            {/* <Rating name="read-only" value={value} readOnly /> */}

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button id ="buttonColorBuy">
                                        BUY
                                        </Button>
                                        <Button id ="buttonColorCard">
                                        ADD TO CARD
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                        
                        
                        {/* <Grid item xs={3}>
                            <Card className= "itemCover">
                                    <CardActionArea>

                                        <CardMedia>
                                            <img src= {Photo} alt="Logo" className= "ShopItemPhoto"/>
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                THINS NAME
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            ShopShop Shop ShopShopShopShop Shop........
                                            </Typography> <br/>
                                            <Typography variant="h5" component="h4">
                                                Rs 5000/=
                                            </Typography>

                                            <Rating name="read-only" value={value} readOnly />

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button id ="buttonColorBuy">
                                        BUY
                                        </Button>
                                        <Button id ="buttonColorCard">
                                        ADD TO CARD
                                        </Button>
                                    </CardActions>
                                </Card>
                        </Grid> */}

                        {/* <Grid item xs={3}>
                            <Card className= "itemCover">
                                    <CardActionArea>

                                        <CardMedia>
                                            <img src= {Photo} alt="Logo" className= "ShopItemPhoto"/>
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                THINS NAME
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            ShopShop Shop ShopShopShopShop Shop........
                                            </Typography> <br/>
                                            <Typography variant="h5" component="h4">
                                                Rs 5000/=
                                            </Typography>

                                            <Rating name="read-only" value={value} readOnly />

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button id ="buttonColorBuy">
                                        BUY
                                        </Button>
                                        <Button id ="buttonColorCard">
                                        ADD TO CARD
                                        </Button>
                                    </CardActions>
                                </Card>
                        </Grid> */}

                        {/* <Grid item xs={3}>
                            <Card className= "itemCover">
                                    <CardActionArea>
                                        <CardMedia>
                                            <img src= {Photo} alt="Logo" className= "ShopItemPhoto"/>
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                THINS NAME
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            ShopShop Shop ShopShopShopShop Shop........
                                            </Typography> <br/>
                                            <Typography variant="h5" component="h4">
                                                Rs 5000/=
                                            </Typography>

                                            <Rating name="read-only" value={value} readOnly />

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button id ="buttonColorBuy">
                                        BUY
                                        </Button>
                                        <Button id ="buttonColorCard">
                                        ADD TO CARD
                                        </Button>
                                    </CardActions>
                                </Card>
                        </Grid> */}

                        {/* <Grid item xs={3}>
                            <Card className= "itemCover">
                                    <CardActionArea>
                                        <CardMedia>
                                            <img src= {Photo} alt="Logo" className= "ShopItemPhoto"/>
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                THINS NAME
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            ShopShop Shop ShopShopShopShop Shop........
                                            </Typography> <br/>
                                            <Typography variant="h5" component="h4">
                                                Rs 5000/=
                                            </Typography>

                                                <Rating name="read-only" value={value} readOnly />

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button  id ="buttonColorBuy">
                                        BUY
                                        </Button>
                                        <Button id ="buttonColorCard">
                                        ADD TO CARD
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid> */}

                    </Grid>
                </Paper>
            </Grid>
          </Box>
        )
    }
};

export default ShopProfile;
