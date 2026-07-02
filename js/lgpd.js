let infoLgpd=document.querySelector('.info-lgpd');
let btnLgpd=document.querySelector('.info-lgpd button');

if (localStorage.getItem('LGPD')=="true") {
     infoLgpd.classList.add('d-none');
}
btnLgpd.addEventListener('click',() => {
    infoLgpd.classList.add('d-none');
    localStorage.setItem('LGPD','true');
})
