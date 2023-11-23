let b7Validator = {
  handleSubmit:(event) => {
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll('input');
    for(let i=0;i<inputs.length;i++) {
      let input = inputs[i];
      let check = b7Validator.checkInput(input);
      if(check !== true) {
        send = false;
        // Exibir o erro
      }
    }

    send = false;
    if(send) {
      form.submit();
    }
  },
  checkInput:(input) => {

  }
}

let form = document.querySelector('.b7validator');
form.addEventListener('submit', b7Validator.handleSubmit)