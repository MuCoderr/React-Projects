// function add(a: number, b: number): number {
//   return a + b;
// }

// let toplam = add(10, 20);

// console.log(toplam);

// function bastir(): void {
//   console.log("Mücahit");
// }

// bastir();

// function birlestir(ad: string, soyad: string): string {
//   return ad + " " + soyad;
// }

// let degisken = birlestir("mücahit", "yasin");
// console.log(degisken);

// function birlestir(ad: string, soyad: string = "Yasin"): string {
//   return ad + " " + soyad;
// }

// let degisken = birlestir("mücahit");
// console.log(degisken);

/* OPTİONAL PARAMETERS */

// function carpim(a: number, b: number, c?: number) {
//   if (typeof c !== "undefined") {
//     return a * b * c;
//   }
//   return a * b;
// }

// let degisken = carpim(5, 2);

// console.log(degisken);

/* ARROW FUNCTİON */

// function carpim(a: number, b: number): number {
//   return a * b;
// }

// let carpim2 = (a: number, b: number): number => {
//   return a * b;
// };

// let degisken = carpim(4, 5);
// let degisken2 = carpim2(4, 5);
// console.log(degisken);
// console.log(degisken2);

/* FUNCTİON OVERLOADİNG */

// function add(a: number, b: number): number {
//   return a + b;
// }
// let degisken = add(4, 5);
// console.log(degisken);

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;

// function add(a: any, b: any): any {
//   return a + b;
// }
// let degisken = add("Mücahit", " Yasin");
// let degisken = add(5, 10);
// console.log(degisken);
