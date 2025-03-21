import { useCallback } from "react";

const useFormatDateRange = () => {
    const formatDateRange = useCallback((createdAt, dueDate) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // Parse the dates
        const createdDate = new Date(createdAt);
        const dueDateObj = new Date(dueDate);

        // Extract day and month
        const createdDay = createdDate.getDate();
        const createdMonth = months[createdDate.getMonth()];
        const dueDay = dueDateObj.getDate();
        const dueMonth = months[dueDateObj.getMonth()];

        // Check if months are the same
        if (createdMonth === dueMonth) {
            return `${createdDay} ${createdMonth} - ${dueDay} ${dueMonth}`;
        } else {
            return `${createdDay} ${createdMonth} - ${dueDay} ${dueMonth}`;
        }
    }, []);

    return { formatDateRange };
};

export default useFormatDateRange;
