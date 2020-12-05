import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  
  render() {
    
    return (
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.container}>
            <Link className={styles.logo} to="/" >Lily's kitchen</Link>
          </div>
          <div className={styles.container}>
            <Dropdown title="Food Categories" options={this.props.options}/>
          </div>
        </div>
        
        <div className={styles.right}>
          <a className={styles.navlink} href="/HowItWorks">
            How it Works
          </a>
          <a className={styles.navlink} href="/AboutUs">
            About us
          </a>
          <a className={styles.navlink} href="/FollowUs">
            Follow us
          </a>
          <a className={styles.navlink} href="/ContactUs">
            Contact us
          </a>
          <a className={styles.navlink} href="/Privacy">
            Privacy
          </a>
          <a className={styles.navlink} href="/YouTuBe">
            YouTuBe
          </a>
        </div>
      </div>
    )
  }
}

export default Header;
