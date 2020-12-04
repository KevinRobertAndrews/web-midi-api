"use strict";
console.log('Starting main.js');
let midi, data, cmd, channel, type, note, velocity;
// request MIDI access
if (navigator.requestMIDIAccess) {
    console.log("Requesting MIDI access...");
    navigator.requestMIDIAccess({
        sysex: false
    }).then(onMIDISuccess, onMIDIFailure).catch(e => console.log("Request to MIDI access has failed", e));
    // midi functions
    function onMIDISuccess(midiAccess) {
        console.log('Midi sucessfully accessed');
        // when we get a succesful response, run this code
        midi = midiAccess; // this is our raw MIDI data, inputs, outputs, and sysex status
        let inputs = midi.inputs.values();
        // loop over all available inputs and listen for any MIDI input
        for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
            // each time there is a midi message call the onMIDIMessage function
            input.value.onmidimessage = onMIDIMessage;
        }
    }
    function onMIDIFailure(error) {
        console.log('Midi failed to be accessed', error);
        // when we get a failed response, run this code
        console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + error);
    }
}
function onMIDIMessage(message) {
    data = message.data,
        cmd = data[0] >> 4,
        channel = data[0] & 0xf,
        type = data[0] & 0xf0,
        note = data[1],
        velocity = data[2];
    switch (type) {
        case 144: //noteOn message
            noteOn(note, velocity);
            break;
        case 128: //noteOff message
            noteOff(note, velocity);
            break;
    }
}
let noteNames = new Map();
noteNames.set(0, "C");
noteNames.set(1, "Db / C#");
noteNames.set(2, "D");
noteNames.set(3, "Eb / D#");
noteNames.set(4, "E");
noteNames.set(5, "F");
noteNames.set(6, "Gb / F#");
noteNames.set(7, "G");
noteNames.set(8, "Ab / G#");
noteNames.set(9, "A");
noteNames.set(10, "Bb / A#");
noteNames.set(11, "B");
function noteOn(note, velocity) {
    console.log(noteNames.get(note % 12), velocity);
    // console.log(note, velocity)
}
function noteOff(note, velocity) {
    //   console.log(note, velocity)
    //   console.log("note off")
}
