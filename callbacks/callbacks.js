function first() {
  setTimeout(() => console.log(1), 500);
}

function second() {
  setTimeout(() => console.log(2));
}

first();
second();

function learnJS(lang, callback) {
  console.log(`I learn: ${lang}`);
  callback();
}

function done() {
  console.log('I end this lesson');
}
learnJS('JS', done);
