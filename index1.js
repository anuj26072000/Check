
xlsxj = require("xlsx-to-json");
xlsxj({
  input: "Copy of Streaky Syllabus Final (V1).xlsx", 
  output: "outputPhysics11th.json",
  sheet: "Physics - 11th"
}, function(err, result) {
  if(err) {
    console.error(err);
  }else {
    console.log(result);
  }
});   



                                                                                                                   