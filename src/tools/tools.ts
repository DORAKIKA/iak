export const formatDateTime = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month > 9 ? month : '0'+month}-${day > 9 ? day : '0'+day}`;
}

export const count = (str: string) => {
    // 假装很正式，其实这些字符都是我即兴输的。
    let rep = /[~|`|!|@|#|\$|%|\^|&|*|\(|\)|\-|=|_|\+|\[|\]|\{|\}|:|;|'|"|,|\.|<|>|/|?|\s|：|；|（|）|“|‘|？|·|！|￥|……|【|】]/g
    let s = str.replace(rep, '');
    return s.length;
}