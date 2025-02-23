const input= document.getElementById("input1");
function reverseString(str){
    return str.split("").reverse().join("");
}
function check(){
    const val1=input.value;
    if(val1==""){
        alert('PLEASE ENTER TEXT');
        return;
    }
    const val2=reverseString(val1);
    if(val1 === val2){
        alert('PALINDROME');
    }
    else{
        alert('NOT PALINDROME');
    }
    
    input.value  ="";
}
