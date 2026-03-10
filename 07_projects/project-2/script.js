const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)
// this use case gives empty value

// we have to stop default action of code 

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  if(height <=0 || isNaN(height)){
    results.innerHTML = "please enter a valid height"
  }
  else if(weight <=0 || isNaN(weight)){
    results.innerHTML = "please enter a valid weight"
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    const weightGuide = document.getElementById("weight-guide");
      const allP = weightGuide.querySelectorAll("p");
      allP.forEach((p, index) => {
    p.textContent = ""; // clear all first

    if(bmi < 18.6 && index === 0){
      p.textContent = `You are Underweight`;
    } else if(bmi >= 18.6 && bmi <= 24.9 && index === 1){
      p.textContent = `You are Normal Weight`;
    } else if(bmi > 24.9 && index === 2){
      p.textContent = `You are Overweight`;
    }
  });
  }
})
