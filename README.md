# Identificação do Projeto de Redes
## Nome dos Técnicos responsáveis:
- Enzo Emanuel Maia Costa
- Ewerton Luís Souza Anjos
- Leticia Rezende dos Santos
- Pedro Henrique Gomes dos Santos
- Raphael Ferreira Portella Balecar
- Saymon Anderson Vieira Silva

## Resumo descritivo

Este projeto tem como objetivo o planejamento, a modelagem e a implementação da infraestrutura de redes do Condomínio de Laboratórios do Campus Professor Alberto Carvalho – UFS Itabaiana. O escopo abrange todos os ambientes, contemplando o Laboratório de Geomorfologia, o Laboratório Biota do Nordeste, o Laboratório de Disciplinas Escolares, o Laboratório de Estudos em Filosofia e Literatura, o Laboratório de Estudos Interdisciplinares e o Laboratório de Educação e Movimentos Sociais.
A proposta visa oferecer uma infraestrutura de rede segura, escalável e adequada às necessidades de pesquisa acadêmica em Ciências Humanas, possibilitando a coleta, o armazenamento, o processamento e a disponibilização de dados sensíveis de forma eficiente. Para isso, o projeto contempla segmentação de rede por meio de VLANs, acesso cabeado e sem fio, serviços de servidores dedicados (web, banco de dados, aplicação e autenticação), além de mecanismos de segurança como firewall, controle de acesso e isolamento lógico dos ambientes.
Além do ambiente local, o projeto prevê a disponibilização de um site institucional, estético, informativo e totalmente funcional do condomínio de laboratórios, containerizado com Docker e executado em uma instância EC2 na AWS Academy, permitindo a divulgação das atividades. de pesquisa, da infraestrutura instalada e dos benefícios obtidos com a adesão ao condomínio de laboratórios.

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
Site do laboratório hospedado em EC2 via Docker: (http://3.238.190.225/) 
Repositório GitHub com o código do site e Dockerfile: [https://github.com/DCOMP-UFS/2025-2-lab-t2-projeto-lab-site-Enz0EMCosta](https://github.com/DCOMP-UFS/2025-2-lab-t2-projeto-lab-site-Enz0EMCosta)
