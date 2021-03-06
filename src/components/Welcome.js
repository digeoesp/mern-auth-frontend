import React from 'react';
import CarouselHomePage from './CrouselHomePage';
import SearchBar from './SearchBar';
import SrchAppAdp from './SrchAppAdp'



const Welcome = () => {
    return (
        <>
            <div className="welcomeHeader">
                <div><h1>Welcome to Tail Wag!</h1></div>
                <div><h4>Where adopting a pet has never been easier</h4></div>
                <br></br>
                    <CarouselHomePage />
                <br></br>
                   <SrchAppAdp />
                <br></br>
                 <SearchBar />
            </div>
            <br></br>
            <br></br>
            <br></br>
        </>
    )

}

export default Welcome;