(function () {
    // ==========================================================
    // CUSTOMIZE: Set your hardcoded date here (YYYY, Month Index, Day, Hour, Minute)
    // Note: Month is 0-indexed (0 = Jan, 11 = Dec).
    // Example: Dec 31, 2025 at midnight = new Date(2025, 11, 31, 0, 0, 0)
    // ==========================================================
    
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    // HARDCODED DATE: "December 31, 2025 00:00:00"
    let targetDate = new Date("Dec 31, 2025 00:00:00").getTime();

    const countDown = new Date(targetDate).getTime(),
        x = setInterval(function() {    

            const now = new Date().getTime(),
                  distance = countDown - now;

            // Update the HTML
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            // If the countdown is finished
            if (distance < 0) {
                document.getElementById("headline").innerText = "The date has arrived!";
                document.getElementById("countdown").style.display = "none";
                clearInterval(x);
            }
            //seconds
        }, 0)
    }());
