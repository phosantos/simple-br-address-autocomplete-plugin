export default class AddressAutocomplete {
  constructor(form) {
    this.form = document.querySelector(form);
  }

  clearForm() {
    [].forEach.call(this.form, (input) => {
      input.value = '';
    });
  }

  fillForm(rua, bairro, cidade, estado) {
    this.form.rua.value = rua;
    this.form.bairro.value = bairro;
    this.form.cidade.value = cidade;
    this.form.estado.value = estado;
  }

  fetchAddress(cep) {
    this.url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(this.url)
      .then((r) => r.json())
      .then((body) => {
        if (!body.erro) {
          this.fillForm(body.logradouro, body.bairro, body.localidade, body.uf);
        } else {
          this.clearForm();
          alert('CEP não encontrado!');
        }
      });
  }

  addCepInputEvent() {
    this.form.cep.addEventListener('change', () => {
      this.fetchAddress(this.form.cep.value);
    });
  }

  init() {
    this.addCepInputEvent();
    return this;
  }
}
