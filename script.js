let txt = document.querySelector(".txt");
const page1 = document.querySelector('.page1');
let btn = document.querySelector('.page2 .btn');
let input = document.querySelector('input');
let ftxt = document.querySelector('.ftxt')
let btn1 = document.querySelector('.page .btn');
let inner = document.querySelector('.inner');
let themebtn = document.querySelector('.thebtn');

page1.addEventListener("keydown",function(det){
    if(det.key!==' ')
        return txt.textContent=det.key;
    return txt.textContent="SPC"
})

page1.focus();


btn.addEventListener('click',e=>{
    input.click();
})

input.addEventListener('change',e=>{
    ftxt.textContent=e.target.files[0].name;
    btn.textContent="Uploaded"
})

btn1.addEventListener('click',function(det){
    let count=0
    let interval = setInterval(function(){
        count++;
        if(count<=100){
             inner.style.width=`${count}%`;
             document.querySelector(".dtxt").textContent=`${count}%`;
            }
        else {
            btn1.textContent="Downloaded";
            clearInterval(interval);
        }
    },30)

    
})






function setTheme(){
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.add('dark')
    document.body.classList.remove('light')  
}
else{
    document.body.classList.add('light')
    document.body.classList.remove('dark')
} 
}


if(localStorage.getItem('theme')){
    document.body.classList.add(localStorage.getItem('theme'));
}
else{
    document.body.classList.add(localStorage.getItem("theme"))
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{
    console.log("changed")
    setTheme();
});


themebtn.addEventListener("click",function(){
     if(document.body.classList.contains('dark')){
        document.body.classList.add('light')
        document.body.classList.remove('dark')
        localStorage.setItem("theme","light")
     }
     else{
        document.body.classList.add('dark')
        document.body.classList.remove('light')
        localStorage.setItem("theme","dark")
     }
})



