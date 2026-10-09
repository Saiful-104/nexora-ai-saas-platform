import bcrypt from "bcryptjs"

export const hashPassword = async (
    password:string  
):Promise<string> =>{
    const hassedPassword = await bcrypt.hash(password,12);
    return hassedPassword;
}

export const comparePassword = async(
    password:string,
    hashedPassword:string

):Promise<Boolean> =>{
    const isMatch = await bcrypt.compare(
     password,
     hashedPassword
    );

    return isMatch;
}