const enterbtn = document.querySelector("#enter");
const input = document.querySelector("#habit");
const habitList = document.querySelector("#habit-list");
const errordisplay = document.querySelector("#errormessage");
const habits = [];

// Save habits to localStorage
function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

// Create and display a habit
function createHabitElement(habit) {
  errordisplay.hidden = true;
  const wrapper = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = habit.completed;

  const span = document.createElement("span");
  span.textContent = habit.name;

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.classList.add("delete-btn");

  const editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.classList.add("edit-btn");

  checkbox.addEventListener("change", () => {
    habit.completed = checkbox.checked;
    if (checkbox.checked) {
      span.classList.add("completed");
    } else {
      span.classList.remove("completed");
    }

    saveHabits();
  });

  //editing
  editbtn.addEventListener("click", () => {
    span.contentEditable = true;
    span.focus();
  });
  span.addEventListener("blur", () => {
    span.contentEditable = false;
    habit.name = span.textContent.trim();

    saveHabits();
  });

  //deleting
  deletebtn.addEventListener("click", () => {
    const index = habits.indexOf(habit);
    if (index !== -1) {
      habits.splice(index, 1);
    }

    saveHabits();

    wrapper.remove();
  });

  wrapper.append(checkbox, span, editbtn, deletebtn);
  habitList.append(wrapper);
}

// Add a new habit
function addHabit() {
  const habitName = input.value.trim();

  if (habitName === "") {
    errordisplay.hidden = false;
    errordisplay.textContent = "Please enter a habit name.";
    return;
  }

  const habit = {
    name: habitName,
    completed: false,
  };

  habits.push(habit);

  createHabitElement(habit);

  saveHabits();

  input.value = "";
  input.focus();
}

// Load habits from localStorage
function loadHabits() {
  const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];

  habits.push(...savedHabits); // ... is spreader = it spreads the items in to habits array

  habits.forEach((habit) => {
    createHabitElement(habit);
  });
}

enterbtn.addEventListener("click", addHabit);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addHabit();
  }
});

window.addEventListener("DOMContentLoaded", loadHabits);
