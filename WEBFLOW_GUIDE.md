# Guia Completo Webflow - RBX HUB (Atualizações Diárias)

## Por que Webflow é a Melhor Opção para Você

### Vantagens para Atualizações Diárias:
- **Editor Visual Intuitivo:** Edite o site como se fosse um documento
- **Publicação Instantânea:** Mudanças ficam online em segundos
- **Sem Código:** Não precisa saber programação
- **Backup Automático:** Todas as versões são salvas automaticamente
- **Preview em Tempo Real:** Veja as mudanças antes de publicar

### Plano Gratuito Inclui:
- 2 projetos
- 50 páginas por projeto
- Hospedagem gratuita
- SSL (HTTPS) automático
- Subdomínio webflow.io

## Passo a Passo: Configuração Inicial

### 1. Criando Conta no Webflow
1. **Acesse:** [webflow.com](https://webflow.com)
2. **Clique em:** "Get started for free"
3. **Preencha:** Nome, email e senha
4. **Confirme:** Email de verificação
5. **Escolha:** Plano "Starter" (gratuito)

### 2. Importando seu Site RBX HUB
1. **Crie Novo Projeto:**
   - Dashboard → "Create new project"
   - Escolha "Blank site"
   - Nome: "RBX HUB"

2. **Configuração Inicial:**
   - Vá em Project Settings
   - General → Site name: "RBX HUB"
   - SEO → Title: "RBX HUB - Vendas de Jogos Roblox"

### 3. Criando as Páginas
1. **No Designer:**
   - Pages panel (lado esquerdo)
   - Clique no "+" para adicionar páginas
   - Crie: Home, Maps, Products, Purchase

2. **Configurando URLs:**
   - Home: `/` (página inicial)
   - Maps: `/maps`
   - Products: `/products`
   - Purchase: `/purchase`

## Importando o Design Atual

### 1. Adicionando Fontes Google
1. **No Designer:**
   - Project Settings → Fonts
   - Add web font → Google Fonts
   - Adicione: "Orbitron" e "Courier Prime"

### 2. Copiando Estilos CSS
1. **Custom Code:**
   - Project Settings → Custom Code
   - Head Code: Cole as fontes Google
   - Footer Code: Cole o JavaScript do main.js

```html
<!-- Head Code -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">

<style>
/* Cole aqui o conteúdo do styles.css */
</style>
```

### 3. Criando Elementos Visuais
1. **Background:**
   - Body → Background → Gradient
   - Cor: #000000

2. **Header:**
   - Add Element → Navbar
   - Customize conforme design

3. **Efeitos Glitch:**
   - Use Custom Code para efeitos especiais
   - Aplique classes CSS personalizadas

## Workflow de Atualizações Diárias

### Rotina Matinal (5 minutos):
1. **Acesse Webflow Dashboard**
2. **Abra projeto RBX HUB**
3. **Verifique notificações/comentários**
4. **Faça ajustes necessários**

### Tipos de Atualizações Comuns:

#### 1. Alterando Textos:
- **Clique duplo** no texto
- **Digite** novo conteúdo
- **Enter** para confirmar
- **Publish** para aplicar

#### 2. Trocando Imagens:
- **Selecione** a imagem
- **Settings panel** → Source
- **Upload** nova imagem
- **Publish** para aplicar

#### 3. Adicionando Novos Produtos:
- **Vá para** página Products
- **Duplicate** um card existente
- **Edite** texto e ícone
- **Configure** link de navegação

#### 4. Alterando Cores:
- **Selecione** elemento
- **Style panel** → Background/Text
- **Escolha** nova cor
- **Apply to all** similar elements

### Publicação Rápida:
1. **Botão Publish** (canto superior direito)
2. **Publish to webflow.io** (gratuito)
3. **Aguarde** 10-30 segundos
4. **Site atualizado** automaticamente

## Configurações Avançadas para Uso Diário

### 1. Criando Símbolos Reutilizáveis:
```
Header → Convert to Symbol
Footer → Convert to Symbol
Product Card → Convert to Symbol
```
**Vantagem:** Edite uma vez, aplica em todas as páginas

### 2. Configurando CMS (Opcional):
- **Collections:** Para produtos dinâmicos
- **Template Pages:** Para páginas automáticas
- **Dynamic Content:** Conteúdo que muda automaticamente

### 3. Responsividade Automática:
- **Breakpoints:** Desktop, Tablet, Mobile
- **Auto-layout:** Ajustes automáticos
- **Preview:** Teste em todos os dispositivos

## Integrações Úteis para Atualizações

### 1. Google Analytics:
```html
<!-- Em Project Settings → Custom Code → Footer -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 2. Formulários de Contato:
- **Add Element** → Form
- **Configure** campos necessários
- **Form Settings** → Email notifications

### 3. Chat Widget (Opcional):
```html
<!-- Adicione widget de chat para atendimento -->
<script>
// Cole aqui o código do seu chat preferido
</script>
```

## Automações para Facilitar Atualizações

### 1. Templates de Conteúdo:
Crie modelos padrão para:
- Novos produtos
- Novos mapas
- Promoções
- Anúncios

### 2. Biblioteca de Assets:
- **Assets Panel:** Organize imagens
- **Folders:** Separe por categoria
- **Tags:** Para busca rápida

### 3. Backup Automático:
- **Version History:** Webflow salva automaticamente
- **Restore:** Volte a versões anteriores
- **Compare:** Veja diferenças entre versões

## Plano de Upgrade (Quando Necessário)

### Sinais de que precisa upgradar:
- Mais de 2 projetos
- Domínio personalizado
- Mais de 50 páginas
- Formulários avançados

### Planos Recomendados:
1. **Site Plan ($12/mês):**
   - Domínio personalizado
   - Formulários ilimitados
   - Sem marca Webflow

2. **CMS Plan ($16/mês):**
   - 2000 itens CMS
   - Busca no site
   - Campos personalizados

## Troubleshooting Comum

### Problema: Site não atualiza
**Solução:**
1. Verifique se clicou em "Publish"
2. Aguarde 1-2 minutos
3. Limpe cache do navegador (Ctrl+F5)

### Problema: Elementos desalinhados
**Solução:**
1. Verifique breakpoints
2. Use Flexbox ou Grid
3. Teste em Preview mode

### Problema: JavaScript não funciona
**Solução:**
1. Verifique Custom Code
2. Console do navegador (F12)
3. Teste em modo incógnito

## Workflow Semanal Recomendado

### Segunda-feira:
- [ ] Revisar analytics da semana anterior
- [ ] Planejar conteúdo da semana
- [ ] Verificar funcionamento geral

### Terça a Quinta:
- [ ] Atualizações diárias de conteúdo
- [ ] Responder comentários/feedback
- [ ] Pequenos ajustes visuais

### Sexta-feira:
- [ ] Backup manual (export)
- [ ] Teste completo do site
- [ ] Planejamento para próxima semana

### Sábado/Domingo:
- [ ] Análise de performance
- [ ] Ideias para melhorias
- [ ] Descanso (automação funciona!)

## Recursos de Aprendizado

### Webflow University (Gratuito):
- **Curso Básico:** 101 Course
- **Layouts:** Flexbox e Grid
- **Interactions:** Animações
- **CMS:** Conteúdo dinâmico

### Comunidade:
- **Webflow Forum:** Dúvidas e dicas
- **Discord:** Chat em tempo real
- **YouTube:** Tutoriais visuais

### Templates Inspiração:
- **Webflow Showcase:** Sites profissionais
- **Template Marketplace:** Designs prontos
- **Cloneable Projects:** Projetos para copiar

## Checklist de Lançamento

### Antes de Publicar:
- [ ] Teste todas as páginas
- [ ] Verifique links internos
- [ ] Confirme responsividade
- [ ] Teste formulários
- [ ] Verifique SEO básico

### Após Publicar:
- [ ] Teste site ao vivo
- [ ] Configure analytics
- [ ] Compartilhe URL
- [ ] Monitore primeiros acessos

### Manutenção Contínua:
- [ ] Atualizações diárias (5-10 min)
- [ ] Backup semanal
- [ ] Análise mensal
- [ ] Melhorias trimestrais

## Contatos de Suporte

### Webflow Support:
- **Email:** support@webflow.com
- **Chat:** Disponível no dashboard
- **Documentação:** webflow.com/help

### Comunidade Brasileira:
- **Facebook:** Grupos Webflow Brasil
- **Telegram:** Canais especializados
- **LinkedIn:** Profissionais Webflow

---

**Lembre-se:** O Webflow foi feito para facilitar sua vida. Com este guia, você conseguirá fazer atualizações diárias em poucos minutos, mantendo seu site sempre atualizado e profissional!

