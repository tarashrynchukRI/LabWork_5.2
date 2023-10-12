// lab_5.2
// Гринчук Тарас
// Лабораторна робота № 5.2
// Обчислення суми ряду Тейлора за допомогою функцій
// Варіант №4

let xp,xk,x,dx,eps,a = 0,R = 0,s = 0,n = 0;

xp = parseFloat(prompt("xp = "));
xk = parseFloat(prompt("xk = "));
dx = parseFloat(prompt("dx = "));
eps = parseFloat(prompt("eps = "));


function S(x, eps, n, s) {
   n = 0;
   a = x;
   s = a;
   do {
      n++;
      a = A(x, n, a);
      s += a;
   } while (Math.abs(a) >= eps);
   return [s, n];
}
function A(x, n, a) {
   R = -((n * x) / (n + 1));
   a *= R;
   return a;
}

console.log(`|\t\tx\t|    |\t\tln(x+1)\t\t\t|    |\t\t\tS\t\t\t\t|    |\t\tn\t\t|`);

x = xp;

while (x <= xk) {
   [s, n] = S(x, eps, n, s);
   console.log(`|\t${x.toFixed(3)}\t|    |\t${Math.log(x + 1)}\t|    |\t${s}\t|     |\t${n}\t|`);
   x += dx;
}