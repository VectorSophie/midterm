const assert = require('assert')
//1
function loopFibonacci (m) {
    const arr = [0,1]
    for (const i = 2; i<= m; i++){
        arr = arr[m-1] + arr[m-2]
    }
    return loopFibonacci
}
function recurFibonacci(n) {
    if (n <= 1) return 1
    return recurFibonacci(m-1) + recurFibonacci(m-2)
}
function memoFibonacci (o, memo = {}) {
    if(memo[o]) return memo[o]
    if (o <= 1) return 1
    return memo[o] = memoFibonacci(o-1, memo) + memoFibonacci(o-2, memo)
}
//2
function range(start, end, step = start > end ? -1 : 1) {
    let arr = []

    if (step === 0 || start === end) return [start]

    if ((start-end) * step > 0) return arr

    if (end === undefined) {
        if (start > 0) {
            end = start
            start = 1
        }
        else if (start < 0) {
            end = -1
        }
        else if (start === 0) {
            return [0]
        }
    }
    for (let num = start; step > 0 ? num <= end : num >= end; num += step) {
        arr.push(num)
    }
    return arr
}
//3
Array.prototype.sortBy = function (input) {
    const [key, order = 'asc'] = input.split(':')
    return this.sort((a, b) => {
        if (a[key] < b[key]) return order === 'asc' ? -1 : 1
        if (a[key] > b[key]) return order === 'asc' ? 1 : -1
        return 0
    })
}
//4
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }
    if (Array.isArray(obj)) {
      return obj.map(item => deepCopy(item));
    }
    if (obj instanceof Set) {
      return new Set([...obj].map(item => deepCopy(item)));
    }
    if (obj instanceof Map) {
      return new Map([...obj].map(([key, value]) => [deepCopy(key), deepCopy(value)]));
    }
    if (obj instanceof WeakSet || obj instanceof WeakMap) {
      return obj; 
    }
    const copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    const symbols = Object.getOwnPropertySymbols(obj);
    for (const sym of symbols) {
      copy[sym] = deepCopy(obj[sym]);
    }
    return copy;
}
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
            return `[${choMap[char]}]`;
        } else {
            return char;
        }
    }).join('');
    const regex = new RegExp(pattern);
    return arr.filter((item) => item.search(regex) !== -1);
}
