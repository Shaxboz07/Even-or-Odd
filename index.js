function greeting(name, age) {
  console.log(`hello ${name},you are ${age} years`);
}

greeting("Shaxboz", 14);
greeting("Sotimov,", 14);

function bmiResult(mass, height) {
  let bmi = mass / height ** 2;
  
  if (bmi < 18.5) {
    console.log("underweight");
  } else if (bmi >= 18.6 && bmi < 24.9) {
    console.log("healthy");
  } else if (bmi > 25.0 && bmi < 29.9) {
    console.log("overweight");
  } else if (bmi >= 30) {
    console.log("Obese");
  }
}

bmiResult(54, 1.7);

function addTwoNumbers(a, b) {
  console.log(a + b);
  console.log("before return");
  return "added";
  console.log("before return");
}

addTwoNumbers(45, 78);

let abc = "hello world";
console.log(abc);

console.log(addTwoNumbers(3, 43));

function isOdd(number) {
  let remained = number % 2;
  if (remained === 0) {
    return false;
  } else {
    return true;
  }
}


console.log(isEven(24));
function isEven(number) {
  let remained = number % 2;
  if (remained === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isEven(21));








function isOddOrEven(){
 let inputValue=document.getElementById("number-type-input").value
   console.log(inputValue);
   if(inputValue!==""){
      if( isEven(inputValue)){
        document.getElementById("result").innerHTML="It is Even!"
      }else{
        document.getElementById("result").innerHTML="It is Odd!"
      }
   }
}
























































// function bmiValue(mass, height) {
//  if(inputValue!==""){
//   if( isEven(inputValue)){
//     document.getElementById("result").innerHTML="It is Even!"
//   }else{
//     document.getElementById("result").innerHTML="It is Odd!"
//   }
// }

// }

// bmiResult(54, 1.7);



// if(inputValue!==""){
//   if( isEven(inputValue)){
//     document.getElementById("result").innerHTML="It is Even!"
//   }else{
//     document.getElementById("result").innerHTML="It is Odd!"
//   }
// }





// if (bmi < 18.5) {
//   console.log("underweight");
// } else if (bmi >= 18.6 && bmi < 24.9) {
//   console.log("healthy");
// } else if (bmi > 25.0 && bmi < 29.9) {
//   console.log("overweight");
// } else if (bmi >= 30) {
//   console.log("Obese");
// }