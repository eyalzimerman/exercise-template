function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let arr = JSON.parse(input);
    let checkBinary = JSON.parse(input2);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === checkBinary) {
            out = out + i + ', ';
        } else {
            continue;
        }
    }
    
/**/
    output.innerText = out;
}