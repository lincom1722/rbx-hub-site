# Guia de Deploy e Hospedagem - RBX HUB (Multi-Página)

## Opções de Hospedagem Gratuita para Sites Multi-Página

### 1. Netlify (Altamente Recomendado)
**Por que escolher:** Suporte nativo a sites multi-página, redirects automáticos, HTTPS gratuito

#### Passo a passo:
1. **Preparação:**
   - Acesse [netlify.com](https://netlify.com)
   - Crie uma conta gratuita
   - Conecte com GitHub (recomendado para multi-página)

2. **Deploy via Git (Recomendado para Multi-Página):**
   - Crie repositório no GitHub com todos os arquivos
   - Mantenha estrutura de pastas:
     ```
     /
     ├── index.html
     ├── maps.html
     ├── products.html
     ├── purchase.html
     ├── css/styles.css
     ├── js/main.js
     └── assets/images/
     ```
   - No Netlify: "New site from Git"
   - Conecte repositório
   - Deploy automático a cada commit

3. **Configuração Multi-Página:**
   - Crie arquivo `_redirects` na raiz:
     ```
     # Redirects para páginas específicas
     /inicio /index.html 200
     /mapas /maps.html 200
     /produtos /products.html 200
     /compra /purchase.html 200
     
     # Fallback para SPA-like behavior
     /* /index.html 200
     ```

#### Recursos inclusos:
- 100GB de largura de banda/mês
- Deploy automático
- HTTPS gratuito
- Domínio personalizado
- Formulários (até 100 submissões/mês)
- Redirects e rewrites

### 2. Vercel
**Por que escolher:** Performance excelente, otimizado para sites estáticos

#### Passo a passo:
1. **Cadastro:**
   - Acesse [vercel.com](https://vercel.com)
   - Crie conta com GitHub

2. **Deploy Multi-Página:**
   - Importe repositório
   - Vercel detecta automaticamente estrutura HTML
   - Deploy em segundos
   - URLs limpos para cada página

3. **Configuração (vercel.json):**
   ```json
   {
     "routes": [
       { "src": "/inicio", "dest": "/index.html" },
       { "src": "/mapas", "dest": "/maps.html" },
       { "src": "/produtos", "dest": "/products.html" },
       { "src": "/compra", "dest": "/purchase.html" }
     ]
   }
   ```

### 3. GitHub Pages
**Por que escolher:** Integração total com GitHub, ideal para projetos open source

#### Passo a passo:
1. **Repositório:**
   - Crie repositório público no GitHub
   - Upload todos os arquivos mantendo estrutura
   - Commit e push

2. **Ativação:**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

3. **Acesso Multi-Página:**
   - URL base: `username.github.io/repositorio`
   - Páginas específicas:
     - `username.github.io/repositorio/maps.html`
     - `username.github.io/repositorio/products.html`
     - `username.github.io/repositorio/purchase.html`

### 4. Firebase Hosting
**Por que escolher:** Google Cloud, configuração avançada para SPAs

#### Configuração Multi-Página:
```json
// firebase.json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "/inicio",
        "destination": "/index.html"
      },
      {
        "source": "/mapas",
        "destination": "/maps.html"
      },
      {
        "source": "/produtos",
        "destination": "/products.html"
      },
      {
        "source": "/compra",
        "destination": "/purchase.html"
      }
    ]
  }
}
```

## Configuração de Domínio Personalizado Multi-Página

### Para Netlify:
1. **Configuração DNS:**
   ```
   Tipo A: @ → 75.2.60.5
   Tipo CNAME: www → seu-site.netlify.app
   ```

2. **URLs Amigáveis:**
   - Configure redirects no arquivo `_redirects`
   - Exemplo: `seusite.com/mapas` → `maps.html`

### Para Vercel:
1. **Domínio Personalizado:**
   - Project Settings → Domains
   - Adicione domínio
   - Configure DNS conforme instruções

2. **Rotas Personalizadas:**
   - Use `vercel.json` para URLs limpos
   - Exemplo: `seusite.com/produtos` → `products.html`

## Otimizações Específicas para Multi-Página

### 1. Preload de Páginas:
```html
<!-- Em index.html, adicione no <head> -->
<link rel="preload" href="maps.html" as="document">
<link rel="preload" href="css/styles.css" as="style">
<link rel="preload" href="js/main.js" as="script">
```

### 2. Service Worker para Cache:
```javascript
// sw.js (opcional)
const CACHE_NAME = 'rbx-hub-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/maps.html',
  '/products.html',
  '/purchase.html',
  '/css/styles.css',
  '/js/main.js',
  '/assets/images/roblox-logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

### 3. Minificação por Página:
```bash
# CSS
csso css/styles.css --output css/styles.min.css

# JavaScript
uglifyjs js/main.js --output js/main.min.js

# HTML (para cada página)
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
```

## Monitoramento Multi-Página

### Google Analytics 4:
```html
<!-- Adicione em todas as páginas antes do </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID', {
    page_title: document.title,
    page_location: window.location.href
  });
