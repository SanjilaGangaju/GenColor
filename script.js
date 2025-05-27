let button1 = document.getElementById("btn-1");
let button2 = document.getElementById("btn-2");
let backImage = document.body;
let colorStyle= document.querySelector(".back-image");
let rgb1="#dd6883";
let rgb2="#deaeb9";
const ranHexa = () => {
  let hexCodes = "0123456789abcdef";
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor = hexColor + hexCodes[Math.floor(Math.random() * 16)];
  }
  return hexColor;
};
const handleButton1=()=>{
    rgb1=ranHexa();
    button1.textContent=rgb1;
    backImage.style.backgroundImage = `linear-gradient(to right, ${rgb1},  ${rgb2})`;
    console.log(colorStyle);
    colorStyle.textContent=`background-image: linear-gradient(to right, ${rgb1},  ${rgb2})`;
}
const handleButton2=()=>{
   rgb2=ranHexa();
   button2.textContent=rgb2;
   backImage.style.backgroundImage = `linear-gradient(to right, ${rgb1},  ${rgb2})`;
   colorStyle.textContent=`background-image: linear-gradient(to right, ${rgb1},  ${rgb2})`;


   
}
const copyStyles=()=>{
  navigator.clipboard.writeText(colorStyle.textContent).then(()=>{
    alert("Gradient Color : " + colorStyle.textContent);
  })
}

colorStyle.addEventListener('click', copyStyles);
button1.addEventListener('click', handleButton1);
button2.addEventListener('click', handleButton2);

