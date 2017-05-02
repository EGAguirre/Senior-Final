var exports = module.exports = {};

function PasswordMessage(m){
  this.name = "Password Message";
  this.message = m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode>= min && unicode<=max){
      return true;
    }
    else{
      return false;
    }

}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  let hasUpper = false;
  try{
    for(let x=0;x<str.length;x++){
      if(x>=65 && x<=90){
        hasUpper = true;
      }
    }
    catch(e){
      console.log(e.name+": "+e.message);
      return hasUpper;
    }
  }


}


exports.containsLower =function(str){
  let hasLower = false;
  try{
    for(let x=0;x<str.length;x++){
      if(x>=97 && x<=122){
        hasLower = true;
      }
    }
    catch(e){
      console.log(e.name+": "+e.message);
      return hasLower;
    }
  }

}


exports.containsNumerical =function(str){

}


exports.containsSpecial =function(str){

}
