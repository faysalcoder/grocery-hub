import React from 'react';
import Header from '../../shared/Header/Header';
import Slider from '../../utility/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-3xl font-bold underline'>This is home</h1>
            <Slider></Slider>
        </div>
    );
};

export default Home;