document.addEventListener("mousemove", () => {
  let x = event.clientX;
  let y = event.clientY;
  document.getElementById("coords").innerHTML = [x, y];
});

let elements = document.querySelectorAll("div");
console.log("Total number of HTML elements: " + elements.length);

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);
