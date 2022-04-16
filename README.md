# Address Autocomplete Plugin

Plugin simples de autopreenchimento de formulário de endereço após a digitação do CEP.

## Como usar

1 - Crie um formulário HTML do jeito que preferir, mas para os campos(inputs) de CEP, rua, bairro, cidade e estado use o name e id como no formulário abaixo.

```html
<form class="form">
  <label for="cep">CEP</label>
  <input type="text" name="cep" id="cep" />
  <label for="rua">Rua</label>
  <input type="text" name="rua" id="rua" />
  <label for="bairro">Bairro</label>
  <input type="text" name="bairro" id="bairro" />
  <label for="cidade">Cidade</label>
  <input type="text" name="cidade" id="cidade" />
  <label for="estado">Estado</label>
  <input type="text" name="estado" id="estado" />
</form>
```

2 - Copie o arquivo address-autocomplete.js da pasta plugin e cole no seu projeto. O arquivo da pasta js não é o otimizado.

4 - Link o seu arquivo script.js no HTML e o defina como type = "module". Exemplo:

```html
<script type="module" src="./script.js"></script>
```

5 - Importe o address-autocomplete.js para o seu arquivo script. './plugins/addr...' é só um exemplo caso o arquivo esteja na pasta plugins.

```js
import AddressAutocomplete from './plugins/address-autocomplete.js';
```

6 - Ainda no arquivo script, inicie a classe AddressAutocomplete e selecione o formulário. No exemplo, o formulário é selecionado pela classe, mas sinta-se livre para usar qualquer seletor.

```js
const autocompletarEndereco = new AddressAutocomplete('.form');
autocompletarEndereco.init();
```
