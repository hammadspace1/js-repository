const userData = {
    Name: "Hammad Khan",
    Email: "hammad@test.com",
    Address: "Tordher",
    Phone: +923189668328,
    getUserDetail: function(){
        return `
        UserName is ${this.Name}
        Email of the User is ${this.Email}
        Address of the User is ${this.Address}
        and Phone Number of the User is ${this.Phone}`
    }
}

console.log(userData.getUserDetail());

