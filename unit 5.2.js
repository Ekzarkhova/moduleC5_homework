const parser = new DOMParser();


const str = `
    <list>

    <student>
        <name>Ivan Ivanov </name>
        <age>35</age>
        <prof>teacher</prof>
        <lang>en</lang>
    </student>
    <student>
        <name> Пётр Петров</name>
        <age>58</age>
        <prof>driver</prof>
        <lang>ru</lang>
    </student>

</list>
`;

const xmlDOM = parser.parseFromString(str, 'text/xml');
const students = xmlDOM.querySelectorAll("student");

const result = [];

students.forEach((item) => {
    const name = item.querySelector("name");
    const age = item.querySelector("age");
    const prof = item.querySelector("prof");
    const lang = item.querySelector("lang");

    result.push({
        name: name.textContent,
        age: age.textContent,
        prof: prof.textContent,
        lang: lang.textContent,
    });
});


console.log(result);