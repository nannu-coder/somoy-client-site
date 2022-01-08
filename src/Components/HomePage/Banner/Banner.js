import { indigo } from '@mui/material/colors';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import BannerItem from '../BannerItem/BannerItem';


const Banner = () => {

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    ]

    return (
        <div>
            <Carousel
                indicatorIconButtonProps={{
                    style: {
                        marginTop: '-100px',
                        position: 'relative',
                        zIndex: 3
                    }
                }}
                navButtonsAlwaysVisible={true}
            >
                {
                    items.map((item, i) => <BannerItem
                        key={item.name}
                        item={item}
                    ></BannerItem>)
                }
            </Carousel>
        </div >
    );
};

export default Banner;