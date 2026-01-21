# 🏅 Dados dos Atletas

Projeto desenvolvido em **JavaScript** com foco em **Programação Orientada a Objetos**, criado para receber informações de atletas, calcular parâmetros importantes e exibi-los de forma clara no console.

Este projeto foi desenvolvido seguindo rigorosamente as especificações do desafio de certificação, com código limpo, comentado e organizado — padrão profissional.

---

## 🎯 Objetivo do Projeto

Criar uma aplicação capaz de:

* Receber dados de um atleta
* Calcular automaticamente:

  * Categoria
  * IMC
  * Média válida das notas
* Exibir todas as informações no console

Toda a lógica está centralizada em uma única classe chamada `Atleta`.

---

## 🧠 Conceitos Aplicados

* Programação Orientada a Objetos (POO)
* Classes e métodos
* Encapsulamento de regras de negócio
* Manipulação de arrays
* Ordenação e cálculo de médias

Nada de lógica solta. Nada de código duplicado.

---

## 📋 Estrutura da Classe `Atleta`

### Atributos

* `nome`
* `idade`
* `peso`
* `altura`
* `notas`

### Métodos

* `calculaCategoria()`
* `calculaIMC()`
* `calculaMediaValida()`
* `obtemNomeAtleta()`
* `obtemIdadeAtleta()`
* `obtemPesoAtleta()`
* `obtemAlturaAtleta()`
* `obtemNotasAtleta()`
* `obtemCategoria()`
* `obtemIMC()`
* `obtemMediaValida()`

---

## 📐 Regras Utilizadas

### Categoria do Atleta

| Faixa Etária | Categoria     |
| ------------ | ------------- |
| 9 a 11       | Infantil      |
| 12 a 13      | Juvenil       |
| 14 a 15      | Intermediário |
| 16 a 30      | Adulto        |
| Outros       | Sem categoria |

---

### Cálculo do IMC

**Fórmula:**

```
IMC = peso / (altura × altura)
```

O valor é retornado sem arredondamento, conforme solicitado no projeto.

---

### Cálculo da Média Válida

Metodologia utilizada:

1. Ordena as notas em ordem crescente
2. Remove a menor nota
3. Remove a maior nota
4. Calcula a média das notas restantes

Essa abordagem garante justiça na avaliação do atleta.

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/dados-atletas
```

2. Acesse a pasta do projeto:

```
cd dados-atletas
```

3. Execute o arquivo JavaScript:

* Via Node.js:

```
node dados-atletas.js
```

* Ou cole o código diretamente no console do DEVstart para validação

---

## 🧪 Exemplo de Saída

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.253333333333334
```

---

## 🚀 Diferenciais do Projeto

* Código limpo e comentado
* Classe única bem definida
* Fácil manutenção e expansão
* Padrão profissional para portfólio

Este projeto não resolve apenas o problema proposto — ele demonstra domínio técnico e organização.

---

## 👨‍💻 Autor

**Ramon**
Desenvolvedor Full Stack
Apaixonado por código limpo, soluções inteligentes e projetos bem estruturados.

---

📌 *Projeto criado para fins de certificação e portfólio profissional.*
