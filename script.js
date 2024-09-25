

//let label = document.querySelectorAll(".label");
//label.addEventListener("click", show);

//function show() {
 //   alert("This Page is still under Maintainance")

//}

let newBalance = 350;
document.querySelector(".mine-Btn").onclick = function() {
  newBalance += 10;
  document.querySelector(".balance").innerHTML = newBalance;
  updateLocalStorage(newBalance);
}

localStorage.setItem("newBalance", newBalance);



// const balance = document.querySelector(".balance");
// const mineBtn = document.querySelector(".mine-Btn");
// const countdownValue = document.querySelector(".timer");
// const levelElement = document.querySelector(".timer");




// function startCountdown() {
//   isCountingDown = true;
//   let interval = setInterval(() => {
//       levelElement.textContent = countdownValue;
//       countdownValue--;

//       if (countdownValue < 0) {
//           clearInterval(interval);
//           isCountingDown = false;
//           levelElement.textContent = level;
//           countdownValue = 30;
//       }
//   }, 1000);
// }

// increaseButton.addEventListener("click", handleIncrement);




// const mine = $(".mine-Btn"),
//       thousand = $(".thousand"),
//       hundred = $(".hundred"),
//       kobo = $(".kobo");

// $(mine).addEventListener("click", farmStart);
// function farmStart() {
//   kobo.innerHTML = kobo++;
// }


// ---EXPLORE SECTION----

const btn1 = document.querySelector(".tab1"),
      btn2 = document.querySelector(".tab2"),
      btn3 = document.querySelector(".tab3"),

      desc1 = document.querySelector(".desc1"),
      desc2 = document.querySelector(".desc2"),
      desc3 = document.querySelector(".desc3"),
      line = document.querySelector(".vertical-line");

      btn1.addEventListener("click", displayDesc1);

      function displayDesc1(e) {
        e.preventDefault()
        desc1.style.display = "block";
        desc2.style.display = "none";
        desc3.style.display = "none";
      }


      btn2.addEventListener("click", displayDesc2);

      function displayDesc2(e) {
        e.preventDefault()
        desc2.style.display = "block";
        desc1.style.display = "none";
        desc3.style.display = "none";
      }

      btn3.addEventListener("click", displayDesc3);

      function displayDesc3(e) {
        e.preventDefault()
        desc2.style.display = "none";
        desc1.style.display = "none";
        desc3.style.display = "block";
      }
