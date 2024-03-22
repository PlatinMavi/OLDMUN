var element = document.getElementById("EasterClick");
var counter = 0

function onClick(){
    counter = counter+1
    
    if (counter === 3){
        element.innerHTML = "Our Team But... Cooler😎"
        var images = document.getElementsByClassName("photoEaster")
        
        for (let index = 0; index < images.length; index++) {
            const element = images[index];

            element.src = (element.src.slice(0,-4))+"Easter.jpg"
        }
    }
}
// Attach click event listener
element.addEventListener("click", function() {
    // Display an alert when clicked
    onClick()
});