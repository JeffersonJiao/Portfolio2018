import React, { Component } from 'react'
import axios from 'axios'
import AOS from 'aos'
import './contact.css'

AOS.init({
    duration: 1000
  });
export class Contact extends Component {
  state = {
      
  }
 
  handleChange = e =>{
    
  }
  handleSubmit = e =>{
        e.preventDefault();
       
           
  }
  render() {
    return (
      <React.Fragment>
          <div id="contact" name="contact" className="contact-wrapper">
                <div className="container">
                    <h1>Let's Work Together</h1>
                    <div className="row">
                        <div className="col-sm-12 col-md-8 offset-md-2">
                        <form data-aos="slide-right" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">*Name</label>
                                <input type="text" className="form-control underlined" id="name" placeholder="Enter your name here..." name="name" onChange={this.handleChange} value={this.state.name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">*Organization/Company</label>
                                <input type="text" className="form-control underlined" id="company" placeholder="Enter your company name here..." name="company" onChange={this.handleChange} value={this.state.company}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">*Email:</label>
                                <input type="email" className="form-control underlined" id="email" placeholder="Enter email" name="email" onChange={this.handleChange} value={this.state.email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">*Your Message:</label>
                                <textarea className="form-control" id="message" name="message" rows="3" onChange={this.handleChange} value={this.state.message}></textarea>
                            </div>
                            
                            <button type="submit" className="btn" >Submit</button>
                        
                        </form>
                 
                        </div>
                    </div>
                </div>
          </div>
      </React.Fragment>
    )
  }
}



export default Contact