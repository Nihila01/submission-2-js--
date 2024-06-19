function calculateAge(birthdate) {
    let birthDate = new Date(birthdate);
    let difference = Date.now() - birthDate.getTime();
    let ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  console.log(calculateAge("1990-06-15"));
 