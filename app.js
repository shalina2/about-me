'use strict';

function userName (){
var name = prompt("what is your name?");
console.log('uname ' + name);
alert('Hi ' + name);
}

userName();

function code () {
 var like=prompt("you think i like code 201?");
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
   

    //var myanswers =[ethiopia,dancing,eating,swimming,hiking,sleeping];
    //var i;
    
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
            
            alert('you got it' + myanswers);
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
        if(i>=5){
            //alert('sorry you missed it ' + myanswers);
        }
            //alert('hello ' + name);

          //  console.log('I dont mind it')
       // alert('I dont mind it')}
       // var number =prompt('How long do u think i moved to the states?');
        //var answer = [3];
       // for (i=0;i< answer.length;i++);{
          //  console.log('you missed it,but try again');
           // alert('you missed it,but try again')}
       // for (i=1;i< answer.length;i++);{
            //console.log('yay,you are right')
           // alert('yay,you are right')
            }
        
        
        
        
