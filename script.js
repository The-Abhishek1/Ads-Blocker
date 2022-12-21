const detect = document.querySelector("#detect"),
    wrapper = document.querySelector(".wrapper");

//these are some possible classes that adblocker avoid to render
let adClasses = ["ad", "ads", "adsbox", "ad-placement", "doubleclick", "ad-placeholder", "ad-badge"];
for (let item of adClasses) {
    detect.classList.add(item); // adding all array item in detect element
}