import config from "../config.json" assert {type: "json"};

const setPlans = (plans) => {
    plans.forEach(plan => {
        const priceElement = document.querySelector(`.price.pricing__${plan.name}`);
        priceElement.textContent = `$${plan.price}`;
    })
}

const setTestimonials = (testimonials) => {
    const testimonialsNameElements = document.querySelectorAll(".testimonials__name");
    const testimonialsJobElements = document.querySelectorAll(".testimonials__job");
    const testimonialsTextElements = document.querySelectorAll(".testimonials__text");

    testimonials.forEach((testimonial, index) => {
        testimonialsNameElements[index].textContent = testimonial.name;
        testimonialsJobElements[index].textContent = testimonial.job;
        testimonialsTextElements[index].textContent = testimonial.text;
    })
}

const setAppStoreLink = (link) => {
    const appStoreButtons = document.querySelectorAll(".app-store-button");
    appStoreButtons.forEach(btn => btn.href = link);
}

export const setDataFromConfig = () => {
    setPlans(config.plans);
    setTestimonials(config.testimonials);
    setAppStoreLink(config.appStoreLink);
}