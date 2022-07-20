const wrapper = document.querySelector(".wrapper"),
ssInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
ssImg = wrapper.querySelector(".ss-img img");

generateBtn.addEventListener("click", () => {
    let ssValue = ssInput.value;
    if(!ssValue) return;
    preValue = ssValue;
    generateBtn.innerText = "Generating Screenshot...";
    ssImg.src = `http://image.thum.io/get/width/1200/wait/3/www.${ssValue}`;
    ssImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate Screenshot";
    });
});

ssInput.addEventListener("keyup", () => {
    if(!ssInput.value) {
        wrapper.classList.remove("active");
    }
});
