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
- Caso o endpoints rode certo, as imagens serão feitas o upload na pasta public/images
- Caso seja omitido o campo de documento seja omitido, essa mensagem será mostrada:
![Screenshot from 2020-10-07 22-37-50](https://user-images.githubusercontent.com/18682770/95405285-c7f62200-08ed-11eb-9af2-2808492d5763.png)
- Caso tente fazer esse endpoint antes de resolver o endoint /criacao . Essa mensagem será mostrada:
![Screenshot from 2020-10-07 22-42-16](https://user-images.githubusercontent.com/18682770/95405510-62566580-08ee-11eb-8ecd-165234760853.png)
- O endpoint para fazer o estado de aprovação, para criar uma nova Aprovação, pode ser feita da seguinte maneira:
![Screenshot from 2020-10-07 22-46-24](https://user-images.githubusercontent.com/18682770/95405872-55864180-08ef-11eb-9da8-a67a7192dfc6.png)
- Caso tente fazer esse endpoint antes de resolver o endoint /criacao e /upload. Essa mensagem será mostrada:
![Screenshot from 2020-10-07 22-42-16](https://user-images.githubusercontent.com/18682770/95405510-62566580-08ee-11eb-8ecd-165234760853.png)
- Existem 2 endpoins que utilizam o método PUT
- O endpoint para atualizar uma Criação, possui a seguinte formato: /updateCriacao/:criacaoID/:aprovacaoID
![Screenshot from 2020-10-07 22-57-30](https://user-images.githubusercontent.com/18682770/95406337-8f0b7c80-08f0-11eb-8e6e-a1e2a59f7833.png)
- Caso o status da Aprovação seja true. A seguinte mensagem será mostrada:
![Screenshot from 2020-10-07 23-06-29](https://user-images.githubusercontent.com/18682770/95406857-d6463d00-08f1-11eb-9847-d63045d0fefd.png)
- O endpoint para atualizar uma Aprovação, possui a seguinte formato: /updateAprovacao/:aprovacaoID
![Screenshot from 2020-10-07 23-02-41](https://user-images.githubusercontent.com/18682770/95406646-430d0780-08f1-11eb-98de-3b32a05870da.png)

# Conclusão
- Infelizmente não consegui desenvolver o endopoint para fazer a atualização das imagens, pois teria que ver uma maneira de atualizar as imagens correspondentes ao contrato na pasta public/images que é o local que são guardadas as imagens.
- E também não consegui terminar de escrever os testes de integração dos endpoints. 




