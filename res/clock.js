"use strict";

/**
 * Simple JavaScript Clock
 * @class
 * @author  Dean Wagner <info@deanwagner.net>
 */
class Clock {

    /**
     * Constructor
     * @constructor
     */
    constructor() {
        // Configure Clock
        this.update();
    }

    /**
     * Update Clock
     */
    update() {
        // Document Elements
        const secondHand = document.getElementById('second-hand');
        const minsHand   = document.getElementById('min-hand');
        const hourHand   = document.getElementById('hour-hand');
        const minsDigit  = document.getElementById('min-digit');
        const hourDigit  = document.getElementById('hour-digit');

        // Get Current Time
        const now = new Date();

        // Update Seconds
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360);
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        // Adjust for Animation Glitch
        if (seconds === 0) {
            secondHand.classList.add('no-trans');
        } else if (seconds === 1) {
            secondHand.classList.remove('no-trans');
        }

        // Update Minutes
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6);
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;
        minsDigit.innerText = ('00' + mins).slice(-2);

        // Update Hours
        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30);
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        hourDigit.innerText = ('00' + hour).slice(-2);

        // Update Title
        document.title = hourDigit.innerText + ':' + minsDigit.innerText;
    }
}