import { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css'
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const [selectedVideo, setSelectedViedo] = useState(null);

  const selectVideo = video => {
    setSelectedViedo(video);
  }

  const search = query => {
    youtube.search(query)
      .then(videos => {
        setVideos(videos)
        setSelectedViedo(null);
      })
  }

  useEffect(() => {
    youtube.mostPopular()
      .then(videos => setVideos(videos))
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
        {
          selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo}></VideoDetail>
            </div>
          )
        }
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}></VideoList>
        </div>
      </section>

    </div>);
}

export default App;
