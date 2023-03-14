// Get panel through DOM
const panels = document.querySelectorAll('.panel')

// Add classList of active when click
panels.forEach((panel)=>
panel.addEventListener('click',()=>
{
    removeActiveClass();
    panel.classList.add('active')
}
));

// Remove active class function
function removeActiveClass()
{
    panels.forEach(panel => panel.classList.remove('active'))
}