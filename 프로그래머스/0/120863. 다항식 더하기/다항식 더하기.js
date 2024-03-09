function getResult(coefficients) {
    let result = "";
    
    if (coefficients.xTermSum > 0) {
        if (coefficients.xTermSum > 1) {
            result += coefficients.xTermSum;
        }
        result += "x";
    }
    
    if (coefficients.constantTermSum > 0) {
        if (coefficients.xTermSum > 0) {
            result += " + ";
        }
        result += coefficients.constantTermSum;
    }
    
    return result;
}

function solution(polynomial) {
    const terms = polynomial.split(" + ");
    const coefficients = terms.reduce(
        ({ xTermSum, constantTermSum }, currTerm) => {
            currTerm.at(-1) === "x"
                ? xTermSum += Number(currTerm.slice(0, -1)) || 1
                : constantTermSum += Number(currTerm);
            
            return { xTermSum, constantTermSum };
        },
        { xTermSum: 0, constantTermSum: 0 }
    );
    

    return getResult(coefficients);
}