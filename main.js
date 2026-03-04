fetch("item.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("alltkrb");
    Object.entries(data).forEach(([key, value]) => {
      const label = document.createElement("label");
      label.style.display = "block";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = key;
      checkbox.checked = false;
      label.appendChild(checkbox);

      const text = value ? ` ${key} - ${value}` : ` ${key}`;
      label.appendChild(document.createTextNode(text));

      container.appendChild(label);
    });
  });

function rolechoose(button) {
  button.classList.toggle('active');
  
  console.log('role:', button.dataset.role);
}

function tkrb_vis(button) {
  const tkrblist = document.getElementById("alltkrb");
  const isHidden = tkrblist.classList.toggle('visible-false');
  
  button.classList.toggle('active');
  button.textContent = isHidden ? "顯示" : "隱藏";
}







