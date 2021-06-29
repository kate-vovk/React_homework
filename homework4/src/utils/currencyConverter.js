// const usd = 28;

export function toUAH(value){
    return value * 28;
}
export function toEUR(value){
    return value * 0.84;
}

// export function convert(value, currency, converter){
//     const price = parseFloat(value);
//     if(Number.isNaN(price)) {
//         return '';
//     }
//     const output = converter(price);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }