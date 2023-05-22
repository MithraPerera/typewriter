const sentence = "hello there from lighthouse labs";
let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, i * 50) // <= 1s delay to make it noticeable. Can dial it down later.
  i += 1;
}

setTimeout(() => {
  console.log();
}, i * 50);