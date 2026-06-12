// Show Ingredients

let ingredientBtn = document.getElementById("showIngredients");
let ingredients = document.getElementById("ingredients");

ingredientBtn.addEventListener("click", () => {

    if (ingredients.classList.contains("hidden")) {
        ingredients.classList.remove("hidden");
        ingredientBtn.innerText = "Hide Ingredients";
    } else {
        ingredients.classList.add("hidden");
        ingredientBtn.innerText = "Show Ingredients";
    }

});


// Cooking Steps

let steps = document.querySelectorAll("#steps li");
let currentStep = -1;

document.getElementById("startBtn").addEventListener("click", () => {

    currentStep = 0;

    steps.forEach(step => step.classList.remove("active-step"));

    steps[currentStep].classList.add("active-step");

    updateProgress();
});


document.getElementById("nextBtn").addEventListener("click", () => {

    if (currentStep < steps.length - 1) {

        steps[currentStep].classList.remove("active-step");

        currentStep++;

        steps[currentStep].classList.add("active-step");

        updateProgress();
    }
});


// Progress Bar

function updateProgress() {

    let progress = ((currentStep + 1) / steps.length) * 100;

    document.getElementById("progressBar").style.width = progress + "%";
}


// Bonus Timer

let totalTime = 30 * 60;

function startTimer() {

    setInterval(() => {

        if (totalTime > 0) {

            totalTime--;

            let minutes = Math.floor(totalTime / 60);
            let seconds = totalTime % 60;

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            document.getElementById("time").innerHTML =
                minutes + ":" + seconds;
        }

    }, 1000);
}

document.getElementById("startBtn").addEventListener("click", startTimer);