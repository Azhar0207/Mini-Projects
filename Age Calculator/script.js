const inputEl = document.querySelector(".input");
const btnEl = document.querySelector(".btn");

function calculateAge() {
  const birthdayValue = inputEl.value;

  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);
  const displayEl = document.querySelector(".display");

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  let monthDifference = currentDate.getMonth() - birthDate.getMonth();

  let dayDifference = currentDate.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
   if (dayDifference < 0) {
    // Borrow days from the previous month
    const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    dayDifference += previousMonth.getDate();
    monthDifference--;
  }
  if (monthDifference < 0) {
    monthDifference += 12;
  }

    displayEl.innerHTML = `Your age is ${age} ${age !== 1 ? 'years' : 'year'}, 
    ${monthDifference} ${monthDifference !== 1 ? 'months' : 'month'}, and 
    ${dayDifference} ${dayDifference !== 1 ? 'days' : 'day'}.`;
}

btnEl.addEventListener("click", calculateAge);
