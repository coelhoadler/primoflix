import React, { Component } from 'react';
import videos from '../../assets/mock.json';
import './index.css';

class Videos extends Component {

    state = {
        videos: [],
        loading: true
    }

    public componentDidMount() {
        let videos = localStorage.getItem('videos');
        if (!videos) {
            this._getVideos().then((response: any) => {
                this.setState({ 
                    videos: response.items,
                    loading: false
                });
    
                localStorage.setItem('videos', JSON.stringify(response.items))
            });
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
        } else {
            return (
                <div className="loader">
                    <svg version="1.1"
                        className="svg-loader"
                        x="0px"
                        y="0px"
                        viewBox="0 0 80 80" >

                        <path
                            id="spinner"
                            fill="#D43B11"
                            d="M40,72C22.4,72,8,57.6,8,40C8,22.4,
		22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2
		s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6,
		28,28,28c1.1,0,2,0.9,2,2S41.1,72,40,72z"
                        >
                            <animateTransform
                                attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 40 40"
                                to="360 40 40"
                                dur="0.6s"
                                repeatCount="indefinite"
                            />
                        </path>
                    </svg>
                </div>
            )
        }

    }

    private async _getVideos(): Promise<any> {
        const key = "AIzaSyAbDbraMA9sKuCkgJ3Kh0Z-by-5hSRKQA0";
        const channelId = `UCT4nDeU5pv1XIGySbSK-GgA`;
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${key}&channelId=${channelId}&order=date&maxResults=100`;
        return await fetch(URL).then(json => json.json());
    }

    private _getMockVideos(): void {
        setTimeout(() => {
            this.setState({
                videos: videos['items'],
                loading: false
            })
        }, 5000);        
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

}

export default Videos;