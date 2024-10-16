'use strict';

class EventManager {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        console.log(`Подію "${eventName}" додано.`);
    }

    off(eventName, callback) {
        if (!this.events[eventName]) return;

        this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        console.log(`Подію "${eventName}" видалено.`);
    }

    trigger(eventName, ...args) {
        if (!this.events[eventName] || this.events[eventName].length === 0) {
            console.log(`Обробників для події "${eventName}" немає.`);
            return;
        }

        this.events[eventName].forEach(callback => {
            callback.apply(this, args);
        });
        console.log(`Подію "${eventName}" викликано.`);
    }
}

// Приклад використання
const eventManager = new EventManager();

function greet(name) {
    console.log(`Привіт, ${name}!`);
}

eventManager.on('greet', greet); // Подію "greet" додано.
eventManager.trigger('greet', 'Вова'); // Привіт, Вова!
eventManager.off('greet', greet); // Подію "greet" видалено.
eventManager.trigger('greet', 'Іван'); // Обробників для події "greet" немає.
