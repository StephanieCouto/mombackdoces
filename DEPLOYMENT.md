# 🚀 Instruções: Deploy Mombackdoces

## 1️⃣ Conectar ao GitHub

### Opção A: Se o repositório já existe no GitHub

Execute os comandos abaixo (substitua `StephanieCouto` e `mombackdoces` pelos valores corretos):

```bash
cd "C:\Users\scanh\Desktop\Stephanie\Mombackdoces"

git remote add origin https://github.com/StephanieCouto/mombackdoces.git

git branch -M main

git push -u origin main
```

### Opção B: Se ainda não criou o repositório no GitHub

1. Acesse https://github.com/new
2. Crie um novo repositório com o nome `mombackdoces`
3. **Não** inicialize com README, .gitignore ou license
4. Execute os comandos acima

---

## 2️⃣ Deploy na Vercel

### Passo 1: Preparar o projeto

O projeto já está pronto. Apenas verifique se o build está ok:

```bash
npm run build
```

### Passo 2: Conectar à Vercel

1. Acesse https://vercel.com
2. Faça login com sua conta GitHub (ou crie uma usando GitHub)
3. Clique em **"Add New Project"**
4. Selecione **"Import Git Repository"**
5. Busque por `mombackdoces` e selecione
6. Clique em **"Import"**

### Passo 3: Configurar o projeto na Vercel

- **Framework Preset**: `Next.js` (deve detectar automaticamente)
- **Root Directory**: `.` (raiz)
- **Build Command**: `npm run build` (padrão)
- **Output Directory**: `.next` (padrão)
- **Install Command**: `npm install` (padrão)

Deixe tudo como padrão e clique em **"Deploy"**

### Passo 4: Acompanhar o deploy

- A Vercel vai compilar e fazer o deploy automaticamente
- Você receberá uma URL do tipo: `https://mombackdoces.vercel.app`
- Cada novo push para `main` vai fazer redeploy automático

---

## 3️⃣ Variáveis de Ambiente (se necessário)

Se precisar de variáveis de ambiente (.env), crie um arquivo `.env.local` na raiz:

```bash
# Exemplo (se precisar de APIs):
# NEXT_PUBLIC_API_URL=https://api.example.com
```

> **Nota**: Variáveis iniciadas com `NEXT_PUBLIC_` são expostas no cliente.

---

## 4️⃣ Troubleshooting

### Build falha na Vercel?
- Verifique os logs no dashboard da Vercel
- Certifique-se que o `package.json` tem todas as dependências

### API call falha em produção?
- CORS issues: configure headers no `next.config.mjs`
- Variáveis de ambiente: adicione em **Settings > Environment Variables** na Vercel

### Precisa restaurar versão anterior?
Na Vercel, vá para **Deployments** e clique em qualquer deploy anterior para revertê-lo

---

## ✅ Resumo Rápido

```bash
# 1. Conectar GitHub (primeira vez)
git remote add origin https://github.com/StephanieCouto/mombackdoces.git
git branch -M main
git push -u origin main

# 2. Depois, qualquer commit novo:
git add .
git commit -m "descrição da mudança"
git push

# 3. Vercel faz deploy automático a cada push!
```

---

## 📞 Documentações úteis

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages vs Vercel](https://github.com/features/pages)
