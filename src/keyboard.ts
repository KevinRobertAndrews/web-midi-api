const app = document.querySelector('#root');

for (let i = 1; i <= 12; i++) {
  const node = document.createElement('div');
  node.id = `Note-${i}`
  app?.append(node);
}



class Note {
    private element: HTMLDivElement;

    constructor(id: string) {
        this.element = <HTMLDivElement>document.getElementById(id);
    }

    set innerHTML(content: string) {
        this.element.innerHTML = content;
    }
}

for (let i = 1; i <= 12; i++) {
  var noteElement = new Note(`Note-${i}`);
  noteElement.innerHTML = `Note-${i}`;
}

