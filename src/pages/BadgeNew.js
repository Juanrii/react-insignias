import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import '../pages/styles/BadgeNew.css';
import header from '../images/badge-header.svg';

class BadgeNew extends Component {
    state = { form: {
        firstName:  '',
        lastName:   '',
        email:      '',
        job:        '',
        twitter:    '',
    } };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    };

    render() {
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge 
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            avatar="https://en.gravatar.com/userimage/178184131/86b88f0d9236c56be8adefd6bc96d3c6.png"
                            email={this.state.form.email}
                            jobTitle={this.state.form.job}
                            twitter={this.state.form.twitter}
                            legend="#ByJR"
                        />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValue={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default BadgeNew;