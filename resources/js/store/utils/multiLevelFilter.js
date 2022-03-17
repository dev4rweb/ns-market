export const multiLevelFilter = (array, filters) => {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
        // validates all filter criteria
        return filterKeys.every(key => {
            // ignores non-function predicates
            if (typeof filters[key] !== 'function') return true;
            return filters[key](item[key]);
        });
    });
};
/*export const multiLevelFilter = (array, filters) => {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
        // validates all filter criteria
        return filterKeys.every(key => {
            // ignores an empty filter
            if (!filters[key].length) return true;
            return filters[key].find(filter => getValue(filter) === getValue(item[key]));
        });
    });
};*/
