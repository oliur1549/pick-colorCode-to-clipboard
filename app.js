


// create onload handler
window.onload=()=>{
    main();
}
function main(){
const root=document.getElementById('root');
const changeBtn=document.getElementById('color-btn');
const text=document.getElementById('input-text');
const copyBtn=document.getElementById('pick-color');

changeBtn.addEventListener('click',function () {
    const rgbColor=generateRGB();
    root.style.backgroundColor=rgbColor;
    text.value=rgbColor;
});

copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(text.value)
});

}

//generate rgb function
function generateRGB(){
const red=Math.floor(Math.random() * 255)
const green=Math.floor(Math.random() * 255)
const blue=Math.floor(Math.random() * 255)

return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
// collect all necessary reference

// handle click event
