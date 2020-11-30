const close = document.querySelector('#close');

    const container = document.querySelector('.containerT');

    const title = document.querySelector('.titleT');

    

    const menu = document.querySelector('.menuT');
    const open = document.querySelector('.open');

    container.addEventListener('scroll', ()=> {
      const { top } = title.getBoundingClientRect();
      open.style.opacity = top;
      
    });

    const as = document.querySelectorAll('.ranking');

    as.forEach(a => {
      a.addEventListener('click', ()=> {
        menu.style.left = '-100%';
        open.style.opacity = 1;
      });
    }) 

    close.addEventListener('click', ()=> {
      menu.style.left = '-100%';
      open.style.opacity = 1;
    });

    open.addEventListener('click', ()=> {
      menu.style.left = '0';
      open.style.opacity = 0;
    });
  