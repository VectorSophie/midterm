//5 
function searchByKoreanInitialSound(arr, init) {
    const choMap = {
        ㄱ: '가-깋',
        ㄲ: '까-낗',
        ㄴ: '나-닣',
        ㄷ: '다-딯',
        ㄸ: '따-띻',
        ㄹ: '라-맇',
        ㅁ: '마-밓',
        ㅂ: '바-빟',
        ㅃ: '빠-삫',
        ㅅ: '사-싷',
        ㅆ: '싸-앃',
        ㅇ: '아-잏',
        ㅈ: '자-짛',
        ㅉ: '짜-찧',
        ㅊ: '차-칳',
        ㅋ: '카-킿',
        ㅌ: '타-팋',
        ㅍ: '파-핗',
        ㅎ: '하-힣',
    };

    const pattern = init.split('').map((char) => {
        if (choMap[char]) {
            return `[${choMap[char]}]`
        } else {
            return char
        }
    }).join('')
    const regex = new RegExp(pattern)
    return arr.filter((item) => regex.test(item))
}
module.exports = { searchByKoreanInitialSound };