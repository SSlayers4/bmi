var button = document.querySelector('#btn');
button.addEventListener('click', function(){
    event.preventDefault()
    var lengthInfo = document.getElementById('length').value;
    var weightInfo = document.getElementById('weight').value;
    var yourBmi = document.querySelector('#bmiA');
    var underweight = document.querySelector('#bmiB');
    var normal = document.querySelector('#bmiB');
    var overweight = document.querySelector('#bmiB');
    var obese = document.querySelector('#bmiB');
    var extremelyObese = document.querySelector('#bmiB');
    yourBmi.textContent = 'Your BMI is ' + (weightInfo / (lengthInfo * lengthInfo));
    if(weightInfo / (lengthInfo * lengthInfo) < 18.5){
        underweight.textContent = 'You are underweight.';
    }    if(weightInfo / (lengthInfo * lengthInfo) >= 18.5 && weightInfo / (lengthInfo * lengthInfo) <= 24.9){
       normal.textContent = 'You are normal.';
    }    if(weightInfo / (lengthInfo * lengthInfo) <= 25 && weightInfo / (lengthInfo * lengthInfo) <= 29.9){
        overweight.textContent = 'You are overweight.';
    }    if(weightInfo / (lengthInfo * lengthInfo) <= 30 && weightInfo / (lengthInfo * lengthInfo) <= 34.9){
        obese.textContent = 'You are obese.';
    }    if(weightInfo / (lengthInfo * lengthInfo) > 35){
        extremelyObese.textContent = 'You are extremely obese.';
    }
});