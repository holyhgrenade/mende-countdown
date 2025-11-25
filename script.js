(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    // ==========================================================
    // BEÁLLÍTÁS: Írd át a dátumot itt!
    // Formátum: "Month Day, Year Hour:Minute:Second"
    // ==========================================================
    let targetDate = new Date("April 13, 2026 00:00:00").getTime();
    // ==========================================================

    const x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = targetDate - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        // Ha lejárt az idő / If finished
        if (distance < 0) {
            document.getElementById("headline").innerText = "ELJÖTT A RENDSZERVÁLTÁS!";
            document.getElementById("countdown").style.display = "none";
            clearInterval(x);
        }
    }, 1000)
}());
