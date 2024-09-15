Member Club - Projeto de Estudo

# Member Club - Projeto de Estudo

## Descrição

Este é um projeto de estudo para implementar uma interface web simples para gerenciar clientes de um sistema de fidelidade. O projeto explora conceitos como **manipulação do DOM**, **validação de formulários**, **exibição dinâmica de dados**, **tratamento de erros**, além de boas práticas como **modularização do código** e uso de ferramentas como **Webpack** e **Babel**.

## Funcionalidades Implementadas

### 1. Busca de Clientes por ID

- O usuário pode buscar um cliente fornecendo um ID no formato **XXX-XXX-XXX-XXX**.
- A busca é realizada ao pressionar o botão de busca ou a tecla **"Enter"**.
- O campo de busca aplica uma máscara automática, permitindo que o usuário insira os números sem se preocupar com os hífens.

### 2. Exibição Dinâmica de Dados

Após a busca, os dados do cliente são exibidos, incluindo:

- **Foto de perfil**
- **Nome e data de adesão**
- **Histórico de agendamentos**
- **Cartão de fidelidade** com selos verdes para cada corte realizado.

### 3. Validação de Formulário

- **Campo Obrigatório**: O ID não pode ser vazio.
- **Somente Números**: Apenas números são permitidos no ID, com validação em tempo real.
- **Máscara de Input**: O ID é automaticamente formatado no padrão **XXX-XXX-XXX-XXX**.

### 4. Tratamento de Erros

Se o ID do cliente não for encontrado, o sistema exibe uma mensagem de erro clara: **"Cliente não encontrado. Verifique o ID."**

## Conceitos Aplicados

### 1. Manipulação do DOM

Utilizamos JavaScript para manipular e atualizar elementos da interface de forma dinâmica, como exibir as informações do cliente, histórico de agendamentos, e atualizar os selos no cartão de fidelidade. Métodos como `querySelector`, `innerHTML` e `appendChild` foram essenciais para isso.

### 2. Validação de Formulário

Implementamos uma série de validações no front-end:

- O campo não pode ser enviado vazio.
- Apenas números são aceitos.
- Aplicamos uma máscara automática que formata o ID ao estilo **XXX-XXX-XXX-XXX**.

### 3. Tratamento de Erros

Com o uso de `try...catch`, capturamos erros ao buscar clientes. Caso o cliente não seja encontrado, uma mensagem de erro é exibida, proporcionando uma experiência de usuário (UX) mais amigável.

### 4. Webpack e Babel

Para melhorar a performance e a compatibilidade do código, utilizamos duas ferramentas importantes:

- **Webpack**: O Webpack foi usado para empacotar e modularizar o código JavaScript. Ele permite que o código seja dividido em módulos menores, facilitando a manutenção e garantindo que todo o código e dependências sejam gerenciados de maneira eficiente.
- **Babel**: Para garantir a compatibilidade com diferentes versões de navegadores, usamos o Babel, que transpila o código ES6+ para uma versão mais antiga do JavaScript, garantindo que funcionalidades modernas como `async/await` e `arrow functions` rodem em navegadores mais antigos.

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/member-club.git
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Compile o projeto usando o Webpack:

```bash
npm run build
```

4. Abra o arquivo `index.html` no navegador para executar o projeto.

## Possíveis Melhorias

- **Validação no Backend**: A validação atualmente ocorre apenas no front-end, podendo ser implementada também no back-end para maior segurança.
- **Testes Unitários**: Adicionar testes unitários para garantir que as validações e exibições de dados estejam funcionando corretamente.
- **Melhorias na UX**: Exibir mensagens de sucesso ou feedback adicional ao usuário para melhorar a experiência geral.

## Conclusão

Este projeto cobriu importantes conceitos de desenvolvimento web como **manipulação do DOM**, **validação de formulários**, **tratamento de erros** e o uso de ferramentas como **Webpack** e **Babel** para otimizar o código e garantir compatibilidade entre navegadores. Ele foi desenvolvido como uma excelente prática de organização de código modular e reutilizável.

## Autor

**[Wellington Mota]**  
_Projeto de Estudo - Gerenciamento de clientes e sistema de fidelidade._

# Member Club - Study Project (English)

## Description

This is a study project focused on implementing a simple web interface to manage customers in a loyalty program. The project explores concepts such as **DOM manipulation**, **form validation**, **dynamic data display**, **error handling**, and best practices such as **code modularization** and the use of tools like **Webpack** and **Babel**.

## Features

### 1. Client Search by ID

- The user can search for a client by providing an ID in the format **XXX-XXX-XXX-XXX**.
- The search can be triggered by clicking the search button or pressing the **"Enter"** key.
- The input field automatically applies a mask, allowing the user to input the numbers without worrying about the hyphens.

### 2. Dynamic Data Display

After the search, the client data is displayed, including:

- **Profile picture**
- **Name and date of registration**
- **Appointment history**
- **Loyalty card** with green stamps for each completed haircut.

### 3. Form Validation

- **Required Field**: The ID field cannot be empty.
- **Only Numbers Allowed**: The input only accepts numbers, with real-time validation.
- **Input Mask**: The ID is automatically formatted in the **XXX-XXX-XXX-XXX** pattern.

### 4. Error Handling

If the client ID is not found, the system displays a clear error message: **"Client not found. Please check the ID."**

## Key Concepts

### 1. DOM Manipulation

We used JavaScript to manipulate and dynamically update the interface, such as displaying client information, appointment history, and updating loyalty card stamps. Methods like `querySelector`, `innerHTML`, and `appendChild` were essential for this task.

### 2. Form Validation

We implemented several validations on the front-end:

- The field cannot be submitted empty.
- Only numbers are accepted.
- We applied an automatic mask that formats the ID in the **XXX-XXX-XXX-XXX** style.

### 3. Error Handling

By using `try...catch`, we captured errors when fetching clients. If the client is not found, an error message is displayed, providing a better user experience (UX).

### 4. Webpack and Babel

To improve performance and code compatibility, we used two important tools:

- **Webpack**: Webpack was used to bundle and modularize the JavaScript code. It allows the code to be split into smaller modules, making it easier to maintain and ensuring that all dependencies are managed efficiently.
- **Babel**: To ensure compatibility with different versions of browsers, we used Babel, which transpiles ES6+ code to an older version of JavaScript, ensuring that modern features such as `async/await` and `arrow functions` work in older browsers.

## How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/member-club.git
```

2. Install the project dependencies:

```bash
npm install
```

3. Build the project using Webpack:

```bash
npm run build
```

4. Open the `index.html` file in your browser to run the project.

## Potential Improvements

- **Backend Validation**: Currently, validation occurs only on the front-end. Implementing backend validation would ensure greater security.
- **Unit Testing**: Add unit tests to ensure that the validations and data displays are working correctly.
- **UX Improvements**: Provide success messages or additional feedback to enhance the overall user experience.

## Conclusion

This project covered important web development concepts such as **DOM manipulation**, **form validation**, **error handling**, and the use of tools like **Webpack** and **Babel** to optimize the code and ensure browser compatibility. It was developed as an excellent practice of organizing modular and reusable code.

## Author

**[Wellington Mota]**  
_Study Project - Client management and loyalty system._
