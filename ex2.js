function range(start, end, step = start > end ? -1 : 1) {
    let arr = []
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
    if (step === 0 || start === end) return [start]
    if ((start-end) * step > 0) return arr
    for (let num = start; step > 0 ? num <= end : num >= end; num += step) {
        arr.push(Number(num.toFixed(10)))
    }
    return arr
}
module.exports = { range };