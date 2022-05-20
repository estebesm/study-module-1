import config from "/config.json" assert {type: "json"};

const countOfDays = document.getElementById('timer__days')
const countOfHours = document.getElementById('timer__hours')
const countOfMinutes = document.getElementById('timer__minutes')
const countOfSeconds = document.getElementById('timer__seconds')

const endDate = config.timerEndDate.split(/\W/)

export const saleTimeCounter = () => {
    setInterval(() => {
        const countDownDate = new Date(+endDate[2], +endDate[1] - 1 , +endDate[0], +endDate[3], +endDate[4]).getTime()

        const now = new Date().getTime()

        const distance = countDownDate - now

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const currentDay = (days >= 10 ? '' : "0") + days.toString()
        const currentHour = (hours >= 10 ? '' : "0") + hours.toString()
        const currentMinute = (minutes >= 10 ? '' : "0") + minutes.toString()
        const currentSecond = (seconds >= 10 ? '' : "0") + seconds.toString()


        countOfDays.innerHTML = currentDay
        countOfHours.innerHTML = currentHour
        countOfMinutes.innerHTML = currentMinute
        countOfSeconds.innerHTML = currentSecond

    }, 1000)
}