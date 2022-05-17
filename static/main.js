const activePage = window.location.pathname;

document.querySelectorAll('header a').forEach(link => {
    if(link.href.includes(activePage))
        link.classList.add('active-nav');
})

// animate a twist for the house image
document.querySelector('.home-page__container img').addEventListener('click', (e)=> {
    e.target.classList.add('spin')
    setTimeout(()=> {
        e.target.classList.remove('spin')
    }, 2000)
})