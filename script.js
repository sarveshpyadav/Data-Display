function updateDayAndTime() {
            
    const currentDayOfWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    const today = new Date();
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const dayOfWeek = daysOfWeek[today.getDay()]; // retrieves current day as an index from 'Date' to get current day from 'daysOfWeek'

    
    currentDayOfWeek.textContent = dayOfWeek;
    currentUTCTime.textContent = today.getTime(); // represent current UTC time in milliseconds
}

updateDayAndTime(); // calling the function once to display current day and UTC time

setInterval(updateDayAndTime, 1000); // timer to call the function every 1000 milliseconds (1 second)
