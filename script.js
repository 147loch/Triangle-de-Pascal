function pascal(pascal_inputNumber) {

document.getElementById("container").innerHTML = "";

var rows = pascal_inputNumber;
var pascalsTriangle = [];
for (var i = 0; i < rows; i++) {
    pascalsTriangle.push([]);
    for (var j = 0; j < rows; j++) {
        pascalsTriangle[i].push(0);
    }
}

pascalsTriangle[0][0] = 1;
var upperLeft, upper = null;
for (var y = 1; y < rows; y++) {
    for (var z = 0; z < rows; z++) {
        upperLeft = pascalsTriangle[y - 1][z - 1] === undefined ? 0 : pascalsTriangle[y - 1][z - 1];
        upper = pascalsTriangle[y - 1][z];
        pascalsTriangle[y][z] = upperLeft + upper;
    }
}

var html = "";
for (var a = 0; a < rows; a++) {
    html += '<div class="row">';
    for (var b = 0; b < rows; b++) {
        if (pascalsTriangle[a][b] === 0) {
            continue;
        }
        html += '<div class="cell">' + pascalsTriangle[a][b] + "</div>";
    }
    html += "</div>";
}
document.getElementById("container").innerHTML += html;
}
