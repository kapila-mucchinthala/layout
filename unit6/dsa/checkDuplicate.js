function runProgram(input) {
  var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].trim().split(" ").map(Number);

        function checkDuplicates() {
            // console.log(data);
            // console.log(n);
            var obj = {};
            for (let a = 0; a < data.length; a++) {
                if (obj[data[a]] == undefined) {
                    obj[data[a]] = 1;
                }
                else {
                    obj[data[a]] =obj[data[a]]+1;
                }
            }
            var temp = false;
            for (a in obj) {
                if (obj[a] > 1) {
                    temp = true;
                }
                if (temp == true) {
                    console.log("YES");
                    break;
                }
            }
            if (temp == false) {
                console.log("NO");
                
            }
            
        }
        checkDuplicates();
    }  
}
if (process.env.USER === "kishore") {
  runProgram(`3
1
1
2
1 1
3
1 2 3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}