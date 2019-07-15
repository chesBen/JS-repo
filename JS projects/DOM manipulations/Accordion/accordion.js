function toggle() {
    let show = document.getElementsByClassName("button")[0];
    let displayStyle = document.getElementById("extra");
    if (displayStyle.style.display === "none") {
        displayStyle.style.display = "block";
        show.textContent = "Less";
    }else {
        displayStyle.style.display = "none";
        show.textContent = "More";
    }
}