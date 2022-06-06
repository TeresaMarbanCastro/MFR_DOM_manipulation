const surveyButton = document.querySelector("#survey-btn");
surveyButton.addEventListener("click", setExclusive);
function setExclusive() {
    surveyButton.classList.add("hidden");
    const answers = Array.from(document.querySelectorAll(".answer"));
    return answers.map(i => i.type = "radio");
}