<template>
    <aside class="barra-lateral">
        <header>
            <h1>
                <img src="../assets/logo_dt.png" alt="" class="logo">
            </h1>
            <button class="button" @click="alterarTema">
                {{textoBotao}}
            </button>
        </header>

    </aside>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'BarraLateral',
        emits: ['aoTemaAlterado'],
        data() {
            return{
                modoEscuroAtivo: false
            }
        },
        computed:{
            textoBotao(){
                if(this.modoEscuroAtivo){
                    return 'Modo Claro'
                }
                return 'Modo Escuro'
            }
        },
        methods: {
            alterarTema(){
                this.modoEscuroAtivo = !this.modoEscuroAtivo
                this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
            }
        }
    })
</script>

<style scoped>
/* Todo estilo do componente*/
.barra-lateral {
  position: fixed; /* Fixar a barra lateral */
  top: 0;
  left: 0;
  height: 100vh; /* Ocupa toda a altura da tela */
  width: 150px; /* Largura inicial reduzida para metade */
  background-color: #0d3b66;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
} 

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

@media only screen and (max-width: 1024px) {
    .barra-lateral {
    width: 150px; /* Barra lateral ainda mais estreita */
  }
  
}

</style>