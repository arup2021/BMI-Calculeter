var weight = document.getElementById("weight")
var height_feet = document.getElementById("height_feet")
var height_inch = document.getElementById("height_inch")
var calculate = document.getElementById("calculate")
var result_bar = document.getElementById("result_bar")
var result = document.getElementById("result")
var bmi_status = document.getElementById("bmi_status")
var no_result_bar = document.getElementById("no_result_bar")

result_bar.style.display = "none";
no_result_bar.style.display = "none";

calculate.onclick = function(){
var total_height = (height_feet.value * 0.3048)+(height_inch.value * 0.0254);		
var bmi_result =  weight.value / (total_height*total_height);
	if (weight.value == '' || height_feet.value == '' ) {	
		result_bar.style.display = "none";
		no_result_bar.style.display = "block";
	}else{
		result.innerHTML = bmi_result;
		if (bmi_result < 18.5) {
			var bmi__status = ("Under weight")
		}else if (bmi_result >= 18.5 && result <= 24.9) {
			var bmi__status = ("Healthy Weight")
		}else if (bmi_result >= 25 && result <= 29.9) {
			var bmi__status = ("Over Weight")
		}else{
			var bmi__status = ("Obesity")
		};
		bmi_status.innerText = bmi__status;
		result_bar.style.display = "block";
		no_result_bar.style.display = "none";
	};			
};