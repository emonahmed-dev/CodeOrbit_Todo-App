const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

document.getElementById("addTask").addEventListener("click", () => {
  const task = document.getElementById("task").value;
  const tag = document.querySelector("#tag").value;
  const Priority = document.getElementById("Priority").value;
  if (!task) {
    return Swal.fire("please add task!");
  } else {
      console.log(tag, Priority, task);
  }
});
