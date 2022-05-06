const parsers = new DOMParser();

const chushniya = 
`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>-
    <prof>driver</prof>
  </student>
</list>`

const chushniyaXML = parsers.parseFromString(chushniya, "text/xml");



const listNode = chushniyaXML.querySelector("list");
let chiLEN = listNode.children.length;


for (let i = 0; i < chiLEN; i++) {
  const studens = listNode.querySelectorAll("student")[i];
  const name1 = studens.querySelector("name");
  const firstname = name1.querySelector("first");
  const secondname = name1.querySelector("second");
  const age = studens.querySelector("age"); 
  const prof = studens.querySelector("prof");
  const nameAttr3 = name1.getAttribute('lang');
  
 const result = { 
    // student: student1,
    name: (`${firstname.textContent} ` + ` ${secondname.textContent}`),
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: nameAttr3,
  }; 
  
  console.log('student:', result);

}
