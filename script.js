document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE TROCA DE IMAGEM DO PROJETO ---
    const plantaImg = document.getElementById('planta-img');
    const btnTrocar = document.getElementById('btn-trocar-planta');
    let mostrandoGP = false; 

    if (plantaImg && btnTrocar) {
        btnTrocar.addEventListener('click', () => {
            plantaImg.style.opacity = 0;
            setTimeout(() => {
                if (mostrandoGP) {
                    plantaImg.src = "planta.png"; 
                } else {
                    plantaImg.src = "plantagp.png";
                }
                mostrandoGP = !mostrandoGP;
                plantaImg.style.opacity = 1;
            }, 300);
        });
    }

    // --- LÓGICA DO CARROSSEL DE LABORATÓRIOS ---
    const laboratorios = [
        { 
            nome: "Laboratório de Geomorfologia", 
            img: "lab1.png",
            descricao: "Espaço destinado ao Grupo de Geomorfologia, o Laboratório de Geomorfologia dedica-se ao estudo das formas de relevo e dos processos geomorfológicos. A unidade conta com uma infraestrutura composta por 4 desktops de alto desempenho, além de uma rede estruturada com cabeamento Cat6. A conectividade é garantida por 1 Switch de 24 portas (1 Gbps) com 4 uplinks ópticos (10 Gbps) e 1 Access Point com injetor PoE. Toda a operação de dados é suportada por 1 servidor FusionServer (xFusion) modelo 2288H V7."
        },
        { 
            nome: "Laboratório Biota do Nordeste", 
            img: "lab2.png",
            descricao: "Focado no inventário e conservação da biodiversidade regional, o Laboratório Biota do Nordeste é destinado ao grupo de pesquisa com esse mesmo nome. O laboratório possui uma infraestrutura tecnológica composta por 3 desktops preparados para softwares de bioestatística. A rede local também é composta por cabeamento Cat6, 1 Switch de 24 portas (1 Gbps) com 4 uplinks ópticos (10 Gbps) e 1 Access Point com injetor PoE. Todo o ecossistema digital é centralizado em 1 servidor xFusion modelo 2288H V7."
        },
        { 
            nome: "Laboratório de Disciplinas Escolares", 
            img: "lab3.png",
            descricao: "Sendo um Ambiente Pedagógico voltado para a inovação educacional, o Laboratório de Disciplinas Escolares é destinado para o Grupo de Disciplinas Escolares: História, Ensino e Aprendizagem, destinado para o desenvolvimento de metodologias ativas. A infraestrutura de TI conta com 6 desktops, integrados por cabeamento estruturado Cat6, a conectividade é garantida por 1 Switch de 24 portas (1 Gbps) com 4 uplinks ópticos (10 Gbps) e 1 Access Point com injetor PoE, além de contar com uma Impressora HP Pro 4203DW e um serviço de rede realizado por 1 servidor xFusion modelo 2288H V7."
        },
        { 
            nome: "Laboratório de Estudos em Filosofia e Literatura", 
            img: "lab4.png",
            descricao: "Projetado como um centro de humanidades digital, o Laboratório de Estudos em Filosofia e Literatura integra um espaço de reflexão crítica com alta tecnologia. O ambiente dispõe de uma infraestrutura de TI conta com 3 desktops dedicados à consulta de bases de dados e periódicos digitais, conectados via cabeamento Cat6. A rede é suportada por 1 Switch de 24 portas (1 Gbps) com 4 uplinks ópticos (10 Gbps) e 1 Access Point com injetor PoE para conectividade móvel. O gerenciamento do acervo digital e dos sistemas de pesquisa é sustentado por 1 servidor xFusion modelo 2288H V7."
        },
        { 
            nome: "Laboratório de Estudos Interdisciplinares", 
            img: "lab5.png",
            descricao: "Projetado para fomentar a convergência acadêmica, o Laboratório de Estudos Interdisciplinares oferece um ambiente de alta densidade para projetos colaborativos complexos. O espaço é equipado com 5 desktops distribuídos em ilhas de trabalho para facilitar a interação entre pesquisadores. A infraestrutura de rede robusta utiliza cabeamento estruturado Cat6 conectado a 1 Switch de 24 portas (1 Gbps) com 4 uplinks ópticos (10 Gbps), garantindo tráfego de dados intenso sem gargalos. A mobilidade é assegurada por 1 Access Point com injetor PoE, e todo o processamento de dados cruzados é centralizado no servidor xFusion modelo 2288H V7." 
        },
        { 
            nome: "Laboratório de Educação e Movimentos Sociais", 
            img: "lab6.png",
            descricao: "Estruturado para unir pesquisa de campo e debate teórico, o Laboratório de Educação e Movimentos Sociais dispõe de um layout híbrido com mesas redondas para dinâmicas de grupo e uma bancada tecnológica. O setor digital conta com 3 desktops voltados para a compilação de dados sociais e acesso a acervos digitais, operando sobre uma rede Cat6. A conectividade do ambiente é gerida por 1 Switch de 24 portas (1 Gbps) com uplinks de 10 Gbps e 1 Access Point com injetor PoE, permitindo o uso de múltiplos dispositivos móveis durante as reuniões. A segurança e armazenamento dos dados sensíveis de pesquisa ficam a cargo do servidor xFusion modelo 2288H V7" 
        }
    ];

    let indiceAtual = 0;

    const labNome = document.getElementById('lab-nome');
    const labImg = document.getElementById('lab-img');
    const labDesc = document.getElementById('lab-desc');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if(labNome && labImg && labDesc) {
        atualizarCard(false); 
    }

    function atualizarCard(animar = true) {
        if(animar) {
            labImg.style.opacity = 0;
            labNome.style.opacity = 0;
            labDesc.style.opacity = 0;

            setTimeout(() => {
                labNome.innerText = laboratorios[indiceAtual].nome;
                labImg.src = laboratorios[indiceAtual].img;
                labDesc.innerText = laboratorios[indiceAtual].descricao;
                
                labImg.style.opacity = 1;
                labNome.style.opacity = 1;
                labDesc.style.opacity = 1;
            }, 200); 
        } else {
            labNome.innerText = laboratorios[indiceAtual].nome;
            labImg.src = laboratorios[indiceAtual].img;
            labDesc.innerText = laboratorios[indiceAtual].descricao;
        }
    }

    if(btnNext) {
        btnNext.addEventListener('click', () => {
            indiceAtual++;
            if (indiceAtual >= laboratorios.length) {
                indiceAtual = 0;
            }
            atualizarCard();
        });
    }

    if(btnPrev) {
        btnPrev.addEventListener('click', () => {
            indiceAtual--;
            if (indiceAtual < 0) {
                indiceAtual = laboratorios.length - 1;
            }
            atualizarCard();
        });
    }
});
