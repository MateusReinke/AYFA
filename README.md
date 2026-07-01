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

Aplicação em modo desenvolvimento: `http://localhost:8080`.

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
docker run --rm -p 8080:8080 ayfa-seguros-digital
```

Abra: `http://localhost:8080`.

### Publicar no Coolify

1. No Coolify, escolha **New Resource > Application**.
2. Conecte o repositório Git deste projeto.
3. Em **Build Pack**, selecione **Dockerfile**.
4. Mantenha a porta interna como `8080` (ou defina a variável `PORT` e use o mesmo valor).
5. Faça o deploy.

> Como o app é SPA, o Nginx já está configurado com fallback para `index.html`.

### Deploy no Coolify

A imagem Docker escuta por padrão na porta interna `8080` (configurável pela variável `PORT`). No Coolify, use apenas a porta exposta da aplicação para o proxy/rede interna e evite mapear uma porta do host (por exemplo, `8080:8080`), pois o mapeamento direto para o host impede rolling updates.

