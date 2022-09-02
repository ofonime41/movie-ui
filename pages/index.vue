<template>
  <div>
    <r-label l-text="1" />
    <div class="p-8" v-on:click="copyTemplate(1)">
      <MovieUi />
    </div>

  </div>
 
</template>

<script>
import MovieUi from '../components/MovieUi.vue';
export default {
    name: "IndexPage",
    components: { MovieUi },
    
    methods: {
    copyTemplate(varType) {
      this.$copy(varType);
    },
  },
}
</script>
