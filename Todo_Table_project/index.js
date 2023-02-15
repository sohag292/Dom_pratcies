let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
  // console.log("button clicked");
  count += 1;
  const myInputValue = document.getElementById("input-value").value;
  // console.log(myInputValue);

  const parent = document.getElementById("content-container");

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td> </td>
    <td id="final">
    ${count}</td>
    <td>${myInputValue}</td>
    <td>
    <button class='btn btn-danger deletebtn'>Delete</button>
    <button id="donebtn" class='btn btn-primary '>Done</button>
    </td>
  
  `;
  parent.appendChild(tr);
  document.getElementById("input-value").value = "";




  const doneButton = tr.querySelector("#donebtn");
  doneButton.addEventListener("click", function (e) {
    const td = tr.querySelector("td:first-child");
    td.innerHTML = `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked>

      </div>
    `;
  });


 


  




















  const elements = document.querySelectorAll(".deletebtn");

  for (const value of elements) {
    value.addEventListener("click", function (e) {
      // console.log(event.target.parentNode.parentNode);
      e.target.parentNode.parentNode.style.display = "none";
    });
  }
});

document.getElementById("clear-btn").addEventListener("click", function (e) {
  console.log(e.target.parentNode);
  e.target.parentNode.style.display = "none";
});


  








