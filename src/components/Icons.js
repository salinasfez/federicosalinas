import React, { Component } from 'react';
import classes from './Icons.module.css';
import resume from '../images/federico_salinas_resume.pdf'


class Icons extends Component {
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
            <div className={classes.iconContainer}>
                <img src={require('../images/linkedinsvg.svg')} alt={'linkedin'} className={classes.icons} onClick={() => this.linkedInTab()}/>
                <img src={require('../images/github-icon.svg')} alt={'github'} className={classes.icons}onClick={() => this.gitHubTab()}/>
                <img src={require('../images/mailat.png')} alt={'github'} className={classes.icons}onClick={() => this.emailTab()}/>
                <img src={require('../images/telephone.png')} alt={'github'} className={classes.icons} onClick ={() => this.callFederico()}/>
                {/* <img src={require('../images/resume-icon.svg')} alt={'github'} className='icons' onClick={() => this.downloadResume()}/> */}
                <a id='resume-link' className={classes.icons} download='federico_salinas_resume.pdf' href={resume}><img  width={'110%'} height={'100%'} src={require('../images/resume.svg')} alt={'github'}/></a>
            </div>
        )
    }
}

export default Icons;