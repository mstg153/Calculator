var buttons= document.getElementsByClassName("button");
var ans=document.getElementById("display");

var operand1=0;
var operator=null;
var operand2=null;

function isoperator(value){
    return value=='+' || value=='-' ||value=='/' ||value=='*' ; 
}

for(var i=0;i<buttons.length;i++){                      // adding event listeners to buttons
    buttons[i].addEventListener('click',function(){     // writing fun to repective button
        var value=this.getAttribute('data-value');      //with using data value in button tag
        var text= ans.textContent.trim();               // trim used for removing white spaces
        if(isoperator(value)){                          // checking if entered value is an arithmetic operator
            if(!isoperator(operator)){                   //checking if we entered an operator mutliple times
                operand1=parseFloat(text);                  
                operator=value;
                ans.textContent="";
            }
        }
        else if(value =='c'){
            ans.textContent="";
        }
        else if (value == "dot") {
            if (text.length && !text.includes('.')) {   //checking it is not empty nor already a decimal
                ans.textContent = text + '.';
            }
        }
        else if(value=='signchange'){
            operand1=parseFloat(text);             
            if(!text.length){                             // without this if condition, if ans is empty and we click this(%,x^2,rootX) we get NaN
                ans.textContent="";                       // avoiding it and replacing it with empty again
            }else{
            operand1=operand1*(-1);
            ans.textContent=operand1;
            }
        }
        else if(value=="sqrt"){
            operand1=parseFloat(text);
            if(!text.length){
                ans.textContent="";
            }else{
            operand1=Math.sqrt(operand1);
            ans.textContent=operand1;
            }
        }
        else if(value=="sqr"){
            operand1=parseFloat(text);
            if(!text.length){
                ans.textContent="";
            }else{
            operand1=operand1*operand1;
            ans.textContent=operand1;
            }
        }
        else if(value=='perc'){
            operand1=parseFloat(text);
            if(!text.length){
                ans.textContent="";
            }else{
            operand1=operand1/100 ;
            ans.textContent=operand1;
            }
        }
        else if(value=='rev'){
            operand1=parseFloat(text);
            if(!text.length ){
                ans.textContent="";
            }else{
            operand1=1/operand1;
            ans.textContent=operand1;
            }
        }
        else if(value=="backspace"){
            
            operand1=parseFloat(text.slice(0,-1));     //removing last digit and parsing to to float
            if(isNaN(operand1)){
                ans.textContent="";         //checking if it is NaN 
            }
            else{
                ans.textContent=operand1;    
            }
            // if(operand1<=9 && operand1>=0){         
            //     ans.textContent="";

            // }else{                                                       //this failed for decimals 
            //     operand1=parseInt(operand1/10);
            //     ans.textContent=operand1;
            // }
            

        }
        else if(value=="="){
            operand2=parseFloat(text);
            var res=eval(operand1+"" +operator +"" +operand2);  
            if(!isNaN(res)){                  //printing result only if res is not a NaN
                ans.textContent=res;
                operand2=null;                //changing variables 
                operator=null;
                operand1=res;
            }
            else{                       //checking if we clicked operators before entering numbers 
                if(!isNaN(operand2))
                    ans.textContent=operand2;

                alert("you havent entered operand 1")
            }
        }
        else{
            if(ans.textContent=="0"){
                ans.textContent=value;          //this is necessary when you have 0 in display and entered a number, 
            }                                   //without this it would be like 08 or 07 instead of 8 or 7
            else{
                ans.textContent += value;
            }
        }
    });
}
