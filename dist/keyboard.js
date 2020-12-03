"use strict";
const app = document.querySelector('#root');
for (let i = 1; i <= 12; i++) {
    const node = document.createElement('div');
    node.id = `Note-${i}`;
    app === null || app === void 0 ? void 0 : app.append(node);
}
class Note {
    constructor(id) {
        this.element = document.getElementById(id);
    }
    set innerHTML(content) {
        this.element.innerHTML = content;
    }
}
for (let i = 1; i <= 12; i++) {
    var noteElement = new Note(`Note-${i}`);
    noteElement.innerHTML = `Note-${i}`;
}
