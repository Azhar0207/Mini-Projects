const testimonials = [
    {
        name: "Charles M",
        text : "I have always relied on Apple products for their innovation and reliability. As a tech enthusiast, I appreciate how Apple consistently pushes the boundaries of technology while maintaining user-friendliness.",
        photoUrl: "https://images.unsplash.com/photo-1770510067230-1059f0776b3a?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        name: "Chris T",
        text : "Would definitely recommend apple and will definitely be ordering again.",
        photoUrl: "https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        name: "Tony S",
        text : "I love apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        name: "Nick F",
        text : "I have been using apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
        photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    }
]

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const nameEl = document.querySelector(".username")

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, text, photoUrl} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    nameEl.innerText = name;
    idx++

    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 2000)
 }