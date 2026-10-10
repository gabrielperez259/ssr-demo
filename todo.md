Etapa 1 — Estrutura
- [x] Criar o projeto Angular 22 com SSR habilitado
- [x] Definir o modelo de dados e criar um conjunto pequeno de lugares mockados
- [ ] Criar o serviço responsável por fornecer os lugares
- [ ] Configurar as rotas principais

Etapa 2 — Páginas públicas e SEO
- [ ] Criar a página inicial com lugares em destaque
- [ ] Criar a listagem de lugares
- [ ] Criar a página de detalhes usando um slug na URL
- [ ] Configurar título e meta description específicos para cada página
- [ ] Adicionar metadados Open Graph para compartilhamento
- [ ] Implementar tratamento de lugar inexistente com resposta HTTP 404 adequada

Etapa 3 — Renderização híbrida
- [ ] Configurar as rotas públicas para SSR
- [ ] Criar a página de favoritos com armazenamento no navegador
- [ ] Configurar favoritos para renderizar no cliente (CSR)
- [ ] Garantir que o acesso ao localStorage ocorra apenas no navegador

Etapa 4 — Validação
- [ ] Testar as páginas públicas sem depender da execução do JavaScript no navegador
- [ ] Verificar o HTML inicial, o title e as meta tags das páginas
- [ ] Testar favoritos, atualização da página e navegação
- [ ] Validar as estratégias SSR e CSR configuradas para cada rota