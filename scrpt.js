const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

const taskInput = document.getElementById("task");
const tag = document.querySelector("#tag");
const Priority = document.getElementById("Priority");
const taskContainer = document.getElementById("taskContainer");
const addTask = document.getElementById("addTask");

let tasks = localStorage.getItem("taskList")
  ? JSON.parse(localStorage.getItem("taskList"))
  : [];

console.log(tasks);

const addNewTask = () => {
  let taskText = taskInput.value.trim();
  let newTag = tag.value;
  let newPriority = Priority.value;
  if (!taskText) {
    return Swal.fire("please add task!");
  }

  // Create New Task
  const newTask = {
    id: Date.now(),
    taskText,
    newTag,
    newPriority,
    complited: false,
  };

  tasks.push(newTask);
  const taskJSON = JSON.stringify(tasks);
  localStorage.setItem("taskList", taskJSON);
  taskInput.value = "";
  render();
};

const render = () => {
  taskContainer.innerHTML = "";
  if (tasks.length === 0) {
    let div = document.createElement("div");
    div.innerHTML = `<div class="p-6 rounded-xl bg-[#fff] mt-8">
            <div class="flex items-center justify-between">
                <h2 class="text-black plus-jakarta-sans font-semibold"><i class="fa-regular fa-eye"></i> Empty State
                    Pattern Preview</h2>
                <span class="text-primary bg-[#E2E7FF] rounded-full text-xs font-medium px-2 py-0.5">Design Guide
                    Mode</span>
            </div>
            <div class="bg-[#E2E7FF] mt-3 gap-3 flex flex-col items-center justify-center p-8 rounded-xl">
                <span class="bg-[#fff] rounded-full p-4"><i class="fa-solid fa-list-check fa-xl text-primary"></i></span>
                <h3 class="plus-jakarta-sans font-semibold text-xl">No Tasks Yet</h3>
                <p class="text-sm text-dark">Add your first task and start getting things done. Your mind is for
                    having ideas, not holding them.</p>
                <button class="bg-primary text-white px-4 py-2 rounded-lg"><i class="fa-solid fa-plus"></i> Create First
                    Task</button>
            </div>
        </div>`;
    return taskContainer.appendChild(div);
  }
  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="bg-[#fff] rounded-xl flex gap-4 p-3 items-center mb-2 justify-between">
                <div class="flex gap-4 p-3 items-center mb-2"><input onchange="toggleTask(${task.id})" ${task.complited ? "checked" : ""} type="checkbox" name="" id=""
                        class="rounded-sm cursor-pointer h-5 w-5 border border-[#C7C4D8]">
                    <div>
                        <h3 class="mb-1.5 font-medium text-sm ${task.complited ? "line-through opacity-50 text-gray-400" : "text-black"}">${task.taskText}</h3>
                        <div class="flex items-center gap-2">
                            <span
                                class="text-primary bg-[#E2E7FF] py-0.5 px-2 rounded-full text-xs font-semibold">${task.newTag}</span>
                            <span class="text-red text-xs font-semibold"><span
                                    class="h-2 w-2 rounded-full inline-block mr-0.5 bg-red"></span>${task.newPriority}</span>
                        </div>
                    </div>
                </div>
                      <button onclick="deleteTsk(${task.id})" class="cursor-pointer">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
            </div>`;
    taskContainer.appendChild(div);
  });
};

// Toggle Task Status
const toggleTask = (id) => {
  let task = tasks.find((task) => task.id === id);
  task.complited = !task.complited;
  localStorage.setItem("taskList", JSON.stringify(tasks));
  render();
};

// Delete Task
const deleteTsk = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      tasks = tasks.filter((task) => task.id !== id);
      localStorage.setItem("taskList", JSON.stringify(tasks));
      render();
      Swal.fire({
        title: "Deleted!",
        text: "Your task has been deleted.",
        icon: "success",
      });
    }
  });
};

// EventListeners
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addNewTask();
  }
});
addTask.addEventListener("click", addNewTask);

render();
