function countdown() {
    const targetDate = new Date('2022,12,31');
    const diff = targetDate-Date.now()
    // console.log('target: '+targetDate);
    // console.log('now: '+Date.now());
    const diffInSeconds  = diff/1000;
    const days = Math.floor(diffInSeconds/3600/24);
    const hours = Math.floor(diffInSeconds/3600)%24;
    const minutes = Math.floor(diffInSeconds/60)%60;
    const seconds = Math.floor(diffInSeconds)%60;

    document.getElementById('target').innerHTML = "Countdown to <br/> "+targetDate.toDateString("en");
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('days').innerHTML = days;
    document.getElementById('mins').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    
    // console.log(days, hours, minutes, seconds);
}

setInterval(countdown,1000);