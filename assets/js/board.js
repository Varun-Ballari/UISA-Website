function getDataFromBoard(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out +=
        `<div class="boardpic" style="background-image: url(` + arr[i].pic + `)">
            <div class="boardinfo">
                <div class="boardName">
                <p><strong>` + arr[i].boardName + `</strong></p>
                <p>` + arr[i].boardTitle + `</p>
                </div>
            </div>
        </div>`;
        console.log(i);
    }
    document.getElementById("board").innerHTML = out;
}

getDataFromBoard(board);
