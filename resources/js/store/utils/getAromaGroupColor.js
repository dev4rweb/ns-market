export const getAromaGroupColor = aromaCode => {
    const firstNumber = aromaCode.charAt(0)
    switch (firstNumber) {
        case 'C':
            return '#EBAA3C'
        case 'D':
            return '#86B649'
        case 'K':
            return '#D75C34'
        default:
            return '#3D8BCC'
    }
};
