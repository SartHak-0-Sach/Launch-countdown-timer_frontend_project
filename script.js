const countToDate = new Date().setHours(new Date().getHours() + 2080);
let previous;
setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
    if (timeBetweenDates !== previous) {
        flipAllCards(timeBetweenDates);
    }
    previous = timeBetweenDates;
}, 250);
function flipAllCards(time) {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time / 3600) % 24);
    const minutes = Math.floor((time / 60) % 60);
    const seconds = Math.floor(time % 60);
    const daysCard = document.querySelector('.days > .flip-card');
    const hoursCard = document.querySelector('.hours > .flip-card');
    const minutesCard = document.querySelector('.minutes > .flip-card');
    const secondsCard = document.querySelector('.seconds > .flip-card');
    flipCard(daysCard, days);
    flipCard(hoursCard, hours);
    flipCard(minutesCard, minutes);
    flipCard(secondsCard, seconds);
}
function flipCard(flipCard, time) {
    time = String(time).padStart(2, '0');
    const currentValue = flipCard.querySelector('.top').innerText;
    if (time == currentValue) return;
    const topFlip = document.createElement('div');
    topFlip.classList.add('top-flip');
    topFlip.innerText = currentValue;
    const bottomFlip = document.createElement('div');
    bottomFlip.classList.add('bottom-flip');
    bottomFlip.innerText = time;
    const topHalf = flipCard.querySelector('.top');
    const bottomHalf = flipCard.querySelector('.bottom');
    topFlip.addEventListener('animationstart', () => {
        topHalf.innerText = time;
    })
    topFlip.addEventListener('animationend', () => {
        topFlip.remove()
    });
    bottomFlip.addEventListener('animationend', () => {
        bottomHalf.innerText = time;
        bottomFlip.remove()
    });
    flipCard.appendChild(topFlip);
    flipCard.appendChild(bottomFlip);
}





// const countdown =()=>{
//     const endDate = new Date("March 30, 2023 00:00:00").getTime();
//     const now = new Date().getTime();
//     const diff = endDate - now;

//     const secs = 1000;
//     const mins = secs * 60;
//     const hrs = mins * 60;
//     const days = hrs * 24;

//     let timeDays = Math.floor(diff / days);
//     let timeHrs = Math.floor((diff % days) / hrs);
//     let timeMins = Math.floor((diff % hrs) / mins );
//     let timeSecs = Math.floor((diff % mins) / secs );

//     // Displaying 0 with nmber < 10;
//     timeDays = timeDays < 10  ? "0" + timeDays : timeDays;
//     timeHrs = timeHrs < 10  ? "0" + timeHrs : timeHrs;
//     timeMins = timeMins < 10  ? "0" + timeMins:timeMins;
//     timeSecs = timeSecs < 10  ? "0" + timeSecs:timeSecs;

//     document.getElementById("days").innerHTML = timeDays;
//     document.getElementById("hrs").innerHTML = timeHrs;
//     document.getElementById("mins").innerHTML = timeMins;
//     document.getElementById("secs").innerHTML = timeSecs;

// }
// setInterval(()=>{
//     countdown();
// })