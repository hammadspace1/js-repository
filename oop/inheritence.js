class User {
    constructor(UserName){
        this.UserName = UserName;
    }
}

class Teacher extends User {
    construntor(UserName,Email,Password){
        super(UserName)
        this.Email = Email
        this.Password = Password
    }
}