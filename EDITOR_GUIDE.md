# Guia para Editores Visuais - RBX HUB (Multi-Página)

## Editores Recomendados (Gratuitos)

### 1. Webflow (Altamente Recomendado)
**Por que escolher:** Interface visual intuitiva, suporte nativo a múltiplas páginas, exportação limpa

#### Como usar:
1. **Cadastro:**
   - Acesse [webflow.com](https://webflow.com)
   - Crie uma conta gratuita
   - Escolha o plano "Starter" (gratuito)

2. **Importação do Projeto Multi-Página:**
   - Crie um novo projeto "Blank Site"
   - Para cada página HTML:
     - Crie uma nova página no Webflow
     - Copie o conteúdo HTML específico
     - Importe as imagens correspondentes
   - Copie o CSS do `styles.css` para o Custom Code global
   - Copie o JavaScript do `main.js` para o Custom Code global

3. **Estrutura de Páginas no Webflow:**
   ```
   Home (index.html)
   ├── Maps (maps.html)
   ├── Products (products.html)
   └── Purchase (purchase.html)
   ```

4. **Exportação:**
   - Vá em Project Settings → Export
   - Clique em "Prepare ZIP"
   - Baixe o arquivo ZIP com todas as páginas
   - Extraia e use os arquivos HTML/CSS/JS

#### Vantagens para Multi-Página:
- Navegação automática entre páginas
- URLs limpos e organizados
- Fácil edição de cada página individualmente
- Suporte nativo a parâmetros URL

### 2. Editor.X (Adobe)
**Por que escolher:** Ferramenta profissional, boa para layouts complexos

#### Como usar:
1. **Cadastro:**
   - Acesse [editor-x.com](https://editor-x.com)
   - Crie conta gratuita

2. **Criação Multi-Página:**
   - Crie um novo site
   - Adicione páginas conforme estrutura
   - Importe elementos de cada página HTML
   - Configure navegação entre páginas

### 3. GitHub Pages + Editor Online
**Por que escolher:** Controle total, hospedagem gratuita incluída

#### Como usar:
1. **Preparação:**
   - Crie repositório no GitHub
   - Faça upload de todos os arquivos mantendo a estrutura

2. **Edição Online:**
   - Use GitHub Codespaces ou Gitpod
   - Edite arquivos diretamente no navegador
   - Visualize mudanças em tempo real

3. **Hospedagem:**
   - Ative GitHub Pages
   - Site disponível em username.github.io/repositorio

## Adaptações Necessárias por Editor

### Para Webflow:
```html
<!-- Adicionar ao Custom Code (Head) de todas as páginas -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
```

```javascript
// Adicionar ao Custom Code (Before </body>) de todas as páginas
// Cole aqui o conteúdo completo do main.js
```

### Para Editor.X:
- Use componentes reutilizáveis para header e footer
- Configure Master Pages para elementos comuns
- Importe imagens para a biblioteca de mídia
- Configure links entre páginas

### Para GitHub Pages:
- Mantenha estrutura de arquivos exata
- Teste localmente antes de fazer push
- Use relative paths para navegação

## Instruções de Customização Multi-Página

### Alterando Cores Globalmente:
```css
/* No arquivo css/styles.css, procure por: */
:root {
  --primary-green: #00ff00;
  --primary-magenta: #ff00ff;
  --primary-cyan: #00ffff;
  --primary-red: #ff0000;
  --background-black: #000000;
}
```

### Alterando Textos por Página:

#### Página Inicial (index.html):
```html
<h1 class="hero-title glitch" data-text="VENDAS DE JOGOS ROBLOX">VENDAS DE JOGOS ROBLOX</h1>
<p class="hero-subtitle">Sua loja gamer de confiança...</p>
```

#### Página de Mapas (maps.html):
```html
<h1 class="section-title glitch" data-text="ESCOLHA SEU MAPA">ESCOLHA SEU MAPA</h1>
```

#### Página de Produtos (products.html):
```html
<h1 class="section-title glitch" data-text="ESCOLHA SEU PRODUTO">ESCOLHA SEU PRODUTO</h1>
```

### Adicionando Novos Mapas:
```html
<!-- Em maps.html, adicione na grid: -->
<div class="map-card" onclick="navigateToProducts('novo-mapa')">
    <div class="map-image">
        <img src="assets/images/novo-mapa.jpg" alt="Novo Mapa">
        <div class="map-overlay">
            <h3>NOVO MAPA</h3>
            <div class="btn btn-secondary">PROSSEGUIR</div>
        </div>
    </div>
</div>
```

```javascript
// Em products.html, atualize o objeto mapNames:
const mapNames = {
    'adopt-me': 'Adopt Me',
    'bloxburg': 'Bloxburg',
    'tower-hell': 'Tower of Hell',
    'novo-mapa': 'Novo Mapa'  // Adicione aqui
};
```

### Adicionando Novos Produtos:
```html
<!-- Em products.html, adicione na grid: -->
<div class="card" onclick="handleProductSelection('novo-produto')">
    <div class="product-icon">🎮</div>
    <h3>NOVO PRODUTO</h3>
    <p>Descrição do novo produto</p>
    <div class="btn btn-accent">SELECIONAR</div>
</div>
```

```javascript
// Em purchase.html, atualize o objeto productNames:
const productNames = {
    'items': 'Itens Raros',
    'accounts': 'Contas Prontas',
    'robux': 'Robux',
    'custom': 'Personalizado',
    'novo-produto': 'Novo Produto'  // Adicione aqui
};
```

## Navegação Entre Páginas

### Estrutura de Links:
```html
<!-- Navegação principal (em todas as páginas) -->
<nav class="nav">
    <a href="index.html" class="nav-link">INÍCIO</a>
    <a href="maps.html" class="nav-link">MAPAS</a>
    <a href="products.html" class="nav-link">PRODUTOS</a>
</nav>

<!-- Links com parâmetros -->
<a href="products.html?map=adopt-me">Ir para produtos do Adopt Me</a>
<a href="purchase.html?map=adopt-me&product=items">Finalizar compra</a>
```

### JavaScript para Navegação:
```javascript
// Funções principais no main.js
function navigateToProducts(selectedMap) {
    window.location.href = `products.html?map=${selectedMap}`;
}

function navigateToPurchase(selectedMap, selectedProduct) {
    window.location.href = `purchase.html?map=${selectedMap}&product=${selectedProduct}`;
}
```

## Dicas de Exportação por Editor

### Webflow:
1. **Antes da Exportação:**
   - Teste todas as páginas no preview
   - Verifique links entre páginas
   - Confirme que imagens estão carregando

2. **Após Exportação:**
   - Teste o site localmente
   - Verifique se JavaScript está funcionando
   - Confirme navegação entre páginas

### Editor.X:
1. **Publicação:**
   - Use domínio personalizado se possível
   - Configure redirects se necessário
   - Teste em diferentes dispositivos

### GitHub Pages:
1. **Deploy:**
   - Commit todas as mudanças
   - Push para branch main
   - Aguarde deploy automático (1-2 minutos)

## Solução de Problemas Multi-Página

### Links quebrados:
- Verifique caminhos relativos
- Confirme nomes de arquivos
- Teste navegação local primeiro

### JavaScript não funciona entre páginas:
- Verifique se main.js está incluído em todas as páginas
- Confirme se funções estão definidas globalmente
- Teste console do navegador para erros

### Parâmetros URL não funcionam:
- Verifique função getUrlParams()
- Confirme se JavaScript está carregando
- Teste URLs manualmente

### Estilos inconsistentes:
- Confirme se styles.css está linkado em todas as páginas
- Verifique caminhos relativos do CSS
- Teste cache do navegador (Ctrl+F5)

## Recursos Adicionais Multi-Página

### Ferramentas de Teste:
- **Local Server:** Live Server (VS Code) ou Python SimpleHTTPServer
- **Cross-Browser:** BrowserStack ou LambdaTest
- **Mobile Testing:** Chrome DevTools Device Mode

### Otimização:
- **Minificação:** CSS e JS Minifier online
- **Imagens:** TinyPNG ou ImageOptim
- **Performance:** Google PageSpeed Insights

### SEO Multi-Página:
```html
<!-- Meta tags específicas por página -->
<!-- index.html -->
<title>RBX HUB - Vendas de Jogos Roblox</title>
<meta name="description" content="Sua loja gamer de confiança para itens e contas do Roblox">

<!-- maps.html -->
<title>Mapas - RBX HUB</title>
<meta name="description" content="Escolha seu mapa favorito do Roblox - Adopt Me, Bloxburg, Tower of Hell">

<!-- products.html -->
<title>Produtos - RBX HUB</title>
<meta name="description" content="Itens Raros, Contas Prontas, Robux e Serviços Personalizados">

<!-- purchase.html -->
<title>Finalizar Compra - RBX HUB</title>
<meta name="description" content="Finalize sua compra no RBX HUB - Revise seus itens selecionados">
```

