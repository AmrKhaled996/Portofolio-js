
const skillContainer = document.querySelector(".skills-container");
const projectsContainer = document.querySelector("#Projects");
document.addEventListener("DOMContentLoaded", function () {
    
    skills.forEach((card, id) => {
   
        card = `
         <div class="skill-card"  >
         
         <div class='wrapper-icon'>
         <img src='${skills[id].Img}' alt='${skills[id].name}' class='skill-icon'>
         </div>
         <h3> ${skills[id].name}</h3>
         <p> ${skills[id].type}</p>
         
            </div>
            <div class="overlay"></div>
            <div class="popOut">
            <button> X </button>
            <h2> ${skills[id].name}</h2>
            <p>
            ${skills[id].description}
            </p>
            </div>
            `;
            
            skillContainer.insertAdjacentHTML("beforeend", card);
            
        });
    projects.forEach((project, id) => {
   
        project = `
        <div class="projectContainer">
            <div class="projectImg"><img src="${projects[id].img}" alt="! project-name !"> </div>
            
            <div class="projectInfo">
                <h2>${projects[id].name}</h2>
                <div class="ProjectSkills">${projects[id].Skills}</div>
                <div class="describtion">${projects[id].description}</div>
                <div class="category">Category: ${projects[id].Category}</div>
            </div>
        </div>
            `;
            
            projectsContainer.insertAdjacentHTML("beforeend", project);
            
        });

    });
    
    setTimeout(() => {
        skillCards = skillContainer.querySelectorAll('.skill-card');
        popOutWindows = skillContainer.querySelectorAll('.popOut');
        closeBtn = skillContainer.querySelectorAll('.popOut > button');
        overlayWindows = skillContainer.querySelectorAll('.overlay');
        console.log(skillCards); // This will log a NodeList of skill the cards
        skillCards.forEach((card, id) => {
            card.addEventListener("click", () => {
                
                popOutWindows[id].style.display = 'flex';
                overlayWindows[id].style.display = 'block';
                
            });
            closeBtn.forEach((btn, id) => {
                
                btn.addEventListener("click", () => {
                    
                    popOutWindows[id].style.display = 'none';
                    overlayWindows[id].style.display = 'none';
                })
                
            });
            overlayWindows.forEach((out, id) => {
                
                out.addEventListener("click", () => {
                    
                    popOutWindows[id].style.display = 'none';
                    overlayWindows[id].style.display = 'none';
                })
                
            });
        })
    }, 10);
        
