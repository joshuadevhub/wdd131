// Selecting elements from the HTML
const input = document.querySelector('#favchap');
const button = document.querySelector("button");
const list = document.querySelector("#list");


// Add an event listener to the button
button.addEventListener("click", function () {
  // Chedks if the input is not empty
  if (input.value !== "") {
    // Create a new list item and delete button
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    // Adds the text / input value to the list item and delete button.
    li.textContent = input.value;
    deleteButton.textContent = "*";
    // Adds the delete button into the list items
    li.append(deleteButton);
    // Adds the list items into the List(ul or ol)
    list.append(li);

    // Adds an event listener to the delete button
    deleteButton.addEventListener("click", function () {
      // remove the list item from the list(ul or ol)
      list.removeChild(li);
      // Return focus to the input box.
      input.focus();
    });
    // Clear the input box and return focus to the input box.
    input.value = "";
    input.focus();
  }
});

let chaptersArray = getChpaterList() || [];

chaptersArray.forEach(chapter => {
  displaylist(chapter);
})