// burger menu
let burger_menu = document.querySelector(".burger_menu");
let menu = document.querySelector(".header_navigation");
let nav_links = document.querySelectorAll('.nav_list_item');
let menu_bg = document.querySelector(".menu_bg");

burger_menu.addEventListener("click", function(){
  menu.classList.toggle('open');
  if(menu.classList.contains('open')) {
    menu_bg.style.display = 'block';
  } else {
    menu_bg.style.display = 'none';
  }
});

menu_bg.addEventListener('click', function() {
  menu.classList.remove('open');
  menu_bg.style.display = 'none';
});

for(let i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener('click', function() {
    menu.classList.remove('open');
    if(i != 4) {
      menu_bg.style.display = 'none';
    }
  });
}

//login popup
let login_button = document.querySelector('.login_button');
let account = document.getElementById('account');

account.addEventListener('click', () => {
  menu_bg.style.display = 'block';

  let login_popup = document.createElement('div');
  login_popup.className = 'login_popup';
  document.body.append(login_popup);

  menu_bg.addEventListener('click', () => {
    login_popup.remove();
  });

  let popup_title = document.createElement('div');
  popup_title.className = 'popup_title';
  popup_title.innerHTML = 'Log in to your account';

  let sign_facebook = document.createElement('button');
  sign_facebook.className = 'sign_facebook';

  let fb_svg = document.createElement('img');
  fb_svg.className = 'fb_svg';
  fb_svg.src = './assets/icons/facebook.svg';
  let fb_text = document.createElement('p');
  fb_text.className = 'fb_text';
  fb_text.innerHTML = 'Sign In with Facebook';

  let sign_google = document.createElement('button');
  sign_google.className = 'sign_google';

  let gl_svg = document.createElement('img');
  gl_svg.className = 'gl_svg';
  gl_svg.src = './assets/icons/google.svg';
  let gl_text = document.createElement('p');
  gl_text.className = 'gl_text';
  gl_text.innerHTML = 'Sign In with Google';

  let or_block = document.createElement('div');
  or_block.className = 'or_block';

  let or_lineFirst = document.createElement('div');
  or_lineFirst.className = 'or_lineFirst';

  let or_lineSecond = document.createElement('div');
  or_lineSecond.className = 'or_lineSecond';
  
  let or = document.createElement('div');
  or.className = 'or';
  or.innerHTML = 'or';

  let sign_form = document.createElement('form');
  sign_form.className = 'sign_form';
  let email_wrapper = document.createElement('div');
  email_wrapper.className = 'email_wrapper';
  let email_label = document.createElement('label');
  email_label.className = 'email_label';
  email_label.innerHTML = 'E-mail';
  email_label.setAttribute('for', 'email');
  let email_input = document.createElement('input');
  email_input.className = 'email_input';
  email_input.setAttribute('type', 'email');
  email_input.setAttribute('name', 'email');
  
  let password_wrapper = document.createElement('div');
  password_wrapper.className = 'password_wrapper';
  let password_label = document.createElement('label');
  password_label.className = 'password_label';
  password_label.innerHTML = 'Password';
  password_label.setAttribute('for', 'password');
  let password_input = document.createElement('input');
  password_input.className = 'password_input';
  password_input.setAttribute('type', 'password');
  password_input.setAttribute('name', 'password');

  let sign_button = document.createElement('button');
  sign_button.className = 'sign_button';
  sign_button.setAttribute('type', 'submit');
  sign_button.innerHTML = 'Sign In';

  let forgot_password = document.createElement('div');
  forgot_password.className = 'forgot_password';
  forgot_password.innerHTML = 'Forgot Your Password?';

  let form_underline = document.createElement('div');
  form_underline.className = 'form_underline';

  let register_block = document.createElement('div');
  register_block.className = 'register_block';
  let register_text = document.createElement('div');
  register_text.className = 'register_text';
  register_text.innerHTML = 'Don’t have an account?&nbsp;';
  let register_link = document.createElement('div');
  register_link.className = 'register_link';
  register_link.innerHTML = 'Register';

  sign_facebook.appendChild(fb_svg);
  sign_facebook.appendChild(fb_text);
  sign_google.appendChild(gl_svg);
  sign_google.appendChild(gl_text);
  or_block.appendChild(or_lineFirst);
  or_block.appendChild(or);
  or_block.appendChild(or_lineSecond);
  password_wrapper.appendChild(password_label);
  password_wrapper.appendChild(password_input);
  email_wrapper.appendChild(email_label);
  email_wrapper.appendChild(email_input);
  sign_form.appendChild(email_wrapper);
  sign_form.appendChild(password_wrapper);
  sign_form.appendChild(sign_button);
  sign_form.appendChild(forgot_password);
  register_block.appendChild(register_text);
  register_block.appendChild(register_link);

  login_popup.appendChild(popup_title);
  login_popup.appendChild(sign_facebook);
  login_popup.appendChild(sign_google);
  login_popup.appendChild(or_block);
  login_popup.appendChild(sign_form);
  login_popup.appendChild(form_underline);
  login_popup.appendChild(register_block);

  sign_form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(email_label.textContent + ': ' + email_input.value + ';\n' + password_label.textContent + ': ' + password_input.value + ';');
  });

  register_link.addEventListener('click', () => {
    login_popup.style.height = '436px';
    popup_title.innerHTML = 'Create account';
    sign_button.innerHTML = 'Sign Up';
    sign_facebook.remove();
    sign_google.remove();
    or_block.remove();
    forgot_password.remove();
    register_text.innerHTML = 'Already have an account?&nbsp;';
    register_link.innerHTML = 'Log in';
  });
});

