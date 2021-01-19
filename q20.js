function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let arr = JSON.parse(input);
    let newArr = [];
    let duplicatesNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (duplicatesNumber.includes(arr[i])) {
            continue;
        }
        if (newArr.includes(arr[i])) {
            duplicatesNumber.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
        
    }
    out = duplicatesNumber;
/**/
    output.innerText = out;
}