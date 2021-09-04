var userName;

alert("Please Don't Use Numbers in Name")

enterUser()

alert("Please Enter ur phone , use only 8 numbers ")

enterPhone()

alert("Please Enter ur mobile , use only 11 numbers start with 010 or 011 or 012")

enterMobile()


alert("Please Enter Email")

enterEmail()


function enterUser(){
    userName = prompt("Enter Your Name").trim().replace(/[!@#\$%\^\&*\)\(+=._-]/g, '  ');
    validateUser()
}


function validateUser(){
    for(var i=0; i<=userName.length-1; i++){
        if(isFinite(parseInt(userName.charAt(i)))){
            alert("Please Don't Use Numbers in Name")
            enterUser();
        } else if(userName.charAt(i)+userName.charAt(i+1) == "  "){
            alert("Please Don't Use more than Space or Special Letters in Name")
            enterUser();
        }
        else {
            continue
        }
    }
}

function enterPhone(){
    userPhone = prompt("Enter Your Phone Number");
    validatePhone()
}

function validatePhone(){
    if(userPhone.length == 8){
        for(var i=0; i<=7; i++){
            if(isNaN(parseInt(userPhone.charAt(i)))){
                alert("Please Use Numbers only")
                enterPhone();
            }
            else {
                continue;
            }
        }
    } else {
        alert("Please enter 8 Numbers only")
        enterPhone();
    }
}

function enterMobile(){
    userMobile = prompt("Enter Your Mobile Number");
    validateMobile()
}

function validateMobile(){
    if(userMobile.length == 11){
        if(userMobile.slice(0,3) == "010" || userMobile.slice(0,3) == "011" || userMobile.slice(0,3) == "012"){
            for(var i=0; i<=10; i++){
                if(isNaN(parseInt(userMobile.charAt(i)))){
                    alert("Please Use Numbers only")
                    enterMobile();
                }
                else {
                    continue;
                }
            }
        } else {
            alert("Mobile Number Should start with 010 or 011 or 012")
            enterMobile();
        }

    } else {
        alert("Please enter 11 Numbers only")
        enterMobile();
    }
}


function enterEmail(){
    userEmail = prompt("Enter Your Email");
    if(emailIsValid (userEmail)){

    } else {
        alert("Please enter email as ss@cc.vv")
        enterEmail();
    }
}


function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
}


document.write("<span class='para'>Welcome Dear Guest =></span>" + userName + "</br>")
document.write("<span class='para'>Your Telephone Number Is: </span>=> "+userPhone + "</br>")
document.write("<span class='para'>Your Mobile Number Is: </span> => "+userMobile+ "</br>") 
document.write("<span class='para'>Your Email Address Is: </span> => "+userEmail)


colorPara = prompt("Choose Your Color");


for (var i = 0 ; i <= 3; i++){
    var changeColor = function (className, color) {
        var elems = document.getElementsByClassName(className);
        elems[i].style.color = color;
    }
    changeColor ("para", colorPara);    
}






// console.log(userName)
// console.log(userPhone)
// console.log(userMobile)
// console.log(userEmail)

