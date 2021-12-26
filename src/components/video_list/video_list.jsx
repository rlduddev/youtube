import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoList = ({videos, onVideoClick, display}) => (
            <ul className={styles.videos}>
                {videos.map(video => <VideoItem video={video} key={video.id} onVideoClick={onVideoClick} display={display}></VideoItem>)}
            </ul>
    );

export default VideoList;