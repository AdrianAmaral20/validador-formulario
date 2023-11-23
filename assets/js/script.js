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
        b7Validator.showError(input, check);
      }
    }

    if(send) {
      form.submit();
    }
  },
  checkInput:(input) => {
    let rules = input.getAttribute('data-rules');
    if(rules !== null) {
      rules = rules.split('|');
      for(let k in rules) {
        let rDetails = rules[k].split('=');
        switch(rDetails[0]) {
          case 'required':
            if(input.value == '') {
              return 'Este campo é obrigatório.';
            }
          break;
          case 'min':

          break;
        }
      }
    }

    return true;
  },
  showError:(input, error) => {
    input.classList.add('error-input')
    input.style.borderColor = '#ff0000';

    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input.ElementSibling);
  }
}

let form = document.querySelector('.b7validator');
form.addEventListener('submit', b7Validator.handleSubmit)