login_button.addEventListener('click', () => {
  menu_bg.style.display = 'block';

  let login_popup = document.createElement('div');
  login_popup.className = 'login_popup';
  document.body.append(login_popup);

  menu_bg.addEventListener('click', () => {
    login_popup.remove();
  });

  let popup_title = document.createElement('div');
  popup_title.className = 'popup_title';
  popup_title.innerHTML = 'Log in to your account';

  let sign_facebook = document.createElement('button');
  sign_facebook.className = 'sign_facebook';

  let fb_svg = document.createElement('img');
  fb_svg.className = 'fb_svg';
  fb_svg.src = './assets/icons/facebook.svg';
  let fb_text = document.createElement('p');
  fb_text.className = 'fb_text';
  fb_text.innerHTML = 'Sign In with Facebook';

  let sign_google = document.createElement('button');
  sign_google.className = 'sign_google';

  let gl_svg = document.createElement('img');
  gl_svg.className = 'gl_svg';
  gl_svg.src = './assets/icons/google.svg';
  let gl_text = document.createElement('p');
  gl_text.className = 'gl_text';
  gl_text.innerHTML = 'Sign In with Google';

  let or_block = document.createElement('div');
  or_block.className = 'or_block';

  let or_lineFirst = document.createElement('div');
  or_lineFirst.className = 'or_lineFirst';

  let or_lineSecond = document.createElement('div');
  or_lineSecond.className = 'or_lineSecond';
  
  let or = document.createElement('div');
  or.className = 'or';
  or.innerHTML = 'or';

  let sign_form = document.createElement('form');
  sign_form.className = 'sign_form';
  let email_wrapper = document.createElement('div');
  email_wrapper.className = 'email_wrapper';
  let email_label = document.createElement('label');
  email_label.className = 'email_label';
  email_label.innerHTML = 'E-mail';
  email_label.setAttribute('for', 'email');
  let email_input = document.createElement('input');
  email_input.className = 'email_input';
  email_input.setAttribute('type', 'email');
  email_input.setAttribute('name', 'email');
  
  let password_wrapper = document.createElement('div');
  password_wrapper.className = 'password_wrapper';
  let password_label = document.createElement('label');
  password_label.className = 'password_label';
  password_label.innerHTML = 'Password';
  password_label.setAttribute('for', 'password');
  let password_input = document.createElement('input');
  password_input.className = 'password_input';
  password_input.setAttribute('type', 'password');
  password_input.setAttribute('name', 'password');

  let sign_button = document.createElement('button');
  sign_button.className = 'sign_button';
  sign_button.setAttribute('type', 'submit');
  sign_button.innerHTML = 'Sign In';

  let forgot_password = document.createElement('div');
  forgot_password.className = 'forgot_password';
  forgot_password.innerHTML = 'Forgot Your Password?';

  let form_underline = document.createElement('div');
  form_underline.className = 'form_underline';

  let register_block = document.createElement('div');
  register_block.className = 'register_block';
  let register_text = document.createElement('div');
  register_text.className = 'register_text';
  register_text.innerHTML = 'Don’t have an account?&nbsp;';
  let register_link = document.createElement('div');
  register_link.className = 'register_link';
  register_link.innerHTML = 'Register';

  sign_facebook.appendChild(fb_svg);
  sign_facebook.appendChild(fb_text);
  sign_google.appendChild(gl_svg);
  sign_google.appendChild(gl_text);
  or_block.appendChild(or_lineFirst);
  or_block.appendChild(or);
  or_block.appendChild(or_lineSecond);
  password_wrapper.appendChild(password_label);
  password_wrapper.appendChild(password_input);
  email_wrapper.appendChild(email_label);
  email_wrapper.appendChild(email_input);
  sign_form.appendChild(email_wrapper);
  sign_form.appendChild(password_wrapper);
  sign_form.appendChild(sign_button);
  sign_form.appendChild(forgot_password);
  register_block.appendChild(register_text);
  register_block.appendChild(register_link);

  login_popup.appendChild(popup_title);
  login_popup.appendChild(sign_facebook);
  login_popup.appendChild(sign_google);
  login_popup.appendChild(or_block);
  login_popup.appendChild(sign_form);
  login_popup.appendChild(form_underline);
  login_popup.appendChild(register_block);

  sign_form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(email_label.textContent + ': ' + email_input.value + ';\n' + password_label.textContent + ': ' + password_input.value + ';');
  });

  register_link.addEventListener('click', () => {
    login_popup.style.height = '436px';
    popup_title.innerHTML = 'Create account';
    sign_button.innerHTML = 'Sign Up';
    sign_facebook.remove();
    sign_google.remove();
    or_block.remove();
    forgot_password.remove();
    register_text.innerHTML = 'Already have an account?&nbsp;';
    register_link.innerHTML = 'Log in';
  });
});

