function calculateAge() {
  //Get the date inputs
  let day = document.querySelector("#day").value;
  let month = document.querySelector("#month").value;
  let year = document.querySelector("#year").value;

  //calculate the age
  let today = new Date();
  let birthdate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthdate.getFullYear();
  let m = today.getMonth() - birthdate.getMonth();
  // if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
  //   age--;
  // }
  let d = today.getDate() - birthdate.getDate();
  // if (d < 0) {
  //   m--;
  //   d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  // }

  // Display the age
  document.querySelector(".yearOutput").innerHTML = +age;
  document.querySelector(".monthOutput").innerHTML = +m;
  document.querySelector(".dayOutput").innerHTML = +d;
}
