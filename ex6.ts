//6
export const promiseAllSettled = (arr: Promise<any>[]): Promise<{ status: 'fulfilled'; value: any } | { status: 'rejected'; reason: any }[]> => {
    const promiseArr: { status: 'fulfilled'; value: any } | { status: 'rejected'; reason: any }[] = [];
    return new Promise(resolve => {
        arr.forEach((promise, idx) =>
            promise
                .then(res => {
                    promiseArr[idx] = { status: 'fulfilled', value: res };
                })
                .catch(err => {
                    promiseArr[idx] = { status: 'rejected', reason: err };
                })
                .finally(() => {
                    if (promiseArr.length === arr.length) resolve(promiseArr);
                }),
        );
    });
};

export const randTime = <T>(val: T): Promise<T> =>
    new Promise(resolve => setTimeout(resolve, Math.random() * 1000, val));
