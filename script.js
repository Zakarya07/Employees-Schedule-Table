let yesOrNoOptions = document.querySelectorAll("tbody tr td");
const Sound = new Audio();
let employees_column = document.querySelector("table thead tr td"); // Only the first td (Employees)

// When we hover over the employees label, all the employees names are highlighted
employees_column.addEventListener("mouseover", (e)=>{
    document.querySelectorAll("table tbody tr td:first-child").forEach(element=>{
        element.style=`background-color:goldenrod;color:white;`;
    });     
})
employees_column.addEventListener("mouseleave", (e)=>{
    document.querySelectorAll("table tbody tr td:first-child").forEach(element=>{
        element.style=``;
    });     
})

yesOrNoOptions.forEach(option=>{

    // Set the option that are "no" to black by default
    if (option.innerText === "No") {
        option.classList.add("no");
    } 

    // Mouseover
    option.addEventListener("mouseover",()=>{
        if (option.textContent == "No") {
            option.textContent="Yes?"
            option.style="background-color:green;";
        }
    })

    // // Mouseleave
    option.addEventListener("mouseleave",()=>{
        if (option.textContent == "Yes?") {
            option.textContent="No"
            option.style="";
        }
    })
    
    option.addEventListener("click",(e)=>{
        
        // Mouseclick if Yes?
        if (option.textContent == "Yes?") {
            option.textContent= "Yes";
            option.style="";
            option.classList.remove("no");
            Sound.src="Sounds/Yes.mp3";
            Sound.volume=0.1;
            Sound.play();
        }
        
        else if (option.textContent == "Yes") {
            option.textContent= "No";
            option.classList.add("no");
            Sound.src="Sounds/No.mp3";
            Sound.volume=0.05;
            Sound.play();
        }
        
    })


})