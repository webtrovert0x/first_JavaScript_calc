// let a = 0%5
// console.log(a);
// const calculatecircle = () => {
//   const pi = 22 / 7
//   const radius = Number(prompt('Enter the radius'))
//   const answer = (pi * (radius ** 2)).toFixed(2)
//   console.log(answer + 'cm²');

// }
  const calculatecircle = () => {
    console.log(radius.value);
    const answer = ((22/7) * (radius.value **2)).toFixed(2)
    console.log(answer + 'cm²');
    showCircle.innerHTML = "Answer is: " + answer 
    
  }


// const calculatetriangle = () => {
//   //  Area of a triangle 
//   const base = prompt('Enter the base')
//   const height = prompt('Enter the heigh')
//   const areaOfATriangle = (1 / 2) * base * height
//   console.log(areaOfATriangle);
// }




// const calculatesquare = () => {
//   //   1. Area of A Square 
//   const side1 = prompt(' Enter side1')
//   const side2 = prompt('Enter side2')
//   const areaOfASquare = side1 * side2
//   console.log(areaOfASquare);
// }
const calculatesquare = () => {
  console.log(side1.value);
  console.log(side2.value);
  const answer = side1.value * side2.value
  console.log(answer);
  showSquare.innerHTML = "Answer is: " + (answer + 'cm²')
  
  
}


// const calculaterhombus = () => {
//   // Area of a Rhombus
//   const d1 = prompt(' Enter P Diagonal')
//   const d2 = prompt(' Enter D Diagonal')
//   const areaOfARhombus = (1 / 2) * d1 * d2
//   console.log(areaOfARhombus);
// }
const calculaterhombus = () => {
  console.log(d1.value);
  console.log(d2.value);
  const answer = (1/2) * d1.value * d2.value
  console.log(answer);
  showRhomb.innerHTML = "Answer is: " + answer
  
  
}

// const calculatetrapezoid = () => {
//   // Area of Trapezoid

//   const base1 = prompt(' Enter Base a')
//   const base2 = prompt(' Enter Base b')
//   const height1 = prompt(' Enter Height')
//   const areaOfATrapezoid = (1 / 2) * (base1 + base2) * height1
//   console.log(areaOfATrapezoid);
// }
const calculatetrapezoid = () => {
  console.log(base1.value);
  console.log(base2.value);
  console.log(height11.value);
  const answer = Number(base1.value) + Number(base2.value) /2 * height11.value
  console.log(answer);
  showTrap.innerHTML = "Answer is: " + answer
  
}

// const calculateparallel = () => {
//   // Area of Paralelogram 
//   const b = prompt(' Enter Base')
//   const h = prompt(' Enter Height')
//   const areaOfAParallelogram = b * h
//   console.log(areaOfAParallelogram);
// }
const calculateparallel = () => {
  console.log(basee.value);
  console.log(height3.value);
  const answer = basee.value * height3.value
  console.log(answer);
  showParallel.innerHTML = "Answer is: " + answer
}

const calculatebmi = () => {
  //  Area of BMI
  console.log(weight.value)
  console.log(heightb.value)
  const answer =  (weight.value / (heightb.value ** 2) ).toFixed(2)
  console.log(answer);
  showBmi.innerHTML = "Answer is: " + answer
}


const calculatetriangle = () => {
  console.log(base.value);
  console.log(height.value);
  const answer = (1 / 2) * base.value * height.value
  console.log(answer);
  showResult.innerHTML = "Answer is: " + answer
}
// const areaOfATriangle = (1 / 2) * base * height