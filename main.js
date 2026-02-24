function rolechoose(button) {
  button.classList.toggle('active');
  button.classList.toggle('visible-false');
  
  console.log('role:', button.dataset.role);
}


