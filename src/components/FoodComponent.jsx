import React from 'react';
import '../containers/App/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCircle, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const FoodList = (props) => {
    console.log('food list:', props.foodItem)

    return props.foodItem.map(item => {
        // console.log(item.image)
        return (
            <div className='foodList-container' >
                <div key={item.id} className="foodList" >
                    <div>
                        <img src={item.image} alt="" />
                    </div>

                    <div className='food-list-info'>
                        <a href={'food/detail/' + item.id}><h3>{item.item}</h3></a>
                        <div className='food-list-category'>
                            {item.price}
                            <FontAwesomeIcon icon={faGlobe} color='#666633' size='2px' className='dot-icon' />
                            <p>

                                {item.category}
                            </p>
                        </div>
                        <div className='description'>
                            <FontAwesomeIcon icon={faUserCircle} color='#666633' className='user-icon' />
                            "{item.description}"
                        </div>
                    </div>

                </div>
            </div >
        )
    })
}

