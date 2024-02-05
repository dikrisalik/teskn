function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    console.log(output || i);
  }
}

// Uji FizzBuzz untuk angka 15
fizzBuzz(15); //ubah angka sesuai jumlah deret yang ingin ditampilkan
