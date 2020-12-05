import React from 'react';
import styles from './PostPage.module.css';
import { Link } from 'react-router-dom';

class PostPage extends React.Component {
    
    displayPost = () => {
      if (!this.props.post) { return; }
      const post = this.props.post.data;
      return (
          <div className={styles.content}>
          <img src={post.imageUrl} alt="post"/>
          <div className={styles.text}>
              <h1>{post.title}</h1>
              <p className={styles.author}>By {post.author}</p>
              <p className={styles.price}>Sale: $ {post.price}</p>
              <h4>{post.description}</h4>
          </div>
          <div className={styles.button}>
             <Link to="/">Back</Link>
          </div>
          </div>
      )
    }
    
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div>{this.displayPost()}</div>
        );
    }
}

export default PostPage;
