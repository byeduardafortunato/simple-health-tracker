const btn = document.getElementById('btn-calc');

btn.addEventListener('click', function() {
    
const weight = parseFloat(document.getElementById('weight').value);
const height = parseFloat(document.getElementById('height').value);

    if (weight > 0 && height > 0) {
        
const heightInMeters = height / 100;
const bmi = weight / (heightInMeters * heightInMeters);

        
        document.getElementById('bmi-value').innerText = bmi.toFixed(2);
    } else if {
        alert("Please fill in all fields!");
    }
});
