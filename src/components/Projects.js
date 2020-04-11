import React from 'react';
import './Projects.css';
import mercyThumbnail from '../images/mercy_main.svg'

class Projects extends React.Component{
    render(){
    return(
            <div className='flex-container'>   
                    {/* <h2 id='main-header'>Mercy Health Appointment Center</h2> */}
                        <div className='image-container'>
                                <a target='_blank' href={mercyThumbnail}><img src={require('../images/mercy_main.svg')} className='images'id='first-image'/></a>
                                {/* <img src={require('../images/mercy_appointments.svg')} className='images'/>
                                <img src={require('../images/mercy_details.svg')} className='images'/> */}
                                <div className='project-details'>
                                     <h5> Mercy Clinic Appointment Center</h5><br></br>
                                    <p> Technologies: HTML5, Bootstrap, React, Javascript, MongoDB, Express</p>
                                    <a className='project-links' href={'https://mercy-appointment-center.herokuapp.com/appointments'} target='_blank'>Project link ---></a>
                                </div>
                        </div>
            </div>
        )
    }
}
export default Projects;