</script>
```

### Hotjar para Heatmaps:
```html
<!-- Adicione em todas as páginas -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## SEO Multi-Página

### Sitemap.xml:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seusite.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://seusite.com/maps.html</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seusite.com/products.html</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seusite.com/purchase.html</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

### Meta Tags por Página:
```html
<!-- index.html -->
<meta name="description" content="RBX HUB - Sua loja gamer de confiança para itens e contas do Roblox">
<meta name="keywords" content="roblox, jogos, itens, contas, robux, gaming, loja">

<!-- maps.html -->
<meta name="description" content="Escolha seu mapa favorito do Roblox - Adopt Me, Bloxburg, Tower of Hell">
<meta name="keywords" content="roblox mapas, adopt me, bloxburg, tower of hell">

<!-- products.html -->
<meta name="description" content="Produtos do Roblox - Itens Raros, Contas Prontas, Robux e Serviços Personalizados">
<meta name="keywords" content="roblox itens, contas roblox, robux, produtos roblox">

<!-- purchase.html -->
<meta name="description" content="Finalize sua compra no RBX HUB - Revise seus itens selecionados">
<meta name="keywords" content="comprar roblox, finalizar compra, roblox store">
```

## Backup e Versionamento Multi-Página

### Estratégia Git:
```bash
# Estrutura de branches
main/          # Produção
├── develop/   # Desenvolvimento
├── feature/   # Novas funcionalidades
└── hotfix/    # Correções urgentes

# Workflow exemplo
git checkout develop
git checkout -b feature/nova-pagina
# Desenvolver nova página
git add .
git commit -m "feat: adicionar página de contato"
git checkout develop
git merge feature/nova-pagina
git checkout main
git merge develop
git push origin main
```

### Backup Automático:
```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf "backup_rbx_hub_$DATE.tar.gz" rbx-hub-site-multipagina/
aws s3 cp "backup_rbx_hub_$DATE.tar.gz" s3://meu-bucket/backups/
```

## Solução de Problemas Multi-Página

### Navegação não funciona:
1. Verifique caminhos relativos
2. Confirme se todas as páginas estão no servidor
3. Teste links manualmente
4. Verifique console do navegador

### Parâmetros URL perdidos:
1. Confirme função `getUrlParams()` em main.js
2. Verifique se JavaScript está carregando
3. Teste URLs com parâmetros manualmente

### Páginas não carregam:
1. Verifique estrutura de arquivos no servidor
2. Confirme permissões de arquivo
3. Teste com servidor local primeiro
4. Verifique logs do servidor

### SEO não funciona:
1. Confirme meta tags em cada página
2. Verifique sitemap.xml
3. Teste com Google Search Console
4. Confirme robots.txt

## Manutenção Contínua Multi-Página

### Checklist Semanal:
- [ ] Testar navegação entre todas as páginas
- [ ] Verificar links externos
- [ ] Revisar analytics por página
- [ ] Testar em diferentes dispositivos

### Checklist Mensal:
- [ ] Atualizar conteúdo de cada página
- [ ] Revisar performance de cada página
- [ ] Verificar SEO de todas as páginas
- [ ] Backup completo do site

### Checklist Anual:
- [ ] Renovar domínio
- [ ] Revisar design de todas as páginas
- [ ] Atualizar dependências
- [ ] Auditoria completa de SEO multi-página

