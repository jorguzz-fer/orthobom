# Clínicas Orthobom — site (nova versão)

Site estático: HTML + CSS + JS, sem build.

## Estrutura
- index.html — página única
- styles/main.css — estilos (mobile-first)
- scripts/main.js — menu mobile, carrossel do hero, FAQ, ano do rodapé
- assets/img/ — logo, ícones das especialidades, fotos do hero (hero-1/2/3.jpg) e placeholders

## Publicar
Qualquer host estático: envie a pasta inteira.
- Hospedagem tradicional (cPanel/FTP): copie o conteúdo desta pasta para public_html.
- Netlify: arraste a pasta na área de deploy.
- Vercel / GitHub Pages: importe o repositório, sem framework.

## Substituir depois
- assets/img/placeholder-orthobom.png — usado nos blocos "Sedação" e "Sobre"; troque pelas fotos reais (mesmo nome ou ajuste o src no index.html).
- assets/img/team/daisy.svg e mayk.svg — fotos reais da equipe.
- Círculos de destaques do Instagram — hoje são gradientes; podem receber imagens de capa.
- Depoimentos: os 3 textos são exemplos.
- WhatsApp: todos os links usam wa.me/551136034032. Ao definir o número dedicado, troque em index.html (header, hero, sedação, FAQ, CTA final, botão flutuante e rodapé).

## Imagens do hero
Ideal: 2400x1400px, JPG 70–80% (até ~400 KB), assunto no terço direito.
