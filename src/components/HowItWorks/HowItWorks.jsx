import React from 'react';
import styles from './HowItWorks.module.css';

class HowItWorks extends React.Component {
    
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.fristRow}>
          <h1 className={styles.fristRowTitle}>How It Works</h1>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.secondRowContent}>
            <div className={styles.secondRowContentLeft}>
              <img src="https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Fhow-it-works%2Fsection-two%2Fpick-your-meals-c051b0aab6a3ede9cc54b1b538db50171cfe803b2373a0a43a046551ba4b5aed.jpg?ixlib=rails-1.1.0&s=cb4d07953eb58180f5fdae493b2356bf" alt="product" />
            </div>
            <div className={styles.secondRowContentRight}>
              <div className={styles.secondRowContentRightTop}>
              <h1>1. Pick Your Meals</h1>
              </div>
              <div className={styles.secondRowContentRightBottom}>
                Select recipes each week that fit your preferences and dietary restrictions. Accept our suggestions or choose your own!
              </div>
            </div>
          </div>
          <div className={styles.secondRowContent}>
            <div className={styles.secondRowContentRight}>
                <div className={styles.secondRowContentRightTop}>
                <h1>2. Customize Your Plate</h1>
                </div>
                <div className={styles.secondRowContentRightBottom}>
                  Use our Customize It feature to upgrade, swap, or double up your favorite protein on select recipes.
                </div>
            </div>
            <div className={styles.secondRowContentLeft}>
              <img src="https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Fhow-it-works%2Fsection-two%2Fcustomize-your-plate-2b9ed84866255ffe01929d741faa500b6965b55daf55e727492fba9445a45d86.jpg?ixlib=rails-1.1.0&s=d835b8661be2377a470f270c27655e45" alt="product" />
            </div>
          </div>
          <div className={styles.secondRowContent}>
            <div className={styles.secondRowContentLeft}>
              <img src="https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Fhow-it-works%2Fsection-two%2Fcook-and-enjoy-ddf00fde944dcbed048ad0a3ef85181f8dc32a3e5a9de7e8856a0497ac730411.jpg?ixlib=rails-1.1.0&s=420a2fe018b72d9d0a3671805c19bd05" alt="product" />
            </div>
            <div className={styles.secondRowContentRight}>
              <div className={styles.secondRowContentRightTop}>
              <h1>3. Cook And Enjoy!</h1>
              </div>
              <div className={styles.secondRowContentRightBottom}>
                Fresh, pre-portioned ingredients delivered right to your door – effortlessly create and plate exciting dishes with our step-by-step recipe cards.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HowItWorks;
