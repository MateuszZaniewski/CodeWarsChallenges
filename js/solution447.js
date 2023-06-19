// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
    let reg = new RegExp('^[0-9]$');
    return reg.test(this)
  };

