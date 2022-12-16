let fortuneCookie = document.querySelector(".screen1 img")
let screenOne = document.querySelector(".screen1")
let screenTwo = document.querySelector(".screen2")
let messageContainer = document.querySelector(".message-container")
let openAnotherCookieButton = document.querySelector(".screen2 button")


fortuneCookie.addEventListener("click", () => {
    screenOne.classList.add("hide")
    screenTwo.classList.remove("hide")
    messageContainer.style.animation = "message 2s .1s backwards"
})

openAnotherCookieButton.addEventListener("click", () => {
    document.location.reload(true);
})