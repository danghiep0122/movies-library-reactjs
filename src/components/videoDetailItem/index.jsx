import './styles.scss';
import VideoItem from '../videoItem';

export default function VideoDetailItem({ videoName, videoUrl, type, date }) {
  return (
    <div className="video-item-outer">
      <VideoItem videoUrl={videoUrl} />
      <div className="credit-item-detail">
        <h3>{videoName}</h3>
        <h4>
          {type} 🎞 {date}
        </h4>
      </div>
    </div>
  );
}