//slider
let slider_dote = [...document.querySelectorAll('.dote')];
let slider_item = [...document.querySelectorAll('.destination')];
let right_arrow = document.querySelector('.right');
let left_arrow = document.querySelector('.left');

let slide_width = document.querySelector('.destination').offsetWidth;

window.addEventListener("resize" , () => {
  slide_width = document.querySelector('.destination').offsetWidth;
});

slider_dote[1].classList.toggle('active');
slider_item[2].style.marginRight = "0px";
slider_item[0].style.marginLeft = "0px";

slider_item[0].addEventListener("click", () => {
  if(!slider_dote[0].classList.contains('active')) {
    slider_dote[0].classList.toggle('active');
    slider_dote[1].classList.remove('active');
    slider_dote[2].classList.remove('active');
    if(slider_item[2].style.marginRight) {
      slider_item[2].style.marginRight = "0px";
      slider_item[0].style.marginLeft = slide_width * 2 + 120 + "px";
    }
  }
});

slider_dote[0].addEventListener("click", () => {
  if(!slider_dote[0].classList.contains('active')) {
    slider_dote[0].classList.toggle('active');
    slider_dote[1].classList.remove('active');
    slider_dote[2].classList.remove('active');
    if(slider_item[2].style.marginRight) {
      slider_item[2].style.marginRight = "0px";
      slider_item[0].style.marginLeft = slide_width * 2 + 120 + "px";
    }
  }
});

