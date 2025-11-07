const masofa = document.querySelector("#masofa");
const time1 = document.querySelector(".time1");
const time2 = document.querySelector(".time2");
const time3 = document.querySelector(".time3");
const time4 = document.querySelector(".time4");
const forma = document.querySelector("#forma")

let natija1, natija2, natija3, natija4;

forma.addEventListener("submit", function (event) {
  event.preventDefault();
  if(masofa.value > -1){
  natija1 = masofa.value / 3.6;
  natija2 = masofa.value / 20.1;
  natija3 = masofa.value / 70;
  natija4 = masofa.value / 800;
  }
  else{
    alert("Musbat son kiriting")
  }

  time1.textContent = `${natija1.toFixed()} soat ${Math.round(((natija1 - natija1.toFixed()) * 60))} minut`
  time2.textContent = `${natija2.toFixed()} soat ${Math.round(((natija2 - natija2.toFixed()) * 60))} minut`
  time3.textContent = `${natija3.toFixed()} soat ${Math.round(((natija3 - natija3.toFixed()) * 60))} minut`
  time4.textContent = `${natija4.toFixed()} soat ${Math.round(((natija4 - natija4.toFixed()) * 60))} minut`
});
