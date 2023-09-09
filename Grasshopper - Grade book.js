// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  var score = (s1 + s2 + s3) / 3;
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
}

getGrade(95, 90, 93);
getGrade(100, 85, 96);
getGrade(92, 93, 94);
getGrade(70, 70, 100);
getGrade(82, 85, 87);
getGrade(84, 79, 85);
getGrade(89, 89, 90);
getGrade(70, 70, 70);
getGrade(75, 70, 79);
getGrade(60, 82, 76);
getGrade(65, 70, 59);
getGrade(66, 62, 68);
getGrade(58, 62, 70);
getGrade(44, 55, 52);
getGrade(48, 55, 52);
getGrade(58, 59, 60);
