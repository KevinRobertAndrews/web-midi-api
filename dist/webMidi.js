"use strict";
// const WebMidi: any;
// const Howl: any;
console.log("Loaded webmidi");
// Check if WebMidi is available
WebMidi.enable(function (err) {
    console.log("Attempting to load WebMidi...");
    if (err) {
        console.log("WebMidi could not be enabled.", err);
    }
    else {
        console.log("WebMidi enabled!");
    }
});
// var C = new Howl({
//   src: ['sounds/piano-ff/39196__jobro__piano-ff-048.wav']
// });
// var D = new Howl({
//   src: ['sounds/piano-ff/39198__jobro__piano-ff-050.wav']
// });
// var E = new Howl({
//   src: ['sounds/piano-ff/39200__jobro__piano-ff-052.wav']
// });
// var F = new Howl({
//   src: ['sounds/piano-ff/39201__jobro__piano-ff-053.wav']
// });
// var G = new Howl({
//   src: ['sounds/piano-ff/39203__jobro__piano-ff-055.wav']
// });
// var A = new Howl({
//   src: ['sounds/piano-ff/39205__jobro__piano-ff-057.wav']
// });
// var B = new Howl({
//   src: ['sounds/piano-ff/39207__jobro__piano-ff-059.wav']
// });
// // Check inputs and outputs
// WebMidi.enable(function (err) {
//     console.log(WebMidi.inputs);
//     console.log(WebMidi.outputs);
// });
// const scaleColors = new Map();
// scaleColors.set("C", "red");
// scaleColors.set("D", "orange");
// scaleColors.set("E", "yellow");
// scaleColors.set("F", "green");
// scaleColors.set("G", "blue");
// scaleColors.set("A", "indego");
// scaleColors.set("B", "violet");
// function changeColor(note) {
//   const selected = document.querySelector(`.note-${note}`);
//   selected?.classList.toggle(scaleColors.get(note))
//   selected?.classList.toggle("pop")
// }
// // Enable noteon and noteoff
// WebMidi.enable(function (err) {
//   var input = WebMidi.getInputByName("USB O2");
//   input.addListener('noteon', "all", function (e) {
//     console.log(e.note.name, e.rawVelocity);
//     changeColor(e.note.name)
//     switch (e.note.name) {
//       case 'C':
//         C.play();
//         break;
//       case 'D':
//         D.play();
//         break;
//       case 'E':
//         E.play();
//         break;
//       case 'F':
//         F.play();
//         break;
//       case 'G':
//         G.play();
//         break;
//       case 'A':
//         A.play();
//         break;
//       case 'B':
//         B.play();
//         break;
//     }
//   });
//   input.addListener('noteoff', "all", function (e) {
//     console.log("note off")
//     changeColor(e.note.name)
//   })
// });
