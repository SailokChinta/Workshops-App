function formatDate( ISODate ) {
    const date = new Date( ISODate );
    return date;
}

const dateEls = document.querySelectorAll( '.date' );

for( let i=0; i < dateEls.length; i++ ) {
    dateEls[i].innerText = formatDate( dateEls[i].innerText );
}