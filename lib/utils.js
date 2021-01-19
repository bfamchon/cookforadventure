export const byDate = (a, b) => {
    const aDate = a.date.split('/').reverse().join('');
    const bDate = b.date.split('/').reverse().join('');
    return bDate.localeCompare(aDate);
};
