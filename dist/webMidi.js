"use strict";
// Check if WebMidi is available
WebMidi.enable(function (err) {
    if (err) {
        console.log("WebMidi could not be enabled.", err);
    }
    else {
        console.log("WebMidi enabled!");
    }
});
// Check inputs and outputs
WebMidi.enable(function (err) {
    console.log(WebMidi.inputs);
    console.log(WebMidi.outputs);
});
const scaleColors = new Map();
scaleColors.set("C", "red");
scaleColors.set("D", "orange");
scaleColors.set("E", "yellow");
scaleColors.set("F", "green");
scaleColors.set("G", "blue");
scaleColors.set("A", "indego");
scaleColors.set("B", "violet");
function changeColor(note) {
    const selected = document.querySelector(`.note-${note}`);
    selected === null || selected === void 0 ? void 0 : selected.classList.toggle(scaleColors.get(note));
    selected === null || selected === void 0 ? void 0 : selected.classList.toggle("pop");
}
// Enable noteon and noteoff
WebMidi.enable(function (err) {
    var input = WebMidi.getInputByName("USB O2");
    input.addListener('noteon', "all", function (e) {
        console.log(e.note.name, e.rawVelocity);
        changeColor(e.note.name);
    });
    input.addListener('noteoff', "all", function (e) {
        console.log("note off");
        changeColor(e.note.name);
    });
});
