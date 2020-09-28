import React from 'react';
import classes from './Projects.module.css';
import mercyThumbnail from '../images/mercy_main.svg';


class Projects extends React.Component{
    gitHubTab = () => {
        window.open(
            'https://github.com/salinasfez?tab=repositories',
            '_blank'
        );
    }
    render(){
    return(
            <div className={classes.Projects}>   
                        <h3 className={classes.imageContainer}>Projects</h3>
                        <div className={classes.imageContainer}>
                                <a target='_blank' href={'https://federico-budget-app.herokuapp.com/'}><img src={require('../images/budgetapp.png')} className={classes.images} id='first-image'/></a>
                                {/* <img src={require('../images/mercy_appointments.svg')} className='images'/>
                                <img src={require('../images/mercy_details.svg')} className='images'/> */}
                                <div className={classes.projectDetails}>
                                     <h5> Budget Application</h5><br></br>
                                    <p> Technologies used: HTML5, Bootstrap, React, Javascript, Express, MongoDB</p>
                                    <p>Description: Keep track of your money by using this budgeting app.</p>
                                    <a className='project-links' href={'https://federico-budget-app.herokuapp.com/'} target='_blank'>Project link ---></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a target='_blank' href='https://github.com/salinasfez/budget-app'>Github Code ---></a>
                                </div>
                        </div>
                    <div className={classes.imageContainer}>
                                <a target='_blank' href={'http://eightballinktattoo.com/'}><img src={require('../images/eightball.png')} className={classes.images} id='first-image'/></a>
                                {/* <img src={require('../images/mercy_appointments.svg')} className='images'/>
                                <img src={require('../images/mercy_details.svg')} className='images'/> */}
                                <div className={classes.projectDetails}>
                                     <h5> 8ball Ink Tattoo</h5><br></br>
                                    <p> Technologies used: HTML5, Bootstrap, React, Javascript, Express</p>
                                    <p>Description: Business app able to send messages directly to owners mobile.</p>
                                    <a className='project-links' href={'http://eightballinktattoo.com/'} target='_blank'>Website link ---></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a target='_blank' href='https://github.com/salinasfez/eightballinktatoo'>Github Code ---></a>
                                </div>
                        </div>
                        <div className={classes.imageContainer}>
                                <a target='_blank' href={'https://mercy-appointment-center.herokuapp.com/appointments'}><img src={require('../images/mercyclinic.png')} className={classes.images} id='first-image'/></a>
                                {/* <img src={require('../images/mercy_appointments.svg')} className='images'/>
                                <img src={require('../images/mercy_details.svg')} className='images'/> */}
                                <div className={classes.projectDetails}>
                                     <h5> Mercy Clinic Appointment Center</h5><br></br>
                                    <p> Technologies used: HTML5, Bootstrap, React, Javascript, MongoDB, Express</p>
                                    <p>Description: Create, edit, and delete appointments.</p>
                                    <a className='project-links' href={'https://mercy-appointment-center.herokuapp.com/appointments'} target='_blank'>Project link ---></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a target='_blank' href='https://github.com/salinasfez/mercy-clinic-heroku'>Github Code ---></a>
                                </div>
                        </div>
            </div>
        )
    }
}
export default Projects;