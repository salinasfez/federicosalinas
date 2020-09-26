import React from 'react';
import classes from './Main.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../images/federico_salinas_resume.pdf'




class Main extends React.Component{
    linkedInTab = () => {
            window.open(
                'https://www.linkedin.com/in/federico-salinas-82b648195/',
                '_blank'
              );
    }
    gitHubTab = () => {
        window.open(
            'https://github.com/salinasfez?tab=repositories',
            '_blank'
        );
    }
    emailTab = () => {
        window.open(
            'mailto:federico.salinas0328@gmail.com?subject=hire federico',
            '_blank'
        )
    }
    callFederico = () => {
        window.open(
            'tel:815-909-7133',
            '_blank'
        )
    }

    render(){
        
        return(
            <div className={classes.Main}>
              <div className='container'>
                    <img className={classes.me}  src={require('../images/federico.JPG')} alt="background" />
            </div>
                <div className={classes.centerItem}>
                    <h1 className={classes.whoIAm}>Federico Salinas || <span className={classes.jobDescription}>Full-Stack Developer</span></h1>
                    <p className={classes.technologiesMain}>HTML 5 | MongoDB | jQuery | Javascript | React | Ruby on Rails | Express | CSS3 | Bootstrap</p>
                    <div className={classes.iconContainer}>
                        <img src={require('../images/linkedinsvg.svg')} alt={'linkedin'} className={classes.icons} onClick={() => this.linkedInTab()}/>
                        <img src={require('../images/github-icon.svg')} alt={'github'} className={classes.icons}onClick={() => this.gitHubTab()}/>
                        <img src={require('../images/email-icon.svg')} alt={'github'} className={classes.icons}onClick={() => this.emailTab()}/>
                        <img src={require('../images/phone-icon.svg')} alt={'github'} className={classes.icons} onClick ={() => this.callFederico()}/>
                        {/* <img src={require('../images/resume-icon.svg')} alt={'github'} className='icons' onClick={() => this.downloadResume()}/> */}
                        <a id='resume-link' className={classes.icons} download='federico_salinas_resume.pdf' href={resume}><img  width={'110%'} height={'100%'} src={require('../images/resume-icon.svg')} alt={'github'}/></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;