<template>
    <Header/>
    <intro />
    <featurs/>
    <moreFeaturs/>
    <appropriateSection/>
    <h4 style="color:#555;" class="text-center mt-5">تعرف أيضاً على البرامج الأخرى في آبتوس</h4>
    <prog/>
    <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import prog from '@/components/prog.vue'
import intro from '@/components/ProgramsDetails/Accounting/intro.vue'
import featurs from '@/components/ProgramsDetails/Accounting/featurs.vue'
import moreFeaturs from '@/components/ProgramsDetails/Accounting/moreFeaturs.vue'
import appropriateSection from '@/components/ProgramsDetails/Accounting/appropriateSection.vue'




export default {
    components:{
        Header,
        Footer,
        intro,
        featurs,
        moreFeaturs,
        appropriateSection,
        prog
    }
}
</script>

<style scoped>

</style>