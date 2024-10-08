document.getElementById('see-recipe-btn').addEventListener('click', function () {
    document.getElementById('recipe-details').classList.remove('hidden');
    this.classList.add('hidden'); // Hide "See Recipe" button
    document.getElementById('start-cooking-btn').classList.remove('hidden'); // Show "Start Cooking" button
});

document.getElementById('start-cooking-btn').addEventListener('click', function () {
    document.getElementById('timer').classList.remove('hidden');
    document.getElementById('recipe-steps').classList.remove('hidden'); // Show step-by-step guide
    document.getElementById('recipe-steps').querySelector('.step').style.display = 'block'; // Show first step
    startTimer(); // Start the timer
    this.classList.add('hidden'); // Hide start button
});

let timerInterval;
let seconds = 0;
let minutes = 0;

// Timer function
function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }, 1000);
}

// Show the next step
function nextStep(stepNumber) {
    const currentStep = document.querySelector('.step:not([style*="display: none"])');
    currentStep.style.display = 'none'; // Hide current step
    document.getElementById('step-' + stepNumber).style.display = 'block'; // Show next step
}

// Show the previous step
function prevStep(stepNumber) {
    const currentStep = document.querySelector('.step:not([style*="display: none"])');
    currentStep.style.display = 'none'; // Hide current step
    document.getElementById('step-' + stepNumber).style.display = 'block'; // Show previous step
}

// Finish cooking
function finishCooking() {
    clearInterval(timerInterval); // Stop the timer
    showCongratulationsMessage();
    resetRecipeCard();
}

// Show congratulations message
function showCongratulationsMessage() {
    const message = document.getElementById('congratulations-message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none'; // Hide the message after 3 seconds
    }, 3000);
}

// Reset the recipe card to its original position
function resetRecipeCard() {
    document.getElementById('recipe-steps').querySelectorAll('.step').forEach(step => {
        step.style.display = 'none'; // Hide all steps
    });
    document.getElementById('timer').classList.add('hidden'); // Hide the timer
    document.getElementById('start-cooking-btn').classList.remove('hidden'); // Show the start button again
}
