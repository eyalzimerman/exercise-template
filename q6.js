function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    for (let i = 0; i < input.length; i++) {
        let num1 = input[i];
        let num2 = input[i + 1];
        if (num2 === undefined){
            out = out + num1;
            break;
        } else if (Number(num1) % 2 === 0 && Number(num2) % 2 === 0){
            out = out + `${num1}-`; 
        } else {
            out = out + num1;
        }
        
    }
/**/
    output.innerText = out;
}
