

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