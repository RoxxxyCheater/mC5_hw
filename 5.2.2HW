const mojBro = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`;

const chitaem = JSON.parse(mojBro);
// console.log(chitaem);
const list = chitaem.list;
// console.log(list);


let listnames = [];
for (let i = 0; i < list.length; i++) {
  const result = 
  listnames.push({
    name: chitaem.list[i].name,
    age: Number(list[i].age),
    prof: chitaem.list[i].prof,
  }
  );
}

let ress = {
  list: listnames
}
console.log(ress)


