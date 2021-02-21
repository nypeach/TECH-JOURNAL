var fibonacci = function (index) {
  if (index <= 1) {
    return 1;
  }
  return
    fibonacci(index - 1) +
    fibonacci(index - 2);
};

index fibonacci(2 - 2)
//==========================================================
index 2  fibonacci(index - 1)   1 + fibonacci(index - 2)
//==========================================================
 index 3  fibonacci(index - 1)
//==========================================================
 index 3  fibonacci(3)

1 1 2 3 5 8 13 21
0 1 2 3 4 5 6  7

// STACK BOTTOM /////