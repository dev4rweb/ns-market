export const jumpToPage = (fullPath, depth) => {
    const urlParts = fullPath.split('/')
    let jumpPath = ''
    urlParts.forEach((part, i) => {
        if (i < depth) jumpPath += `${part}/`
    });
    return jumpPath
};
