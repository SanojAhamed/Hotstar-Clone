let movies = [
    
    {
        name: "loki",
        des: "Loki is an American television series created by Michael Waldron for the streaming service Disney.",
        image: "./images/slider 1.PNG"
    },
    {
        name: "falcon and the winter soldier",
        des: "Falcon and the Winter Soldier is an American television series created for the streaming platform Disney+.",
        image: "./images/slider 2.PNG"
    },
    {
        name: "WandaVision",
        des: "WandaVision is an American television series created for the streaming service Disney+",
        image: "./images/slider 3.PNG"
    },

    {
        name: "Raya and the Last Dragon",
        des: "Raya and the Last Dragon is an animated Disney film released in 2021.",
        image: "./images/slider 4.PNG"
    },

    {
        name: "Luca",
        des: "Luca is a Disney-Pixar animated film released in 2021.",
        image: "./images/slider 5.PNG"
    }
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // track the current slide

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // create DOM Elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    
    // attaching all elements
   
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));

    // Attach elements to the slide and carousel
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    slide.appendChild(content);
    carousel.appendChild(slide);

    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
   
    sliders.push(slide);
    

    if (sliders.length) {
        sliders[0].style.marginLeft =  `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
        }px)`;
    }
    
    }

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);
