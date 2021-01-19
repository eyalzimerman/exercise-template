let arr = [];

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    arr.push(input);
    for (let i = 0; i < arr.length; i++) {
        out = out + `Element ${i} : ${arr[i]}\n`;
    }

    
/**/
    output.innerText = out;
}