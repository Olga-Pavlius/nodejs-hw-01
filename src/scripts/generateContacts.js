// import { createFakeContact } from '../utils/createFakeContact.js';
// import { readContacts } from '../utils/readContacts.js';
// import { writeContacts } from '../utils/writeContacts.js';

// const generateContacts = async (number) => {
//   try {
//     const oldContacts = await readContacts();
//     let newContact = [];

//     for (let i = 0; i < number; i++) {
//       newContact.push(createFakeContact());
//     }

//     await writeContacts([...oldContacts, ...newContact]);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// generateContacts(5);


import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    // Зчитуємо старі контакти
    const oldContacts = await readContacts();

    // Створюємо нові контакти
    let newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    // Записуємо всі контакти назад у файл
    await writeContacts([...oldContacts, ...newContacts]);

    console.log(`Додано ${number} нових контактів.`);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

// Генерація 5 нових контактів
generateContacts(5);