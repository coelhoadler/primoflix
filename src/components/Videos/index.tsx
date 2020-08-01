import React, { Component } from 'react';
import './index.css';

class Videos extends Component {

    state = {
        videos: []
    }

    public componentDidMount() {
        this._getVideos().then((response: any) => {
            this.setState({ videos: response.items })
            console.log('data', this.state.videos[0]);
        });
    }

    public render() {
        return (
            <section className="videos-list">
                <div className="videos-list__wrapper">
                    {this.state.videos.map((item: any) => {
                        return (
                            <div className="videos-list__wrapper__item" key={item.id.videoId}>
                                <a 
                                    className="videos-list__wrapper__item-link"
                                    href={`https://www.youtube.com/watch?v=${item.id.videoId}`} 
                                    target="_blank">
                                    <img 
                                        className="videos-list__wrapper__item-img"
                                        src={item.snippet.thumbnails.medium.url}
                                        alt="Thumb do vídeo" >
                                    </img>
                                    <h2 className="videos-list__wrapper__item-title">{item.snippet.title}</h2>
                                    <p className="videos-list__wrapper__item-description">
                                        {item.snippet.description}
                                    </p>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }

    private _getVideos(): Promise<any> {
        const key = `AIzaSyA3eoevnwGM7-LMyJvetFRO9kbhmzQpQ9g`;
        const channelId = `UCT4nDeU5pv1XIGySbSK-GgA`;
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${key}&channelId=${channelId}&order=date&maxResults=100`;
        return fetch(URL).then(json => json.json());
    }

}

export default Videos;