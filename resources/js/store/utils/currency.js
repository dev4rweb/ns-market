export const getCurrency = type_id => {
    let currency = 'RUB'
    switch (type_id) {
        case 4:
            currency = 'BMC';
            break;
        case 5:
        case 6:
            currency = 'PVC'
            break;
    }
    return currency
};
