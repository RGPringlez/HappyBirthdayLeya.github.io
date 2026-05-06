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

    btnLeya.addEventListener("animationend", async () => {

        btnLeya.classList.remove("apply-grow");
        btnLeya.style.scale = 5;
        btn_section.style.visibility = "hidden";
        btn_section.style.display = "none";
        gif_section.style.display = "block";
        gif_section.style.visibility = "visible";

        const cat_1 = document.getElementById("cat1");
        cat_1.style.display = "block";
        cat_1.style.visibility = "visible";
        const music_player = document.getElementById("music");
        const cat_2 = document.getElementById("cat2");
        const heading = document.getElementById("header");

        await sleep(5000);
        
        cat_1.classList.add("apply_shrink_image");

        cat_1.addEventListener("animationend", async () => {

            cat_1.style.visibility = "hidden";
            cat_1.style.display = "none";
            cat_2.style.display = "block";
            cat_2.style.visibility = "visible";
            music_player.play();
        
            cat_2.classList.add("apply_grow_image");
            heading.textContent = "For you, my angel <3";
        
            await sleep(2000);
            heading.textContent = "This is your special day";
            await sleep(2000);
            heading.textContent = "And you deserve all the happiness";
            await sleep(2000);
        
            const cat_3 = document.getElementById("cat3");
        
            // Replace the animationend approach with a simple sleep
            // that matches your shrink animation duration (adjust 1000 to your CSS duration in ms)
            cat_2.classList.remove("apply_grow_image");
            cat_2.classList.add("apply_shrink_image");
            await sleep(1000); // ← match this to your shrink animation duration
        
            cat_2.style.visibility = "hidden";
            cat_2.style.display = "none";
            cat_3.style.display = "block";
            cat_3.style.visibility = "visible";
            cat_3.classList.add("apply_grow_image");
        
            heading.textContent = "And all the kisses ;)";
            await sleep(2000);
            heading.textContent = "I hope you have an amazing day";
            await sleep(2000);
            heading.textContent = "And I am so so proud of you";
        
        }, { once: true });
        
    }, {once : true});

    btnLeya.style.paddingTop = 10;
    btnLeya.textContent = "YOU ARE CORRECT!!";

})