import React, { Component } from 'react'
import { Link , animateScroll as scroll } from 'react-scroll'
import './navigation.css'
export class Nav extends Component {

    state = {
        windowPos :0,
        isMobile: false,
        isShowing: false,
        width: 0,
        height: 0,
    }
    
    componentWillReceiveProps(props){
          this.setState({windowPos:props.scrollPos});
      }
    scrollToTop = () =>{
        scroll.scrollToTop();
        }
    handleToggle = () =>{
        this.setState({isMobile: !this.state.isMobile});
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight },()=>{
            if(this.state.width <= 600){
                this.setState({isShowing: true})
            }
            else{
                this.setState({isShowing: false})
            }
        });
      }
    renderBurger = () => {
        if(this.state.isShowing){
            return(
                <div className="burger-wrapper">
                    <div className={this.state.isMobile ? "burger-container change": "burger-container" } onClick={this.handleToggle}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            );
        }
        else{
            return (<span></span>)
        }
    }
    render() {
        return (
        <React.Fragment>
            {this.renderBurger()}
            <div className={"nav-wrapper " + (this.state.windowPos > 50 ? 'nav-fixed ' : 'nav-relative ') + (this.state.isMobile? 'overlay': '')}>
                <nav className={"container " + (this.state.isMobile? 'show' : '')} >
                    <div className="float-left">
                        <a className="logo" onClick={this.scrollToTop}> Jeff Jiao
                        </a>
                    </div>
                    <ul className="float-right">
                        <li >
                            <Link activeClass="active" className="menu" to="about" spy={true} smooth={true} offset={-100} duration={500} >
                                About me
                            </Link>
                        </li>
                        <li >
                            <Link activeClass="active" className="menu" to="works" spy={true} smooth={true} offset={-100} duration={500} >
                                My works
                            </Link>
                        </li>
                        <li >
                            <Link activeClass="active" className="menu" to="contact" spy={true} smooth={true}  offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                Contact me
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
        )
  }
}

export default Nav
