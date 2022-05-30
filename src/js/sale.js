import config from "../config.json" assert {type: "json"};

const parseDate = (date) => {
    const endDate = date.split(/\W/)
    const [endDay, endMonth, endYear, endHour, endMinute] = endDate
    return new Date(+endYear, +endMonth - 1 , +endDay, +endHour, +endMinute).getTime()
}

const getDistance = () => {
    const now = new Date().getTime();
    return parseDate(config.timerEndDate) - now
}

const getTimerItem = (type) => {
    const distance = getDistance();
    const formulas = {
        days: distance / (1000 * 60 * 60 * 24),
        hours: (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        minutes: (distance % (1000 * 60 * 60)) / (1000 * 60),
        seconds: (distance % (1000 * 60)) / 1000
    }
    return Math.floor(formulas[type]).toString().padStart(2, "0");
}

const isTimePassed = () => getDistance() < 0

export const saleTimeCounter = () => {
    const saleSection = document.querySelector('section.sale');
    const timerTypes = ['days', 'hours', 'minutes', 'seconds']

    let timerItems = []
    timerTypes.forEach(type => {
        timerItems.push({
            element: document.getElementById(`timer__${type}`),
            type
        })
    })

    if(!isTimePassed()) {
        saleSection.classList.add('opened');
        const interval = setInterval(() => {
            if (isTimePassed()) {
                clearInterval(interval)
                document.querySelector('.sale').remove()
            }
            timerItems.forEach(item => {
                item.element.textContent = getTimerItem(item.type)
            })

        }, 1000)
    }
}