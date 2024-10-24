
export const emailValidation = (mail) => {
    let statement;
    if (!mail.endsWith(".com")) {
        statement = "The e-mail should have .com at the end";
        return statement;
    }else if (!mail.includes("@")) {
        statement = "The e-mail must have @";
        return statement;
    }
    return "Type your email address carefully";
}

export const pwValidation = (pw) => {
    let statement;
    if (pw.length < 9) {
        statement = "Password must be minimum 8 charecters length";
        return statement;
    }else if(!pw.match(/[A-Z]/)){
        statement = "Your password must have atleast one capital letter";
        return statement;
    }else if(!pw.match(/[a-z]/)){
        statement = "Your password must have atleast one small letter";
        return statement;
    }else if(!pw.match(/[0-9]/)){
        statement = "Your password must have atleast one number";
        return statement;
    }
    return "Type your password carefully"
}