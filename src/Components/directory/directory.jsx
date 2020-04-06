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
                image: '../directory/staticimages/bunchbanana.jpg',
                id: 1
                },
                {
                    title:'Grapes',
                    image:'../directory/staticimages/bunchbanana.jpg',
                    id: 2
                    },

                    {
                        title:'Guavas',
                        image:'../directory/staticimages/bunchbanana.jpg',
                        id: 3
                        },

                        {
                            title:'Kiwi Fruits',
                            image:'./staticimages/kiwifruits.jpg',
                            id: 4
                            },

                            {
                                title:'Lemons',
                                image:'./staticimages/lemons.jpg',
                                id: 5
                                },

                                {
                                    title:'Mangoes',
                                    image:'./staticimages/mangoes.jpg',
                                    id: 6
                                    },

                                    {
                                        title:'Pomegranates',
                                        image:'./staticimages/pomegranate.jpg',
                                        id: 7
                                        },


                                        {
                                            title:'Ragus',
                                            image:'./staticimages/ragus.jpg',
                                            id: 8
                                            },


                                            {
                                                title:'Sapotoes',
                                                image:'../staticimages/sapota.jpg',
                                                id: 9
                                                },

                                                {
                                                    title:'Sweet Apples',
                                                    image:'./staticimages/sweetApples.jpg',
                                                    id: 10
                                                    },

                                                    {
                                                        title:'Watermelon',
                                                        image:'./staticimages/Watermelon.jpg',
                                                        id: 12
                                                        },

                                                        {
                                                            title:'Apples',
                                                            image:'./staticimages/Apples.jpg',
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