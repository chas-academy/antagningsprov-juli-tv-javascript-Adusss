function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument

  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 32 },
    { name: "Clara", age: 45 },
    { name: "David", age: 29 },
    { name: "Eva", age: 38 },
  ];

  function printNamesOver30(array) {
    for (let person of array) {
      if (person.age > 30) {
        console.log(person.name);
      }
    }
  }

  printNamesOver30(people);
}

module.exports = { uppg8 };
