# Identificação do Projeto de Redes
## Nome dos Técnicos responsáveis:
- Enzo Emanuel Maia Costa - https://github.com/DCOMP-UFS/2025-2-lab-t2-projeto-lab-site-Enz0EMCosta
- Ewerton Luís Souza Anjos - https://github.com/DCOMP-UFS/2025-2-lab-t2-projeto-lab-site-ewrtonl
- Leticia Rezende dos Santos - https://github.com/DCOMP-UFS/2025-2-lab-t2-projeto-lab-site-leticiare
- Pedro Henrique Gomes dos Santos - https://github.com/DCOMP-UFS/2025-2-lab-t2-projeto-lab-site-Pedrophg1
- Raphael Ferreira Portella Balecar - https://github.com/DCOMP-UFS/2025-2-lab-t2-projeto-lab-site-RaphaFPB
- Saymon Anderson Vieira Silva - https://github.com/DCOMP-UFS/2025-2-lab-t2-projeto-lab-site-Saymon-Anderson

## Resumo descritivo

Este projeto tem como objetivo o planejamento, a modelagem e a implementação da infraestrutura de redes do Condomínio de Laboratórios do Campus Professor Alberto Carvalho – UFS Itabaiana. O escopo abrange todos os ambientes, contemplando o Laboratório de Geomorfologia, o Laboratório Biota do Nordeste, o Laboratório de Disciplinas Escolares, o Laboratório de Estudos em Filosofia e Literatura, o Laboratório de Estudos Interdisciplinares e o Laboratório de Educação e Movimentos Sociais.
A proposta visa oferecer uma infraestrutura de rede segura, escalável e adequada às necessidades de pesquisa acadêmica em Ciências Humanas, possibilitando a coleta, o armazenamento, o processamento e a disponibilização de dados sensíveis de forma eficiente. Para isso, o projeto contempla segmentação de rede por meio de VLANs, acesso cabeado e sem fio, serviços de servidores dedicados (web, banco de dados, aplicação e autenticação), além de mecanismos de segurança como firewall, controle de acesso e isolamento lógico dos ambientes.
Além do ambiente local, o projeto prevê a disponibilização de um site institucional, estético, informativo e totalmente funcional do condomínio de laboratórios, containerizado com Docker e executado em uma instância EC2 na AWS Academy, permitindo a divulgação das atividades. de pesquisa, da infraestrutura instalada e dos benefícios obtidos com a adesão ao condomínio de laboratórios.

## Laboratórios Contemplados: 
- Laboratório de Geomorfologia: Espaço destinado ao Grupo de Geomorfologia, o Laboratório de Geomorfologia dedica-se ao estudo das formas de relevo e dos processos geomorfológicos. A unidade conta com uma infraestrutura composta por 4 desktops de alto desempenho, além de uma rede estruturada com cabeamento Cat6. A conectividade é garantida por 1 Switch de 24 portas (1 Gbps) com 4 uplinks ópticos (10 Gbps) e 1 Access Point com injetor PoE. Toda a operação de dados é suportada por 1 servidor FusionServer (xFusion) modelo 2288H V7

- Laboratório Biota do Nordeste: Focado no inventário e conservação da biodiversidade regional, o Laboratório Biota do Nordeste é destinado ao grupo de pesquisa com esse mesmo nome. O laboratório possui uma infraestrutura tecnológica composta por 3 desktops preparados para softwares de bioestatística. A rede local também é composta por cabeamento Cat6, 1 Switch de 24 portas (1 Gbps) com 4 uplinks ópticos (10 Gbps) e 1 Access Point com injetor PoE. Todo o ecossistema digital é centralizado em 1 servidor xFusion modelo 2288H V7

- Laboratório de Disciplinas Escolares: Sendo um Ambiente Pedagógico voltado para a inovação educacional, o Laboratório de Disciplinas Escolares é destinado para o Grupo de Disciplinas Escolares: História, Ensino e Aprendizagem, destinado para o desenvolvimento de metodologias ativas. A infraestrutura de TI conta com 6 desktops, integrados por cabeamento estruturado Cat6, a conectividade é garantida por 1 Switch de 24 portas (1 Gbps) com 4 uplinks ópticos (10 Gbps) e 1 Access Point com injetor PoE, além de contar com um serviço de rede realizado por 1 servidor xFusion modelo 2288H V7

