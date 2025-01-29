var nickname = "Cody"; 
var height = 67.7; 
var weight = 50; 

var convertMyHeight1 = Math.floor(height / 12); 
var convertMyHeight2 = Math.floor(height % 12); 

var convertMyWeight = weight * 2.20462; 

alert("Name: " + nickname + "\nHeight: " + convertMyHeight1 + "'" + convertMyHeight2 + "''" + 
    "\nWeight: " + convertMyWeight + " lbs"
); 