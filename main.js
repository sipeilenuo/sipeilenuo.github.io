fetch("item.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("tkrbchecklist");
    data.forEach(item => {
      const label = document.createElement("label");
      label.style.display = "block";
    
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = item.id;
    
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(`${item.name}`));
    
      container.appendChild(label);
    });
  });

function rolechoose(button) {
  button.classList.toggle('active');
  
  console.log('role:', button.dataset.role);
}

function tkrb_vis(button) {
  const tkrblist = document.getElementById("alltkrb");
  const isHidden = tkrblist.classList.toggle('open');
  
  button.classList.toggle('active');
  //button.textContent = isHidden ? "顯示" : "隱藏"; 
}














