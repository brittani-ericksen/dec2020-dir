// array.reduce(callback, initialValue);

const numbersArray = [1, 2, 3, 4];
const lettersArray = ['b', 'r', 'i', 't', 't', 'a', 'n', 'i'];

const reducerCallback = (accumulator, item) => {
    return accumulator + item;
}

const total = numbersArray.reduce(reducerCallback, 0);
const myName = lettersArray.reduce(reducerCallback, '');
//console.log('total: ', total);
//console.log('name: ', myName);


const stateReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return state + action.item;
        case 'RESET':
            return '';
        default:
            return state;
        
    }
}

let wordStore = '';
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'r' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'e' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'd' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'u' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'x' });
//console.log(wordStore);

let numberStore = 0;
numberStore = stateReducer(numberStore, { type: 'ADD', item: 2 });
numberStore = stateReducer(numberStore, { type: 'ADD', item: 4 });
numberStore = stateReducer(numberStore, { type: 'ADD', item: 6 });
numberStore = stateReducer(numberStore, { type: 'ADD', item: 8 });
numberStore = stateReducer(numberStore, { type: 'ADD', item: 10 });
console.log(numberStore);