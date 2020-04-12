import React from 'react';
import './Projects.css';
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
            <div className='flex-container'>   
                    {/* <h2 id='main-header'>Mercy Health Appointment Center</h2> */}
                        <div className='image-container'>
                                <a target='_blank' href={'https://merchant-clothing-co.herokuapp.com/'}><img src={require('../images/storesvg.svg')} className='images'id='first-image'/></a>
                                {/* <img src={require('../images/mercy_appointments.svg')} className='images'/>
                                <img src={require('../images/mercy_details.svg')} className='images'/> */}
                                <div className='project-details'>
                                     <h5> Merchant Clothing Co.</h5><br></br>
                                    <p> Technologies used: HTML5, Bootstrap, React, Javascript, Ruby on Rails</p>
                                    <p>Description: Upload product images, delete items, and list an item.</p>
                                    <a className='project-links' href={'https://merchant-clothing-co.herokuapp.com/'} target='_blank'>Project link ---></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a target='_blank' href='https://github.com/salinasfez/online_store'>Github Back End Code ---></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a target='_blank' href='https://github.com/salinasfez/online_store_frontend'>Github Front End Code ---></a>
                                </div>
                        </div>
                        <div className='image-container'>
                                <a target='_blank' href={'https://mercy-appointment-center.herokuapp.com/appointments'}><img src={require('../images/mercy_main.svg')} className='images'id='first-image'/></a>
                                {/* <img src={require('../images/mercy_appointments.svg')} className='images'/>
                                <img src={require('../images/mercy_details.svg')} className='images'/> */}
                                <div className='project-details'>
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