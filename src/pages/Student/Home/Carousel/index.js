import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

export default class Responsive extends Component {
    render() {
        const { items } = this.props;

        var settings = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div>
                <Slider {...settings}>
                    {items.map((item, index) => (
                        <div key={index}>
                            <div className={cx('carousel_item')} >
                                <img className={cx('imageCourse')} src={item.image} alt=''/>
                            </div>
                                <h3 className={cx('titleCourse')}>{item.title}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
