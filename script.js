// // 1. Funkcja zwracająca nową tablicę, w której każda liczba jest podwojona
// const doubledNumbers = (arr) => arr.map((element) => element * 2);

// // Testowanie funkcji:
// // Tworzenie tablicy testowej,
// const arrOfNumbers = [-18, -2.1446, 0, 0.91, (-6 + -3), (7 + 5), 16.1, 20];

// // Wyświetlenie w console oryginalnej tablicy:
// console.log('Oryginalna tablica:');
// console.log(arrOfNumbers);

// // Oddzielenie logów
// console.log('');
// // Przekazanie tablicy jako argument do funkcji oraz wyświetlenie wyniku w console:
// console.log('Podwojona tablica:');
// console.log(doubledNumbers(arrOfNumbers));

// 2. Funkcja zwracająca tylko imiona z przekazanej tablicy, jako nowa tablica

const nameDisplay = (arr) => arr.map((element) => element.firstname);

// Testowanie funkcji:
// Tworzenie tablicy testowej
const students = [
  {
    firstname: "Ross",
    lastname: "Kunze",
    academicYear: 5,
    email: "Alize45@example",
    fieldOfStudy: "Metrics",
  },
  {
    firstname: "Kenya",
    lastname: "Harber",
    academicYear: 1,
    email: "Isom.Price72@example",
    fieldOfStudy: "Applications",
  },
  {
    firstname: "Orlando",
    lastname: "Steuber",
    academicYear: 1,
    email: "Mandy_Mante@example",
    fieldOfStudy: "Research",
  },
  {
    firstname: "Mustafa",
    lastname: "Harber",
    academicYear: 6,
    email: "Macy.Bauch5@example",
    fieldOfStudy: "Markets",
  },
  {
    firstname: "Diana",
    lastname: "DuBuque-Herman",
    academicYear: 5,
    email: "Wayne.Ryan@example",
    fieldOfStudy: "Interactions",
  },
  {
    firstname: "Vidal",
    lastname: "Olson",
    academicYear: 3,
    email: "Davon46@example",
    fieldOfStudy: "Web",
  },
];

// Wyświetlenie w console oryginalnej tablicy:
console.log("Oryginalna tablica studentów:");
console.log(students);

// Oddzielenie logów
console.log("");
// Przekazanie tablicy jako argument do funkcji oraz wyświetlenie wyniku w console:
console.log("Imiona studentów:");
console.log(nameDisplay(students));
