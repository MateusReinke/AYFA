# Ayfa Seguros Digital

Landing page institucional da Ayfa Seguros, construída com React + Vite + TypeScript.

## Stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- shadcn/ui

## Desenvolvimento local

Pré-requisitos:

- Node.js 20+
- npm

```bash
npm install
npm run dev
```

Aplicação em modo desenvolvimento: `http://localhost:4040`.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy com Docker (Coolify)

Este projeto está preparado com `Dockerfile` multi-stage e Nginx para servir o build estático.

### Build local da imagem

```bash
docker build -t ayfa-seguros-digital .
```

### Rodar localmente

```bash
docker run --rm -p 4040:80 ayfa-seguros-digital
```

Abra: `http://localhost:4040`.

### Publicar no Coolify

1. No Coolify, escolha **New Resource > Application**.
2. Conecte o repositório Git deste projeto.
3. Em **Build Pack**, selecione **Dockerfile**.
4. Em **Ports Exposes**, mantenha a porta interna como `80`.
5. Em **Port Mappings**, use `4040:80` se quiser acesso por IP:porta (`192.168.1.9:4040`).
6. Faça o deploy.

> Como o app é SPA, o Nginx já está configurado com fallback para `index.html`.

### Como acessar no Coolify

Depois do deploy, o acesso **não é por porta** (na maioria dos setups), e sim por domínio:

- URL gerada pelo Coolify (ex.: `https://app.seu-dominio.com`) **ou**
- domínio customizado configurado em **Domains** na aplicação.

No servidor, o container responde internamente na porta `80`, e o proxy do Coolify publica isso via HTTP/HTTPS (80/443) no domínio.

### Qual porta acessar localmente?

Depende de como você está rodando:

- **Desenvolvimento Vite (`npm run dev`)**: `http://localhost:4040`
- **Container Docker/Nginx (`docker run -p 4040:80 ...`)**: acessar `http://localhost:4040`

> Resumo: no container a porta interna é `80`; no host local (exemplo acima), você acessa pela `4040` (ex.: `http://192.168.1.9:4040`).


### Porta no Coolify (importante)

Para este projeto, o container (Nginx) escuta na porta **80**.

Se quiser acessar por IP com porta customizada (ex.: `192.168.1.9:4040`), o mapeamento deve ser:

- `4040:80` ✅ (correto)
- `3000:4040` ❌ (incorreto para este Dockerfile)

Ou seja:

- lado esquerdo = porta publicada no host (ex.: `4040`)
- lado direito = porta interna do container (sempre `80` neste projeto)
