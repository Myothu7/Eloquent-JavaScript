        // temp-database
        
let db = []
        // register modal

let login_form = document.querySelector("#login")
let register_form = document.querySelector("#register")
let show_register = document.querySelector('.show_register')
show_register.addEventListener('click', ()=>{
    if(register_form.style.display === 'none'){
        register_form.style.display = 'block'
        login_form.style.display = 'none'
    }
})

        //login modal

function login_modal() {
    if(login_form.style.display === 'none'){
        login_form.style.display = 'block'
        register_form.style.display = 'none'
    }
}

        // login data check from localStorage

function login() {
    chek_localStorage()
    let l_email = document.querySelector('#l_email');
    let l_password = document.querySelector('#l_pass')
    let flag = 0
    if(l_email.value !== "" && l_password.value !== ""){
        for(let val of db){
            for(let key in val){
                if(val.email == l_email.value && val.password == l_password.value){
                    flag = 1
                }
                
            }
        }
    }else{
        alert('required field')
    }
    console.log('flag', flag)
    if(flag){
        alert('Login successfully!')
    }else{
        alert('Username or password incorrect!')
    }

    l_email.value = ""
    l_password.value = ""
    
}

        //registration 

function registration() {
    chek_localStorage()
    let r_name = document.getElementById('r_name');
    let r_email = document.getElementById('r_email')
    let r_password = document.getElementById('r_password')
    if(r_name.value !== "" && r_email.value !== "" && r_password.value !== ""){
            db[db.length] = {'name':r_name.value, 'email':r_email.value, 'password':r_password.value}
            insert_localStorage()
    }else{
        alert('required field')
    }
    r_name.value = r_email.value = r_password.value = ""
}

        // adding localStorage

function insert_localStorage() {
    json_to_str = JSON.stringify(db)
    localStorage.setItem('js-login', json_to_str)
}

        //restore localStorage to db Array

function restore_localStorage() {
    let data = localStorage.getItem('js-login')
    db = JSON.parse(data)
    console.log(db)
    console.log(typeof(db))
}

function chek_localStorage() {
    if(localStorage.getItem('js-login')=== null){
        localStorage.setItem('js-login',"[]")
    }else{
        restore_localStorage()
    }
}

        // call functions

let loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener('click',login)

let regBtn = document.getElementById('regBtn')
regBtn.addEventListener('click',registration)

// localStorage.removeItem('js-login')