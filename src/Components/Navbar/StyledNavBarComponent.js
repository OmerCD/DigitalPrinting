import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class StyledNavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navTransparency: false,
      currentPage: null,
    };
    this.handleScroll();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({
        navTransparency: !this.state.navTransparency,
      });
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.checkNavTransparency();
    this.handleScroll();
  }

  handleScroll = () => {
    this.checkNavTransparency();
  };

  checkNavTransparency = () => {
    if (window.scrollY > 100) {
      if (this.state.navTransparency === true) {
        this.reverseTransparency();
      }
    } else if (this.state.currentPage === '/home' || this.state.currentPage === '/aboutus') {
      if (this.state.navTransparency === false) {
        this.reverseTransparency();
      }
    } else if (this.state.navTransparency === true) {
      this.reverseTransparency();
    }
  };

  reverseTransparency() {
    this.setState({ navTransparency: !this.state.navTransparency });
  }

  render() {
    const StyledNavBar = styled.nav`
      background: ${props => {
        if (props.transparency) {
          return 'rgba(19, 19, 19, 0.5)';
        }
        return 'rgba(47, 47, 47, 1)';
      }};

      font-size: 14pt;
      font-weight: bold;
      z-index: 9999;
      position: sticky;
      top: 0;
    `;
    return (
      <StyledNavBar transparency={this.state.navTransparency}>{this.props.children}</StyledNavBar>
    );
  }
}

export default withRouter(StyledNavBarComponent);
