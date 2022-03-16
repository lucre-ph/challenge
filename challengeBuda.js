// Retornar valores de posicion Xava y de mediana
function getSomething(X, array) {
    let arrayLength = array.length;

    array.sort((a, b) => a - b);
    
    let xPositionInt =
        array[X-1] ? array[X-1] : "try another X positive number";

    let median =
        arrayLength%2 == 0
            ? array.slice(arrayLength/2-1, arrayLength/2+1).reduce((a,b) => a+b)/2
            : array.slice((arrayLength/2), arrayLength/2+1)[0];

    return {xPositionInt, median};
}

console.log(getSomething(3, [-9, 598, 5, -40, 12, 1]));