import React from 'react';
import './SidebarHome.css'

export default class SidebarHome extends React.Component {
    render() {
        return (
            <div>
                <div className='sidebarDiv'>
                    <figure>
                        <figcaption>Gary soloing on his composition 'New Places'</figcaption>
                        <audio controls src='/assets/audio/GaryClipOne.mp3'></audio>
                    </figure>
                </div>

                <div>
                    <figure className='sidebarDiv'>
                        <figcaption>Gary soloing on his composition 'Slightly in the Tradition'</figcaption>
                        <audio controls src='/assets/audio/GaryClipTwo.mp3'></audio>
                    </figure>
                </div>
            </div>
        );
    }
}
