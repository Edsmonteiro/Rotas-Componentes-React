# Orbit — Rotas e Componentes React

Website React com **React Router**, múltiplas páginas, navegação sem recarregar, layout compartilhado, lazy loading, perfis dinâmicos e página 404.

## Executar

Requer Node.js 20+.

```bash
npm install
npm run dev
```

Acesse http://localhost:5173.

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Início |
| `/about` | Sobre |
| `/contact` | Contato, formulário demonstrativo |
| `/user/1` | Perfil da Ana |
| `/user/2` | Perfil do Bruno |
| `/user/3` | Perfil da Carla |
| `/user/:id` | Parâmetro de URL usando `useParams` |
| `*` | Página não encontrada (404) |

## Conceitos praticados

- `BrowserRouter`, `Routes`, `Route`, `Link` e `NavLink`;
- `Outlet` para conteúdo dentro do layout com Header, Sidebar e Footer;
- `React.lazy` e `Suspense` para carregar páginas sob demanda;
- Parâmetros de URL com `useParams` e tratamento de rota inválida;
- CSS responsivo e formulário de contato usando `useState`.

O formulário de contato não envia dados a um servidor. As capturas de tela fazem parte do pacote de entrega separado.
