// Simulação de um banco de dados de usuários (simplificado)
const usersDatabase = [
    { username: "usuario1", password: "senha123" },
    { username: "usuario2", password: "senha456" }
];

// Função para cadastrar um novo usuário
function signUp(username, password) {
    usersDatabase.push({ username, password });
    alert("Cadastro realizado com sucesso!");
}

// Função para validar o login
function login(username, password) {
    for (const user of usersDatabase) {
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}

// Manipulação do formulário de cadastro
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    signUp(username, password);
    registrationForm.reset();
});

// Manipulação do formulário de login
const loginValidationForm = document.getElementById("login-validation-form");
const loginStatus = document.getElementById("login-status");
loginValidationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (login(username, password)) {
        loginStatus.textContent = "Login bem-sucedido!";
    } else {
        loginStatus.textContent = "Nome de usuário ou senha incorretos.";
    }
    loginValidationForm.reset();
});
