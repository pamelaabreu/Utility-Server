const response = (obj, sumString, sum) => {
    if (isNaN(sum)) {
        return {
            error: 'You passed a non-number value into the parameters.'
        }
    }

    return {
        input: obj,
        sumString,
        sum
    };
}

const math = {};

math.add = (obj) => {

    let values = Object.values(obj);
    let sumString = '';
    let sum = 0;
    let i = 0;

    for (const numbers of values) {
        sumString += `${numbers} + `
        sum += numbers;
        i += 1;
        if (values.length - 1 === i) {
            sumString += `${numbers}`
        }
    }

    return response(obj, sumString, sum);

}

math.multiply = (obj) => {
    let values = Object.values(obj);
    let sumString = '';
    let sum = 1;
    const i = 0;
    for (const numbers of values) {
        sumString += `${numbers} * `
        sum *= numbers;
        if (values.length - 1 === i) {
            sumString += `${numbers}`
        }
    }

    return response(obj, sumString, sum);
}

module.exports = math;