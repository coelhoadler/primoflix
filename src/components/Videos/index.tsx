import React, { Component } from 'react';
import videos from '../../assets/mock.json';
import Loader from '../Loader';

import './index.css';

import { VideoListItemLink, VideoListItemImg } from './VideoListItem';
import moment, { Moment } from 'moment';

class Videos extends Component {

    state = {
        videos: [],
        loading: true
    }

    public componentDidMount() {
        console.log('key: ', process.env.REACT_APP_TESTE);
        const videos = localStorage.getItem('videos');
        const lastTime = this._verifyLastTime();

        if (!videos || lastTime >= 2) {
            this._getVideos().then((response: any) => {
                this.setState({ 
                    videos: response.items,
                    loading: false
                });
    
                localStorage.setItem('videos', JSON.stringify(response.items));
                localStorage.setItem('lastTime', JSON.stringify(new Date().getTime()));
            })
        } else {
            this._setVideos(JSON.parse(videos));
        }
    }

    public render() {
        if (!this.state.loading) {
            return (
                <section className="videos-list">
                    <h2>Meus vídeos mais recentes</h2>
                    <div className="videos-list__wrapper">
                        {this.state.videos.map((item: any) => {
                            return (
                                <div className="videos-list__wrapper__item" key={item.id.videoId}>
                                    <VideoListItemLink
                                        className=".videos-list__wrapper__item-link"
                                        href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                                        target="_blank">
                                        <VideoListItemImg
                                            className="videos-list__wrapper__item-img"
                                            src={item.snippet.thumbnails.medium.url}
                                            alt="Thumb do vídeo" >
                                        </VideoListItemImg>
                                        <span className="videos-list__wrapper__item-date">{this._transformDate(item.snippet.publishedAt)}</span>
                                        <h2 className="videos-list__wrapper__item-title" title={item.snippet.title}>{item.snippet.title}</h2>
                                        <p className="videos-list__wrapper__item-description" title={item.snippet.description}>
                                            {item.snippet.description}
                                        </p>
                                    </VideoListItemLink>
                                </div>
                            )
                        })}
                    </div>
                </section>
            )
        } else {
            return (<Loader />)
        }

    }

    private async _getVideos(): Promise<any> {
        const key = "AIzaSyAbDbraMA9sKuCkgJ3Kh0Z-by-5hSRKQA0";
        const channelId = `UCT4nDeU5pv1XIGySbSK-GgA`;
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${key}&channelId=${channelId}&order=date&maxResults=100`;
        return await fetch(URL).then(json => json.json());
    }

    private _getMockVideos(): Promise<any> {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                resolve(videos);
            }, 2000);
        });
    }

    private _transformDate(publishedAt: string): string {
        const date = new Date(publishedAt);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}`
    }

    private _setVideos(videos: any):void {
        this.setState({ 
            videos: videos,
            loading: false
        });        
    }

    private _verifyLastTime(): number {
        const lastTime = localStorage.getItem('lastTime');

        if (lastTime) {
            const actualDate = moment();
            const pastDate = moment(new Date(JSON.parse(lastTime)));

            return actualDate.diff(pastDate, 'days');
        }
        return 0;
    }

}

export default Videos;