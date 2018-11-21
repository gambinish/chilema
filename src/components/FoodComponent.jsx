import React from 'react';
import '../containers/App/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCircle, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const FoodList = (props) => {
    console.log('food list:', props.foodItem)

    return props.foodItem.map(item => {
        const baseUrl = '/food/detail/'
        console.log(baseUrl)
        return (
            <div className='foodList-container' >
                <div key={item.id} className="foodList" >
                    <div>
                        <img src={item.image} alt="" />
                    </div>

                    <div className='food-list-info'>
                        <a href={baseUrl + item.id}><h3 class='foot-list-title'>{item.item}</h3></a>
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

