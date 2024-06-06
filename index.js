const primeNumber = (arr) => arr.filter(number);
const number = (cur) => {
  for (let x = 2; x < cur; x++) {
    if (cur % x == 0) {
      return false;
    }
  }
  return cur > 1;
};

const array1 = [1, 2, 3, 4, 5, 5, 3, 3, 5, 20, 37, 41, 83, 97, 255];
console.log(primeNumber(array1)); //[2, 3, 5, 5, 3, 3, 5, 37, 41, 83, 97]
////////////////////////////////////////////////////////////////////
const recreateArr = (arr) =>Object.fromEntries(arr.map((cur) => [cur.source, cur]));

const notification = [
  { source: "Telephone", text: "Hello", date: "05.06.2024" },
  { source: "Computer", text: "How are you", date: "06.06.2024" },
  { source: "Server", text: "Attention", date: "07.06.2024" },
];
console.log(recreateArr(notification)); //Computer:{source: 'Computer', text: 'How are you', date: '06.06.2024'}
                                    //Server:{source: 'Server', text: 'Attention', date: '07.06.2024'}
                                    //Telephone:{source: 'Telephone', text: 'Hello', date: '05.06.2024'}
/////////////////////////////////////////
const recreateArr2 = (arr) => {
  const key_value = (cur) => {
    const { source, ...rest } = cur;
    return [cur.source, rest];
  };
  return Object.fromEntries(arr.map(key_value));
};

const notification2 = [
  { source: "Telephone", text: "Hello", date: "05.06.2024" },
  { source: "Computer", text: "How are you", date: "06.06.2024" },
  { source: "Server", text: "Attention", date: "07.06.2024" },
];
console.log(recreateArr2(notification2)); //Computer:{ text: 'How are you', date: '06.06.2024'}
                                        //Server:{ text: 'Attention', date: '07.06.2024'}
                                         //Telephone:{ text: 'Hello', date: '05.06.2024'}
////////////////////////////////////////
const groupProduct = (arr) => {
  const groupByCategory = arr.reduce((group, product) => {
    const {type} = product;
    group[type] = group[type] ?? [];
    group[type].push(product);
    return group;
  }, {});
  return groupByCategory;
};
const data = [
  { type: "food", name: "Pizza" },
  { type: "drink", name: "Coffee" },
  { type: "food", name: "Hot Dog" },
];
console.log(groupProduct(data)); //drink: {type: 'drink', name: 'Coffee'}
                                 //food:  {type: 'food', name: 'Pizza'}
                                 //       {type: 'food', name: 'Hot Dog'}


const groupProduct2 = Object.groupBy(data, (item) => item.type);
console.log(groupProduct2);       //drink: {type: 'drink', name: 'Coffee'}
                                  //food:  {type: 'food', name: 'Pizza'}
                                  //       {type: 'food', name: 'Hot Dog'}


//Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.
//Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля source / text / date.
//Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.
//Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group
