// create a div container on html document and create 0 to 100 numbers dynamically
// and append to the container div. even nos bg is green, odd is yellow and prime nos 
// bg is red

let container;
for (let i = 0; i <= 100; i++) {
    container = document.createElement('div');
    container.textContent = i;
    container.style.paddingLeft = '1em';
    container.style.paddingRight = '1em';
    container.style.paddingTop = '0.5em';
    container.style.paddingBottom = '0.5em';
    container.style.fontSize = '1.2em';
    container.style.width = '5em'
    container.style.display = 'inline';
    container.style.margin = '0.1em'

    // function to check if a number is a prime number
    function isPrime(number) {
        if (number <= 1) return false;
        if (number <= 3) return true;
  
        if (number % 2 === 0 || number % 3 === 0) return false;
  
        for (let i = 5; i * i <= number; i += 6) {
          if (number % i === 0 || number % (i + 2) === 0) return false;
        }
  
        return true;
      }

    if (isPrime(i)) {
       container.style.backgroundColor = 'red';
    }
    else if (i % 2 === 0) {
        container.style.backgroundColor = 'green';
    }
    else if (i % 2 !== 0) {
        container.style.backgroundColor = 'yellow';
    }

    divElement = document.getElementById('containerelement');
    divElement.appendChild(container);
    
}