import React from 'react';
import styles from './YouTuBe.module.css';

class YouTuBe extends React.Component {
  
  displayPosts = () => {
    const listItems = this.props.videos.map((video, index) =>
      <iframe height="315" title="1" src={video} frameBorder="0" key={index}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>);
    return (listItems);
  }
    
  
  render() {
    return (
      <div className={styles.content}>
        {this.displayPosts()}
      </div>
    )
  }
}

export default YouTuBe;