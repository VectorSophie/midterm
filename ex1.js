function loopFibonacci(m) {
    if (m === 0) return 0; 
    if (m === 1) return 1; 
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= m; i++) {
        let temp = curr; 
        curr = prev + curr; 
        prev = temp; 
    }
    return curr; 
}
function recurFibonacci(n) {
    if (n <= 1) return n
    return recurFibonacci(n-1) + recurFibonacci(n-2)
}
function memoFibonacci (o, memo = {}) {
    if(memo[o]) return memo[o]
    if (o <= 1) return o
    return memo[o] = memoFibonacci(o-1, memo) + memoFibonacci(o-2, memo)
}
module.exports = { loopFibonacci, recurFibonacci, memoFibonacci };
