import React from 'react';
import styles from './AboutUs.module.css';

class AboutUs extends React.Component {
    
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.fristRow}>
          <div className={styles.fristRowContent}>
            <div className={styles.fristRowContentRight}>
              <h1 className={styles.fristRowTitle}>Home Chef brings people together around the dinner table.</h1>
              <p>Helping you save time while enjoying real home cooking and the joy that comes with it.</p>
            </div>
          </div>
        </div>
        <div className={styles.secondRow}>
          <p>Every day, you're out there making things happen. That's why our CEO, Pat Vihtelic, created Home Chef: to provide everything you need to bring more delicious meals and moments to the table, no matter how busy you are. Because at Home Chef, we believe that preparing and enjoying a home-cooked meal should be a simply delicious experience.</p>
          <p>In fact, simplicity is our mantra. From online to doorstep...to your kitchen table, we make planning and preparing a home-cooked meal simple, intuitive and inspirational every step of the way.</p>
          <p>In 2013, Pat started Home Chef by partnering with a chef to design delicious, easy-to-follow recipes. Since then, our team has grown to include several chefs, and more than 700 employees across production, marketing, technology, product, design, and customer service. Last year, we delivered over 10 million meals and expanded our delivery to cover more than 97% of the U.S. population. Some days -- okay, most days -- we can't believe how quickly we've grown. But we believe that people continue to love Home Chef for the same reasons it was founded: it saves time, reduces food waste, and most importantly, brings people together for a home-cooked meal.</p>
        </div>
      </div>
    )
  }
}

export default AboutUs;