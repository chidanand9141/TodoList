//selecting the sidebar and buttons 
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

// Function to toggle the lock state of the sidebar
const togglecLock = () => {
  sidebar.classList.toggle("locked");
  //if the sidebar is not locked
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hovarable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hovarable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt")
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hovarable")) {
    sidebar.classList.add("close");

  }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hovarable")) {
    sidebar.classList.remove("close");
  }
};
const toggleSidebar = () => {
  sidebar.classList.toggle("close")
}
//If the window is less than 800px, close the sidebar and remove hovarability and lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("locked")
  sidebar.classList.remove("hovarable")
}

//Adding event listners to buttons and sidebar for the the corresponding actions
sidebarLockBtn.addEventListener("click", togglecLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

// DRAG AND DROP JAVASRIPT
let boxs = document.getElementsByClassName("box");
let rightBox = document.getElementById("right");
let right1Box = document.getElementById("right1");
let leftBox = document.getElementById("left");
let left1Box = document.getElementById("left1");

for (box of boxs) {
  box.addEventListener("dragstart", function (e) {
    let selected = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;

    });
    right1Box.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    right1Box.addEventListener("drop", function (e) {
      right1Box.appendChild(selected);
      selected = null;

    });
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;

    });
    left1Box.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    left1Box.addEventListener("drop", function (e) {
      left1Box.appendChild(selected);
      selected = null;

    });
  });
}


// serach content
// JavaScript code 


//add search butto

function Add(input, rec_text) {
  let inputs = document.getElementById(input);
  let text = document.querySelector(rec_text);

  if (inputs.value == "") {
    alert("Please enter your task");
  } else {
    let newEle = document.createElement("div");
    let content = inputs.value.trim(); // Get the input content and remove leading/trailing whitespace
    //   let uniqueID = content.replace(/\s+/g, '-'); // Replace spaces with hyphens for the ID
    newEle.setAttribute("class", "text content", "id", "inputField", 'data-search', 'list item 1 listitem1') // Set the ID for the <ul> element
    newEle.setAttribute('draggable', true);
    newEle.innerHTML = `<input type="checkbox" class="task-check"><span class="taskname">${content}</span> 
    <button class="edit">
    <i class="fa-regular fa-pen-to-square"></i>
  </button> <button class="delete"><i class="fa-solid fa-trash"></i></button>`;
    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector(".delete").addEventListener("click", remove);
    
    function remove() {
      newEle.remove();

    }
  }
}

const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const taskContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (taskCount) =>{
  countValue.innerText = taskCount;
};

const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }

  const task = `<div class="task"> 
       
        <button class="delete">
          <i class="fa-solid fa-trash"></i>
        </button>
        </div>`

  taskContainer.insertAdjacentHTML("beforeend", task);

  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });
  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((editBtn) => {
    editBtn.onclick = (e) => {
      let targetElement = e.target;
      if (!(e.target.className == "edit")) {
        targetElement = e.target.parentElement;
      }
      newTaskInput.value = targetElement.previousElementSibling?.innerText;
      targetElement.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });
  const taskCheck = document.querySelectorAll(".task-check");
  taskCheck.forEach((checkBox) => {
    checkBox.onChange = () => {
      checkBox.nextElementSibling.classList.toggle("completed");
      if (checkBox.checked) {
        taskCount -= 1;
      }
      else {
        taskCount += 1;
      }
      displayCount(taskCount);
    }
  });
  taskCount += 1;
  displayCount(taskCount);
  newTaskInput.value = "";
};


addBtn.addEventListener("click", addTask);

window.onload = () => {
  taskCount = 0;
  displayCount(taskCount);
  newTaskInput.value = "";
};
// function Addcontainer(input1, new_container){
//   let inputs1 = document.getElementById(input1);
//   let new_con_crte = document.querySelector(new_container);

//   if(inputs1.value == ""){
//   alert("enter a text");
//   }else{
//     let new_cont = document.createElement("div");
//     let contents = inputs1.value.trim();
//     new_cont.setAttribute("class", "container demo" )
//     new_cont.innerHTML = `${contents}`;
//     new_con_crte.appendChild(new_cont);
//     inputs1.value = "";
    
//   }

// }




