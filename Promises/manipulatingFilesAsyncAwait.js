const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');

async function searchFile() {
  try {
    const file = await fs.promises.readFile(filePath);
    const fileText = file.toString('utf8');
    console.log(fileText);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Finalizou!');
  }
}

searchFile();