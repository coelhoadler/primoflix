import React, { Component } from 'react';
import * as Mock from '../../assets/mock.json'
import './index.css';

class Videos extends Component {

    state = {
        videos: []
    }

    public componentDidMount() {
        const aux: any = Mock;
        this.setState({ videos: aux['default']['items'] })
        
        // this._getVideos().then((response: any) => {
        //     this.setState({ videos: response.items })
        // });
    }

    public render() {
        return (
            <section className="videos-list">
                <h2>Meus vídeos mais recentes</h2>
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
                                    <span className="videos-list__wrapper__item-date">{this._transformDate(item.snippet.publishedAt)}</span>
                                    <h2 className="videos-list__wrapper__item-title" title={item.snippet.title}>{item.snippet.title}</h2>
                                    <p className="videos-list__wrapper__item-description" title={item.snippet.description}>
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

    private async _getVideos(): Promise<any> {
        const key = `AIzaSyBCZRe68koxuJm-pu8B3cwgf5LgtQgchkE`;
        const channelId = `UCT4nDeU5pv1XIGySbSK-GgA`;
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${key}&channelId=${channelId}&order=date&maxResults=100`;
        return await fetch(URL).then(json => json.json());
    }

    private _transformDate(publishedAt: string): string {
        const date = new Date(publishedAt);
        const day = date.getDate().toString().padStart(2, '0'); 
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}` 
    }

}

export default Videos;