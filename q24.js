function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
   let arr = eval(input);
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (typeof(arr[i]) !== "number") {
        arr.splice(i, 1);
      }
      if (isNaN(arr[i])) {
        arr.splice(i, 1);
      }
      if (arr[i] === 0) {
        arr.splice(i, 1);
      }
   }
   out = arr;
/**/
    output.innerText = out;
}