
export const payWithCreditCardApi = dataCard => {
    const response = {
        data: {
            dataCard,
            success: true
        }
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(response)
        }, 2000);
    })
};
