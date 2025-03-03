
const skillCards = document.querySelectorAll(".skill-card");


document.addEventListener("DOMContentLoaded", function () {
    
    skillCards.forEach((card, id) => {
   
        card.innerHTML = `
            <div class='wrapper-icon'>
                <img src='${skills[id].Img}' alt='${skills[id].name}' class='skill-icon'>
            </div>
            <h3> ${skills[id].name}</h3>
            <p> ${skills[id].type}</p>
        `;
    });
});

    skillCards.forEach((card, id) => {
        card.addEventListener("click", () => {
            card.classList.toggle("active");
        });
    })

const skills =[{
        name:"HTML",
        type:"Frontend",
        description:"",
        Img:"HTML.png  "
    },
    {
        name:"CSS",
        type:"Frontend",
        description:"",
        Img:" CSS.png"

    },
    {
        name:"JavaScript",
        type:"Frontend",
        description:"",
        Img:"https://abrudz.github.io/logos/JS.svg"
    },
    {
        name:"React",
        type:"Frontend",
        description:"",
        Img:" REACT.png"
    },
    {
        name:"c++",
        type:"Backend",
        description:"",
        Img:"https://isocpp.org/assets/images/cpp_logo.png"
    },
    {
        name:"SQL",
        type:"Database",
        description:"",
        Img:"SQL.png"
    },
    {
        name:"Java",
        type:"Backend",
        description:"",
        Img:" JAVA.png"
    },
    {
        name:"PHP",
        type:"Backend",
        description:"",
        Img:" PHP.png"
    }

]