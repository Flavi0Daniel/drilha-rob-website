# Drilha Rob — site institucional

Angular 16.2.4 · Tailwind CSS 3 · GSAP + ScrollTrigger · Swiper (element) · ngx-translate (PT/EN/FR) · Lucide

## Correr

```bash
npm install
npm start          # http://localhost:4200
npm run build      # saída em dist/drilha-site
```

Servidor de produção: todas as rotas devem devolver `index.html` (rewrite/fallback), porque o site usa URLs sem `#`.

## O que editar

| O quê | Onde |
| --- | --- |
| Textos (PT/EN/FR) | `src/assets/i18n/pt.json`, `en.json`, `fr.json` |
| Vídeos da galeria (sem novo build) | `src/assets/data/videos.json` |
| Vídeo do hero | substituir `src/assets/video/hero.mp4` (ver abaixo) |
| Imagens, logótipos, parceiros | `src/app/core/config/media.ts` |
| Contactos, redes sociais, serviços | `src/app/core/config/services.data.ts` |
| Cores e tipos de letra | `tailwind.config.js` (`brand` = vermelho da Drilha) |

### Vídeo do hero
O ficheiro actual é apenas um marcador (fundo escuro animado). Use um MP4 H.264 sem áudio, 1920×1080, 8–15 s em ciclo, até ~6 MB. Se quiser, adicione também uma versão `.webm` com mais um `<source>` em `home.component.html`.

### Imagens
Por enquanto as imagens e logótipos são lidos do site actual (`https://www.drilharob.ao`). Quando os ficheiros forem descarregados, copie-os para `src/assets/images/` e altere só a constante `BASE` em `media.ts`.

### Vídeos (Facebook / TikTok)
Cada entrada de `videos.json` tem `plataforma` (`facebook` ou `tiktok`), `embedUrl`, `originalUrl` e `thumbnailUrl`.
- Facebook: `https://www.facebook.com/plugins/video.php?href=<URL do vídeo codificada>&show_text=false`
- TikTok: `https://www.tiktok.com/embed/v2/<ID do vídeo>`

O modal só aceita iframes HTTPS de facebook.com e tiktok.com.

### Formulário de contacto
Não há servidor de email: ao enviar, abre-se o email do visitante com a mensagem preparada. Para envio real, ligue o método `submit()` de `contact.component.ts` a um endpoint (por exemplo Node/Express + Nodemailer).

## Comportamento do cabeçalho
O cabeçalho é transparente enquanto existir um elemento `[data-hero]` visível no topo (o hero da home e o `app-page-hero` das outras páginas) e passa a branco ao sair dele. Qualquer página nova sem `data-hero` fica com o cabeçalho branco.
