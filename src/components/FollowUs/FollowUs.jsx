import React from 'react';
import styles from './FollowUs.module.css';

class FollowUs extends React.Component {
  
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      submit: false
    }
  }
  
  displayContent = () => {
    if (this.state.submit) {
      return (
        <div className={styles.update}>
          Thanks for your subscription! You will get a notification once we update menu.
        </div>
      );
    } else {
      return (
        <div>
          <div className={styles.firstRowContentRightTop}>
            <h2>Get free recipes and special offers delivered to your inbox every week!</h2>
          </div>
          <form className={styles.firstRowContentRightCenter} onSubmit={this.submitForm}>
            <input placeholder="Email Address" className={styles.emailInput} aria-label="Email Address" maxLength="255" type="email" size="255" name="user[email]" />
            <input type="submit" name="commit" className={styles.emailSubmit} value="Submit" aria-label="Submit" data-disable-with="submit" />
          </form>
        </div>
      );
    }
  }
  
  displaySocialMedias = () => {
    const listItems = this.props.socialMedias.map((socialMedia, index) =>
      <img className={styles.socialMedia} src={socialMedia} alt="social media" key={index}/>)
    return (listItems);
  }
  
  submitForm(event) {
    event.preventDefault();
    this.setState({
      submit: true
    });
  }
  
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.firstRow}>
          <div className={styles.firstRowContent}>
            <div className={styles.firstRowContentLeft}>
              <img src="https://images.unsplash.com/photo-1546173078-a7d5f578b31c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="product" />
            </div>
            <div className={styles.firstRowContentRight}>
              <div>
                {this.displayContent()}
              </div>
              <div className={styles.firstRowContentRightBottom}>
                {this.displaySocialMedias()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FollowUs;