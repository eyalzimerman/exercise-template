function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let arr = JSON.parse(input);
    for (let i = 0; i < arr.length; i++) {
        out += `row ${i}\n`;
        for (let j = 0; j < arr[j].length; j++) { 
            out += `${arr[i][j]}\n`;
        }
        
    }
/**/
    output.innerText = out;
}