const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');

const promiseToReadTheFile = fs.promises.readFile(filePath);

promiseToReadTheFile
  .then(file => file.toString('utf8'))
  .then(textOfTheFile => textOfTheFile.split('\n').slice(1))
  .then(linesWithoutHeader => linesWithoutHeader.map(line => {
    const [name, feito] = line.split(';')
    return {
      name,
      feito: feito.trim() === 'true'
    }
  }))
  .then(listOfTasks => console.log(listOfTasks))
  .catch(error => console.log('Deu errado!', error))