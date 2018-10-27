import React, { Component } from 'react'
import linkedinLogo from '../../../assets/images/linkedin-logo.png'
import githubLogo from '../../../assets/images/github-sign.png'
import './footer.css'

export class Footer extends Component {
  
  render() {
    return (
      <React.Fragment>
          <footer>
            <div className="container">
    
                <div className="float-left">
                © Jefferson Jiao 2018
                </div>
                <div className="float-right">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/jefferson-jiao-55779825/"><img src={linkedinLogo}  width="24px" height="auto" alt="linked in"/></a>
                        </li>
                        <li>
                            <a href="https://github.com/JeffersonJiao"><img src={githubLogo}  width="24px" height="auto" alt="github"/></a>
                        </li>
                        <li></li>
                    </ul>
                </div>
                
            </div>
          </footer>
      </React.Fragment>
    )
  }
}


export default Footer
