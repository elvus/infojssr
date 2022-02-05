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
      <form @submit.prevent="onSubmit">
        <div class="field">
          <label class="label">Timbrado</label>
          <div class="control">
            <input class="input" type="text" v-model="timbrado" required/>
          </div>
        </div>
        <div class="field">
          <label class="label">Periodo</label>
          <div class="control">
            <div class="box">
              <div class="columns">
                <div class="column">
                  <label class="label">Desde</label>
                  <input class="input" type="date" placeholder="dd/mm/yyyy" v-model="fecha_inicio" required/>
                </div>
                <div class="column">
                  <label class="label">Hasta</label>
                  <input class="input" type="date" placeholder="dd/mm/yyyy" v-model="fecha_fin" required/>
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
            <button class="button is-success" type="submit">Generar</button>
          </div>
          <div class="control">
            <button class="button is-success is-light" @click.prevent="salir">Salir</button>
          </div>
        </div>
      </form>
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
    onSubmit(){
       getData("http://localhost:8080/api/v1/document", {
         timbrado: this.timbrado,
         fecha_inicio: this.fecha_inicio,
         fecha_fin: this.fecha_fin
       }, this.$cookies.get("auth-token")).then(data =>{
         console.log(data)
       })
    },
    salir(){
      window.location.href = "/"
    }
  }
}

const getData = async (url='', data={}, token)=> {
  const response = await fetch(url,{
    method:"POST",
    headers:{
      "Authorization": token,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  })
  return response.json()
}
</script>
