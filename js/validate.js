function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted. 
  //console.log('TODO - validate the longitude, latitude values before submitting');
  
  document.getElementById('latError').innerHTML = null; 
  document.getElementById('lngError').innerHTML = null; 

  let input = document.getElementById('latitude').value;
  if(input > 90 || input < -90 || isNaN(input)){
    document.getElementById('latError').innerHTML = 
    "must be a valid Latitude (-90 to 90)<br>";
    return false;
  }
  input = document.getElementById('longitude').value;
  if(input > 180 || input < -180 || isNaN(input)){
    document.getElementById('lngError').innerHTML = 
    "must be a valid Longitude (-180 to 180)<br>";
    return false;
  }
  return true;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
