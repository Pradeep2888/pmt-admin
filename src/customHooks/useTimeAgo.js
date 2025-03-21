import { useMemo } from "react";

const useTimeAgo = () => {
    const getTimeAgo = (createdAt) => {
        const createdDate = new Date(createdAt);
        const now = new Date();

        const diffInSeconds = Math.floor((now - createdDate) / 1000);

        if (diffInSeconds < 60) {
            return `${diffInSeconds} Sec ago`;
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} Min${minutes > 1 ? "s" : ""} ago`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} Hour${hours > 1 ? "s" : ""} ago`;
        } else {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} Day${days > 1 ? "s" : ""} ago`;
        }
    };

    return useMemo(() => ({ getTimeAgo }), []);
};

export default useTimeAgo;
