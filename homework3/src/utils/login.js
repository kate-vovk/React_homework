export const validateLoginForm= ({username, password}) => { //error array (object error)
    const errors = {}
    if(!username) { //username is empty
        errors.username = 'Required'
    }
    if(!password){
        errors.password = 'Required'

    }
    return errors
}