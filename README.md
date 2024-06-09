# Como atualizar o site

O site utiliza gh-pages para construir a página estática. Para a atualizar o site é bem simples: após clonar o repositório, atualize os dados CSV presentes na pasta de dados com os dados mais novos (aqueles que devem ser pegos do sistema de cadastro, diretamente do streamlit), substituindo-os. Após isso, basta rodar "npm run deploy", e o gh-pages cuidará do resto, em teoria.

# Informações Básicas - README.md durante a rotação

O repositório já possui todos os arquivos das páginas já conectados ao App e com seus lugares já organizados. Basta editar a página respectiva para funcionar. O projeto é feito em React com **typescript**

[**_ACESSAR DESIGN DO SITE_**](https://www.figma.com/design/BQmNtZZtzCId505RwOadRW/TAIL?node-id=0%3A1&t=zm3aeaX4mgmuVxa9-1 "Figma")

As páginas que necessitam de dados já estão com eles implementados e pronto para usarem. Os dados presentes são poucos, mas em teoria suficientes para já faz uma implementação dinâmica e responsiva.

As colunas referentes às fotos ainda não estão presentes. Para quem for implementar algo com imagens, faça, por enquanto, hardcoded. Posteriormente adicionamos os dados novos com imagens.

Prazo (em teoria): **27/05**

## Divisão das telas

Assim ficou a divisão das telas (se eu me lembro bem, qualquer coisa, editar):

- Tiago: Landing Page e Rotações (Página com a lista das rotações para clicar e acessar cada uma = "Rotacoes")
- Tiago: Footer e NavBar
- Duda: Projetos
- Bruna: Membros
- Raphael: Rotação (Página de uma rotação específica, todos os seus projetos = "RotacaoTemplate")
- Ana: Contato e Sobre

Tanto o Footer como a NabBar são elementos compartilhados entre todos.

## Importante

Abaixo vai ter alguns tutoriais básicos de react, assim como uma parte ensinando como iniciar o site e, por fim, uma parte indicando o uso do github. É importante seguir a questão das diferentes branches para não ter conflitos.

## Tutoriais e materiais

- [Playlist React Typescript](https://www.youtube.com/watch?v=antT8q5JFxA&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=5)
- [Explicação sobre o que é React](https://www.youtube.com/watch?v=N3AkSS5hXMA&t)
- [Explicação sobre o que é React ainda mais simples (é para JS mas a lógica persiste)](https://www.youtube.com/watch?v=Tn6-PIqc4UM)

# Como iniciar o site

Projeto criado com [Create React App](https://github.com/facebook/create-react-app).

_Primeiramente, é necessário haver o Node.js baixado. [Download](https://nodejs.org/en/download/current "Baixar Node.js")_

## Iniciando e editando o site

Dentro da pasta principal, se for a primeira vez rodando o site, utilize o comando:

### `npm i`

para baixar os módulos. E para iniciar o site, utilize:

### `npm start`

Então será rodado o site em modo de desenvolvedor.
Abra [http://localhost:3000](http://localhost:3000) para ver o site no browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Inicia o executor de testes no modo interativo de observação.
Veja a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para obter o melhor desempenho.

A compilação é minificada e os nomes de arquivo incluem os hashes.
Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

## Utilizando o GitHub

Para garantir que cada pessoa do projeto trabalhe de forma independente e sem interferir no trabalho dos outros, é importante seguir um fluxo de trabalho utilizando branches no GitHub.

### Criando uma Branch

1. **Abra o Repositório** : Vá para o repositório do projeto no GitHub.
2. **Crie uma Branch** : No menu suspenso de seleção de branch, digite um nome descritivo para sua nova branch e pressione Enter. O nome pode ser o seu nome "Ex: Tiago" ou a(s) página(s) que estão sendo editada "Ex: Pag Rotações". Portanto que fique claro quem / o que está sendo editada nela.

### Trocando de Branch no VS Code

1. **Abrindo o VS Code** : Inicie o Visual Studio Code.
2. **Abrindo o Terminal Integrado** : No menu superior, vá em "Terminal" e selecione "Novo Terminal" para abrir um terminal integrado ao VS Code.
3. **Verificando Branches** : No terminal, você pode verificar todas as branches disponíveis no repositório usando o comando:

```python
git branch
```

1. **Trocar para uma Branch Existente** : Se você deseja mudar para uma branch existente, use o comando:

```python
git switch nome_da_branch
```

Por exemplo, se você quiser mudar para a branch "Tiago", você usaria:

```python
git switch Tiago
```

### Dando Commit no VS Code

1. **Verificando Status de Mudanças** : Antes de dar commit, verifique quais arquivos foram modificados, adicionados ou excluídos usando o comando:

```python
git status
```

1. **Adicionando Arquivos para o Commit** : Se você deseja adicionar todos os arquivos modificados para o commit, use o comando:

```python
git add .
```

Se você deseja adicionar apenas arquivos específicos, substitua "." pelo nome do arquivo.

1. **Commitando as Mudanças** : Agora, você pode dar o commit às mudanças usando o comando:

```python
git commit -m "Mensagem do commit aqui"
```

Substitua "Mensagem do commit aqui" por uma descrição breve e clara do que foi alterado.

### Dando Push na Branch no VS Code

1. **Enviando as Alterações para o Repositório Remoto** : Após dar commit às suas mudanças, você pode enviá-las para o repositório remoto usando o comando:

```python
git push origin nome_da_branch
```

Por exemplo, se você estiver na branch "Tiago" e deseja enviar as alterações para essa branch no repositório remoto, você usaria:

```python
git push origin Tiago
```

### Atualizando seu Repositório Local

1. **Verificando Mudanças no Repositório Remoto** : Antes de atualizar seu repositório local, é uma boa prática verificar se há mudanças no repositório remoto. Você pode fazer isso usando o comando:

```python
git fetch
```

1. **Atualizando sua Branch com as Alterações do Repositório Remoto** : Para atualizar sua branch local com as alterações do repositório remoto, use o comando:

```python
git switch nome_da_branch
```

Por exemplo, se você deseja atualizar a branch "Tiago" com as alterações do repositório remoto, você usaria:

```python
git switch Tiago
```

1. **Fazendo o Pull das Alterações do Repositório Remoto** : Depois de mudar para a branch que deseja atualizar, você pode fazer o pull das alterações do repositório remoto para o seu repositório local usando o comando:

```python
git pull origin nome_da_branch
```

Por exemplo, se você estiver na branch "Tiago" e deseja trazer as alterações do repositório remoto para essa branch, você usaria:

```python
git pull origin Tiago
```

Estes comandos básicos permitem que você gerencie suas branches, faça commits e mantenha seu repositório local atualizado com as alterações do repositório remoto diretamente do VS Code, de forma simples e direta. Se preferir, você pode executar esses mesmos comandos no terminal do seu sistema operacional.

## Saiba Mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, confira a [documentação do React](https://reactjs.org/).
