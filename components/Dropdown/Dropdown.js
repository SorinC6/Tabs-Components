class Dropdown {
    constructor(element) {

        // Assign this.element to the dropdown element
        this.element = element;
        //console.log(this.element);

        // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
        this.button = this.element.querySelector('.dropdown-button');
        //console.log(this.button);
        // assign the reference to the ".dropdown-content" class found in the dropdown element
        this.content = document.querySelector('.dropdown-content');
        //console.log(this.content);
        // Add a click handler to the button reference and call the toggleContent method.
        this.button.addEventListener('click', (e) => this.toggleContent(e))

    }

    toggleContent() {
        console.log(this.content);
        //Toggle the ".dropdown-hidden" class off and on
        this.content.classList.toggle('dropdown-hidden');
        event.stopPropagation();

        

    }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));

const drop=document.querySelector('.dropdown-content');
const body = document.querySelector('body');
body.addEventListener('click', (e)=>{
    //e.stopPropagation();
    drop.classList.add('dropdown-hidden');
    //TweenMax.to('.dropdown-content',2,{opacity:0})
})


const box=document.querySelectorAll('.box');
box.forEach(item=>{
    item.addEventListener('mouseover', ()=>{
        TweenMax.to(box,5,{color:'blue',backgroundColor:'yellow'})
    })
    item.addEventListener('mouseout', ()=>{
        TweenMax.to(box,5,{color:'white',backgroundColor:'purple'})
    })
})

