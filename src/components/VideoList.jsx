import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
   const renderedList = videos.map((video, index) => {
      return <VideoItem video={video} key={index} />
   });

   return (
      <div className="ui relaxed divided list">
         {renderedList}
      </div>
   )
}

export default VideoList
