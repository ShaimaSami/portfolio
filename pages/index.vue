<template>
    <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
    </main>
</template>




<script>
import About from '../components/sections/about.vue';
import Hero from '../components/sections/hero.vue';
import Skills from '../components/sections/skills.vue';
import Projects from '../components/sections/projects.vue';
export default {
    name: `IndexPage`,
    components: { About, Hero, Skills, Projects }
}
</script>