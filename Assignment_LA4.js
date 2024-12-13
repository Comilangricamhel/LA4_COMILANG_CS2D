let queue = [];
const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

for (let i = 0; i < customers.length; i++) {
  queue.push({ name: customers[i], number: i + 1 });
}
console.log("Initial Queue:", queue);

// Process the queue
while (queue.length > 0) {
  let queueStatus = queue.map(c => `${c.number}: ${c.name}`).join("\n");
  alert("Current Queue:\n" + queueStatus);

  // Ask for a number to service
  let input = prompt("Enter the number to service the customer:");
  let number = parseInt(input);

  // Find and remove customer for the queue
  let index = queue.findIndex(c => c.number === number);
  if (index !== -1) {
    alert(`Serviced: ${queue[index].name}`);
    queue.splice(index, 1); 
    console.log("Updated Queue:", queue);
  } else {
  }
}
