import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video: {snippet}}) => (
    <div className={styles.container}>
        <li className={styles.video}>
          <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video_thumbnails"></img>
          <div>
              <p className={styles.title}>{snippet.title}</p>
              <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </li>
    </div> 
    );
export default VideoItem