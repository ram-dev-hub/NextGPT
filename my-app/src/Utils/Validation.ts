import { IUser } from "../models/User";


const userValidation = (values: IUser,actionType:string) => {
    let errors: string[] = [];
    if (actionType==='signUp' &&!values.name) {
        errors.push("Name is required");
    }
    if (!values.email) {
        errors.push("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.push("Email is invalid");
    }
    
    if (!values.password) {
       errors.push("Password is required");
    } else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)==false) {
        errors.push("Password must contain at least 8 characters, including UPPER/lowercase and numbers");
    }
    
    return errors;
    }

export default userValidation;