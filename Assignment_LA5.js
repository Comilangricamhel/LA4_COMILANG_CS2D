function generateHash(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }
  return hash % 10; // The limit hash table size
}
let hashTable = {};
const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Add customers to the hash table
customers.forEach((name, index) => {
  let hash = generateHash(name);
  hashTable[hash] = { name: name, number: index + 1 };
});
console.log("Initial Hash Table:", hashTable);

// The process of hash table
while (Object.keys(hashTable).length > 0) 
  let tableStatus = Object.keys(hashTable)
    .map(key => `${hashTable[key].number}: ${hashTable[key].name}`)
    .join("\n");
  alert("Current Hash Table:\n" + tableStatus);

  let input = prompt("Enter the number to service the customer:");
  let number = parseInt(input);

  // Find and remove customer from the hash table
  let key = Object.keys(hashTable).find(
    key => hashTable[key].number === number
  );
  if (key) {
    alert(`Serviced: ${hashTable[key].name}`);
    delete hashTable[key]; // Remove the customer from hash table
    console.log("Updated Hash Table:", hashTable);
  } else {
  }
}
