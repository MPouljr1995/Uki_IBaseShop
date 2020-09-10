import React, { Component } from 'react'

import {Route} from "react-router-dom"
import AddToCard from './AddToCard'
import ShopSide from './ShopSide'
import Payment from './Payment'


export default class PathSection extends Component {
    render() {
        return(
            <section>
                <Route exact path= '/' component={ShopSide} />
                <Route exact path= '/card' component={AddToCard} />
                <Route path= '/payment' component={Payment} />
            </section>
                
           
        )
    }
}