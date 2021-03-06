'use strict';
//import { createStore } from 'redux';
const { createStore } = Redux;

console.log('app started');

const defaultState = {
    balance: 0
}

// actions

const actionIncrement = {
    type: 'increment'
}

const actionDecrement = {
    type: 'decrement'
}

const account = (state=defaultState, action) => {
    switch(action.type) {
        case 'increment':
            return {
                balance: state.balance + action.payload
            };
        case 'decrement': 
            return {
                balance: state.balance - action.payload
            };
        default: 
            return state;
    }
}

const store = createStore(
    account, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log('subscribing to state changes...');
    const state = store.getState();
    console.log('state is: ', state);
    const balance = document.querySelector('#balance');
    balance.innerHTML = state.balance;
});

const incrementButton = document.querySelector('#add');
const decrementButton = document.querySelector('#subtract');

incrementButton.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actionIncrement);
});

decrementButton.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actionDecrement);
});