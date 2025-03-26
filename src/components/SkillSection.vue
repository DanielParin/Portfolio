<template>
    <section class="text-white mt-8 mb-8 flex justify-center items-center w-full relative overflow-hidden" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full flex justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>

        <!-- Contenedor principal centrado -->
        <div class="w-full max-w-4xl mx-auto px-6 py-8">
            <!-- Sección de Skills -->
            <div class="text-center flex flex-col w-full z-10">
                <h2 class="text-4xl font-bold text-white mb-6">
                    My 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
                </h2>

                <!-- Contenedor de íconos centrado -->
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-2 gap-y-6 mt-8 justify-center" data-aos="fade-right">
                    <img 
                        v-for="skill in Skills" 
                        :key="skill.id" 
                        :src="skill.icon" 
                        :alt="skill.name" 
                        class="w-14 h-14 md:w-16 md:h-16 object-contain mx-auto"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

  
  <script setup>
  import { ref } from 'vue';

  const Skills = ref([
  { id: 1, name: 'Java', icon: 'icons/java.svg' },
  { id: 2, name: 'Go', icon: 'icons/go.svg' },
  { id: 3, name: 'Python', icon: 'icons/python.svg' },
  { id: 4, name: 'C', icon: 'icons/c.svg' },
  { id: 5, name: 'Git', icon: 'icons/git.svg' },
  { id: 6, name: 'Html', icon: 'icons/html.svg' },
  { id: 7, name: 'Css', icon: 'icons/css.svg' },
  { id: 8, name: 'Javascript', icon: 'icons/javascript.svg' },
  { id: 9, name: 'Spring', icon: 'icons/spring.svg' },
  { id: 10, name: 'Hibernate', icon: 'icons/hibernate.svg' },
  { id: 11, name: 'Vue', icon: 'icons/vue.svg' },
  { id: 12, name: 'Angular', icon: 'icons/angular.svg' },
  { id: 13, name: 'Sql', icon: 'icons/sql.svg' },
  { id: 14, name: 'Mongo', icon: 'icons/mongo.svg' },
  
]);
</script>