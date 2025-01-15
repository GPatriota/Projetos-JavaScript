//basic fundament, foreach

const list = [1,2,3,4,5];

list.forEach((item)=> {
    console.log(item);
})


//filter
const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listParNumber = list.filter(element => {
  return (element % 2 === 0);
})

console.log(list);
console.log(listParNumber);


//map
class Person {
    constructor(nome) {
      this.nome = nome
    }
  }
  
  const list2 = [new Person('Renan'), new Person('Andreza'), new Person('Vitor'), new Person('José')];
  
  const listEmHtml = list.map(element => {
    return `<li>${element.nome}</li>`;
  });
  
  console.log(htmlList);


  //reduce
const list3 = [1,2,3,4,5,6,7,8,9,10]

const sumOfAllNumbers = list.reduce((previous, current) => {
  return previous + current
}, 0);

console.log(sumOfAllNumbers);

//join
const list4 = [{ name: 'Renan' }, { name: 'Andreza' }, { name: 'Vitor' }, { name: 'Amanda' }]

const elementsInHtml = list
  .filter(e => e.name.startsWith('A'))
  .map(e => `<li>${e.name}</li>`)
  .join('');

console.log(elementosEmHtml);
