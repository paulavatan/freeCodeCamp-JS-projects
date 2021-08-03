function telephoneCheck(str) {
  let checkPhoneNo = /^(1\s|1)?(([(]\d{3}[)](\s)?)|(\d{3}[\s|-]?))(\d{3}([-\s]?))(\d{4})$/;
  if (str.match(checkPhoneNo)){
    return true;
  } else {
    return false;
  }
  
  
}

console.log(telephoneCheck("555-555-5555"));