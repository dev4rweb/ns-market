export const declensionRusAge = (age, isCoincidenceArr = false) => {
    const declensionAge = ['год', 'года', 'лет'];
    const declensionCoincidence = ['совпадение', 'совпадения', 'совпадений']
    const cases = [2, 0, 1, 1, 1, 2];
    if (isCoincidenceArr) {
        return declensionCoincidence[
            (age % 100 > 4 && age % 100 < 20) ? 2 :
                cases[(age % 10 < 5) ? age % 10 : 5]
            ];
    }
    return declensionAge[
        (age % 100 > 4 && age % 100 < 20) ? 2 :
            cases[(age % 10 < 5) ? age % 10 : 5]
        ];
};
