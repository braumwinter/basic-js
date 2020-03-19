module.exports = function transform(arr) {
    toString = {}.toString;
    if (toString.call(arr) != "[object Array]") {
        throw Error;
    }

    let flagsWork = false;

    if (arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-next') || arr.includes('--double-prev')) {
        flagsWork = true;
    }

    if (!flagsWork) {
        return arr;
    }

    let rezult = [];

    for (let index = 0; index < arr.length; index++) {
        if ((arr[index] == '--double-prev') && (index != 0)) {
            rezult.push(arr[index - 1]);
        } else if ((arr[index] == '--double-next') && (index != arr.length - 1)) {
            rezult.push(arr[index + 1]);
        } else if ((arr[index] == '--discard-prev') && (index != 0)) {
            rezult.pop();
        }
         else if(arr[index] != '--double-prev' && arr[index] != '--double-next' && arr[index] != '--discard-prev' && arr[index] != '--discard-next'){
            rezult.push(arr[index]);

            if((arr[index - 1] == '--discard-next') && (index != arr.length - 1)) {
                rezult.pop();
            }
        }
    }

    return rezult;
};