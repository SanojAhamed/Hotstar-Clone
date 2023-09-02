let movies = [
    {
name: "falcon and the winter soldier",
des :
"Loki is an American television series created by Michael Waldron for the streaming service Disney.",
image: "./images/nxt.png"
    },

];
                            
const carousel= document.querySelector('.carousel');
let sliders=[];

let slideIndex=0; //track the current slide

const createSlide = () =>  {
    if(slideIndex>=movies.lenght) {
        slideIndex=0;
    }

//create DOM Elements
let slide= document.createElement('div');
var imgElement = document.createElement('img');
let content= document.createElement('div');
let h1= document.createElement('h1');
let p= document.createElement('p');


//attaching all element
imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
sliders.appendChild(imgElement);
sliders.appendChild(content);
carousel.appendChild(slide);

}

