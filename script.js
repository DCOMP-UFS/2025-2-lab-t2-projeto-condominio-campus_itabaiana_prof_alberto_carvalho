document.addEventListener('DOMContentLoaded', () => {
    
    // Lista de Laboratórios (Baseada na descrição do seu projeto)
    const laboratorios = [
        { 
            nome: "Laboratório de Geomorfologia", 
            img: "lab1.png" 
        },
        { 
            nome: "Laboratório Biota do Nordeste", 
            img: "lab2.png" 
        },
        { 
            nome: "Laboratório de Disciplinas Escolares", 
            img: "lab3.png" 
        },
        { 
            nome: "Laboratório de Estudos em Filosofia e Literatura", 
            img: "lab4.png" 
        },
        { 
            nome: "Laboratório de Estudos Interdisciplinares", 
            img: "lab5.png" 
        },
        { 
            nome: "Laboratório de Educação e Movimentos Sociais", 
            img: "lab6.png" 
        }
    ];

    let indiceAtual = 0;

    // Elementos do DOM
    const labNome = document.getElementById('lab-nome');
    const labImg = document.getElementById('lab-img');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    // Inicializa com o primeiro laboratório
    if(labNome && labImg) {
        atualizarCard(false); // false para não animar na carga inicial
    }

    function atualizarCard(animar = true) {
        // Se animar for true, faz o efeito de fade
        if(animar) {
            labImg.style.opacity = 0;
            labNome.style.opacity = 0;

            setTimeout(() => {
                labNome.innerText = laboratorios[indiceAtual].nome;
                labImg.src = laboratorios[indiceAtual].img;
                
                labImg.style.opacity = 1;
                labNome.style.opacity = 1;
            }, 200);
        } else {
            // Sem animação (apenas define os valores iniciais)
            labNome.innerText = laboratorios[indiceAtual].nome;
            labImg.src = laboratorios[indiceAtual].img;
        }
    }

    // Clique no botão Próximo
    if(btnNext) {
        btnNext.addEventListener('click', () => {
            indiceAtual++;
            if (indiceAtual >= laboratorios.length) {
                indiceAtual = 0; // Volta para o primeiro
            }
            atualizarCard();
        });
    }

    // Clique no botão Anterior
    if(btnPrev) {
        btnPrev.addEventListener('click', () => {
            indiceAtual--;
            if (indiceAtual < 0) {
                indiceAtual = laboratorios.length - 1; // Vai para o último
            }
            atualizarCard();
        });
    }
});
