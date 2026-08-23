/* =========================================================
   DOM ELEMENTS
   Select all required elements from the HTML
   ========================================================= */

const hourPointer = document.querySelector(".hour-point");
const minutePointer = document.querySelector(".minute-point");
const secondPointer = document.querySelector(".second-point");
const numeric = document.querySelector("#numeric");

/* =========================================================
   CLOCK UPDATE FUNCTION
   Get the current time and update the clock
   ========================================================= */

function currentTime() {
  /* Get the current date and time */
  const date = new Date();

  /* -----------------------------------------------------
       Get current hours, minutes, and seconds
       ----------------------------------------------------- */

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  /* -----------------------------------------------------
       Calculate the rotation angles

       1 hour   = 30 degrees
       1 minute = 6 degrees
       1 second = 6 degrees

       Extra values make the hour and minute hands
       move more accurately between numbers.
       ----------------------------------------------------- */

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  const minuteAngle = minutes * 6 + seconds * 0.1;

  const secondAngle = seconds * 6;

  /* -----------------------------------------------------
       Apply rotation to each clock hand
       ----------------------------------------------------- */

  hourPointer.style.transform = `rotate(${hourAngle}deg)`;

  minutePointer.style.transform = `rotate(${minuteAngle}deg)`;

  secondPointer.style.transform = `rotate(${secondAngle}deg)`;

  /* -----------------------------------------------------
       Format the digital time

       Example:
       08:05:09
       ----------------------------------------------------- */

  const formattedTime =
    `${hours.toString().padStart(2, "0")}:` +
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")}`;

  /* -----------------------------------------------------
       Update the digital clock
       textContent is used because only plain text is needed.
       ----------------------------------------------------- */

  numeric.textContent = formattedTime;
}

/* =========================================================
   INITIAL UPDATE
   Run the function immediately when the page loads
   ========================================================= */

currentTime();

/* =========================================================
   AUTO UPDATE
   Update the clock every second
   ========================================================= */

setInterval(currentTime, 1000);
