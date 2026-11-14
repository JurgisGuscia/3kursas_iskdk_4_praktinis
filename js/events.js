const toggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';
const form = document.getElementById('contactForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const service = document.getElementById('service');
const fields = [fullName, email, phone, message];
const formName = document.getElementById('formName');
const formEmail = document.getElementById('formEmail');
const formPhone = document.getElementById('formPhone');
const formService = document.getElementById('formService');
const formMessage = document.getElementById('formMessage');
const backDrop = document.getElementById('backDrop');
const confirmModalButton = document.getElementById('confirmForm');
const gameButton = document.getElementById('showGame');
const closeGameButton = document.getElementById('closeGame');
const newGameButton = document.getElementById('newGameButton');
const contactsFormModal = document.getElementById('contactsFormModal');

function fillOutputModal() {
  formName.innerText = fullName.value;
  formEmail.innerText = email.value;
  formPhone.innerText = phone.value;
  formService.innerText = service.value;
  formMessage.innerText = message.value;
}

function resetForm() {
  fullName.value = '';
  email.value = '';
  phone.value = '';
  service.value = '';
  message.value = '';
}

function showBackDrop() {
  backDrop.classList.remove('hideBackDrop');
}

function hideBackDrop() {
  backDrop.classList.add('hideBackDrop');
}

function showFormModal() {
  contactsFormModal.classList.remove('hide');
}

function hideFormModal() {
  contactsFormModal.classList.add('hide');
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}

function showGameWindow() {
  document.getElementById('gameWindow').classList.remove('off');
}

function hideGameWindow() {
  document.getElementById('gameWindow').classList.add('off');
}

document.documentElement.dataset.theme = savedTheme;
toggle.checked = savedTheme === 'dark';
toggle.addEventListener('change', () => {
  const theme = toggle.checked ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
});

document.getElementById('burgerWrapper').addEventListener('click', () => {
  document.getElementById('phoneMenu').classList.toggle('show');
});

if (fields[0] != null) {
  fields.forEach((input) => {
    input.addEventListener('input', () => {
      input.classList.remove('inputError');
    });
  });
}
if (form != null) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    let firstInvalidField = null;
    const errors = [];
    fields.forEach((input) => {
      input.classList.remove('inputError');
    });

    function addError(input, errorMessage) {
      input.classList.add('inputError');
      errors.push(errorMessage);
      isValid = false;
      if (!firstInvalidField) {
        firstInvalidField = input;
      }
    }

    if (fullName.value.trim().length < 3) {
      addError(fullName, 'Vardas ir pavardė turi būti bent 3 simbolių ilgio.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      addError(email, 'Įveskite teisingą el. pašto adresą.');
    }

    const phoneRegex = /^\+?[0-9]{8,15}$/;
    if (phone.value.trim() !== '' && !phoneRegex.test(phone.value.trim())) {
      addError(phone, 'Telefono numeris turi būti 8–15 skaitmenų.');
    }

    if (message.value.trim().length < 10) {
      addError(message, 'Žinutė turi būti bent 10 simbolių ilgio.');
    }

    if (!isValid) {
      firstInvalidField.focus();
      alert('Pataisykite šias klaidas:\n\n' + errors.map((error) => '• ' + error).join('\n'));
      return;
    }

    disableScroll();
    showBackDrop();
    showFormModal();
    fillOutputModal();
  });
}

newGameButton.addEventListener('click', () => {
  startNewGame();
});

if (confirmModalButton != null) {
  confirmModalButton.addEventListener('click', () => {
    hideBackDrop();
    hideFormModal();
    enableScroll();
    resetForm();
  });
}

gameButton.addEventListener('click', () => {
  disableScroll();
  showBackDrop();
  showGameWindow();
  startNewGame();
});

closeGameButton.addEventListener('click', () => {
  hideGameWindow();
  hideBackDrop();
  enableScroll();
});
