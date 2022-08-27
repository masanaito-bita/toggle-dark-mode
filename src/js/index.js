const toggleSwitch = document.querySelector('.js-toggleSwitch');

const toggle = () => {
  const checked = toggleSwitch.getAttribute('aria-checked') === 'true';
  toggleSwitch.setAttribute('aria-checked', checked ? 'false' : 'true');

  if (checked === true) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  }
}

toggleSwitch.addEventListener('click', toggle);
