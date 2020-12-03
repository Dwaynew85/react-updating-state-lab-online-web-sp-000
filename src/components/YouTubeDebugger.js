import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state={
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    handleRes = () => {
        this.setState({
            video: {
                ...this.state.settings.video,
                resolution: '720'
            }
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleBitrate} className='bitrate' >{this.state.settings.bitrate}</button>
                <button onClick={this.handleRes} className='resolution' >{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}
