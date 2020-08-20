
/**
 * section filtro
 */

// document.querySelector("#headerBusca")
// document.querySelector("#headerBusca > div")
// document.querySelector("#headerBusca > div > a")
// document.querySelector("#headerBusca-form > label")
// document.querySelector("#headerBusca-campoBusca")
// document.querySelector("#headerBusca-form > button")


const iconElement = document.querySelector(".headerBusca-icon");
let headerSection = document.querySelector("#headerBusca");
let heightLength = headerSection.offsetHeight;

iconElement.addEventListener('click', (e) => {
  e.preventDefault();
  let formElement = document.querySelector(".headerBusca-form");
  
  // headerSection.transition = "0.2s";
  if(headerSection.offsetHeight > 10){
    headerSection.style.height = "10px";
    formElement.style.display = "none";
  } else {
    this.transition = "all 0.3s";
    headerSection.transition = "all 0.3s";
    headerSection.style.height = `${heightLength}px`;
    // headerSection.style.marginTop = heightLength;
    formElement.style.display = "flex";    
  }
  
});

// iconElement.on("click",function(a){
//   a.preventDefault();
//   let e=document.querySelector(this).parent().find(".headerBusca-form");
//   e.toggleClass("headerBusca-form--active"),
//   e.hasClass("headerBusca-form--active")&&e.find(".headerBusca-form-input").focus();
//   let r=e.attr("aria-hidden");
//   e.attr("aria-hidden","false"===r);
//   let t=document.querySelector(this).attr("aria-expanded");
//   document.querySelector(this).attr("aria-expanded","false"===t)
// });