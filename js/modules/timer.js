function timer(id, deadline) {
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date()),
      days = getZero(Math.floor(total / (1000 * 60 * 60 * 24))),
      hours = getZero(Math.floor((total / (1000 * 60 * 60)) % 24)),
      minutes = getZero(Math.floor((total / 1000 / 60) % 60)),
      seconds = getZero(Math.floor((total / 1000) % 60));

    return {
      total: total,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(id, deadline);
}

export default timer;
