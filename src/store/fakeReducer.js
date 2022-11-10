// this shall be deleted when the real reducers are created
import {addBook} from "./action/bookActions";

const initialState = { test: 'It works' };

console.log(addBook.toString());
console.log(`Action type: ${addBook}`);

console.log(addBook());
console.log(addBook('Book'));

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};