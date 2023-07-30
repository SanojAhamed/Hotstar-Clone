let movies = [
    {
name: "falcon and the winter soldier",
des :
"Loki is an American television series created by Michael Waldron for the streaming service Disney."
image: "images/slider 2.png"
    },
    
    {
        name: "falcon and the winter soldier",
        des :
        "Loki is an American television series created by Michael Waldron for the streaming service Disney."
        image: "images/slider 2.png"
            },
            {
                name: "falcon and the winter soldier",
                des :
                "Loki is an American television series created by Michael Waldron for the streaming service Disney."
                image: "images/slider 2.png"
                    },
                    {
                        name: "falcon and the winter soldier",
                        des :
                        "Loki is an American television series created by Michael Waldron for the streaming service Disney."
                        image: "images/slider 2.png"
                            }];
                            
const carousel= document.querySelector(".carousel");
let sliders=[];

let sliderIndex=0; //track the current slide

const createSlide = () =>  {
    if(slideIndex>=movies.lenght) {
        slideIndex=0;
    }
}

//create 