const skills =[{
        name:"HTML",
        type:"Frontend",
        description:`Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.`,
        Img:"assets/HTML.png  "
    },
    {
        name:"CSS",
        type:"Frontend",
        description:`Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript`,
        Img:" assets/CSS.png"

    },
    {
        name:"JavaScript",
        type:"Frontend",
        description:`JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).`,
        Img:"https://abrudz.github.io/logos/JS.svg"
    },
    {
        name:"React",
        type:"Frontend",
        description:`React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies`,
        Img:" assets/REACT.png"
    },
    {
        name:"c++",
        type:"Backend",
        description:`"C plus plus" and sometimes abbreviated as CPP) is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup. First released in 1985 as an extension of the C programming language, it has since expanded significantly over time; as of 1997, C++ has object-oriented, generic, and functional features, in addition to facilities for low-level memory manipulation for systems like microcomputers or to make operating systems like Linux or Windows. It is usually implemented as a compiled language, and many vendors provide C++ compilers`,
        Img:"https://isocpp.org/assets/images/cpp_logo.png"
    },
    {
        name:"SQL",
        type:"Database",
        description:`is a domain-specific language used to manage data, especially in a relational database management system (RDBMS). It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.`,
        Img:"assets/SQL.png"
    },
    {
        name:"Java",
        type:"Backend",
        description:`Java is a high-level, general-purpose, memory-safe, object-oriented programming language. It is intended to let programmers write once, run anywhere (WORA),[16] meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages.`,
        Img:" assets/JAVA.png"
    },
    {
        name:"PHP",
        type:"Backend",
        description:`PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group. PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive acronym PHP: Hypertext Preprocessor.`,
        Img:" assets/PHP.png"
    }

]
const projects =[
    {
        name:"HFD database",
        description:`The HFD database is a tailored system for a virtual hotel serving individuals with disabilities. It manages all operations, including staff, guest needs, accessibility, safety, and logistics, ensuring efficient and inclusive service.`,
        Category:" team project",
        Skills:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 548.29 548.291" xml:space="preserve">
<g> 
	<g>
		<path d="M276.043,244.216c-24.575,0-38.741,24.087-38.741,53.862c-0.241,30.228,14.407,53.382,38.5,53.382    c24.323,0,38.512-22.92,38.512-54.091C314.313,268.303,300.604,244.216,276.043,244.216z"/>
		<path d="M486.2,196.116h-13.164V132.59c0-0.399-0.064-0.795-0.116-1.2c-0.021-2.52-0.824-4.997-2.551-6.96L364.656,3.677    c-0.031-0.031-0.064-0.044-0.085-0.075c-0.629-0.704-1.364-1.29-2.141-1.796c-0.231-0.154-0.462-0.283-0.704-0.419    c-0.672-0.365-1.386-0.672-2.121-0.893c-0.199-0.052-0.377-0.134-0.576-0.186C358.229,0.118,357.4,0,356.562,0H96.757    C84.893,0,75.256,9.649,75.256,21.502v174.613H62.093c-16.967,0-30.733,13.756-30.733,30.733v159.812    c0,16.961,13.766,30.731,30.733,30.731h13.163V526.79c0,11.854,9.637,21.501,21.501,21.501h354.777    c11.853,0,21.502-9.647,21.502-21.501V417.392H486.2c16.977,0,30.729-13.771,30.729-30.731V226.849    C516.93,209.872,503.177,196.116,486.2,196.116z M96.757,21.502h249.053v110.006c0,5.943,4.818,10.751,10.751,10.751h94.973    v53.861H96.757V21.502z M353.033,376.96l-10.394,27.884c-22.666-6.619-41.565-13.479-62.828-22.445    c-3.527-1.418-7.317-2.132-11.094-2.362c-35.909-2.352-69.449-28.819-69.449-80.778c0-47.711,30.236-83.623,77.71-83.623    c48.675,0,75.351,36.854,75.351,80.317c0,36.142-16.766,61.638-37.785,71.091v0.945    C326.828,371.528,340.519,374.367,353.033,376.96z M72.912,370.116l7.328-29.764c9.69,4.96,24.554,9.915,39.917,9.915    c16.525,0,25.271-6.84,25.271-17.228c0-9.928-7.56-15.597-26.691-22.442c-26.457-9.217-43.696-23.858-43.696-47.014    c0-27.163,22.68-47.948,60.231-47.948c17.954,0,31.184,3.791,40.623,8.03l-8.021,29.061c-6.375-3.076-17.711-7.564-33.3-7.564    c-15.599,0-23.163,7.079-23.163,15.357c0,10.15,8.977,14.646,29.533,22.447c28.108,10.394,41.332,25.023,41.332,47.464    c0,26.699-20.557,49.365-64.253,49.365C99.844,379.785,81.899,375.06,72.912,370.116z M451.534,520.962H96.757v-103.57h354.777    V520.962z M475.387,377.428h-99.455V218.231h36.158v128.97h63.297V377.428z"/>
	</g>
</g>
</svg>`,
        img:"assets/HFD.jpg"
    },
    {
        name:"MY GYM",
        description:"The Gym Management System is a comprehensive web application built using React.js, designed to help users achieve their fitness goals by providing tools and resources to manage their workouts, nutrition, and overall wellness. This project was a collaborative team effort, where each team member contributed by developing individual components, which were later integrated into a cohesive and functional application. The system includes features such as workout plans, meal recommendations, a calorie calculator, sleep quality tracking, and more, making it a one-stop solution for fitness enthusiasts.",
        Category:"Category: team project",
        Skills:` <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"><path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/></svg> <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none">
<path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
<path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
<path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none">
<rect x="2" y="2" width="28" height="28" fill="#FFCA28"/>
<path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E"/>
<path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E"/>
</svg> <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none">
<path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
<path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
<path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
</svg>`,
        img:"assets/MYGYM.png"
    },
    {
        name:"Cinema Mangment",
        description:`The Cinema Management System is a command-line application built using Java that allows users to manage a cinema efficiently. The system handles movies, screen times, seating arrangements, and halls where movies are displayed. It also includes a customer module for booking seats and generating receipts. Additionally, the system provides reports such as the number of seats booked per movie and the most crowded screening times.`,
        Category:"Category: team project",
        Skills:`<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none">
<path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00"/>
<path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00"/>
<path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1"/>
<path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1"/>
<path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1"/>
<path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1"/>
<path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1"/>
<path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1"/>
</svg> `,
        img:"assets/cineam.jpeg"
    }
]