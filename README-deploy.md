# Deploy rápido para Vercel

1. (Opcional) Teste localmente:

```powershell
cd "c:\Users\1\Desktop\PROJETO SAM\SITES CLIENTES\ARTEFERRO\SITE\arteferro-industrial-site-v01"
npm ci
npm run build
```

2. Criar repositório no GitHub e enviar o código:

```powershell
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git
git push -u origin main
```

3. No Vercel:
- Importar projeto do GitHub (New Project → Import from Git).
- Build Command: `npm run build`
- Output Directory: `dist`
- Adicionar variáveis de ambiente em Settings → Environment Variables (ex.: `GEMINI_API_KEY`).

4. Alternativa: usar Vercel CLI (deploy direto):

```powershell
npm i -g vercel
vercel      # seguir prompts
vercel --prod
```

Observações:
- `vercel.json` já foi adicionado para rewrites SPA.
- Remova `express` se não usar servidor Node.
