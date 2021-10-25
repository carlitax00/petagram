addEventListener('DOMContentLoaded', () => {
    const form_login = document.querySelector('#loginform')
    const login_span = form_login.querySelector('.signinbtntext')
    const loader = form_login.querySelector('#loader')
    const errormessage = document.querySelector('containererror')

    if(form_login) {
        form_login.addEventListener('submit', event => {
            event.preventDefault()

            const usuario = form_login.querySelector('.user').value
            const password = form_login.querySelector('.password').value

            login_span.srtyle.display = 'none'
            loader.style.display = 'inline'
        })
    }
})