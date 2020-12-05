import React from 'react';
import styles from './PostList.module.css';

class PostList extends React.Component {
    
    displayPosts = () => {
        const listItems = this.props.posts.map((post, index) =>
        <a className={styles.post}  href={`/post/${post.id}`} key={index}>
            <img src={post.data.imageUrl} alt="post"/>
            <div className={styles.bottom}>
                <h2>{post.data.title}</h2>
                <div>
                    <span className={styles.author}>By {post.data.author}</span>
                    <span className={styles.price}>${post.data.price}</span>
                </div>
            </div>
        </a>
        );
        return (
            <div className={styles.root}>
                <div className={styles.topContent}>
                    <div className={styles.innerContainer}>
                        <h2 className={styles.title}>SIMPLIFY DINNER</h2>
                        <p className={styles.subtitle}>Fresh weekly meal kits customized to your liking and starting at $6.99 per serving.</p>
                    </div>
                    <div className={styles.secondRow}>
                        <div className={styles.secondRowContent}>
                            <div>
                                <img className={styles.secondRowContentImage} src="https://www.flaticon.com/svg/static/icons/svg/3830/3830217.svg" alt="post"/>
                            </div>
                            <div className={styles.secondRowContentTitle}>Select</div>
                            <div>Carb conscious, calorie conscious, vegetarian – we’ve got lots of options to fit your schedule and diet.</div>
                        </div>
                        <div className={styles.secondRowContent}>
                            <div>
                                <img className={styles.secondRowContentImage} src="https://www.flaticon.com/svg/static/icons/svg/1300/1300455.svg" alt="post" />
                            </div>
                            <div className={styles.secondRowContentTitle}>Customize It</div>
                            <div>Use our Customize It feature to upgrade, swap, or double up proteins on select meals.</div>
                        </div>
                        <div className={styles.secondRowContent}>
                            <div>
                                <img className={styles.secondRowContentImage} src="https://www.flaticon.com/premium-icon/icons/svg/2454/2454273.svg" alt="post"/>
                            </div>
                            <div className={styles.secondRowContentTitle}>Enjoy</div>
                            <div>Effortlessly create and plate your meals in no time. Dinner is solved!</div>
                        </div>
                    </div>
                </div>
                <div className={styles.thirdRow}>
                    <div className={styles.thirdRowContent}>
                        <div className={styles.thirdRowContentTitle}>More Than a Meal Kit</div>
                        <div className={styles.thirdRowContentSubTitle}>Weekly recipe rotations for all skill levels and dietary preferences means there's always something new and exciting to cook.</div>
                    </div>
                </div>
               {listItems}
            </div>
        );
    };

    render() {
        return (  <div className={styles.top}>{this.displayPosts()}</div> );
    }
}

export default PostList;
