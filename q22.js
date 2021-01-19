function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    firstArr = JSON.parse(input);
    secondArr = JSON.parse(input2);
    let newArr = [];
    for (let i = 0; i < secondArr.length; i++) {
        if (firstArr.includes(secondArr[i])) {
            continue;
        } else {
            firstArr.push(secondArr[i]);
        }
    }
    while (firstArr.length > 0){
        let minNumber = firstArr[0];
        for(let i = 0; i < firstArr.length; i++) {
            if (firstArr[i] < minNumber) {
                minNumber = firstArr[i];
            }
        }
        if (!newArr.includes(minNumber)) {
            newArr.push(minNumber);
        }
        firstArr.splice(firstArr.indexOf(minNumber), 1)
    }
    out = newArr;
/**/
    output.innerText = out;
}