process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const deg = process.stdin.read();

  if (deg) {
    process.stdout.write(`Your name is: ${deg}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
