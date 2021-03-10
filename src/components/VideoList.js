import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderedList = props.listOfVideos.map((listOfVideo) => {

        return <VideoItem key={listOfVideo.id.videoId} onVideoSelect={props.onVideoSelect} video={listOfVideo}/>;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;