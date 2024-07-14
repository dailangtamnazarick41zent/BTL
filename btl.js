let timer;
let multipleTimers = [];

// Function to start a single timer
function startSingleTimer() {
    let seconds = parseInt(document.getElementById('singleTimerInput').value);
    if (!isNaN(seconds)) {
        setTimeout(() => {
            playAlarmSound();
            alert('Hết giờ đếm ngược!');
        }, seconds * 1000);
    } else {
        alert('Vui lòng nhập số giây hợp lệ.');
    }
}

// Function to add a multiple timer
function addMultipleTimer() {
    let seconds = parseInt(document.getElementById('multipleTimerInput').value);
    if (!isNaN(seconds)) {
        let timerId = setTimeout(() => {
            playAlarmSound();
            alert('Hết giờ đếm ngược!');
            removeMultipleTimer(timerId);
        }, seconds * 1000);
        multipleTimers.push({ id: timerId, seconds });
        displayMultipleTimers();
    } else {
        alert('Vui lòng nhập số giây hợp lệ.');
    }
}

// Function to remove a multiple timer
function removeMultipleTimer(timerId) {
    multipleTimers = multipleTimers.filter(timer => timer.id !== timerId);
    displayMultipleTimers();
}

// Function to display multiple timers
function displayMultipleTimers() {
    let multipleTimersDiv = document.getElementById('multipleTimers');
    multipleTimersDiv.innerHTML = '';
    multipleTimers.forEach(timer => {
        let timerElement = document.createElement('div');
        timerElement.textContent = `${timer.seconds} giây`;
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Xóa';
        removeButton.addEventListener('click', () => {
            clearTimeout(timer.id);
            removeMultipleTimer(timer.id);
        });
        timerElement.appendChild(removeButton);
        multipleTimersDiv.appendChild(timerElement);
    });
}

// Function to play selected alarm sound
function playAlarmSound() {
    let selectedSound = document.getElementById('alarmSoundSelect').value;
    let alarmSound = document.getElementById('alarmSound');
    alarmSound.src = selectedSound;
    alarmSound.play();
}
