import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            country: "australia"
        }
    }

    isChange = (change) => {
        let name = change.target.name,
            value = change.target.value;
        this.setState({
            [name]: value
        })
    };
    isFileChange = (change) => {
        console.log(change.target.files[0]);
        this.setState({
            fFile: change.target.files[0]
        })
    };
    submitForm = (event) => { // khong cho chuyen trang
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    };

    render() {
        if (this.state.isRedirect) {
            return <Redirect to="/"/>
        }
        return (
            <div className="container content">
                <form action="/action_page.php">
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                                onChange={(change) => this.isChange(change)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                id="lname"
                                name="lastname"
                                placeholder="Your last name.."
                                onChange={(change) => this.isChange(change)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="country">Country</label>
                        </div>
                        <div className="col-75">
                            <select id="country" defaultValue={this.state.country} name="country" onChange={(change) => this.isChange(change)}>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="avatar">Choose a profile picture:</label>
                        </div>
                        <div className="col-75">
                            <input type="file" name="fFile" accept="image/png, image/jpeg" onChange={(change) => this.isFileChange(change)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="subject">Messenger</label>
                        </div>
                        <div className="col-75">
        <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{height: 200}}
            defaultValue={""}
            onChange={(change) => this.isChange(change)}
        />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" defaultValue="Submit" onClick={(event) => this.submitForm(event)}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;