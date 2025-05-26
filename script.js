let button1 = document.getElementById("btn-1");
let button2 = document.getElementById("btn-2");
let backImage = document.body;
let rgb1="#5D8D8E";
let rgb2="#F0405C"
const ranHexa = () => {
  let hexCodes = "0123456789abcdef";
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor = hexColor + hexCodes[Math.floor(Math.random() * 16)];
  }
  return hexColor;
};
const handleButton1=()=>{
    let rgb1=ranHexa();
    button1.textContent=rgb1;
    backImage.style.backgroundImage = `linear-gradient(to right, ${rgb1},  ${rgb2})`;
}
const handleButton2=()=>{
   let rgb2=ranHexa();
   button2.textContent=rgb2;
   backImage.style.backgroundImage = `linear-gradient(to right, ${rgb1},  ${rgb2})`;

   
}
button1.addEventListener('click', handleButton1);
button2.addEventListener('click', handleButton2);

