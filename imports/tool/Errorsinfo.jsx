import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Errors } from '../api/errors.js';


export default class Errorsinfo extends Component {

    errorromeve(){
       // console.log(this.props.error.message+"  message");
        Meteor.setTimeout(()=>{

            Errors.remove(this.props.error._id);
            //console.log(this.props.error.message+"  message");
        },3000);
    }

    render() {
        this.errorromeve()
        return (
        <div className="alert alert-danger" role="alert">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            {this.props.error.message}
        </div>
        );
    }
}

Errorsinfo.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    error: PropTypes.object.isRequired,
};