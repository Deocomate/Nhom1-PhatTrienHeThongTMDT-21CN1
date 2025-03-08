// utils/NumberUltils.js
export const formatNumber = (number) => {
    if (typeof number !== 'number') {
        return '0'; // Or handle the error appropriately
    }
    return new Intl.NumberFormat('vi-VN', { // Format as Vietnamese currency
        style: 'currency', currency: 'VND',
    }).format(number);
};