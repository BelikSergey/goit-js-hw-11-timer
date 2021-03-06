// const refs = {
//     // timer: document.querySelector('#timer-1'),
//     days : document.querySelector('[data-value="days"]'),
//     hours: document.querySelector('[data-value="hours"]'),
//     mins: document.querySelector('[data-value="mins"]'),
//     secs: document.querySelector('[data-value="secs"]'),
    
// };
// const timerUp = document.querySelector('.timer');
// timerUp.id = 'timer-2';
// console.log(timerUp);
   
const text = document.querySelector('[data-text="text"]');
const button = document.querySelector('[data-button="button"]');
button.addEventListener('click', messageOnClik);
// console.log(text.textContent = `Не будь наивным!!! Время не остановить!`);

// console.log(refs.h1.textContent='13');


class CountdownTimer {
    constructor({ targetDate, selector }) {
        this.selector = selector;
        this.targetDate = targetDate;
        // this.ontick = ontick;
        // this.updateTimer();
        this.start();
        
        // this.updateTimer();
    }
    // console.log(this.selector)
    
     
    start() {
    
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = getTimeComponents(deltaTime);
            
            updateTimer(time);
            
        // console.log(`${time.days}:${time.hours}:${time.mins}:${time.secs}`);
        }, 1000);
        
        
        
            function pad(value) {
                return String(value).padStart(2,'0');    
        };
        
            function getTimeComponents(time) {
                const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
                const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
                const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
                return { days, hours, mins, secs };     
        };

        const selector = this.selector;

        appointId(selector);

        function appointId (selector) {
            const timer = document.querySelector('.timer');
            timer.id = selector;
          
            
        }
        function updateTimer({ days, hours, mins, secs, }) {
          
                const refs = {
                 
                    days : document.querySelector('[data-value="days"]'),
                    hours: document.querySelector('[data-value="hours"]'),
                    mins: document.querySelector('[data-value="mins"]'),
                    secs: document.querySelector('[data-value="secs"]'),
    
                        };
                refs.days.textContent = days;
                refs.hours.textContent = hours;
                refs.mins.textContent = mins;
            refs.secs.textContent = secs; 
          x           
            };
    };

};


        

    const timer = new CountdownTimer ({
        selector: '#timer-1',
        targetDate: new Date('Jan 01, 2021'),
        // ontick: updateTimer,
    });
    // console.log(timer.selector);

function messageOnClik(event) {
    text.textContent = `Не будь наивным!!! Время не остановить!`;
    
    setTimeout(() => {
        text.textContent = '';
    }, 2000);

}




// function startTime () {
//     setInterval(() => {
//         const currentTime = Date.now();
//         const deltaTime = date - currentTime;
//         const time = getTimeComponents(deltaTime);
//         updateTimer(time);
//         // console.log(`${time.days}:${time.hours}:${time.mins}:${time.secs}`);
//     }, 1000);
// };

// startTime();




// function updateTimer({ days, hours, mins, secs }) {
//     refs.days.textContent = days;
//     refs.hours.textContent = hours;
//     refs.mins.textContent = mins;
//     refs.secs.textContent = secs; 
// }
// // ==================================
