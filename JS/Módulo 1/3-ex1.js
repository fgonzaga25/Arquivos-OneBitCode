window.alert("Olá! Esse site serve para realizar recrutamento de pessoas.")

let primeiroNome = window.prompt("Insira aqui seu primeiro nome:")

let sobrenome = window.prompt("Insira agora seu sobrenome completo:")

let campoDeEstudo = window.prompt("Para qual área deseja se alistar?")

let dataNascimento = parseInt(window.prompt("Insira aqui seu ano de nascimento (ex:1998:)"))

while (dataNascimento > 2024) {
    dataNascimento = parseInt(window.prompt("Insira um valor válido!"))
}

const idade = 2024 - dataNascimento

window.alert(primeiroNome + ", cadastro realizado com sucesso!\n\n"
            + "Aqui estão seus dados:\n"
            + "Nome completo: " + primeiroNome + " " + sobrenome + "\n"
            + "Campo de estudo: " + campoDeEstudo + "\n"
            + "Idade: " + idade + " anos.")