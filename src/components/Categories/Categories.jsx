import React from 'react';
import styles from './Categories.module.css';

class Categories extends React.Component {
    
    displayPosts = () => {
        const listItems = this.props.posts.map((post, index) => {
            if (post.data.category === this.props.category) {
              return (
                <a className={styles.post} href={`/post/${post.id}`} key={index}>
                    <img src={post.data.imageUrl} alt="post"/>
                    <div className={styles.bottom}>
                        <h2>{post.data.title}</h2>
                        <div>
                            <span className={styles.author}>By {post.data.author}</span>
                            <span className={styles.price}>${post.data.price}</span>
                        </div>
                    </div>
                </a>
              )
            }
        
          });
          return (
              <div className={styles.root}>
                 {listItems}
              </div>
          );
    };

    render() {
        return (<div className={styles.top}>{this.displayPosts()}</div>);
    }
}

export default Categories;

