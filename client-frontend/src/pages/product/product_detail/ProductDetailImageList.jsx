"use client";

import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const ProductDetailImageList = ({images, title}) => { // Receive images and title as props
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    if (!images || images.length === 0) {
        return <div>Không có hình ảnh sản phẩm.</div>; // Or a placeholder image
    }

    return (<Carousel activeIndex={index} onSelect={handleSelect} interval={null}> {/* Remove auto-sliding */}
        {images.map((image, i) => (<Carousel.Item key={image.id}>
            <img
                className="d-block w-100"
                src={image.url}
                alt={`${title} - Slide ${i + 1}`}
            />
        </Carousel.Item>))}
    </Carousel>);
};