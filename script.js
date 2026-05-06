const btnWrong = document.getElementById("btnWrong");
const btnLeya = document.getElementById("btnLeya");
const Message = document.getElementById("message");
const btn_section = document.getElementById("section_button")
const gif_section = document.getElementById("gif_section");

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

btnWrong.addEventListener("click", async () => {

    btnWrong.classList.add("apply-shake");

    btnWrong.addEventListener("animationend", () => {

        btnWrong.classList.remove("apply-shake");

    }, {once : true});

    Message.style.visibility = "visible";
    await sleep(2000);
    Message.style.visibility = "hidden";

});

btnLeya.addEventListener("click", () => {

    btnLeya.classList.add("apply-grow");

    btnLeya.addEventListener("animationend", () => {

        btnLeya.classList.remove("apply-grow");
        btnLeya.style.scale = 5;
        btn_section.style.visibility = "hidden";
        btn_section.style.display = "none";
        gif_section.style.display = "block";
        gif_section.style.visibility = "visible";

    }, {once : true});

    btnLeya.style.paddingTop = 10;
    btnLeya.textContent = "YOU ARE CORRECT!!";

})