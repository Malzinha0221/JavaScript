//17. Imprimir os 10 primeiros números da sequência de Fibonacci
function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var numerosFibonacci = fibonacci(10); // Calcula os 10 primeiros números da sequência
console.log("Os 10 primeiros números da sequência de Fibonacci são: " + numerosFibonacci.join(", "));
