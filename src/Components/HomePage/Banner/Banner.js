import React from 'react';
import Carousel from 'react-material-ui-carousel'
import BannerItem from '../BannerItem/BannerItem';


const Banner = () => {

    var items = [
        {
            name: "The Stone Series",
            title: "Great Leather Collection",
            description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            img: 'https://i.ibb.co/7JR8cg3/banner-1.jpg',
        },
        {
            name: "The Stone Series",
            title: "Black Great Addition",
            description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            img: 'https://i.ibb.co/bzSVrks/banner-2.jpg'
        },
        {
            name: "The Stone Series",
            title: 'A Great New Addition',
            description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            img: 'https://i.ibb.co/YDQ79gj/banner-3.jpg',
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