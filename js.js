function darkmode() {
  const darkbody = document.body;
  const header = document.querySelector('header');
  const fundo = document.getElementById('fundo');
  const titles = document.querySelectorAll('.title');
  const textApresentacao = document.getElementById('text-apresentaçao');
  const textApresentacao2 = document.getElementById('text-apresentaçao2');
  const check = document.getElementById('check');

  const isDarkMode = check.checked;

  darkbody.classList.toggle("dark", isDarkMode);
  header.classList.toggle('dark', isDarkMode);
  fundo.classList.toggle("dark", isDarkMode);
  
  titles.forEach(title => title.classList.toggle("dark", isDarkMode));
  
  textApresentacao.classList.toggle("dark", isDarkMode);
  textApresentacao2.classList.toggle("dark", isDarkMode);

  const labels = document.querySelectorAll('label');
  labels.forEach(label => label.classList.toggle("dark", isDarkMode));

  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');

  if (nome) nome.classList.toggle("dark", isDarkMode);
  if (email) email.classList.toggle("dark", isDarkMode);
  if (mensagem) mensagem.classList.toggle("dark", isDarkMode);

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.classList.toggle("dark", isDarkMode));
  
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => slider.classList.toggle("dark", isDarkMode));
  
  const sites = document.querySelectorAll('.site');
  sites.forEach(site => site.classList.toggle("dark", isDarkMode));
  
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.classList.toggle("dark", isDarkMode));
  
  const lastChildLinks = document.querySelectorAll('.rede a:last-child p');
  lastChildLinks.forEach(link => link.classList.toggle("dark", isDarkMode));

  localStorage.setItem("dark-mode", isDarkMode ? "true" : "false");
}

  const text = document.getElementById('name');

  text.addEventListener('mouseover', () => {
      text.style.fontSize = '2.5vw'; 
  });

  text.addEventListener('mouseout', () => {
      text.style.fontSize = '2vw'; 
  });

  const title2 = document.querySelectorAll('h2');

title2.forEach(title => {
    title.addEventListener('mouseover', () => {
        title.style.fontSize = '4.7vw'; 
    });

    title.addEventListener('mouseout', () => {
        title.style.fontSize = '4.2vw'; 
    });
});

  const titles = document.getElementsByClassName('title');

for (let title of titles) {
    title.addEventListener('mouseover', () => {
        title.style.fontSize = '5.5vw'; 
    });

    title.addEventListener('mouseout', () => {
        title.style.fontSize = '5vw'; 
    });
}

const boxes = document.getElementsByClassName('box');

for (let box of boxes) {
  box.addEventListener('mouseover', () => {
    box.style.width = '9vw';
  });

  box.addEventListener('mouseout', () => {
    box.style.width = '8vw';
  });
}

const foto = document.getElementById('foto');

for (let box of boxes) {
  foto.addEventListener('mouseover', () => {
    foto.style.width = '25vw';
  });

  foto.addEventListener('mouseout', () => {
    foto.style.width = '24vw';
  });
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000);

const sites = document.querySelectorAll('.site');

        for (let site of sites) {
            site.addEventListener('mouseover', () => {
                site.style.width = '51vw';
            });

            site.addEventListener('mouseout', () => {
                site.style.width = '50vw'; 
            });
        }

        const imgs = document.querySelectorAll('.box2 img');

        imgs.forEach(img => {
            img.addEventListener('mouseover', () => {
                img.style.width = '4.5vw';
            });

            img.addEventListener('mouseout', () => {
                img.style.width = '4vw';
            });
        });