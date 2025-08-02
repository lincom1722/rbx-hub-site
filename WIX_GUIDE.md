# Guia Completo Wix - RBX HUB (Atualizações Diárias)

## Entendendo o Wix para seu Site RBX HUB

O Wix é uma plataforma de criação de sites "arrasta e solta" muito popular, ideal para quem busca simplicidade e edição visual sem precisar de código. No entanto, é importante entender algumas diferenças e limitações em relação ao site que criamos para você, que foi desenvolvido com HTML, CSS e JavaScript puros.

### Principais Diferenças e Limitações:

1.  **Importação de Código:** O Wix não permite a importação direta de sites HTML/CSS/JS completos. Você não conseguirá simplesmente "subir" os arquivos do seu site RBX HUB para o Wix e esperar que ele funcione como está. O Wix é um construtor visual que gera seu próprio código.

2.  **Edição Visual:** A edição no Wix é feita através de seu editor visual. Você irá recriar o design e a estrutura do seu site usando os componentes e ferramentas do Wix.

3.  **Código Personalizado (HTML Embed):** O Wix permite adicionar blocos de código HTML, CSS e JavaScript em elementos específicos (como um widget ou um iframe). Isso significa que você pode incorporar partes do seu código, mas não o site inteiro de forma nativa. Efeitos complexos como o background animado e partículas podem ser difíceis de replicar perfeitamente.

4.  **Responsividade:** O Wix oferece ferramentas para ajustar a responsividade, mas pode exigir ajustes manuais para garantir que o design "glitch" se adapte bem a todos os dispositivos, já que ele não é nativamente flexível como o código que criamos.

### Vantagens do Wix para Você:

-   **Facilidade de Uso:** Interface intuitiva de arrastar e soltar.
-   **Atualizações Rápidas:** Edite o conteúdo diretamente no editor visual.
-   **Hospedagem Integrada:** Não precisa se preocupar com servidores.
-   **Recursos Adicionais:** App Market com diversas funcionalidades (formulários, e-commerce, etc.).
-   **SEO Básico:** Ferramentas para otimização de busca.

## Passo a Passo: Adaptando seu Site RBX HUB no Wix

Como não é possível importar o site diretamente, o processo será de **recriação do design e conteúdo** usando as ferramentas do Wix, e incorporando elementos específicos via código personalizado quando necessário.

### 1. Criando sua Conta Wix e Novo Site

