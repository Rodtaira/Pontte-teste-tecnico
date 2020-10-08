# Teste técnico para a Empresa Pontte

Teste para a empresa Pontte desenvolvido utilizando Node e Banco de Dados MySQL 

# Como rodar o projeto

- Dê um git clone nesse projeto e entre na raíz do mesmo.
- Tenha uma versão do Node instalada e do NPM , a versão utilizada do Node nesse projeto foi a versão 12.18.3 e do NPM foi utilizada a versão 6.14.6.
- Abra um terminal e digite npm install para instalar todas as dependências. 
- Digite npm run start para rodar o projeto. 

# Rodando as Migrações

- Primeiro vá no arquivo que se encontra em src/config/config.json
- E mude as configurações para o Banco de Dados Relacional a ser utilizado, no caso do projeto foi desenvolvido em cima do Banco de Dados MySQL.
- Com o banco de dados configurado devidamente, digite o comando: npx sequelize-cli db:create para criar um novo banco. 
- Para gerar as migrações digite o comando: npx sequelize-cli db:migrate
- Para popular o banco com alguns valores digite o comando: npx sequelize-cli db:migrate

# Testando os Endpoints 
- Existem 3 endpoints que utilizam o método POST 
- O endpoint para criar uma nova Criação, pode ser feita da seguinte maneira: 
![Screenshot from 2020-10-07 21-56-37](https://user-images.githubusercontent.com/18682770/95403452-a5153f00-08e8-11eb-96c3-4d2bf4576fef.png)
- Caso seja omitido algum dos valores obrigatórios como Nome, Email, CPF, Valor do Empréstimo. 

