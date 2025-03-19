export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 30) {
        return `${diffDays} ngày trước`;
    } else if (diffDays <= 60) {
        return "1 tháng trước";
    } else {
        const months = Math.floor(diffDays / 30);
        return `${months} tháng trước`;
    }
};