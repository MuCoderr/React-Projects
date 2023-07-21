// bir değişkenin değerini sonradan değiştireceksen let, değiştirilmicek ise const ile oluştur.
/* ---------------DATA TİPLERİ--------------- */
/* NUMBER */
// number'ı 4 farklı şekilde tanımlayabiliriz. (Number, hexadecimal, octal, binary)
// let first: number = 123; //number
// let second: number = 0x37cf; // hexadecimal
// let third: number = 0o377; // octal
// let fourth: number = 0b111001; // binary
// console.log(first); // 123
// console.log(second); // 14287
// console.log(third); // 255
// console.log(fourth); // 57
/* STRİNG */
// let employeefirstName: string = "Mücahit Yasin";
// let employeefirstName: string = "Mücahit Yasin";
// console.log(employeefirstName);
// let employeeName: string = "Jhon Smith";
// let employeeDept: string = "Finance";
// // Pre-ES6
// let employeeDesc1: string =
//   employeeName + " works in the " + employeeDept + " department";
// // Post-ES6
// let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department`;
// console.log(employeeDesc1);
// console.log(employeeDesc2);
/* BOOLEAN */
// let isPresent: boolean = true;
// console.log(isPresent);
/* ARRAY */
// let firstNames: string[] = ["Mücahit", "Bülent", "Emirhan"];
// // let firstNames: Array<string> = ["Mücahit", "Bülent", "Emirhan"];
// let arr = [1, 3, "Apple", "Orange", "Banana", true, false];
// let furits: Array<string>;
// furits = ["Apple", "Orange", "Banana"];
// let ids: Array<number>;
// ids = [23, 34, 100, 124, 44];
// // let values: (string | number)[] = ["Apple", 2, "Orange", 3, 4, "Banana"];
// let values: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];
// // console.log(furits[1]); // Orange
// // furits arrayinin tamamını sırayla yazdırmak için for döngüsü kullanılır
// for (let i = 0; i < furits.length; i++) {
//   console.log(furits[i]);
// }
/* TUPLE */
// Örneğin tuple ile bir değişkenin birinci değerine number ikinci değerine string verebiliyoruz.
// Belirilten şekilde veri atanmazsa hata verir. Aşağıda gözüktüğü gibi.
// let instructor: [number, string] = [1, "Mücahit"];
// var user: [number, string, boolean, number, string];
// user = [1, "Mücahit", true, 21, "Admin"];
// console.log(instructor, user);
// /* TUPLE ARRAY */
// let employee: [number, string][];
// employee = [
//   [1, "Mücahit"],
//   [2, "Bülent"],
// ];
// console.log(employee);
/* OBJECT */
// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };
// let instructor: Person;
// instructor = {
//   firstName: "Mücahit",
//   lastName: "Daşdemir",
//   age: 21,
//   jobTitle: "Developer",
// };
// let person: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };
// person = {
//   firstName: "Mücahit",
//   lastName: "Daşdemir",
//   age: 21,
//   jobTitle: "Developer",
// };
/* ENUM */
// enum değişkeni tanımlarken default number olarak kabul eder ve ilk değişkenin değeri 0'dır ve 1er artarak diğer değişkenler değer alır.
// ilk değişkene 1 sayı değeri veirilirse ondan sonrakilerde 1er artarak sırasıyla 2,3,4 değerlerini alırlar.
// eğer number tipindeki enumdan değişkenin ismini almak istersek enumismi[değişkendeğeri] şeklinde ulaşılabilir.
// eğer enum değişkeninin ilk değerine string bir atama yapılırsa string bir enum olur.
// enum Media {
//   Newspaper,
//   Newsletter,
//   Magazine,
//   Book,
// }
// console.log(Media.Magazine); // 2
// console.log(Media[3]); // Book
// enum PrintMedia {
//   Newspaper = "NEWSPAPER",
//   Newsletter = "NEWSLETTER",
//   Magazine = "MAGAZİNE",
//   Book = "BOOK",
// }
// console.log(PrintMedia.Newsletter); // NEWSLETTER
// console.log(PrintMedia["Newspaper"]); // NEWSPAPER
/* UNİON */
// Bir type string olabilir veya number olabilir demek için union kullanılır.
// let code: string | number;
// // code = "123"
// code = 12345;
// console.log(code);
/* ANY (onerilmeyen bir kullanım) */
// değişkenin type'ı herhangi bir şey olabilir demek için any type kullanılır.
// let someThing: any = "Herşey Olabilir";
// someThing = 45;
// someThing = true;
// someThing = {
//   firstName: "Mücahit",
//   lastName: "Yasin",
// };
// console.log(someThing);
// // array olarak da kullanılabilir.
// let arr: any[] = ["Jhon", 123, true];
/* VOİD */
// Bir fonksiyonda fonksiyon geriye değer döndürmüyor ise viod ile belirtilebilir. return yapılamaz
// function sayHello(): void {
//   console.log("Hi");
// }
// sayHello();
/* NEVER */
// geriye hiçbir value dönmiyeceğini belirtir. null dahil
// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }
// throwError("Hata");
