### START DO PROJETO 

**clonar o projeto**
```sh 
git clone git@github.com:augustogehrke/DeliveryMuchTest.git AugustoGehrke-Test
```

**Instalar as dependências do projeto**
```sh 
npm install
```

**Criar o arquivo das variáveis de ambiente**
```sh
cp .env.example .env
```

**Observações:**
- O arquivo `.env` pode ser criado manualmente;
- Necessário preencher o arquivo `.env` criado anteriormente com todas as variáveis de ambiente, conforme definidas no arquivo `.env.example`;
- Foi adicionado configurações default, portanto, é necessário somente preencher a variável `API_GIPHY_KEY` com a chave da api giphy. A chave não foi fornecida devido a ser informação confidencial. Para criar a chave é necessário se registar e criar um app na [Giphy](https://developers.giphy.com/docs/api#quick-start-guide).


### PADRÃO DE DESENVOLVIMENTO

O projeto faz uso do eslint, seguindo o padrão [Standard](https://standardjs.com/).

**Comando úteis:**

```sh
npm run lint
```
Verifica se todo o projeto está seguindo o padrão definido, caso não, informa quais os problemas encontrados.

```sh 
npm run lint-fix
```
Verifica se todo o projeto está seguindo o padrão definido, caso não, realiza a correção automática do que for possível e informa quais problemas ainda precisam ser resolvidos.
