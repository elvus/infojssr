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
let xlsx = require('json-as-xlsx')
export default {
  data:() => ({
    timbrado:"",
    fecha_inicio:"",
    fecha_fin: "",
    formato: "1",
  }),
  methods:{
    onSubmit(){
      let url = "http://localhost:8080/api/v1/"
      let today = new Date()
      let now = today.getDate()+""+(today.getMonth()+1)+""+today.getFullYear()+"_"+today.getHours()+""+today.getMinutes()+""+today.getSeconds()
      url = this.formato === "1" ? url+"marangatu":url+"document" 
       getData(url, {
         timbrado: this.timbrado,
         fecha_inicio: this.fecha_inicio,
         fecha_fin: this.fecha_fin
       }, localStorage.getItem("auth-token")).then(data =>{
         let columns =[]
				if(data.length){
					Object.keys(data[0]).forEach((i)=>{
						columns.push({
							label: i,
							value: i
						})
					})
						let dat = [
						{
							sheet: 'Marangatu',
							columns: columns,
							content: data
						}
					]
					let settings = {
						fileName: '80061620_'+now
					}
					xlsx(dat, settings)
				}else{
					alert("No se encontraron datos");
				}
         
       })
    },
    salir(){
      window.location.href = "/"
    }
  }
}
const getData = async (url='', data={}, auth)=> {
  const response = await fetch(url,{
    method:"POST",
    headers:{
      "Authorization": auth,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  })
  return response.json()
}
</script>