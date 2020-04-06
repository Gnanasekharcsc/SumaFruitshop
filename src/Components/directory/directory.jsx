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
                id: 1
                },
                {
                    title:'Grapes',
                    image: 'images/grapes.jpg',
                    id: 2
                    },

                    {
                        title:'Guavas',
                        image: 'images/guava-fruit.jpg',
                        id: 3
                        },

                        {
                            title:'Kiwi Fruits',
                            image: 'images/kiwifruits.jpg',
                            id: 4
                            },

                            {
                                title:'Lemons',
                                image: 'images/lemons.jpg',
                                id: 5
                                },

                                {
                                    title:'Mangoes',
                                    image: 'images/mangoes.jpg',
                                    id: 6
                                    },

                                    {
                                        title:'Pomegranates',
                                        image: 'images/pomegranate.jpg',
                                        id: 7
                                        },


                                        {
                                            title:'Ragus',
                                            image: 'images/ragus.jpg',
                                            id: 8
                                            },


                                            {
                                                title:'Sapotoes',
                                                image: 'images/sapota.jpg',
                                                id: 9
                                                },

                                                {
                                                    title:'Sweet Apples',
                                                    image: 'images/sweetApples.jpg',
                                                    id: 10
                                                    },

                                                    {
                                                        title:'Watermelon',
                                                        image: 'images/Watermelon.jpg',
                                                        id: 12
                                                        },

                                                        {
                                                            title:'Apples',
                                                            image: 'images/Apples.jpg',
                                                            id: 13
                                                            }                                               
            ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({title, image, id}) =>(
                    <MenuItem key={id} title={title} image={image}/>
                ))}
            </div>

        )
    }
}

export default Directory;