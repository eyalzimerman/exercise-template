function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let arr = [];
    for (let i = Number(input); i <= Number(input2); i++) {
        if (i % 400  === 0) {
            arr.push(i);
        } else if (i % 100  === 0) {
            continue;
        } else if (i % 4 === 0) {
            arr.push(i);
        } else {
            continue;
        }
        out = arr;
    }
/**/
    output.innerText = out;
}