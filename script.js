var buttons= document.getElementsByClassName("button");
var ans=document.getElementById("display");

var operand1=0;
var operator=null;
var operand2=null;

function isoperator(value){
    return value=='+' || value=='-' ||value=='/' ||value=='*' ; 
}

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');  
        var text= ans.textContent.trim();
        if(isoperator(value)){
            operand1=parseFloat(text);
            operator=value;
            ans.textContent="";
        }
        else if(value =='c'){
            ans.textContent="";
        }
        else if (value == "dot") {
            if (text.length && !text.includes('.')) {
                ans.textContent = text + '.';
            }
        }
        else if(value=='signchange'){
            operand1=parseFloat(text);
            operand1=operand1*(-1);
            ans.textContent=operand1;
        }
        else if(value=="sqrt"){
            operand1=parseFloat(text);
            operand1=Math.sqrt(operand1);
            ans.textContent=operand1;
        }
        else if(value=="sqr"){
            operand1=parseFloat(text);
            operand1=operand1*operand1;
            ans.textContent=operand1;
        }
        else if(value=='perc'){
            operand1=parseFloat(text);
            operand1=operand1/100 ;
            ans.textContent=operand1;
        }
        else if(value=='rev'){
            operand1=parseFloat(text);
            operand1=1/operand1;
            ans.textContent=operand1;
        }
        else if(value=="backspace"){
            operand1=parseFloat(text);
            operand1=parseInt(operand1/10);
            ans.textContent=operand1;
        }
        else if(value=="="){
            operand2=parseFloat(text);
            var res=eval(operand1+"" +operator +"" +operand2);
            if(res){
                ans.textContent=res;
                operand2=null;
                operator=null;
                operand1=res;
            }
        }
        else{
            if(ans.textContent=="0"){
                ans.textContent=value;
            }
            else{
                ans.textContent += value;
            }
        }
    });
}