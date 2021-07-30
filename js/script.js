document.addEventListener("DOMContentLoaded", () => {
  
    const currency = document.querySelectorAll('.currency'),
        form = document.querySelector('form'),
        email = form.querySelector('#email'),
        pass = form.querySelector('#password'),
        privacy = form.querySelector('[type="checkbox"]'),
        erremail = form.querySelector('.dataDuck__error_email'),
        errpass = form.querySelector('.dataDuck__error_pass'),
        errprivacy = form.querySelector('.dataDuck__error_privacy'),
        Email = form.querySelector('.dataDuck__email'),
        password = form.querySelector('.dataDuck__password');
    let currencyChoose = currency[0];


    function removeError(){
        erremail.classList.remove('show');
        errpass.classList.remove('show');
        errprivacy.classList.remove('show');
        privacy.parentNode.style.marginBottom = ``;
        form.querySelectorAll('input').forEach(item => {
            defaultBorder(item);
        });
        
    }
    function defaultBorder (border){
        border.style.border = '';
    }

    // выделяет выбранную валюту в форме и сохраняет ее в отдельную перевенную

    currency.forEach((item) => {
        
        item.addEventListener('click', (event) => {
            event.preventDefault();
            currency.forEach((item, i) => {
                item.classList.remove('active');
            });
            event.target.classList.toggle('active');
            currencyChoose = event.target;

        });
    });

    // Удаляет действие по умолчанию у формы и проверяет введенные данные

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        removeError();
        if(email.value && pass.value.length >= 4 && privacy.checked){
            // отправка формы
            form.reset();
        }else if(!email.value){
            removeError();
            erremail.classList.add('show');
            Email.style.border = '1px solid #E15433';
            privacy.parentNode.style.marginBottom = `24px`;
            
        } else if (pass.value.length < 4){
            removeError();
            errpass.classList.add('show');
            password.style.border = '1px solid #E15433';
        } else {
            removeError();
            errprivacy.classList.add('show');
            privacy.parentNode.style.marginBottom = `24px`;
        }
    });

});