import React from 'react';
import '../menu-item/menu-item.styles.scss';
import{withRouter} from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
<div className='content'>
    <h2 className='title'>{title}</h2>
    <button className='buttons'type="button">Add to Cart</button>
</div>
</div>
)

export default withRouter(MenuItem);
