import React from 'react';
import styles from './ContactUs.module.css';

class ContactUs extends React.Component {
  
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
          Thanks for contacting us. We will contact with you in 48 business hours.
        </div>
      );
    } else {
      return (
        <div>
          <form className={styles.firstRowContentRightCenter} onSubmit={this.submitForm}>
            <label>Your First Name</label>
            <input className={styles.nameInput} maxLength="255" type="text" size="255" name="user[email]" />
            <label>Your Last Name</label>
            <input className={styles.nameInput} maxLength="255" type="text" size="255" name="user[email]" />
            <label>Your Phone Number</label>
            <input className={styles.nameInput} maxLength="255" type="number" size="255" name="user[email]" />
            <label>Your Email</label>
            <input className={styles.emailInput} maxLength="255" type="email" size="255" name="user[email]" />
            <label>Your Message(350 Characters)</label>
            <textarea className={styles.msgInput} maxLength="350" type="text" size="350" />
            <input type="submit" name="commit" className={styles.emailSubmit} value="Submit" aria-label="Submit" data-disable-with="submit" />
          </form>
        </div>
      );
    }
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
              <img src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="product" />
            </div>
            <div className={styles.firstRowContentRight}>
              <div>
                {this.displayContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs;