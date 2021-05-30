function Age() {
    const Name = prompt('What is your name?');
    const Years = +prompt('How old are you ?');
    console.log(Name);
    console.log(Years);


    if (a < 18) {
        confirm('You are not allowed to visit this website!')
    }
    if (a >= 18 || a < 21) {
        let Cont = confirm('Are you sure you want to continue?');
        if (Cont === true) {
            confirm('Welcome, ' + Cont + '!!!')
        } else {
            confirm('You are not allowed to visit this website!')
        }
    }
}
Age();