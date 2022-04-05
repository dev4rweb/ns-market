export const orderStatuses = orderStatusNum => {
    switch (orderStatusNum) {
        case 0:
            return 'В корзине'
        case 1:
            return 'В черновиках'
        case 2:
            return 'Оплачен'
        case 3:
            return 'Собран'
        case 4:
            return 'Упакован'
        case 5:
            return 'Готовый к отправке'
        case 60:
            return 'В пути'
        case 70:
            return 'Доставлен'
        case 80:
            return 'Получен'
        case 90:
            return 'Завершен с примечаниями'
        case 100:
            return 'Завершен'
        case 110:
            return 'STATUS_RETURN_TO_PACK'
        case 120:
            return 'STATUS_RETURN_FROM_PACK'
        default:
            return 'Unknown'
    }
};
