window.onload = function(){
    let users = {
        'user1': {
            'name': 'John',
            'email': 'john@test.com',
            'password': '12345'
        },
        'user2': {
            'name': 'George',
            'email': 'george@test.com',
            'password': '54321'
    }
}
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let login = document.getElementById('login');
    let createacc = document.getElementById('createacc');
    login.onclick = function(){
        let emails = []
        let passwords = []
        for(let x in users) emails.push(users[x].email) && passwords.push(users[x].password)
        if(emails.join(' ').includes(email.value) && passwords.join(' ').includes(password.value)) {
            for(let x in users){
                if(users[x].email === email.value){
                    alert('Welcome ' + users[x].name)
                    break
                }
            }
        }
        else {
            alert('Wrong email or password')
        }
    }
    createacc.onclick = function(){
        let count = 0;
        for(let x in users) count += 1
        let name = prompt('Enter your name')
        users[`user${count + 1}`] = {
            'name': name,
            'email': email.value,
            'password': password.value
        }
        alert('Your account has been created')
}
}
