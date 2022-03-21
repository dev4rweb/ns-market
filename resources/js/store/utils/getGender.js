export const getGender = gender => {
    switch (gender) {
        case 'Ж':
            return 'женский аромат'
        case 'М':
            return 'мужской аромат'
        default:
            return 'унисекс'
    }
};
