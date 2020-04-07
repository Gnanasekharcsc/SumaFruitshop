import React from 'react';
import '../directory/directory-style.scss'

import MenuItem from '../menu-item/menu-item'

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[
                {
                title:'Bananas',
                image: 'images/bunchbanana.jpg',
                id: 1,
                linkUrl:'bananas'
                },
                {
                    title:'Grapes',
                    image: 'images/grapes.jpg',
                    id: 2,
                    linkUrl:'grapes'
                    },

                    {
                        title:'Guavas',
                        image: 'images/guava-fruit.jpg',
                        id: 3,
                        linkUrl:''
                        },

                        {
                            title:'Kiwi Fruits',
                            image: 'images/kiwifruits.jpg',
                            id: 4,
                            linkUrl:''
                            },

                            {
                                title:'Lemons',
                                image: 'images/lemons.jpg',
                                id: 5,
                                linkUrl:''
                                },

                                {
                                    title:'Mangoes',
                                    image: 'images/mangoes.jpg',
                                    id: 6,
                                    linkUrl:''
                                    },

                                    {
                                        title:'Pomegranates',
                                        image: 'images/pomegranate.jpg',
                                        id: 7,
                                        linkUrl:''
                                        },

                                        {
                                            title:'Ragus',
                                            image: 'images/ragus.jpg',
                                            id: 8,
                                            linkUrl:''
                                            },

                                            {
                                                title:'Sapotoes',
                                                image: 'images/sapota.jpg',
                                                id: 9,
                                                linkUrl:''
                                                },

                                                {
                                                    title:'Sweet Apples',
                                                    image: 'images/sweetApples.jpg',
                                                    id: 10,
                                                    linkUrl:''
                                                    },

                                                    {
                                                        title:'Watermelon',
                                                        image: 'images/Watermelon.jpg',
                                                        id: 11,
                                                        linkUrl:''
                                                        },

                                                        {
                                                            title:'Apples',
                                                            image: 'images/Apples.jpg',
                                                            id: 12,
                                                            linkUrl:''
                                                            }                                               
            ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) =>(
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>

        )
    }
}

export default Directory;