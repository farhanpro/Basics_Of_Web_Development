var  height = prompt("Enter your Height in feet : ");
var inch = prompt("Enter Height in inchs : ");
var weight = prompt("Enter your Weight : ");

function bmi_cal(height,inch,weight) {
    var meterInFoots = height/3.281;
    var meterInInch = inch/39.37;
    prompt(meterInInch);
    var meter = meterInFoots + meterInInch;
    var result =  weight/ (meter*meter);
    prompt("Your Bmi is : "+result)  ;
}

bmi_cal(height,inch,weight);