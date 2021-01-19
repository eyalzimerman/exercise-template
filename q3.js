function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let arr = JSON.parse(input);
    let counter = JSON.parse(input2);
    let newArr = [];
    for (let i = 0; i < counter; i++) {
        newArr.push(arr[i]);
    }
    out = newArr;

/**/
    output.innerText = out;
}
