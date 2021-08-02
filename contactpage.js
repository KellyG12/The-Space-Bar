//creating a Heading for the page
const header = document.getElementById("header1");
const div = document.createElement('div');
div.setAttribute ("id", "heading")
div.textContent = "The Space Bar";


//creating a navigation bar
const navBar = document.createElement('nav');
const unorderedList = document.createElement ('ul');
const home = document.createElement ('li');


let navLink = document.createElement('a');
navLink.textContent= 'Home';
navLink.classList.add('link');  
navLink.href = 'index.html' 
home.appendChild(navLink);

navBar.classList = 'navBar';
unorderedList.appendChild(home);
navBar.appendChild(unorderedList);
div.appendChild(navBar);
header.appendChild(div);

//body manipulation - heading
const main = document.querySelector(".contents");
const titleHeading = document.createElement("h1");
titleHeading.textContent = "Let's have a little outer space interaction!";
main.appendChild(titleHeading);

//inserting images
const section =document.createElement('section');
const form = document.createElement('div1');
//const linkImages =document.createElement('div');
section.appendChild(div1);
main.appendChild(section);