slider_item[1].addEventListener("click", () => {
  if(!slider_dote[1].classList.contains('active')) {
    slider_dote[1].classList.toggle('active');
    slider_dote[0].classList.remove('active');
    slider_dote[2].classList.remove('active');
    if(slider_item[0].style.marginLeft) {
      slider_item[0].style.marginLeft = "0px";
    }
    if(slider_item[2].style.marginRight) {
      slider_item[2].style.marginRight = "0px";
    }
  }
});

slider_dote[1].addEventListener("click", () => {
  if(!slider_dote[1].classList.contains('active')) {
    slider_dote[1].classList.toggle('active');
    slider_dote[0].classList.remove('active');
    slider_dote[2].classList.remove('active');
    if(slider_item[0].style.marginLeft) {
      slider_item[0].style.marginLeft = "0px";
    }
    if(slider_item[2].style.marginRight) {
      slider_item[2].style.marginRight = "0px";
    }
  }
});

slider_item[2].addEventListener("click", () => {
  if(!slider_dote[2].classList.contains('active')) {
    slider_dote[2].classList.toggle('active');
    slider_dote[0].classList.remove('active');
    slider_dote[1].classList.remove('active');
    if(slider_item[0].style.marginLeft) {
      slider_item[0].style.marginLeft = "0px";
      slider_item[2].style.marginRight = slide_width * 2 + 120 + "px";
    }
  }
});

slider_dote[2].addEventListener("click", () => {
  if(!slider_dote[2].classList.contains('active')) {
    slider_dote[2].classList.toggle('active');
    slider_dote[0].classList.remove('active');
    slider_dote[1].classList.remove('active');
    if(slider_item[0].style.marginLeft) {
      slider_item[0].style.marginLeft = "0px";
      slider_item[2].style.marginRight = slide_width * 2 + 120 + "px";
    }
  }
});

right_arrow.addEventListener('click', () => {

  if(slider_dote[0].classList.contains('active')) {
    slider_dote[1].classList.toggle('active');
    slider_dote[0].classList.remove('active');
    slider_dote[2].classList.remove('active');
    if(slider_item[0].style.marginLeft || slider_item[2].style.marginRight) {
      slider_item[2].style.marginRight = "0px";
      slider_item[0].style.marginLeft = "0px";
      right_arrow.style.pointerEvents = "auto";
      left_arrow.style.pointerEvents = "auto";
    }
  }
  else {
    if(slider_dote[1].classList.contains('active')) {
      slider_dote[2].classList.toggle('active');
      slider_dote[0].classList.remove('active');
      slider_dote[1].classList.remove('active');
      right_arrow.style.color = "rgba(242, 120, 92, 0.5)";
      left_arrow.style.color = "var(--orange)";
      if(slider_item[0].style.marginLeft) {
        slider_item[0].style.marginLeft = "0px";
        slider_item[2].style.marginRight = slide_width * 2 + 120 + "px";
      }
    }
  }
});

left_arrow.addEventListener("click", () => {

  if(slider_dote[2].classList.contains('active')) {
    slider_dote[1].classList.toggle('active');
    slider_dote[0].classList.remove('active');
    slider_dote[2].classList.remove('active');
    if(slider_item[0].style.marginLeft || slider_item[2].style.marginRight) {
      slider_item[2].style.marginRight = "0px";
      slider_item[0].style.marginLeft = "0px";
      right_arrow.style.pointerEvents = "auto";
      left_arrow.style.pointerEvents = "auto";
    }
  }
  else {
    if(slider_dote[1].classList.contains('active')) {
      slider_dote[0].classList.toggle('active');
      slider_dote[1].classList.remove('active');
      slider_dote[2].classList.remove('active');
      left_arrow.style.color = "rgba(242, 120, 92, 0.5)";
      right_arrow.style.color = "var(--orange)";
      if(slider_item[2].style.marginRight) {
        slider_item[2].style.marginRight = "0px";
        slider_item[0].style.marginLeft = slide_width * 2 + 120 + "px";
      }
    }
  }
});