function clock() {
    const secondHand = document.getElementById('second-hand');
    const minsHand   = document.getElementById('min-hand');
    const hourHand   = document.getElementById('hour-hand');
    const minsDigit  = document.getElementById('min-digit');
    const hourDigit  = document.getElementById('hour-digit');

    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360);
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        if (seconds === 0) {
            secondHand.classList.add('no-trans');
        } else if (seconds === 1) {
            secondHand.classList.remove('no-trans');
        }

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6);
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;
        minsDigit.innerText = ('00' + mins).slice(-2);

        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30);
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        hourDigit.innerText = ('00' + hour).slice(-2);

        document.title = hourDigit.innerText + ':' + minsDigit.innerText;
    }

    setInterval(setDate, 1000);
    setDate();
}