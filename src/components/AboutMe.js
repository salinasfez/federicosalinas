import React from 'react';
import classes from './AboutMe.module.css';
import resume from '../images/federico_salinas_resume.pdf'
import {Button} from 'react-bootstrap';
class AboutMe extends React.Component{
    
    render(){
        return(
            <div className={classes.AboutMe}>
                <div className='flex-item' id='technologies'>
                    <h4>About Me</h4>
                    
                </div>
                <div id='paragraph' className='flex-item'>
                {/* Software developer committed to creating the most efficient solutions to routine methods in order to save companies money and provide users with a seamless experience. I focus on leading by example and keeping my team moving forward. In the workplace, I believe that by supporting and elevating my coworkers, we all find greater success. Honesty, hard work, and gratitude are my lifestyle.  */}
                    <p>I am a software developer looking to fully emerge into the industry. I graduated from General Assembly's Software Engineering Immersive Remote program at the end of February 2020 and also attended Mchenry County College, where I enrolled in their Computer Information Technologies program. </p>
                    <p>
                        I am currently a bakery and deli manager downtown Chicago. I have improved my departments' sales percentages and overall presentation of the products we offer.
                        I have been in management for over 7 years and adapted with success between the two jobs I've had in the past 12 years.
                    </p>
                    <p>
                        At General Assembly I was faced with challenges professionals face in the real world. I worked both individually and in teams to accomplish CRUD functionality projects. 
                    </p>

                </div>
                <div id='download-resume-section'>
                    <a id='resume-link' download='federico_salinas_resume.pdf' href={resume}><Button>Download Resume</Button></a>
                </div>
          
            </div>
        )
    }
}
export default AboutMe;

