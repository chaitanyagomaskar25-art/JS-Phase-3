let lists = [];

const input = document.getElementById("list");
const btn = document.getElementById("btn");
const addList = document.getElementById("addList");

btn.addEventListener("click", addLists);

function addLists() {
    const userInput = input.value.trim();

    if (userInput === "") {
        alert("Please enter a task");
        return;
    }else{
    lists.push(userInput);
    input.value = "";
    displayLists();
    }
}

function displayLists() {
    addList.innerHTML = "";

    lists.forEach((item, index) => {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.innerHTML = `<strong>${index + 1}.</strong> ${item}`;

        const delBtn = document.createElement("span");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delete");

        delBtn.addEventListener("click", () => {
            lists.splice(index, 1);
            displayLists();
        });

        li.appendChild(text);
        li.appendChild(delBtn);
        addList.appendChild(li);
    });
}
