
const themeToggleButton = document.getElementById('theme-toggle');


function theme() {
    
    document.body.classList.toggle('dark');
    
    const isDarkMode = document.body.classList.contains('dark');
    
    themeToggleButton.textContent = isDarkMode ? '☀️' : '🌙';
    
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.toggle('dark');
    });
    
    const headers = document.querySelectorAll('header');
    headers.forEach(header => {
        header.classList.toggle('dark');
    });
    
    const footers = document.querySelectorAll('footer');
    footers.forEach(footer => {
        footer.classList.toggle('dark');
    });
}

themeToggleButton.addEventListener('click', theme);


var s = "Welcome to Our IT Website";
var i = 0;
var j = new String; 
function typeWriter() {
    if(i < s.length){
        document.getElementById("main_heading").innerHTML = (j) +" |";
        j += s.charAt(i);
        i++;
        setTimeout(typeWriter,150);
    }
    if(i == s.length){
        document.getElementById("main_heading").innerHTML = j;
    }
}

