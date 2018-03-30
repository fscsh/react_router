import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    renderField(field){
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
        return (
            <div className = {className}>
                <label> {field.label}</label>
                <input
                    className = 'form-control'
                    type = 'text'
                    {...field.input}
                />
            <div className = 'text-help'>
                {field.meta.touched ? field.meta.error : ''}
            </div>
            </div>
        )
    }
    onSubmit(values){
        console.log(values);
    }
    render(){
        const {handleSubmit} = this.props;
        return(
            <div>
                <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                    <Field  label = 'Title' name = 'title' component={this.renderField}  />
                    <Field label = 'tags' name = 'tags' component={this.renderField}  />
                    <Field label = 'contents' name = 'contents' component={this.renderField}  />
                    <button type = 'submit' className = 'btn btn-primary'>Submit</button>
                </form>
            </div>
        )
    }
}
function validate(values){
    const errors = {};
    if (!values.title) {
        errors.title = 'Enter a title!';
    }
    if (!values.tags) {
        errors.tags = 'Enter tags!';
    }
    if (!values.contents) {
        errors.contents = 'Enter contents!';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew)
