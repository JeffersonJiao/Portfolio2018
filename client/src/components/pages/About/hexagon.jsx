import React, { Component } from 'react'
import './about.css'
export class Hexagon extends Component {

    state = {
        
    }
    render(){
        let Skills = ["PHP","Laravel","REACT","NODE","EXPRESS","GIT","WORDPRESS",
        "BOOTSTRAP","HEROKU","JQUERY","RESTful APIs"]
        let row1 = [];
        let row2 = [];
        let row3 = [];

        Skills.map((skill,index)=>{
                if(index < 4 ){
                    row1.push(
                        <div key={index} data-aos="flip-up" data-aos-delay={(index + 1)*50} className="hexagon">
                            <div className="hexagon-inside">
                                <div className="hexagon-image">
                                    <div className="hex-content">
                                        <span>{skill}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                else if(index >= 4 && index <= 6 ){
                    row2.push(
                        <div key={index} data-aos="flip-up" data-aos-delay={(index + 1)*50} className="hexagon">
                            <div className="hexagon-inside">
                                <div className="hexagon-image">
                                    <div className="hex-content">
                                        <span>{skill}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                else{
                    row3.push(
                        <div key={index} data-aos="flip-up" data-aos-delay={(index + 1)*50} className="hexagon">
                            <div className="hexagon-inside">
                                <div className="hexagon-image">
                                    <div className="hex-content">
                                        <span>{skill}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                return({}
                )
            })
        return(
            <React.Fragment>
                <div id="hex1" className="col-sm-12">
                {row1}
                </div>
                <div id="hex2" className="col-sm-12 col-md-8 offset-md-2" >
                    {row2}
                </div>
                <div id="hex3" className="col-sm-12">
                    {row3}
                </div>

            </React.Fragment>
        )
    }
}

export default Hexagon