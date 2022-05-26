import config from "/config.json" assert {type: "json"};

export const saleTimeCounter = () => {

    const countOfDaysBlock = document.getElementById('timer__days')
    const countOfHoursBlock = document.getElementById('timer__hours')
    const countOfMinutesBlock = document.getElementById('timer__minutes')
    const countOfSecondsBlock = document.getElementById('timer__seconds')

    const endDate = config.timerEndDate.split(/\W/)
    const [endDay, endMonth, endYear, endHour, endMinute] = endDate

    const countDownDate = new Date(+endYear, +endMonth - 1 , +endDay, +endHour, +endMinute).getTime()

    const interval = setInterval(() => {
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

        countOfDaysBlock.textContent = currentDay
        countOfHoursBlock.textContent = currentHour
        countOfMinutesBlock.textContent = currentMinute
        countOfSecondsBlock.textContent = currentSecond

        if(distance < 0){
            clearInterval(interval)
            document.querySelector('.sale').remove()
        }

    }, 1000)

}