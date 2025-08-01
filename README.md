# Portfólio de Arquitetura "Digital Project"

Este é um projeto de front-end que recria um design de um portfólio de arquitetura, originalmente feito no Figma. O site foi desenvolvido como uma aplicação de múltiplas páginas (MPA) utilizando React Router para a navegação.

### 🚀 [Veja a Demonstração ao Vivo](https://website-of-architects-lemon.vercel.app/)

---

### ✨ Funcionalidades

- **Layout Fiel ao Design:** Interface construída para ser uma réplica fiel do design proposto no Figma.
- **Navegação entre Páginas:** Utilização da biblioteca `react-router-dom` para uma navegação fluida entre as diferentes páginas do site.
- **Rotas Dinâmicas:** Página de detalhes de projetos gerada dinamicamente com base no ID do projeto na URL.
- **Componentização:** O projeto é estruturado com componentes reutilizáveis em React para um código limpo e de fácil manutenção.
- **Estrutura Moderna:** Desenvolvido com Vite para um ambiente de desenvolvimento rápido e otimizado.

### 🎨 Design Original

O layout deste projeto foi baseado em um design disponível na Comunidade Figma.

-   **[Link para o Figma](https://www.figma.com/community/file/1532117431698854331)**

### 🛠️ Tecnologias Utilizadas

| Ferramenta/Tecnologia | Versão |
| --------------------- | ------------------------------------- |
| **Vite** | `~7.0.4` |
| **React** | `^19.1.0` |
| **react-dom** | `^19.1.0` |
| **react-router-dom** | `^6.24.0` |
| **JavaScript (ES6+)** | Padrão do navegador |
| **CSS3** | Módulos de componentes |
| **HTML5** | Semântico |


## 🚀 Como Executar o Projeto

Para visualizar este projeto em sua máquina local, siga os passos abaixo:

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/BryanWalace/website-of-architects.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd website-of-architects
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).


## 📜 Histórico de Versões (Changelog)

### v1.0.2 - 29 de Julho de 2025
- 🔗 **Correções de Navegação:**
  - Ajustados links de botões e elementos para direcionarem corretamente às páginas designadas.
- 🎨 **Ajustes Visuais:**
  - Modificado o separador entre o logo e o título para melhor alinhamento.
  - Corrigido o tamanho dos ícones de redes sociais no rodapé para consistência visual.

### v1.0.1 - 29 de Julho de 2025
- 🔧 **Correção de Build:**
  - Corrigido um erro de sensibilidade de maiúsculas/minúsculas no caminho de importação de um ícone que estava causando falha no build da Vercel.
- **📝 Documentação:**
  - Adicionado o link da demonstração ao vivo no `README.md`.

### v1.0.0 - 29 de Julho de 2025
- 🚀 **Versão 1.0.0 - Lançamento Inicial Completo!**
- Implementação de todas as páginas secundárias do site: `GalleryPage`, `ProjectsPage`, `ProjectDetailPage` (com rota dinâmica), `CertificationsPage` e `ContactPage`.
- Criação de uma estrutura de dados centralizada (`ProjectData.js`) para gerenciar as informações dos projetos.
- O site agora está funcionalmente completo, com todas as seções e páginas do design original implementadas.

### v0.3.0 - 29 de Julho de 2025
- ✨ **Implementação Completa da HomePage:**
  - Construção de todos os componentes de seção da página principal: `HeroSection`, `AboutSection`, `MissionSection`, `HomeProjectsSection` e `ContactSection`.
  - Estilização de cada seção em arquivos CSS dedicados para corresponder ao design do Figma.
  - A `HomePage` agora monta todas as seções para formar a landing page completa.

### v0.2.0 - 29 de Julho de 2025
- 🔄 **Refatoração para Multi-Page App (MPA):**
  - O projeto foi convertido de uma SPA com `react-scroll` para uma MPA com `react-router-dom`.
  - `Header`, `Footer` e `Button` atualizados para usar a navegação por rotas.
- 🎨 **Implementação de Todas as Páginas:**
  - Todas as páginas do design foram criadas e estilizadas (`HomePage`, `GalleryPage`, `ProjectsPage`, `ProjectDetailPage`, `CertificationsPage`, `ContactPage`).
- **🔧 Correções de Estilo Globais:**
  - `index.css` reescrito para corrigir o layout (sticky footer, fundo branco, etc).
  - Fonte 'Roboto' implementada em todo o site.
- **🖼️ Adição de Assets:**
  - Todas as imagens e ícones do projeto foram adicionados.

### v0.1.0 - 28 de Julho de 2025
- 🎉 **Lançamento Inicial do Projeto.**
- Estruturação do layout principal da página com React e Vite.
- Criação dos componentes reutilizáveis: `Header`, `Footer`, e `Button`.
- Implementação da navegação com rolagem suave entre as seções.
- Adição das seções de conteúdo principais: Hero, Projects, Gallery, e Contact.
- Configuração inicial de documentação com `README.md` e licença MIT.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
