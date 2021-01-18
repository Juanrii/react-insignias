import React from 'react'
import logo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {
    render() {

        const { avatar, firstName, lastName, jobTitle, twitter, email, legend } = this.props;
        
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={avatar} alt=""/>
                    <h1>{firstName} <br/> {lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{jobTitle}</h3>
                    <p>{email} - {twitter}</p>
                </div>
                <div className="Badge__footer">
                    <p>{legend}</p>
                </div>
            </div>
            );
    }
}

export default Badge;