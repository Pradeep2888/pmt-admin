function getDaysLeft(dueDate) {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);

    // Calculate the difference in time between the two dates
    const timeDifference = dueDateObj - currentDate;

    // Convert the time difference from milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

    if (daysLeft > 0) {
        return `${daysLeft} Days Left`;
    } else if (daysLeft === 0) {
        return "Due Today";
    } else {
        return `${Math.abs(daysLeft)} Days Overdue`;
    }
}

export default getDaysLeft;
