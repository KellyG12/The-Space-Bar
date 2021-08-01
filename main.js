//creating a navigation bar
const header = document.getElementById("header1");
const div = document.createElement('div');
div.setAttribute ("id", "heading")
div.textContent = "The Space Bar";

const navBar = document.createElement('nav');
const unorderedList = document.createElement ('ul');
const home = document.createElement ('li');
const contactList = document.createElement ('li');

home.textContent = "Home";
contactList.textContent = "Contact";

navBar.classList = 'navBar';

unorderedList.appendChild(home);
unorderedList.appendChild(contactList);
navBar.appendChild(unorderedList);
div.appendChild(navBar);
header.appendChild(div);


//body manipulation - heading
const main = document.querySelector(".title");
const titleHeading = document.createElement("h1");
titleHeading.textContent = "Welcome to the Space Bar";
main.appendChild(titleHeading);

//body contents paragraph
const para = document.createElement('h2');
para.setAttribute("class", "paragraph");
para.textContent = "At the Space Bar we provide you with links to the latest Space News. This is the fun SPACE. Click on any image below for an exciting Space-related story!";


const quote =document.createElement('p')
quote.textContent = ""
main.appendChild(para);

//background color and image
 document.querySelector(".paragraph").style.backgroundImage = "url('milky-way-2695569__340.jpg')";
document.querySelector(".navBar").style.backgroundColor ="black";

//inserting images
const section =document.createElement('section');
const spaceImages = document.createElement('div');
const linkImages =document.createElement('div');

//image 1
let link = document.createElement('a');
link.href = "https://spacenews.com/station-loses-attitude-control-after-nauka-docking-starliner-launch-delayed/"
link.alt = "Starliner Launch Delayed";
let img = document.createElement('img');
img.src = 'image/nauka.jpg';
link.appendChild(img);

//image 2
let link1 = document.createElement('a');
link1.href = "https://spacenews.com/ariane-5-launches-two-satellites-on-first-mission-in-nearly-a-year/"
link1.alt = "Ariane 5 Launches 2 Satellites on First Mission in nearly a year"
let img1 = document.createElement('img');
img1.src = 'image/ariane.jpg';
link1.appendChild(img1);

//image 3
let link2 = document.createElement('a');
link2.href = "https://spacenews.com/gao-denies-blue-origin-and-dynetics-protests-of-nasa-lunar-lander-contract/"
link2.alt = "GAO"
let img2 = document.createElement('img');
img2.src = "image/SpaceX.jpg"
link2.appendChild(img2);

//image 4
let link3 = document.createElement('a');
link3.href = "https://spacenews.com/rocket-lab-returns-electron-to-flight-with-space-force-launch/"
link3.alt = "Rocket Lab returns Electron"
let img3 = document.createElement('img');
img3.src = "image/electron.jpg"
link3.appendChild(img3);

linkImages.appendChild(link);
linkImages.appendChild(link1);
linkImages.appendChild(link2);
linkImages.appendChild(link3);
linkImages.setAttribute("class", "imaging")
spaceImages.appendChild(linkImages);
section.appendChild(spaceImages);
main.appendChild(section);



