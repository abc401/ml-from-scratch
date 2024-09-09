import { LinearRegression } from "./linear-regression";

const N_INDEPENDENT_VARIABLES = 2;
const SAMPLE_SIZE = 10;

const x = new Array<Float64Array>();
for (let i = 0; i < N_INDEPENDENT_VARIABLES; i++) {
  x.push(new Float64Array(SAMPLE_SIZE));
}
const y = new Float64Array(SAMPLE_SIZE);

for (let featureIdx = 0; featureIdx < N_INDEPENDENT_VARIABLES; featureIdx++) {
  const independentVar = x[featureIdx];
  for (let i = 0; i < SAMPLE_SIZE; i++) {
    independentVar[i] = (i + 1) * (featureIdx + 1);
  }
}

for (let i = 0; i < y.length; i++) {
  y[i] = (i + 1) * 10;
}

const model = new LinearRegression();

document.addEventListener("keypress", () => {
  model.fit(x, y);
});

console.log("X: ", x);
console.log("y: ", y);
