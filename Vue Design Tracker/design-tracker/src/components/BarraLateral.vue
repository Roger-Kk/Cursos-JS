<template>
    <aside class="barra-lateral">
        <header>
            <h1>
                <img src="../assets/logo_dt.png" alt="" class="logo">
            </h1>
            <button class="switch" @click="alterarTema" :class="{'switch-on': modoEscuroAtivo, 'switch-off': !modoEscuroAtivo}">
                <div class="slider" :class="{'slider-on': modoEscuroAtivo, 'slider-off': !modoEscuroAtivo}"></div>
            </button>
        </header>

    </aside>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'BarraLateral',
        emits: ['aoTemaAlterado'],
        /*data() {
            return{
                modoEscuroAtivo: false
            }
        },*/
        props: {
            modoEscuroAtivo:{
                type: Boolean,
                required: true
            }
        },
        methods: {
            alterarTema(){
                //this.modoEscuroAtivo = !this.modoEscuroAtivo
                this.$emit('aoTemaAlterado', !this.modoEscuroAtivo)
            }
        }
    })
</script>

<style scoped>

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

header .logo {
    width: 500px; /* Tamanho fixo para a logo */
    height: auto;
    margin-bottom: 0.3rem;
}

.switch {
  width: 42px;
  height: 21px;
  background-color: #ccc;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
}

.switch-on {
    background-color: #2b2d42 !important;
}

.switch-off {
    background-color: #ccc !important;
}

.slider {
  width: 17px;
  height: 17px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 1.7px;
  left: 1.5px;
  transition: transform 0.3s;
}

.slider-on  {
  transform: translateX(21px); 
}

.slider-off  {
  transform: translateX(0);
}

@media only screen and (max-width: 1024px) {
    .barra-lateral {
    width: 150px; /* Barra lateral ainda mais estreita */
  }
  
}

</style>