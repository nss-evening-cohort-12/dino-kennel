console.log('Hello there 🦖');

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
}

printToDom('#main', '<h2><i class="fas fa-cat"></i></h2>')
