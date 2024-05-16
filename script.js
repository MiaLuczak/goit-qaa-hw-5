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

const nameDisplay = (arr) => arr.map(element => element.name);

// Testowanie funkcji:
// Tworzenie tablicy testowej (Generowana za pomocą JSONGenerator i przekonwetwanej)

