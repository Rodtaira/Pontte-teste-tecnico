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




