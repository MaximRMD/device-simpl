const buttonFormSubmit = document.querySelector('.emotions__block-tablet-button-send');
const modalSucsess = document.querySelector('.modal_type_sucsess');
const modaErorr = document.querySelector('.modal_type_error');



function openModal(popup){
  popup.classList.add('modal--active')
}

function closeModal(){
  const modalActive = document.querySelector('.modal--active');
  modalActive.classList.remove('modal--active')
}

buttonFormSubmit.addEventListener('click', ()=> {
  openModal(modalSucsess)
})

document.addEventListener('click', (e)=> {
  const target = e.target;
  if(target.classList.contains('button-green--close')){
    closeModal();
  }
})
