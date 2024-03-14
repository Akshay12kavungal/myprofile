
// Function to calculate duration of work experience
function calculateExperience() {
    // Start dates and end dates of work experiences
    var startDate1 = new Date("21-Apr-2023");
    var endDate1 = new Date("21-Oct-2023");
    var startDate2 = new Date("Sep 2022");
    var endDate2 = new Date("Jan 2023");

    // Calculate duration for each work experience
    var duration1 = calculateDuration(startDate1, endDate1);
    var duration2 = calculateDuration(startDate2, endDate2);

    // Update the HTML with calculated durations
    document.getElementById("start-date1").innerText += " (" + duration1 + ")";
    document.getElementById("end-date1").innerText += " (" + duration1 + ")";
    document.getElementById("start-date2").innerText += " (" + duration2 + ")";
    document.getElementById("end-date2").innerText += " (" + duration2 + ")";
}

// Function to calculate duration between start and end dates
function calculateDuration(startDate, endDate) {
    var years = endDate.getFullYear() - startDate.getFullYear();
    var months = endDate.getMonth() - startDate.getMonth();
    if (months < 0 || (months === 0 && endDate.getDate() < startDate.getDate())) {
        years--;
        months += 12;
    }
    return years + " years " + months + " months";
}

// Call the function to calculate and update experience durations
calculateExperience();
