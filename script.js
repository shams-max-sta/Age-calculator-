


function calculateAge() {
    const dob = document.getElementById("dob").value;
    const endDate = document.getElementById("endDate").value;

    const result = document.getElementById("result");
    const lifeTime = document.getElementById("lifeTime");

    if (!dob || !endDate) {
        result.innerHTML = "Please select both dates.";
        lifeTime.innerHTML = "";
        return;
    }

    const start = new Date(dob);
    const end = new Date(endDate);

    if (end < start) {
        result.innerHTML = "End date cannot be earlier than date of birth.";
        lifeTime.innerHTML = "";
        return;
    }

    // Calculate age difference
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
        months--;
        days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML =
        `Age from <b>${dob}</b> to <b>${endDate}</b>:<br>` +
        `<b>${years}</b> years, <b>${months}</b> months, <b>${days}</b> days`;

    // Lifetime in hours, minutes, seconds
    const ms = end - start;
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    lifeTime.innerHTML = `
        Total time lived:<br>
        <b>${hours.toLocaleString()}</b> hours<br>
        <b>${minutes.toLocaleString()}</b> minutes<br>
        <b>${seconds.toLocaleString()}</b> seconds
    `;
}