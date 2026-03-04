
fetch("item.json")
  .then(r => r.text())
  .then(t => console.log(t));

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








