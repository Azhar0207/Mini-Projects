const inputEl = document.querySelector(".input")
const btnEl = document.querySelector(".btn");



function calculateAge(){
    const birthdayValue = inputEl.value;
    console.log(birthdayValue);

    if(birthdayValue ===""){
        alert("Please enter your birthday")
    }else{
        const age = getAge(birthdayValue)
    }
    
}

function getAge(birthdayValue){
    const currentDate = new Date().getFullYear();
    const birthDate = new Date(birthdayValue).getFullYear()

   let age = currentDate - birthDate;

    const month = currentDate.getMonth() - birthDate.getMonth();

    log.console(month)
   
}

btnEl.addEventListener("click", calculateAge)


