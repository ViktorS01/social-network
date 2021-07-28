import {rerenderTree} from "../render";

export const state = {
    messagesPage: {
        messages: [
            {id: 1, message: "Дарова. Как сам?", status: 0}, //me
            {id: 2, message: "Дарова. Отлично!", status: 1}, //somebody
            {id: 3, message: "У тебя то как дела?", status: 1}
        ],

        users: [
            {id: 1, name: "Сергей Семенов"},
            {id: 2, name: "Иван Дремин"},
            {id: 3, name: "Степан Разин"},
            {id: 4, name: "Иван Грозный"}
        ],
    }
}

export const addMessage = (textMessage) => {
    debugger;

    const newMes = {
        id: 4,
        message: textMessage,
        status: 0
    };

    state.messagesPage.messages.push(newMes);
    rerenderTree(state);
};