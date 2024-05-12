const n = 21;
const a = [];
for (let i = 1; i <= n; i++) {
  a[i] = 0;
}
for (let i = 0; i < 100000; i++) {
  const k = Math.trunc(Math.random() * n + 1);
  ++a[k];
}
console.log(Object.keys(a).map(k => `${k}: ${a[k]}`).join('\n'));