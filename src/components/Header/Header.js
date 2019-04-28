import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <nav class="nav">
                <a class="links" href="/">Home</a>
                <a class="links" href="/shows">Shows</a>
                <a class="links" href="/videosArticles">Videos/Articles</a>
                <a class="links" href="/gallery">Gallery</a>
                <a class="links" href="/bio">Bio</a>
                </nav>
            </header>
        );
    }
}