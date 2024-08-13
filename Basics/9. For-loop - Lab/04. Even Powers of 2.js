function printEvenPowersOfTwo(n) {
    for (let i = 0; i <= n; i += 2) {
      const powerOfTwo = Math.pow(2, i);
      console.log(powerOfTwo);
    }
  }