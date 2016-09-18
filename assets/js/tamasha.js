function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
      };
}

function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                  clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('clockdiv', deadline);



function getDataFromTeams(arr) {
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++) {
            out += `<li>
                <figure class="figure">
                <div class="circlebox">
                <p id="circle" style="background-image: url(` + arr[i].pic + `)"></p>
                </div>
                <figcaption class="figcaption">
                <h1>` + arr[i].teamName + `</h1>
                <h3>` + arr[i].category + `</h3>

                </figcaption>
                </figure>
                </li>`;
        }
document.getElementById("teams").innerHTML = out;
}

getDataFromTeams(teams);
