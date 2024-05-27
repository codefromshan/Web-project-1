function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function calculateDaysLived(event) {
    event.preventDefault();
    let birthdate = new Date(document.getElementById("birthDate").value);
    if (isNaN(birthdate.getTime())) {
      document.getElementById("heading").innerHTML = "Please enter a valid date.";
    } else {
        let today = new Date();
        let daysLived = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24));
        document.getElementById("heading").innerHTML = "You have lived for approximately " + daysLived + " days.";
    }
}

function reset() {
    document.getElementById("heading").innerHTML = "Enter your date of birth:";
}