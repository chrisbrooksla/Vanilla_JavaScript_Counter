
// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");



// we select all the buttons, then we use forEach to loop over those buttons
btns.forEach(function (btn) {

      // for each button, we add an event listener (click) 
      btn.addEventListener("click", function(e){

            // then we use the event object (e) to get the currentTarget and it's class
      // so, "give me the class name of whatever button I am pressing"
            const styles = e.currentTarget.classList;

            // so if the item that we clicked on contains the class "decrease", we want to subtract 1 from the count
            if(styles.contains('decrease')){
                  count--;
            }
            // if the item contains the class "increase", add 1 to count
            else if(styles.contains('increase')){
                  count ++;
            }
            // if the button contains neither "decrease" or "increase", (it must be the reset button), make the count = 0;
            else{
                  count = 0;
            }

            // change the color of the counter number
            if(count > 0){
                  value.style.color = "green";
            }
            if(count < 0){
                  value.style.color = "red";
            }
            if(count === 0){
                  value.style.color = "#222"
            }
            value.textContent = count;
      })
})