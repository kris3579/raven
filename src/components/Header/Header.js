import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <nav className="nav">
                <a className="links" href="/">Home</a>
                <a className="links" href="/shows">Shows</a>
                <a className="links" href="/videosArticles">Videos/Articles</a>
                <a className="links" href="/gallery">Gallery</a>
                <a className="links" href="/bio">Bio</a>
                </nav>
            </header>
        );
    }
}