const score = '55';
console.log(`Student score is : ${score}`)
getGrade()

function getGrade() {
    switch (true) {
    case (score >= 90):
      return 'A';
    case (score >= 80):
      return 'B';
    case (score >= 70):
      return 'C';
    case (score >= 60):
      return 'D';
    case (score >= 0):
      return 'F';
    default:
      return 'Invalid score';
      }
  
}

  console.log(`Student Grade is : ${getGrade(score)}`);

