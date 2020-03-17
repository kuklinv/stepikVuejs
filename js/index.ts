// from main.js
/*
// $(function(){
//     let includes = $('[data-include]');
//     //document.querySelector("[data-include]").innerText;
//     jQuery.each(includes, function(){
//         let file = 'components/' + $(this).data('include') + '.html';
//         $(this).load(file);
//     });
// });
*/

let allContentWindow = document.querySelector(".content-wrapper"); // window
let niceMenuBtn = document.querySelector(".menu-btn"); //* slideToggle menu !!// TODO: change to select menu!!!
let menuWraper = document.querySelector(".menu-wrapper");
let menuSwitcher = false;
niceMenuBtn?.addEventListener("click", (event) => {
  let target = event.target;
  console.log(target);
  if (!target){
      return;
  } 
  menuSwitcher = !menuSwitcher;
  if(menuSwitcher) {
    menuWraper?.style.display = 'block';
  } else {
    menuWraper?.style.display = 'none';
  }
});

let editPopupSwitcher = false;
let editPopup = document.querySelector(".edit-popup");
let chThemeBtn = document.querySelector("#edit"); //* change theme button
chThemeBtn === null || chThemeBtn === void 0
    ? void 0
    : chThemeBtn.addEventListener("click", function (event) {
        this.classList.remove("pulse"); //* not pulse button when first click
        editPopupSwitcher = !editPopupSwitcher;
        if (editPopupSwitcher) {
            gsap.to(editPopup, 1, {
                //*! gsap => not TweenMax
                x: "2%",
                display: "block",
                height: "70vh",
                width: "50%",
                ease: Back.easeOut
            });
        } else {
            gsap.to(editPopup, 1, {
                x: "-200%",
                display: "block",
                height: "0vh",
                width: "80%",
                ease: Power3.easeOut
            });
        }
    });

let preview = document.querySelector(".preview-wrapper");
let themeSelectors = [...document.querySelectorAll(".theme-select")];
let themeSelectorsWraper = document.querySelector(".theme-selects_wrapper");

themeSelectorsWraper?.addEventListener("click", e => {
    for (let element of themeSelectors) {
        element.classList.remove("selected-theme");
    }
    let currentTarget = e.target;
    if (currentTarget?.id === "indigo") {
        preview?.classList.value = "preview-wrapper indigo-theme";
    } else {
        preview?.classList.value = "preview-wrapper black-theme";
    }
});

allContentWindow?.addEventListener("click", () => {
    gsap.to(editPopup, 1, {
        x: "-200%",
        display: "block",
        height: "0vh",
        width: "80%",
        ease: Power3.easeOut
    });
});

let switchPreviewColorRadioBtn = [
    ...document.querySelectorAll(".radio-item>label>span")
];
let previewRadioGroup = document.querySelector('#preview-radio-group');
console.log(switchPreviewColorRadioBtn);
let previewChildes = function () {
    let previewNodes = [];
    let progressLine = document.querySelector('#progress-line-preview');
    let previewBtn = document.querySelector('#preview-btn');
    previewNodes.push(progressLine);
    previewNodes.push(previewBtn);
    return previewNodes;
};
// * ! important
previewRadioGroup?.addEventListener('click', (event)=>{
  let target = event.target.closest('.radio-item>label>span');
  if(!target) {
    return;
  }
  let tColor = target.style.color;
  previewChildes().forEach((e)=>e.style.backgroundColor = tColor);
  return;
});

// TODO: next - create object for storage our theme and save this to LocalStorage
// TODO: next - update our theme with created object

let themeStorage = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdde4',
    update: function(){
        document.querySelector("#edit")?.style.backgroundColor = this.secondaryColor;
        document.querySelector(".content-wrapper")?.classList.value = `content-wrapper ${this.themeType}`;
        document.querySelector(".nav")?.classList.value = `nav-wrapper navbar-fixed indigo-theme ${this.themeType}`;
        // document.querySelector('ul>.menu-btn')?
    }
};
