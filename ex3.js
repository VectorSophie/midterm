Array.prototype.sortBy = function (input) {
    const criteria = input.split(',').map(criterion => {
        const [key, order = 'asc'] = criterion.split(':');
        return { key, order };
    });

    return this.sort((a, b) => {
        for (const { key, order } of criteria) {
            const result = (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0));
            if (result !== 0) {
                return order === 'asc' ? result : -result;
            }
        }
        return 0;
    });
};