1.  **Acesse:** [wix.com](https://www.wix.com)
2.  **Clique em:** "Começar Agora" ou "Criar seu Site Grátis".
3.  **Crie sua conta:** Use seu e-mail, Google ou Facebook.
4.  **Escolha o tipo de site:** Selecione "Loja Online" ou "Portfólio" para começar.
5.  **Selecione um template:** Escolha um template o mais simples possível, de preferência com fundo escuro, para facilitar a adaptação do seu design. Você pode começar com um template em branco também.
6.  **Nomeie seu site:** "RBX HUB".

### 2. Configurando as Páginas (Estrutura Multi-Página)

Seu site RBX HUB tem 4 páginas principais: Início, Mapas, Produtos e Finalizar Compra. Você precisará criá-las no Wix:

1.  **No Editor Wix:** Vá em "Menus e Páginas" (ícone de páginas no lado esquerdo).
2.  **Adicione Novas Páginas:** Clique em "Adicionar Página" e crie as seguintes:
    -   **Início (Home):** Já deve existir.
    -   **Mapas:** Renomeie para "Mapas".
    -   **Produtos:** Renomeie para "Produtos".
    -   **Finalizar Compra:** Renomeie para "Finalizar Compra".
3.  **Configure URLs:** Certifique-se de que as URLs das páginas sejam amigáveis (ex: `seusite.wixsite.com/rbxhub/mapas`).

### 3. Adaptando o Design "Glitch" e Cores

Esta é a parte mais desafiadora, pois o Wix não tem suporte nativo para todos os efeitos que criamos. Você precisará usar os recursos visuais do Wix para se aproximar do design:

1.  **Cores:**
    -   **Fundo:** Defina o fundo do site para preto (`#000000`).
    -   **Texto:** Use cores neon como verde (`#00FF00`), magenta (`#FF00FF`) e ciano (`#00FFFF`) para títulos e botões.
    -   **Bordas:** Use as cores neon para bordas de elementos.

2.  **Fontes:**
    -   **Títulos:** Procure por fontes que se assemelhem a "Orbitron" (futurista, tecnológica) nas opções do Wix.
    -   **Corpo do Texto:** Procure por fontes que se assemelhem a "Courier Prime" (monoespaçada, estilo código).

3.  **Efeitos Visuais (Simulação):**
    -   **Background Animado/Partículas:** O Wix tem opções de fundos de vídeo ou animações simples. Procure por algo que simule um efeito de espaço ou digital. Você pode tentar adicionar um vídeo de fundo com efeito glitch.
    -   **Efeito Glitch em Títulos:** O Wix não tem um efeito glitch nativo. Você pode:
        -   Usar imagens de texto com efeito glitch (criadas externamente).
        -   Tentar usar o recurso "HTML Embed" para incorporar um pequeno trecho de código JavaScript/CSS que crie um efeito glitch em um texto específico. (Isso pode ser complexo e limitado).
    -   **Bordas Neon:** Use as ferramentas de design do Wix para adicionar bordas coloridas e brilhantes aos seus elementos (caixas, botões).

### 4. Recriando o Conteúdo de Cada Página

#### Página Inicial (index.html)

-   **Título:** "VENDAS DE JOGOS ROBLOX" (use a fonte e cor neon).
-   **Subtítulo:** "Sua loja gamer de confiança para itens e contas do Roblox..."
-   **Botão Roblox:**
    -   Adicione um botão.
    -   Defina a cor de fundo para vermelho/laranja.
    -   Adicione o texto "ROBLOX".
    -   **Ação:** Configure o botão para linkar para a página "Mapas".
    -   **Ícone:** Você pode tentar adicionar o ícone do Roblox como uma imagem pequena dentro do botão ou ao lado dele.

#### Página de Mapas (maps.html)

-   **Título:** "ESCOLHA SEU MAPA"
-   **Cards de Mapas:**
    -   Use o componente "Galeria" ou "Caixas" do Wix para criar os cards de "Adopt Me", "Bloxburg" e "Tower of Hell".
    -   Adicione as imagens dos mapas (você pode usar as que te forneci).
    -   Adicione um título para cada mapa e um botão "PROSSEGUIR".
    -   **Ação:** Configure cada botão "PROSSEGUIR" para linkar para a página "Produtos". Você não conseguirá passar parâmetros de URL como no site original, então a página de produtos será genérica.

#### Página de Produtos (products.html)

-   **Título:** "ESCOLHA SEU PRODUTO"
-   **Cards de Produtos:**
    -   Use o componente "Galeria" ou "Caixas" para criar os cards de "Itens Raros", "Contas Prontas", "Robux" e "Personalizado".
    -   Adicione ícones e descrições para cada um.
    -   Adicione um botão "SELECIONAR" para cada produto.
    -   **Ação:** Configure cada botão "SELECIONAR" para linkar para a página "Finalizar Compra". Novamente, sem parâmetros de URL.
-   **Botão "VOLTAR AOS MAPAS":** Adicione um botão que linke para a página "Mapas".

#### Página de Finalizar Compra (purchase.html)

-   **Título:** "FINALIZAR COMPRA"
-   **Resumo da Compra:**
    -   Você precisará criar caixas de texto estáticas para "Mapa: Não selecionado" e "Produto: Não selecionado", pois o Wix não passará essas informações automaticamente via URL.
    -   Adicione o texto "Status: Pronto para finalizar".
-   **Botão "FINALIZAR COMPRA":**
    -   Adicione um botão.
    -   **Ação:** Configure-o para exibir uma mensagem de sucesso (pop-up do Wix) e, opcionalmente, redirecionar para a página inicial após alguns segundos.
-   **Botões "VOLTAR":** Adicione botões para "VOLTAR AOS PRODUTOS" e "VOLTAR AOS MAPAS".

### 5. Adicionando a Logo (Skull Gamer)

1.  **Upload da Imagem:** Faça o upload da imagem `skull-gamer-logo.jpg` para a biblioteca de mídia do Wix.
2.  **Adicionar ao Cabeçalho:** Arraste e solte a imagem no cabeçalho do seu site. Ajuste o tamanho e a posição.
3.  **Link:** Configure a imagem da logo para linkar para a página "Início".

### 6. Adicionando Código Personalizado (Opcional e Avançado)

Se você quiser tentar replicar alguns efeitos mais avançados ou funcionalidades específicas que o Wix não oferece nativamente, você pode usar o recurso "HTML Embed" ou "Velo by Wix" (para JavaScript).

1.  **HTML Embed:**
    -   Vá em "Adicionar Elementos" (o sinal de mais no lado esquerdo).
    -   Selecione "Incorporar" -> "Incorporar um Widget" ou "Incorporar Código".
    -   Você pode colar pequenos trechos de HTML, CSS e JavaScript aqui. Por exemplo, para um efeito glitch em um texto específico, você pode criar um `div` com o texto e aplicar CSS/JS dentro deste embed.
    -   **Limitação:** O código dentro de um HTML Embed é isolado e não interage facilmente com o restante do site Wix.

2.  **Velo by Wix (JavaScript):**
    -   Para funcionalidades mais complexas, o Wix oferece o Velo, que permite escrever código JavaScript. Isso é mais avançado e pode ter uma curva de aprendizado.
    -   Velo é útil para interações com bancos de dados, APIs externas, e lógica de negócios. Para o seu caso, pode ser excessivo.

## Workflow de Atualizações Diárias no Wix

O Wix é excelente para atualizações rápidas e visuais. Sua rotina será muito simples:

1.  **Acesse o Editor Wix:** Faça login em sua conta Wix e selecione seu site RBX HUB para editar.
2.  **Navegue para a Página:** Vá para a página que deseja atualizar (Início, Mapas, Produtos, etc.).
3.  **Clique e Edite:** Clique diretamente no texto, imagem ou elemento que deseja alterar. Uma barra de ferramentas aparecerá para edição.
    -   **Texto:** Clique duas vezes e digite o novo texto.
    -   **Imagens:** Clique na imagem e selecione "Alterar Imagem" para fazer upload de uma nova.
    -   **Botões:** Clique no botão e altere o texto ou o link.
4.  **Publique:** Após fazer as alterações, clique no botão "Publicar" (geralmente no canto superior direito) para que as mudanças fiquem visíveis online.

### Dicas para Atualizações Eficientes no Wix:

-   **Use Seções:** Organize seu conteúdo em seções claras para facilitar a edição.
-   **Duplicar Elementos:** Para adicionar novos produtos ou mapas, duplique um card existente e edite o conteúdo.
-   **Salvar Automaticamente:** O Wix salva seu trabalho automaticamente, mas é sempre bom publicar após grandes alterações.
-   **Visualização:** Use o modo "Visualizar" no editor para ver como o site ficará antes de publicar.

## Limitações e Considerações Finais

-   **Fidelidade do Design:** Replicar o design "glitch" exato pode ser um desafio no Wix devido à sua natureza de construtor visual. Você conseguirá um estilo similar, mas não idêntico.
-   **Funcionalidades Dinâmicas:** A passagem de parâmetros de URL (como o mapa selecionado para a página de produtos) não é nativa no Wix, o que simplifica a lógica, mas torna o site menos "inteligente" nesse aspecto.
-   **SEO:** O Wix oferece ferramentas de SEO, mas a otimização completa pode exigir conhecimento adicional.
-   **Performance:** Sites Wix podem ser um pouco mais lentos em comparação com sites leves codificados manualmente, devido à quantidade de scripts e recursos que a plataforma carrega.

**Recomendação:** Comece a recriar o site no Wix, focando na estrutura e no conteúdo. Depois, tente adicionar os elementos visuais e efeitos mais complexos. Se encontrar dificuldades com o design "glitch" ou funcionalidades específicas, considere usar o Webflow, que oferece mais flexibilidade para código personalizado e design avançado.

