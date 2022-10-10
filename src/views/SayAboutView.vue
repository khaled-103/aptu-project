<template>
  <Header/>
  <intro/>
  <Comments/>
  <Videos/>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import intro from '@/components/SayAbout/intro.vue'
import Comments from '@/components/SayAbout/Comments.vue'
import Videos from '@/components/SayAbout/Videos.vue'


export default {
    components:{
        Header,
        Footer,
        intro,
        Comments,
        Videos
    }

}
</script>

<style scoped>

</style>