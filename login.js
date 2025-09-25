const body = document.body;
const loginBox = document.querySelector( ".login-box" );
const h1 = document.getElementsByTagName( "h1" )[ 0 ];
const inputs = document.querySelectorAll( "input" );
const loginButton = document.getElementById( "login-button" );

function trocartema() {
    loginBox.classList.toggle( "telaflutuante" );
    body.classList.toggle( "telaflutuante" );
    h1.classList.toggle( "telaflutuante" );
    inputs.forEach( input => {
        input.classList.toggle( "telaflutuante" );
    });
    loginButton.classList.toggle( "telaflutuante" );
h2.classList.toggle( "telaflutuante" );
}
