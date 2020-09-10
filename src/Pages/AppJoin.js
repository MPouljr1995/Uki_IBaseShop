import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import {Data} from './Data'
// import ShopSide from './ShopSide';
import PathSection from './PathSection';

export default class AppJoin extends React.Component{
    render(){
        return(
            <div>
                <Data>
                    <Router>
                        {/* <ShopSide/> */}
                        <PathSection/>
                    </Router>
                    
                </Data>
            </div>
        )
    }
}