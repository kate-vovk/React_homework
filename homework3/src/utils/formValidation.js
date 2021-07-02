export const validateForm = (props) => {
    // console.log("props", props);
    const errors = {}
    if(!props.login) {
        errors.login = 'login is required'
    }
    if(!props.password) {
        errors.password = 'password is required'
    }
    if(!props.name) {
        errors.name = 'name is required'
    }
    if(!props.email) {
        errors.email = 'email is required'
    }
    if(!props.phone) {
        errors.phone = 'phone is required'
    }
    return errors
}