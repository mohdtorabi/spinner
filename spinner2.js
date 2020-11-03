const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n' ];
let time = 0;
for (const char of spin) {
  time += 200;
  setTimeout(() => {
    return process.stdout.write(char);
  }, time);
}