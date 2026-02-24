function rolechoose(button) {
  button.classList.toggle('active');
  
  console.log('role:', button.dataset.role);
}

function tkrb_vis(button) {
  const tkrblist = document.getElementById("alltkrb");
  tkrblist.classList.toggle('visible-false');
  
  button.classList.toggle('active');
  button.textContent = isHidden ? "顯示" : "隱藏";
}




