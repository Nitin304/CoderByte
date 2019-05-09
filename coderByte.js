//Task1
//First Factorial

function FirstFactorial(num) {
    if(num ==1 ){
        return 1;
    }
    else{
        return num * FirstFactorial(num-1);    
    }
}
   
// keep this function call here 
FirstFactorial(readline());

//Task2
//FirstReverse

function FirstReverse(str) { 

  // code goes here  
  var rev = '';
  str.split('').forEach(char=>{
      rev = char + rev;
  })
  return rev; 
         
}
   
// keep this function call here 
FirstReverse(readline());

//letter changes

function LetterChanges(str) {
  
 var converted = str.replace(/[a-z]/gi, function(char) { 
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });

  // we have now successfully converted each letter to the letter following it
  // in the alphabet, and all we need to do now is capitalize the vowels
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
    return vowel.toUpperCase();
  });

  // return the final string
  return capitalized;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());

//Task3
//Given a number add it till that point

function SimpleAdding(num) { 

  // code goes here 
  var total = 0;
  for(var i = 1;i<=num;i++){
      total +=i;
  }
  return total; 
         
}
   
// keep this function call here 
SimpleAdding(readline());

//Task4
//Description: For this challenge you will be capitalizing certain characters in a string.

function LetterCapitalize(str) { 

  // code goes here  
  var retStr = "";
  var strArr = str.split(' ');
  strArr.forEach(star =>{
      if(retStr ==""){
          retStr = star.substr(0,1).toUpperCase()+star.substr(1,star.length);
      }
      else{
        retStr = retStr + " " +  star.substr(0,1).toUpperCase()+star.substr(1,star.length);
      }
      
  })
  return retStr; 
         
}
   
// keep this function call here 
LetterCapitalize(readline());


//Task5
//Description: For this challenge you will be determining whether or not certain characters are in correct positions.
function SimpleSymbols(str) { 
    if(/[^+][a-zA-Z][^+]/.test(str)){
        return true;
    }      
    else{
        return false;
    }  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());


//Task6
//Description: For this challenge you will be comparing two numbers and determining which one is greater.

function CheckNums(num1,num2) {
  // code goes here   
  return num2>num1 ? true : (num1==num2) ? -1 : false;         
}
   
// keep this function call here 
CheckNums(readline());

//Task7
//Description: For this challenge you will be determining the difference in hours and minutes between two given times.
function TimeConvert(num) { 
  // code goes here    
  var str1 = Math.floor(num/60);
  var str2 = num%60;
  return str1+":"+str2;         
}
   
// keep this function call here 
TimeConvert(readline());

//Task8
//Description: For this challenge you will be sorting characters in a string.
function AlphabetSoup(str) { 
  // code goes here  
  return str.split('').sort().join('');         
}
   
// keep this function call here 
AlphabetSoup(readline()); 

//Task9
//Description: For this challenge you will be determining the largest word in a string.
function LongestWord(sen) { 

  // code goes here  
  var retStr = "";
  var maxLen = 0;
  sen.split(" ").forEach(sub =>{
      if(sub.length>maxLen){
          retStr = sub;
          maxLen = sub.length;
      }
  })
  return retStr; 
         
}
   
// keep this function call here 
LongestWord(readline());

