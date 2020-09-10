import React, { Component } from 'react';

export const DataContext = React.createContext();

export default class DataProvider extends Component {
    state = {
        products: [
            {
                "_id": "1",
                "title": "I phone 1",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "description": "UI/UX designing, html css tutorials",
                "price": 23,
                "count": 1
            },
            {
                "_id": "2",
                "title": "ear phone",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "description": "UI/UX designing, html css tutorials",
                "price": 50,
                "count": 1
            },
        ]
    };

    render() {
        const {products} = this.state;

        return (
            <DataContext.Provider
            value= {{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}