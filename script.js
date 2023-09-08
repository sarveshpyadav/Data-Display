function updateDateTime() { 

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // array
    
    const currentDate = new Date(); // represent current date and time
    
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
        // retrieves current day as an index from 'Date' to get current day from 'daysOfWeek'
    
    const currentUTC = currentDate.getTime(); // represent current UTC time in milliseconds

    document.getElementById("currentDay").textContent = currentDay; 
    
    document.getElementById("currentUTC").textContent = currentUTC;
} 

updateDateTime(); // calling the function once to display current day and UTC time

setInterval(updateDateTime, 1000); // timer to call the function every 1000 milliseconds (1 second)