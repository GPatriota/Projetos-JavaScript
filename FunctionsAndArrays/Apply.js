const person = {
    nome: 'Renan',
    idade: 30
  }
  
  function shout(prefixo) {
    console.log(prefixo, this.nome);
  }
  
  shout('Olaaaa')
  shout.apply(person, ['Olaaaa']);
  shout.call(person, 'Olaaaa');