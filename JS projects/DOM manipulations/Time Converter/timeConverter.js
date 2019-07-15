function attachEventListeners() {
    let but = document.getElementsByName("Convert");
    let day = document.getElementById("days");
    let hour = document.getElementById("hours");
    let minute = document.getElementById("minutes");
    let second = document.getElementById("seconds");

    
    day.addEventListener("click", function() {
        day.value = 1;
        
        hour.value = day * 24;
        minute.value = day * 1440;
        second.value = day * 86400;
    });
}