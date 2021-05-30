let newUser = createNewUser()
while (true) {

    while (true) {
        let firstName = prompt("Твоє ім'я ")
        if (!firstName.trim()) {
            alert("Повтори твоє ім'я")
        }
        else {
            newUser.firstName = firstName
            break
        };
    }
    while (true) {
        let lastName = prompt("Твоя фамілія")
        if (!lastName.trim()) {
            alert("Повтори твою фамілію")
        }
        else {
            newUser.lastName = lastName
            break
        }
    }
    newUser.getLogin()
    if (confirm(" Продовжити? ")) {
        continue;
    }
    else {
        break;
    }

}

function createNewUser() {
    return {
        _firstName: "",
        _lastName: "",

        get firstName() {
            return this._firstName
        },
        get lastName() {
            return this._lastName
        },
        set firstName(value) {
            this._firstName = value
        },
        set lastName(value) {
            this._lastName = value
        },
        getLogin() {
            let fl = this.firstName[0].toLowerCase()
            console.log(fl)
            console.log(fl + this.lastName.toLowerCase())
        },


    }
}



