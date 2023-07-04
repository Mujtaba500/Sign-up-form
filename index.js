
let submit = document.querySelector('#submit')

submit.addEventListener('click', formSubmit)

function formSubmit(){
    let phoneNum = document.querySelector('#phone-num').value
     if(phoneNum.length < 10){
        alert('Please enter in a 10 digit phone number')
     }  
     console.log(phoneNum.length)
     let password = document.querySelector('#pass').value
     let confirmPass = document.querySelector('#confirm-pass').value
     if(password !== confirmPass){
        alert('PASSWORDS DO NOT MATCH')
     }
}