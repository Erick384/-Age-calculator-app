function appendValue(value) {
  document.getElementById("result").value += value;
}

function calculateAge() {
  let birthdate = new Date(document.querySelector(".birthdate").value);

  //calculate the age
  let ageInMilliseconds = Date.now() - birthdate.getTime();
  let ageDate = new Date(ageInMilliseconds);
  let age = Math.abs(ageDate.getUTCFullYear() - 1970);

  // Display the age
  document.querySelector(".output span").innerHTML = +age;

}
