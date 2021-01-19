function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    firstArr = JSON.parse(input);
    secondArr = JSON.parse(input2);
    for (let i = 0; i < secondArr.length; i++) {
        if (firstArr.includes(secondArr[i])) {
            continue;
        } else {
            firstArr.push(secondArr[i]);
        }
    }
    out = firstArr;
/**/
    output.innerText = out;
}