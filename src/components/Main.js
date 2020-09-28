import React from 'react';
import classes from './Main.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icons from './Icons';




class Main extends React.Component{
  
    render(){
        
        return(
            <div>
            <div className={classes.Main}>
                <img className={classes.me}  src={require('../images/federico.JPG')} alt="background" />
                <div className={classes.centerItem}>
                    <h1 className={classes.whoIAm}>Federico Salinas || Full-Stack Developer</h1>
                    <h4 className={classes.technologiesMain}>HTML 5 | MongoDB | jQuery | Javascript | React | Ruby on Rails | Express | CSS3 | Bootstrap</h4>
                </div>
            </div>
                    <Icons/>
            </div>
        )
    }
}
export default Main;