import config from "../config.json" assert {type: "json"};

const getCountOfDays = distance => Math.floor(distance / (1000 * 60 * 60 * 24));
const getCountOfHours = distance => Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const getCountOfMinutes = distance => Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const getCountOfSeconds = distance => Math.floor((distance % (1000 * 60)) / 1000);

const getDistance = (currentTime, countDownTime) => countDownTime - currentTime;

const getTotalTime = (countDownDate) => {
    const now = new Date().getTime();

    const distance = getDistance(now, countDownDate);

    const countOfDays = getCountOfDays(distance);
    const countOfHours = getCountOfHours(distance);
    const countOfMinutes = getCountOfMinutes(distance);
    const countOfSeconds = getCountOfSeconds(distance);

    const days = countOfDays.toString().padStart(2, "0");
    const hours = countOfHours.toString().padStart(2, "0");
    const minutes = countOfMinutes.toString().padStart(2, "0");
    const seconds = countOfSeconds.toString().padStart(2, "0");

    return [days, hours, minutes, seconds]
}

const isTimePassed = (countDownDate) => {
    return getDistance(new Date().getTime(), countDownDate) < 0
}


export const saleTimeCounter = () => {
    const countOfDaysBlock = document.getElementById('timer__days')
    const countOfHoursBlock = document.getElementById('timer__hours')
    const countOfMinutesBlock = document.getElementById('timer__minutes')
    const countOfSecondsBlock = document.getElementById('timer__seconds')

    const endDate = config.timerEndDate.split(/\W/)
    const [endDay, endMonth, endYear, endHour, endMinute] = endDate

    const countDownDate = new Date(+endYear, +endMonth - 1 , +endDay, +endHour, +endMinute).getTime()

    if(!isTimePassed(countDownDate)) {
        document.querySelector('section.sale').classList.add('opened');
        const interval = setInterval(() => {
            if (isTimePassed(countDownDate)) {
                clearInterval(interval)
                document.querySelector('.sale').remove()
            }

            const [days, hours, minutes, seconds] = getTotalTime(countDownDate)
            countOfDaysBlock.textContent = days
            countOfHoursBlock.textContent = hours
            countOfMinutesBlock.textContent = minutes
            countOfSecondsBlock.textContent = seconds

        }, 1000)
    }

}