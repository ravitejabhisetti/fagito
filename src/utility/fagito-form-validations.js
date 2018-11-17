const validate = values => {
    const errors = {};
    if(!values.name) {
        errors.name = 'please enter valid name';
    }
    return errors;
}

export default validate;