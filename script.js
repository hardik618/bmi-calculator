const heightInput = document.getElementById("height");
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById('result');
const category = document.getElementById("category");

calculateBtn.addEventListener('click',()=>{
    // our BMI calculation will go here
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    // calculation of BMI--> weight/height(msquare)
    const heightInMeters = height/100;
    const bmi = weight/(heightInMeters*heightInMeters)

    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        category.textContent = 'You are Underweight'
    }
    else if(bmi >= 18.5 && bmi<25){
        category.textContent = 'You have Healhy weight'
    }
   else if(bmi>=25 && bmi<30){
        category.textContent = 'You are Overweight'
    }
    else{
        category.textContent = 'You are in Obesity Range'
    }
})