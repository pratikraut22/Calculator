let EQUAL_pressed=0;

let button_input =document.querySelectorAll("#NUMBERS")
console.log(button_input)
let input = document.getElementById("input");
let EQUAL = document.getElementById("EQUAL");
let CLEAR = document.getElementById("CLEAR");
let DELETE = document.getElementById("DELETE");

window.onload=()=>{
    input.value="";
}
button_input.forEach((button_class) => {
    button_class.addEventListener("click",() =>{
        if(EQUAL_pressed==1){
            input.value="";
            EQUAL_pressed=0;

        }
        input.value +=button_class.value;
    });
});

EQUAL.addEventListener("click",() =>{
    EQUAL_pressed=1;
    let inp_val= input.value;
    try{
        let solution = eval(inp_val);
        if(Number.isInteger(solution)){
            input.value = solution;
        }else{
            input.value = solution.toFixed(2);
        }
    }catch(err){
        alert("invalid input");
    }
});

CLEAR.addEventListener("click",()=>{
    input.value="";
});

DELETE.addEventListener("click",()=>{
    input.value=input.value.substr(0,input.value.length -1);
});
