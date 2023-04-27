console.clear();
import { School } from "./School.js";

const zuikiu = new School('Zuikiu');
console.log(zuikiu);

console.log(zuikiu.addStudent('Petras'));
console.log(zuikiu.addStudent('Maryte'));
console.log(zuikiu.addStudent('Jonas'));
console.log(zuikiu.addStudent('Ona'));
console.log(zuikiu);

console.log(zuikiu.description());








// const fruktu = new School('Fruktu');
// console.log(fruktu);
// console.log(fruktu.name, fruktu.kids);