# learning

Meu código de estudo: exemplos e exercícios de cursos, livros e documentação.

As anotações ficam no Obsidian. Aqui fica só o código.

## Estrutura

Primeiro nível é a tecnologia (linguagem, framework ou runtime), segundo nível é o assunto.

```
learning/
├── javascript/
│   └── variaveis/
│       ├── exemplos.js
│       └── exercicio-01.js
├── python/
├── react/
│   └── hooks/          ← mini projeto com package.json próprio
└── fastapi/
    └── rotas/          ← mini projeto com requirements.txt próprio
```

- `exemplos.*`: testes que faço enquanto estudo.
- `exercicio-01.*`, `exercicio-02.*`: exercícios.
- Pasta de assunto só é criada quando o estudo chega nele.

## Boas práticas

**O que entra aqui**

- Exemplos e exercícios soltos, um assunto por pasta.
- Framework que precisa de setup (React, Node, FastAPI): cada assunto é um mini projeto independente, com as próprias dependências.

**O que não entra**

- Curso que constrói um projeto único do começo ao fim: vai pra um repositório próprio.
- Projeto que vou mostrar pra alguém: repositório próprio, com README.
- Arquivo pesado (vídeo, imagem grande, dataset): fica fora, com link no README da pasta.

**Fluxo de estudo**

1. Durante a aula: código e comentários aqui, sem trocar de janela.
2. No fim do módulo: revisar e passar o que importa pro Obsidian, com minhas palavras.
3. Commit.

**Código**

- Escrever com minhas palavras e meus exemplos, não copiar o instrutor.
- Primeira linha do arquivo diz a fonte: `// Fonte: Meta Front-End Developer (Coursera), módulo 2`.

**Commits**

[Conventional Commits](https://www.conventionalcommits.org/), escopo é a tecnologia:

```
feat(js): exemplos de variáveis
feat(react): exercício de useState
fix(python): corrige exercício de listas
docs: atualiza README
```
