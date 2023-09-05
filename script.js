function start_game() {
  document.title = `Score ${score}`;
  object.classList.toggle("is-moving");
}

function finish_game() {
  alert(`You lose. Score ${score}`);
  score = 0;
}

function hit() {
  score++;
  document.title = `Score ${score}`;

  object.classList.remove("is-moving");
  void object.offsetWidth; // магия
  object.classList.add("is-moving");

  change_object_background();
  change_object_offset();
  change_object_size();

  hit_sound.currentTime = 0;
  hit_sound.play(); // play `miss` sound
}

function change_object_size() {
  const random_size = 20 + Math.random() * 40;
  object.style.width = `${random_size}px`;
}

function change_object_offset() {
  const random_offset = Math.random() * 340;
  object.style.left = `${random_offset}px`;
}

function change_object_background() {
  const colors = ["red", "gold", "blue", "orange", "purple"];
  const random_index = Math.floor(Math.random() * colors.length);
  object.style.background = colors[random_index];
}

function miss(event) {
  if (event.target.id == "area") {
    score--;
    document.title = `Score ${score}`;

    miss_sound.currentTime = 0;
    miss_sound.play(); // play `miss` sound

    if (score <= 0) {
      finish_game();
    }
  }
}

let score = 0;
let object = document.querySelector("#object");

// подключить звуковые дорожки
const hit_sound = new Audio("sounds/hit.wav");
const miss_sound = new Audio("sounds/miss.wav");
