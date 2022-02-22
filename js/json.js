const myInfo = {
    name: `Nur Hossain Farid`,
    Age: 20,
    Study: `Daffodil International University in SWE`,
}
const stringify = JSON.stringify(myInfo)//JSON (JavaScript Object Notation)
console.log(myInfo);
console.log(stringify);//Stringify convert js object to API object

const shop = {
    name: `NHF`,
    owner: `Nur Hossain Farid`,
    address: `Madla, Noakhali, Bangladesh`,
    products: [`Apple`, `Orange`, `Chiefs`, `Biskits`],
    contactNumber: `01841268946`,
}
const shopStringify = JSON.stringify(shop);
console.log(shop);
console.log(shopStringify);
const convertJSObject = JSON.parse(shopStringify);//parse() convert to API object ot js object
console.log(convertJSObject);