// // selecteurs-------------------------------
// document.querySelector('h4').style.background="yellow";
// const baliseHTML= document.querySelector("h4")

// click Event---------------------------------------
 const questionContainer = document.querySelector(".click-event");
 const btn1 = document.querySelector("#btn-1");
 const btn2 = document.getElementById("btn-2");
 const answer = document.querySelector("p")
 
 
  // questionContainer.addEventListener("click", () => {
  //   questionContainer.classList.add("question-clicked");});
  
  questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked");});
// btn1
  btn1.addEventListener ("click", () => {console.log("click!");});
  btn1.addEventListener ("click", () => {
    answer.classList.add("show-answer")
  answer.style.visibility='visible';
  answer.style.background="red";});
  // btn2
  btn2.addEventListener ("click", () => {console.log("click!");});
  btn2.addEventListener ("click", () =>{ 
  answer.classList.add("show-answer")  
  answer.style.visibility='visible';
  answer.style.background="green";});
  
  /*<div> > #id> .class > baliseHTML */
  // -------------------------
  // mouse Event
  const mousemove=document.querySelector(".mousemove");
  window.addEventListener("mousemove", (e) => { 
  mousemove.style.left = e.pageX +"px";                                          
  mousemove.style.top = e.pageY +"px";                                          
  // console.log(e)
  // console.log("MOUSEMOVE!!");
  });
  
  window.addEventListener("mousedown", () => { 
  mousemove.style.transform="scale(2) translate(-25% -25%)";});
  
  window.addEventListener("mouseup", () => { 
  mousemove.style.transform="scale(1) translate(-50% -50%)";
  mousemove.style.border = "2px s0lid teal";});
  
questionContainer.addEventListener("mouseenter", () => {
questionContainer.style.background="rgba (0,0,0,0.6)" 
  })
  questionContainer.addEventListener("mouseout", () => {
    // console.log("mouseout");
  questionContainer.style.background = "blue";
  })
answer.addEventListener("mouseover", () => {
  answer.style.transform ='rotate(2deg)';
})
// -------------------------------------
// keypress event
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  // console.log("yes !!");
  // console.log(e);
  key.textContent = e.key;
  
  if (e.key === "j" )
  { keypressContainer.style.background = "brown";}
  else if ( e.key === "h") 
  { keypressContainer.style.background = "orange";}
  else  
  { keypressContainer.style.background = "aqua";}
  
  if (e.key === "tic") ring(e.key);
});

// ------------------------------
// scroll event
const nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY >120) {
    nav.style.top = 0;
  }
  else
  { nav.style.top = "-50px";}
})
// -------------------------------------------

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
// { console.log("YES!!!");
 pseudo = e.target.value;   
//  console.log(pseudo);
})
                                            
select.addEventListener("input", (e) => {
  //  console.log(e.target.value);
   language = e.target.value; 
  })
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log('cgv.checked');
     
    if (cgv.checked) { 
  document.querySelector('form > div').innerHTML = `
  <h3>Pseudo : ${pseudo} </h3>
  <h4> Language preferee : ${language} </h4>`;
   } else { 
 alert ("veuillez accepter les CGV");
 }  
  });
  // -----------------------------------------------------
  // load event
  
      window.addEventListener("load", () => {
        console.log("document charge..");
      });                                      
// ------------------------------------------------------
// for each
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // console.log(e.target);
   e.target.style.transform="scale(0.5)";
  });
});
// ---------------------------------------------------
// addEventListener Vs onclick
// *methode non recommandee
// document.body.onClick = function ()  {
//   console.log("click!");
// }; 
// document.body.onScroll = function ()  {
//   console.log("scroll!");
// }; 

// Bubling pour declencher l'evenement a la fin(de base, event listener est parmetre en bubling)
document.body.addEventListener("click", () => {
  console.log("click 1 !");
} );

// Usee capture
document.body.addEventListener("click", () => {
  console.log("click 2 !");
}, true);

// -----------------------------------------
// stop propagation
// questionContainer.addEventListener("click", (e) => {
//  alert ("test!");
// e.stopPropagation();                                                
//  });
// removeEventListener
// -----------------------------------------------
// BOM: Browser Object Model

// console.log(window.innerHeight/ innerWidth);
// console.log(window.scrollY / scrollX);
// window.open ("http:///google.com", "node js", "height=600, with=800");
// window.close()

// evenments adosses a windows
// alert ("hello");

// confirm
btn2.addEventListener("click", () =>{
  confirm ("voulez vous vraiment vous tromper?");
});

// prompt
btn1.addEventListener("click", () => {
  let answer = prompt("entrez votre nom");
  questionContainer.innerHTML += "<h3>Bravo" + answer + "</h3>"; 
});

// temps a rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//   "<div class='box'>
//   <h2> la nouvelle boite</h2></div>"
// `},4000)
// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

// location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("https://unb.bf");

// window.onload = () => {
// location.href = "http://facebook.fr";
// };

// navigateur
// console.log(navigator.userAgent)
// function success(position) {
//   doSomething(position.coords.latitude, position.coords.longitude);
// }

// function error() {
//   alert("Sorry, no position available.");
// }

// const options = {
//   enableHighAccuracy: true,
//   maximumAge: 30000,
//   timeout: 27000,
// };

// const watchID = navigator.geolocation.watchPosition(success, error, options);
// StyleProperty
window.addEventListener("mousemove", (e) => {
  // console.log(e);
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});