<template>
  <nav class="navbar is-info">
    <div class="navbar-brand">
      <a class="navbar-item">
        <b>JSSR</b>
      </a>
    </div>
  </nav>
  <div class="content">
    <div class="box">
      <div class="field">
        <label class="label">Timbrado</label>
        <div class="control">
          <input class="input" type="text" v-model="timbrado"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Periodo</label>
        <div class="control">
          <div class="box">
            <div class="columns">
              <div class="column">
                <label class="label">Desde</label>
                <input class="input" type="date" v-model="fecha_inicio"/>
              </div>
              <div class="column">
                <label class="label">Hasta</label>
                <input class="input" type="date" v-model="fecha_fin"/>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Formato</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="Formato" value="1" v-model="formato"> Formato 1
          </label>
          <label class="radio">
            <input type="radio" name="Formato" value="2" v-model="formato"> Formato 2
          </label>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-success" @click.prevent="generarDocumento">Generar</button>
        </div>
        <div class="control">
          <button class="button is-success is-light">Salir</button>
        </div>
      </div>
    </div>
  </div>  
</template>
<style scoped>
@import "~bulma/css/bulma.css";
</style>
<script>
export default {
  data:() => ({
    timbrado:"",
    fecha_inicio:"",
    fecha_fin: "",
    formato: "1",
  }),
  methods:{
    generarDocumento(){
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("hola :3"));
        element.setAttribute('download', "800.csv");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
  }
}
</script>
