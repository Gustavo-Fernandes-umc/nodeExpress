const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// serve todos os arquivos estáticos da pasta raiz do projeto
app.use(express.static(path.join(__dirname)));

// fallback pro index.html (mantém navegação por âncora/SPA)
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
