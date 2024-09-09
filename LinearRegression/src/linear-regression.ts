export class LinearRegression {
  learningRate = 0.005;
  weights = new Float64Array(0);

  fit(x: Array<Float64Array>, y: Float64Array) {
    if (x.length === 0) {
      throw Error("No features provided");
    }

    for (const feature of x) {
      if (feature.length != y.length) {
        throw Error("Inconsistent sample size");
      }
    }

    if (this.weights.length != x.length + 1) {
      this.weights = new Float64Array(x.length + 1);
    }

    console.log("weights: ", this.weights);
    const errorGradient = new Float64Array(this.weights.length);

    for (let sampleIdx = 0; sampleIdx < y.length; sampleIdx++) {
      let predicted = 0;
      for (let i = 0; i < this.weights.length - 1; i++) {
        predicted += this.weights[i] * x[i][sampleIdx];
      }
      predicted += this.weights[this.weights.length - 1];

      const error = y[sampleIdx] - predicted;
      for (let i = 0; i < this.weights.length - 1; i++) {
        errorGradient[i] += error * -x[i][sampleIdx];
      }
      errorGradient[errorGradient.length - 1] = error * -1;
    }
    console.log("Error Gradient: ", errorGradient);
    for (let i = 0; i < errorGradient.length; i++) {
      errorGradient[i] *= 2 / y.length;
    }

    console.log("Error Gradient: ", errorGradient);
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] -= this.learningRate * errorGradient[i];
    }

    console.log("Updated weights: ", this.weights);
  }
}

// export class LinearRegression {
//   learningRate = 0.05;
//   l = 0;
//   m = 0;
//   c = 0;

//   fit(x1: Float64Array, x2: Float64Array, y: Float64Array) {
//     if (x1.length === 0) {
//       throw Error("No features provided");
//     }

//     if (x1.length != y.length || x1.length != x2.length) {
//       throw Error();
//     }

//     console.log("weights: ", {
//       l: this.l,
//       m: this.m,
//       c: this.c,
//     });

//     let lErrorGradient = 0;
//     let mErrorGradient = 0;
//     let cErrorGradient = 0;

//     for (let sampleIdx = 0; sampleIdx < y.length; sampleIdx++) {
//       let predicted = this.l * x1[sampleIdx] + this.m * x2[sampleIdx] + this.c;

//       const error = y[sampleIdx] - predicted;
//       lErrorGradient += error * -x1[sampleIdx];
//       mErrorGradient += error * -x2[sampleIdx];
//       cErrorGradient += error * -1;
//     }
//     lErrorGradient /= 2 * y.length;
//     mErrorGradient /= 2 * y.length;
//     cErrorGradient /= 2 * y.length;

//     this.l -= this.learningRate * lErrorGradient;
//     this.m -= this.learningRate * mErrorGradient;
//     this.c -= this.learningRate * cErrorGradient;

//     console.log("Error Gradient: ", {
//       l: lErrorGradient,
//       m: mErrorGradient,
//       c: cErrorGradient,
//     });
//     console.log("Updated weights: ", {
//       l: this.l,
//       m: this.m,
//       c: this.c,
//     });
//   }
// }
