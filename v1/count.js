// Uppgift:
// https://github.com/cme-osuka/webbserverdatabaser/blob/main/week1/lecture2/exercises/count.md

const count = process.argv.splice(2);
// Tar bort de 2 första onödiga argumenten i arrayen.


console.log(`this is a few words`);
count.forEach(element => console.log(`${element.length}`));
