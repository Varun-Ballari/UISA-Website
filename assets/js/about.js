function getDataFromSponsors(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += `<div>
                <a href="` + arr[i].website + `" target="_black">
                <img src="` + arr[i].pic + `" alt="Logo" height="100" width="100">
                </a>

                </div>`;
        console.log(i);
    }
    document.getElementById("sponsors").innerHTML = out;
}

getDataFromSponsors(sponsors);
