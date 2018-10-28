import React, { Component } from 'react'
import axios from 'axios'
import AOS from 'aos'
import './contact.css'

AOS.init({
    duration: 1000
  });

const emailRegex = RegExp(/^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/)
const formValid = ({formErrors, ...rest}) =>{
    let valid = true;

    Object.values(formErrors).forEach(val =>{
        val.length > 0 && (valid = false)
    });
    Object.values(rest).forEach((val,index) =>{
        if(index < 4){
            val.length === 0 && (valid = false)
        }
    });
    console.log(valid);
    return valid;
}
const resetState = (msg) =>{
    console.log(msg);
    let initialState = {
        name: '',
        company: '',
        email: '',
        message: '',
        sbmtIsDisabled: false,
        formErrors: {
            name: '',
            company:'',
            email: '',
            message: '',
            fill: '',
        },
        formMessage: ''
    }
    initialState.formMessage = msg;
    return initialState
}
const sendEmail = async (data) =>{
    const {name,company,email,message} = data;
    const result = await axios.post('/api/contact',{name,company,email,message});
    return result.data
}
export class Contact extends Component {
  state = {
      name: '',
      company: '',
      email: '',
      message: '',
      sbmtIsDisabled: false,
      formErrors: {
          name: '',
          company:'',
          email: '',
          message: '',
          fill: '',
      },
      formMessage: ''
  }
 
  handleChange = e =>{
    e.preventDefault()

    const {name,value} = e.target;
    let formErrors = this.state.formErrors;
    formErrors.fill="";
    switch(name){
        case "name":
            formErrors.name = value.length < 3  ? 'Please enter a name atleast 3 letters'
            : "";
        break;
        case "company":
            formErrors.company = value.length < 3 ? 'Company is required'
            : "";
        break;
        case "message":
            formErrors.message = value.length < 3  ? 'Message is required'
            : "";
        break;
        case "email":
            formErrors.email = emailRegex.test(value) ? ''
            : "Invalid email address";
        break;
        default: break;
    }

    this.setState({formErrors,[name]:value})
  }
   handleSubmit = async e =>{
        e.preventDefault();
        let formErrors = this.state.formErrors;
        let formMessage = this.state.formMessage;
        if(formValid(this.state)){

            this.setState({sbmtIsDisabled:true});
            let result = await sendEmail(this.state);
            formMessage = result;
            console.log(result);
            let initialState = await resetState(formMessage);
            this.setState(initialState)
        }
        else{
            formErrors.fill = "Please fill up the required input"
            formMessage = "";
            this.setState({formErrors,formMessage});
        }
  }
  render() {
    const {formErrors,formMessage} = this.state;
    return (
      <React.Fragment>
          <div id="contact" name="contact" className="contact-wrapper">
                <div className="container">
                    <h1>Let's Work Together</h1>
                    <div className="row">
                        <div className="col-sm-12 col-md-8 offset-md-2">
                        <form data-aos="slide-right" onSubmit={this.handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="name">*Name</label>
                                <input type="text" className="form-control underlined" id="name" placeholder="Enter your name here..." name="name" onChange={this.handleChange} value={this.state.name} noValidate/>
                                <div className="error-desc">
                                    {formErrors.name}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">*Organization/Company</label>
                                <input type="text" className="form-control underlined" id="company" placeholder="Enter your company name here..." name="company" onChange={this.handleChange} value={this.state.company} noValidate/>
                                <div className="error-desc">
                                    {formErrors.company}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">*Email:</label>
                                <input type="email" className="form-control underlined" id="email" placeholder="Enter email" name="email" onChange={this.handleChange} value={this.state.email} noValidate/>
                                <div className="error-desc">
                                    {formErrors.email}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">*Your Message:</label>
                                <textarea className="form-control" id="message" name="message" rows="3" onChange={this.handleChange} noValidate value={this.state.message} ></textarea>
                                <div className="error-desc">
                                    {formErrors.message}
                                </div>
                            </div>
                            
                            <button type="submit" className="btn" disabled={this.state.sbmtIsDisabled} >Submit</button>
                            <div className="form-error">
                                    {formErrors.fill}
                            </div>
                            {
                                formMessage.length > 0 && (<div>{formMessage}</div>)
                            }
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