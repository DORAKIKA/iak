export const formatDateTime = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month > 9 ? month : '0'+month}-${day > 9 ? day : '0'+day}`;
}