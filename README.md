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
- O endpoint para fazer o estado de uma nova Criação, pode ser feita da seguinte maneira: 
![Screenshot from 2020-10-07 21-56-37](https://user-images.githubusercontent.com/18682770/95403452-a5153f00-08e8-11eb-96c3-4d2bf4576fef.png)
- Caso seja omitido algum dos valores obrigatórios como Nome, Email, CPF, Valor do Empréstimo, essa mensagem será mostrada: 
![Screenshot from 2020-10-07 22-09-44](https://user-images.githubusercontent.com/18682770/95403952-17d2ea00-08ea-11eb-935f-4135a61f172a.png)
- O endpoint para fazer o estado upload das Imagens, pode ser feita da seguinte maneira:
![Screenshot from 2020-10-07 22-34-26](https://user-images.githubusercontent.com/18682770/95405128-50c08e00-08ed-11eb-9361-7fc3b0fa048d.png)
- Caso seja omitido o campo de documento seja omitido, essa mensagem será mostrada:
![Screenshot from 2020-10-07 22-37-50](https://user-images.githubusercontent.com/18682770/95405285-c7f62200-08ed-11eb-9af2-2808492d5763.png)
- Caso tente fazer esse endpoint antes de resolver o endoint /criacao . Essa mensagem será mostrada:
![Screenshot from 2020-10-07 22-42-16](https://user-images.githubusercontent.com/18682770/95405510-62566580-08ee-11eb-8ecd-165234760853.png)
- O endpoint para fazer o estado de aprovação, para criar uma nova Aprovação, pode ser feita da seguinte maneira:





