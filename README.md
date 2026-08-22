# 💰 Conversor de Moedas

Um conversor de moedas desenvolvido para praticar **HTML, CSS e JavaScript**, com consumo de uma API externa para obter cotações atualizadas.

O projeto possui uma interface própria, desenvolvida com foco em uma experiência simples, intuitiva e responsiva.

## 🚀 Demonstração

> Adicione aqui o link do projeto publicado.

**🔗 Projeto:** [Acesse o Conversor de Moedas](#)

---

## 📌 Sobre o projeto

O Conversor de Moedas permite informar um valor em **Real Brasileiro (BRL)** e convertê-lo para diferentes moedas.

Atualmente, o projeto possui suporte para:

* 🇺🇸 Dólar Americano (USD)
* 🇪🇺 Euro (EUR)
* ₿ Bitcoin (BTC)

As cotações são obtidas através da **AwesomeAPI**, permitindo que o projeto trabalhe com valores atualizados.

---

## ✨ Funcionalidades

* 💵 Conversão de Real para Dólar
* 💶 Conversão de Real para Euro
* ₿ Conversão de Real para Bitcoin
* 🔄 Atualização da moeda exibida de acordo com a seleção do usuário
* 🖼️ Alteração da bandeira/ícone da moeda selecionada
* 🌐 Consumo de API externa
* 📱 Layout responsivo
* 🎨 Interface desenvolvida com design próprio
* ✨ Animações CSS

---

## 🛠️ Tecnologias utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript
* DOM
* Flexbox
* CSS Animations

### API

* AwesomeAPI

### Outros

* Google Fonts — Inter
* Git e GitHub

---

## 🧠 O que pratiquei neste projeto

Durante o desenvolvimento, pude aprofundar meus conhecimentos em:

* Manipulação do DOM com JavaScript
* Eventos como `click` e `change`
* Funções assíncronas com `async/await`
* Consumo de APIs utilizando `fetch()`
* Trabalhar com dados retornados em formato JSON
* Uso do `Intl.NumberFormat()` para formatação de moedas
* Manipulação de elementos HTML através de JavaScript
* Responsividade com CSS
* Criação de animações com `@keyframes`
* Organização de arquivos em um projeto front-end

---

## 📂 Estrutura do projeto

```text
conversor-de-moedas/
│
├── assets/
│   ├── 3dicons-money-iso-color.png
│   ├── brasilia.png
│   ├── estados-unidos.png
│   ├── uniao-europeia.png
│   └── bitcoin.png
│
├── estilos/
│   └── styles.css
│
├── index.html
├── script.js
└── README.md
```

---

## 🔄 Como funciona

O usuário informa um valor em Real e seleciona a moeda desejada.

Ao clicar em **"Converter agora"**, o JavaScript:

1. Obtém o valor informado pelo usuário;
2. Faz uma requisição para a AwesomeAPI;
3. Recebe as cotações em formato JSON;
4. Identifica a moeda selecionada;
5. Realiza o cálculo da conversão;
6. Formata o resultado;
7. Atualiza a interface através do DOM.

### Exemplo

```text
R$ 100,00
      ↓
API
      ↓
Cotação do Dólar
      ↓
Cálculo da conversão
      ↓
US$ XX,XX
```

---

## 📱 Responsividade

O projeto foi desenvolvido para se adaptar a diferentes tamanhos de tela.

A interface possui uma organização diferente em telas menores, utilizando **Media Queries** para melhorar a experiência em dispositivos móveis.

---

## 🎨 Design

O design da aplicação foi desenvolvido pensando em uma interface:

* moderna;
* simples;
* intuitiva;
* visualmente agradável;
* responsiva.

Também foram utilizadas animações CSS para deixar a interface mais dinâmica.

---




⭐ Se este projeto foi útil ou interessante para você, considere deixar uma estrela no repositório!
