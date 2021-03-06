class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.title = createElement('h2');
  }

  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  display() {

    this.title.html("Juego de Carreras de Autos");
    this.title.position(displayWidth/2 - 50, 0);



    this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(() => {
      this.button.hide();
      this.input.hide();

      player.name = this.input.value();

      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hola " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
