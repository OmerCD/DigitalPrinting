class StyledNavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navTransparency: false,
      currentPage: props.page
    };
    console.log(this.props);
    this.handleScroll();
  }
  pageChanged = newPage => {
    console.log("del Before");
    console.log(this.state);
    console.log("del after");
    this.setState({ currentPage: newPage });
    console.log(this.state);
    this.checkNavTransparency();
  };
  componentDidUpdate(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.setState({ currentPage: nextProps.page });
    }
  }
  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
    this.props.setOnPageChange(this.pageChanged);
    this.setState({ currentPage: this.props.page });
    this.checkNavTransparency();
    this.handleScroll();
  }
  handleScroll = () => {
    this.checkNavTransparency();
  };
  checkNavTransparency = () => {
    console.log("checkNavTransparency. States");
    console.log(this.state);
    if (window.scrollY > 100) {
      if (this.state.navTransparency === true) {
        this.reverseTransparency();
      }
    } else {
      console.log("In else");
      console.log(this.state);
      if (
        this.state.currentPage == "/home" ||
        this.state.currentPage == "/aboutus"
      ) {
        console.log(
          "Transparent Page. NavTransparency :" + this.state.navTransparency
        );
        if (this.state.navTransparency === false) {
          this.reverseTransparency();
        }
      } else {
        if (this.state.navTransparency === true) {
          this.reverseTransparency();
        }
      }
    }
  };
  reverseTransparency() {
    this.setState({ navTransparency: !this.state.navTransparency });
  }
  render() {
    const StyledNavBar = styled.nav`
      background: ${props => {
        if (props.transparency) {
          return "rgba(19, 19, 19, 0.5)";
        } else {
          return "rgba(47, 47, 47, 1)";
        }
      }};

      font-size: 14pt;
      font-weight: bold;
      z-index: 9999;
      position: sticky;
      top: 0;
    `;
    return (
      <StyledNavBar transparency={this.state.navTransparency}>
        {this.props.children}
      </StyledNavBar>
    );
  }
}

export default StyledNavBarComponent;
