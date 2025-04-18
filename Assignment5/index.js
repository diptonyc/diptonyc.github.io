// A: BMI Comparison
let lucasMass = 78;
let lucasHeight = 1.69;
let peterMass = 92;
let peterHeight = 1.95;

let lucasBMI = lucasMass / (lucasHeight * lucasHeight);
let peterBMI = peterMass / (peterHeight * peterHeight);

let lucasHigherBMI = lucasBMI > peterBMI;

console.log(`The BMI of Peter is ${peterBMI.toFixed(1)}, The BMI of Lucas is ${lucasBMI.toFixed(1)}, Peter’s BMI is higher than Lucas’s BMI that is ${!lucasHigherBMI}`);

// B: Temperature Converter
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C is ${fahrenheit.toFixed(1)}°F`);

fahrenheit = 77;
celsius = (fahrenheit - 32) * 5/9;
console.log(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);

// C: Improved BMI Message
if (lucasBMI > peterBMI) {
  console.log(`Lucas' BMI (${lucasBMI.toFixed(1)}) is higher than Peter’s (${peterBMI.toFixed(1)})!`);
} else {
  console.log(`Peter's BMI (${peterBMI.toFixed(1)}) is higher than Lucas’ (${lucasBMI.toFixed(1)})!`);
}

// D: Temperature Converter Functions

const ConvertCelsiusToFahrenheit = (c) => {
  let f = (c * 9/5) + 32;
  console.log(`${c}°C is ${f.toFixed(1)}°F`);
};

const ConvertFahrenheitToCelsius = (f) => {
  let c = (f - 32) * 5/9;
  console.log(`${f}°F is ${c.toFixed(1)}°C`);
};

// Test the functions
ConvertCelsiusToFahrenheit(100);
ConvertCelsiusToFahrenheit(0);
ConvertCelsiusToFahrenheit(10);

ConvertFahrenheitToCelsius(32);
ConvertFahrenheitToCelsius(10);
ConvertFahrenheitToCelsius(102);
