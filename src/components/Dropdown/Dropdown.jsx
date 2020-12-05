import React from 'react';
import styles from './Dropdown.module.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      selected: this.props.initial || -1
    };
  }
  
  toggleDropdown() {
    this.setState({
      active: !this.state.active
    });
  }
  
  handleClick(i) {
    this.setState({
      selected: i
    });
  }
  
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }
  
  handleClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.setState({
        active: false
      });
    } else {
      
    }
  }
  
  toLowerCase(option) {
    return option.toLowerCase();
  }
  
  renderOptions() {
    if (!this.props.options) {
      return;
    }
    
    return this.props.options.map((option, i) => {    
      const dropdownlistitemactive = i === this.state.selected ? styles.dropdownlistitemactive : '';
      return (
        <a
          href={`/categories/${this.toLowerCase(option)}`}
          key={i}
          className={`${styles.dropdownlistitem} ${dropdownlistitemactive}`}
        >
         {option}
        </a>
      );  
    });  
  }
  
  render() {
    const dropdownlistactive = this.state.active ? styles.dropdownlistactive : '';
    
    return (
      <div className={styles.dropdown}>
        <div
          onClick={() => this.toggleDropdown()}
          className={`${styles.dropdowntoggle} ${styles.dropdownlistitem}`}
          ref={node => this.node = node}
        >
          {this.props.title}
        </div>
        <ul className={`${styles.dropdownlist} ${dropdownlistactive}`}>{this.renderOptions()}</ul>      
      </div>
    );
  }
}

export default Dropdown