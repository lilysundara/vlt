let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let size = 20;

function sayYes() {
    document.body.innerHTML = `
        <h1>Yay! 💖</h1>
        <img src="https://media.tenor.com/0T9oSGkWbKoAAAAi/cute-love.gif" alt="Happy GIF" width="250">
        <p>Can't wait for Valentine's Day with you! 🥰</p>
    `;
}

function makeYesBigger() {
    size += 10;
    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding = (size / 2) + "px " + size + "px";
}
