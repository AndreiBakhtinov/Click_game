function start_game() {
    object.classList.toggle('start');
}

function finish_game() {
    object.classList.remove('start');
    alert(`You lose. Score ${score}`);
}

function hit() {
  score++;
  document.title = `Score ${score}`;

  object.classList.remove('start');
  void object.offsetWidth; // магия
  object.classList.add('start');

  let random_offset = Math.random() * 340;
  object.style.left = `${random_offset}px`;

  change_object_background();

  hit_sound.currentTime = 0;
  hit_sound.play(); // play `hit` sound
}

function miss(event) {
  if (event.target.id == "area") {
    score--;

    if (score <= 0) {
      finish_game();
    }

    document.title = `Score ${score}`;

    miss_sound.currentTime = 0;
    miss_sound.play(); // play `miss` sound
  }
}

function change_object_background() {
    const colors = ['purple', 'gold', 'orange', 'blue', 'red'];
    const random_index = Math.floor(Math.random() * colors.length);
    object.style.background = colors[random_index];
}

let score = 0;
let object = document.querySelector('#object');

const hit_sound = new Audio('sounds/hit.wav');
const miss_sound = new Audio('sounds/miss.wav');