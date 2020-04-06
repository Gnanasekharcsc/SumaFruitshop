import React from 'react';
import '../menu-item/menu-item.styles.scss'

const MenuItem =({title, image})=>(

<div className='menu-item'>
<div
            className="background-image"
            style={{
                backgroundImage: `url(${image})`
            }}
        />
<div className='content'>
    <h2 className='title'>{title}</h2>
    <button className='buttons'type="button">Add to Cart</button>
</div>
</div>
)

export default MenuItem;
