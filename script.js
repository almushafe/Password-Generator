const genrateBtn = document.querySelector(".btn h1")
const pass = document.querySelector("#pass-input")
const Upper =document.querySelector("#uppercase")
const Lower =document.querySelector("#lowercase")
const Num =document.querySelector("#number")
const Symbols =document.querySelector("#symbols")
const Lenght = document.querySelector('#length-number')
const Copy =document.querySelector('#cy')
// console.log(genrateBtn,Upper,Lower,Num,Symbols,Lenght,pass)
// console.log(Upper.checked)
const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';
let password = '';
genrateBtn.addEventListener('click',function(){
    let str = ''
    if(Upper.checked){
        str = str + uppercasestr;
    }
    if(Lower.checked){
        str = str + lowercasestr
    }
    if(Num.checked){
        str = str + numberstr;
    }
    if(Symbols.checked){
        str = str + symbolstr;
    }
    // console.log(str)
    for(let i=0; i < Lenght.value; i++){
        console.log(str.length)
        let index = Math.floor(Math.random() * str.length);
        password = password + str[index];
    }
     pass.value = password;

});
    
    
    Copy.addEventListener('click', function() {
        if(pass.value === '' ){
            alert('Please Generate a Password First');
        }else {
            const newele = document.createElement('textarea');
            newele.value = pass.value;
            document.body.appendChild(newele);
            newele.select();
            document.execCommand('copy');
            alert('Password Copied to Clipboard');
            newele.remove();
        }
    })    