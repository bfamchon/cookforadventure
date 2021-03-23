
export const byDate = (a, b) => {
    const aDate = a.date.split('/');
    const bDate = b.date.split('/');
    const aModifiesDate = parseInt(`${aDate[2]}${aDate[0]}${aDate[1]}`, 10);
    const bModifiesDate = parseInt(`${bDate[2]}${bDate[0]}${bDate[1]}`, 10);

    return bModifiesDate - aModifiesDate;
};
