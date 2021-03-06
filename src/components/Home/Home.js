import React from 'react';

import SidebarHome from '../SidebarHome/SidebarHome';

import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='mainColumn'>
                    <div className='homeDiv'>
                        <p>Jazz saxophonist and Seattle native,<br/>
                        Gary 'Jubil' Hammon  Available for:<br/>
                        <strong>Live Music<br/>
                        Lessons<br/>
                        Public Speaking<br/>
                        <br/></strong>
                        As well as being one of the most musically satisfying musicians in the
                        area, Gary Hammon is an engaging speaker and story teller. His decades
                        of performing with some of the greatest musicians of the 20th C. has
                        provided him with a deep fund of anecdotes that are both educating and
                        entertaining. Born and raised in Seattle, Mr. Hammon also shares his
                        love of the Central District, how it has changed over the years, and
                        what he hopes for the neighborhood as it grows and changes.<br/>
                        <br/>
                        Please use the contact below with any questions or for scheduling:<br/>
                        <br/>
                        <a className='garyBlurb' href='mailto:grhammon@gmail.com?subject=garyhammonmusic.com'>Grhammon1@gmail.com</a>
                        </p>
                    </div>
                    <div className='homeDiv'>
                        <p className='quote'>"I first became aware of Gary Hammon in the Sixties as a serious young
                        tenor saxophonist coming out of Garfield High School. After honing his
                        craft studying and playing with jazz greats in Boston and New York,
                        he's brought a rich heritage and experience back to Seattle.  Today,
                        he's sharing the music as a performer and as a teacher to another
                        generation."</p>  
                    </div>
                </div>

                <div className='sideColumn'>
                    <SidebarHome/>
                </div>
            </div>
        );
    }
}
