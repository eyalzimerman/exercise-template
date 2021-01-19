function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let arr = JSON.parse(input);
    let newArr = [];
    while (arr.length > 0){
        let minNumber = arr[0];
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] < minNumber) {
                minNumber = arr[i];
            }
        }
        newArr.push(minNumber);
        arr.splice(arr.indexOf(minNumber), 1)
    }
    out = newArr;
/**/
    output.innerText = out;
}
