// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).


function validateUsr(username) {
  res =  /^[a-zA-Z0-9_]*$/.test(username)
  let result = false
  if(res == true){
    if(username == username.toLowerCase()){
      if(username.length > 3 && username.length < 17){
        result = true
      }
    }
  } else {
    result = false
  }
  return result
}

console.log(validateUsr('Hass'))