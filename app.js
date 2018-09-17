'use strict';

function Uname() { 
prompt("what is your name?");
console.log('uname ' + name);
alert('Hi' + name);}
Uname();

function code() {
    var like =prompt("you think i like code 201?");

if (like.toLowerCase() === "yes") {
     console.log('you are very smart');
     alert('you are very smart');
 } else{ 
     console.log('I do love code 201');
     alert('I do love code 201');
 }
}
code();
 var fun = prompt('do you think i like hiking?')
 if (fun.toLowerCase() === "yes") {
    console.log('you got it');
    alert('you got it')
} else  {
    console.log('you better get to know me,I like to go hiking');
    alert('you better get to know me,I like to go hiking')
} var color = prompt('you think red is my favorite color?')

if (color === "yes") {
    console.log('you/re right it is my favorite color');
    alert('you/re right it is my favorite color');
} else {
    console.log('it is my favorite color')
    alert('it is my favorite color')};
    var height = prompt('you think i am 5/7 tall');
    if (height==="yes"){
        console.log('Amazing,thats right')
        alert('Amazing,thats right');
    } else {
        console.log('sadly,you missed that');
        alert('sadly,you missed that');
    } var drink = prompt('you think i like tea more than coffee?');{
        if(drink.toLowerCase()==="yes"){
            console.log('thats right,i like tea');
            alert('thats right,i like tea')
        }else console.log('not really,i prefer tea more')
                alert('not really,i prefer tea more');
    } 
   

   for (var i = 0; i < 6; i++) {
        //console.log('countingi ' + i);
        var love =prompt('What do you think I love Most?');
        var myanswers = ['ethiopia','dancing','eating','swimming','hiking','sleeping'];
        love =(love.toLowerCase())
        var guessedright=(false)

        for (var j = 0; j < myanswers.length;j++) {

            console.log('incrementj ' + j);
            if(love === myanswers[j]) {
              guessedright=true      
            
            alert('you got it' );
            //correctanswerstotal++;
            break;
            }
            console.log('indexj ' + myanswers[j]);
            if(j===myanswers.length){
                console.log(myanswers.length);
                alert('sorry you missed it');
            }

        } 
        if(guessedright){
            break;
        }
        
        for(var i=0; i< 4; i++) {
            console.log('trackVarI ' + i);
            var numberguess =prompt('How many years ago you think i moved the states?');
            numberguess=parseInt(numberguess,5);
            console.log('beforeIfnumberGuess ' + numberguess);
            if(numberguess===4) {
            alert('YAY,You got it!!');
            correctAnswersTotal++;
            console.log('correctNumberGuess ' + numberguess);
            break;
            }
            else if (numberguess <4){
                console.log('toolow' + numberguess);
                alert('thats too low,try again');
            }
            else if(numberguess > 4) {
                console.log('Now,thats too high' + numberguess);
                alert('you are guessing too high')
            }else { alert('you can try again')}
            
       
        }
    }