# Clínicas Orthobom — site institucional

Site one-page estático (HTML + CSS + JS, sem build) para a Clínicas Orthobom — clínica odontológica especializada em Osasco/SP.

## Estrutura

```
index.html              # página única com todas as seções
styles/main.css         # estilos (mobile-first)
scripts/main.js         # menu mobile + ano dinâmico
assets/
  favicon.svg
  img/
    logo.svg            # logo Orthobom
    hero.svg            # placeholder do hero
    sobre.svg           # placeholder do bloco "Sobre"
    services/*.svg      # ícones dos 4 serviços
    team/
      daisy.svg         # placeholder Dra. Daisy Lucy
      mayk.svg          # placeholder Dr. Mayk Coelho
```

## Como rodar localmente

Não precisa de Node, npm, build. Basta abrir o `index.html` no navegador, ou subir um servidor estático:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Como publicar

Qualquer host estático funciona:

- **GitHub Pages**: Settings → Pages → Source: branch `main` (ou `claude/dental-clinic-website-8rFI1`).
- **Netlify**: drag-and-drop da pasta, ou conectar o repositório.
- **Vercel**: importar o repositório, sem framework.

## O que falta substituir / completar

Os itens abaixo estão como placeholder e devem ser substituídos quando os arquivos finais chegarem:

- [ ] `assets/img/logo.svg` — recriação a partir da imagem; trocar pelo logo oficial em alta resolução.
- [ ] `assets/img/hero.svg` — substituir por foto real (ex: `hero.jpg`) e ajustar a tag `<img>` no `index.html`.
- [ ] `assets/img/sobre.svg` — substituir pela foto institucional.
- [ ] `assets/img/team/daisy.svg` — trocar pela foto real da Dra. Daisy Lucy (`daisy.jpg`) e atualizar a referência.
- [ ] `assets/img/team/mayk.svg` — trocar pela foto real do Dr. Mayk Coelho (`mayk.jpg`) e atualizar a referência.
- [ ] **Horário de funcionamento**: bloco "Localização" tem placeholder "em breve" — preencher.
- [ ] **Cargos / CRO** dos profissionais.
- [ ] **Destaques sociais**: gerar imagens de capa para cada highlight (Implantes, Facetas, Clareamento etc.).
- [ ] **Facebook**: adicionar link no footer se existir.

## Decisões de design

- Paleta extraída da marca: dourado primário `#C9A24B`, marrom `#5A1F1F`, rosê `#F4DDD9`, off-white `#FBF6EE`.
- Tipografia: **Playfair Display** (títulos) + **Inter** (corpo) via Google Fonts.
- Sem framework, sem build — máxima simplicidade para hospedagem e manutenção.
- Todos os CTAs de "agendar" abrem WhatsApp em `wa.me/551136034032` com mensagem pré-preenchida.

## Acessibilidade

- Skip-link para o conteúdo principal.
- Hierarquia de headings.
- `prefers-reduced-motion` respeitado.
- Navegação por teclado funcional (focus visível padrão do navegador).
- Labels e `aria-*` no menu mobile, no botão flutuante de WhatsApp e no mapa.

## SEO

- `<meta description>`, Open Graph e `theme-color` configurados.
- JSON-LD `Dentist` com telefone, e-mail e endereço.
- Idioma `pt-BR`.
