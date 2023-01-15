
export const handleLoginError = (error: string): string => {
    let errorMssg;
    console.log(error)
    if(error.includes('[auth/email-already-in-use]')){
        errorMssg = 'This email is already in use/nPlease login to continue'
    }
    else if(error.includes('[Error: [auth/weak-password]')){
        errorMssg = 'Password must be at least 6 characters'
    }
    else{
        errorMssg = 'Invalid credentials'
    }
    return errorMssg;
}