- Laboratórios de Estudos em Filosofia e Literatura: "Projetado como um centro de humanidades digital, o Laboratório de Estudos em Filosofia e Literatura integra um espaço de reflexão crítica com alta tecnologia. O ambiente dispõe de uma infraestrutura de TI conta com 3 desktops dedicados à consulta de bases de dados e periódicos digitais, conectados via cabeamento Cat6. A rede é suportada por 1 Switch de 24 portas (1 Gbps) com 4 uplinks ópticos (10 Gbps) e 1 Access Point com injetor PoE para conectividade móvel. O gerenciamento do acervo digital e dos sistemas de pesquisa é sustentado por 1 servidor xFusion modelo 2288H V7."

- Laboratório de Estudos Intedisciplinares: Projetado para fomentar a convergência acadêmica, o Laboratório de Estudos Interdisciplinares oferece um ambiente de alta densidade para projetos colaborativos complexos. O espaço é equipado com 5 desktops distribuídos em ilhas de trabalho para facilitar a interação entre pesquisadores. A infraestrutura de rede robusta utiliza cabeamento estruturado Cat6 conectado a 1 Switch de 24 portas (1 Gbps) com 4 uplinks ópticos (10 Gbps), garantindo tráfego de dados intenso sem gargalos. A mobilidade é assegurada por 1 Access Point com injetor PoE, e todo o processamento de dados cruzados é centralizado no servidor xFusion modelo 2288H V7.

- Laboratório de Educação e Movimentos Sociais: Estruturado para unir pesquisa de campo e debate teórico, o Laboratório de Educação e Movimentos Sociais dispõe de um layout híbrido com mesas redondas para dinâmicas de grupo e uma bancada tecnológica. O setor digital conta com 3 desktops voltados para a compilação de dados sociais e acesso a acervos digitais, operando sobre uma rede Cat6. A conectividade do ambiente é gerida por 1 Switch de 24 portas (1 Gbps) com uplinks de 10 Gbps e 1 Access Point com injetor PoE, permitindo o uso de múltiplos dispositivos móveis durante as reuniões. A segurança e armazenamento dos dados sensíveis de pesquisa ficam a cargo do servidor xFusion modelo 2288H V7



## Documentos técnicos

- Mapa da rede: contendo a topologia da rede dos laboratórios de Antropologia Oral e Psicologia Cognitiva, com todos os dispositivos identificados e segmentação de VLANs.
- Planilha de endereçamento IP: Definição de endereços IP para cada dispositivo na rede, garantindo organização e acessibilidade.
- Check-list de dispositivos e justificativas: Documento listando switches, roteadores, servidores, cabeamento e outros equipamentos, com explicação de como cada um auxilia nas pesquisas.
- Dockerfile: Arquivo na raiz do repositório que configura o ambiente do site do laboratório para execução no Docker/EC2.
- Documentação adicional: Planilhas de plantas, planilhas de atas e outros documentos complementares do condomínio de laboratórios.
- Política de Segurança e Controle de Acesso (ACLs): Documento detalhando as regras de firewall e permissões de usuários, definindo quem pode acessar os "dados sensíveis" (ex: isolamento entre a rede de visitantes e a rede de dados de pesquisa).
- Diagrama de Rack e Cabeamento: Desenho visual da organização física dos equipamentos dentro dos racks (patch panels, organizadores de cabos, switches), essencial para a manutenção local no Campus Professor Alberto Carvalho.
- Estimativa Orçamentária: Planilha com os custos estimados dos equipamentos listados no check-list

## Links do site de demonstração
Site do laboratório hospedado em EC2 via Docker:  
Repositório GitHub com o código do site e Dockerfile: https://github.com/DCOMP-UFS/2025-2-lab-t2-projeto-condominio-campus_itabaiana_prof_alberto_carvalho
