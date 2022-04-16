(()=>{"use strict";new class{constructor(e){this.form=document.querySelector(e)}cepValidation(e){const t=e.replace(/\D/g,"");""!==this.form.cep.value?/^[0-9]{8}$/.test(t)?this.fetchAddress(t):(this.clearForm(),alert("CEP inválido!")):this.clearForm()}fillForm(e,t,r,i){this.form.rua.value=e,this.form.bairro.value=t,this.form.cidade.value=r,this.form.estado.value=i}fetchAddress(e){this.url=`https://viacep.com.br/ws/${e}/json/`,fetch(this.url).then((e=>e.json())).then((e=>{e.erro?(this.clearForm(),alert("CEP não encontrado!")):this.fillForm(e.logradouro,e.bairro,e.localidade,e.uf)}))}addCepInputEvent(){this.form.cep.addEventListener("change",(()=>{this.cepValidation(this.form.cep.value)}))}clearForm(){this.form.cep.value="",this.form.rua.value="",this.form.bairro.value="",this.form.cidade.value="",this.form.estado.value=""}init(){return this.addCepInputEvent(),this}}(".form").init()})();