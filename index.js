import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = 'ADD';
const Minus = 'Minus';

const modify = (count = 0, action) => {
    switch (action.type) {
        case ADD :
            return count + 1;
        case Minus :
            return count -1;
        default :
            return count;
    }
};

const countStore = createStore(modify);

const onChange = () =>  {
    number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({ type: ADD});
}

const handleMinus = () => {
    countStore.dispatch({ type: Minus});
}

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);