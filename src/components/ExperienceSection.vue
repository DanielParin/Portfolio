<template>
  <section class="text-white mt-18 relative overflow-hidden w-full flex justify-center" id="skills">
    <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
        <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
      </span>
    </div>

    <!-- Contenedor principal centrado -->
    <div class="w-full max-w-3xl mx-auto flex flex-col items-center text-center py-8 px-6">
      
      <!-- Sección de Experiencia -->
      <div class="w-full" data-aos="flip-left">
        <h2 class="text-4xl font-bold text-white text-center mb-8 w-full">
          My Experience
        </h2>

        <div class="space-y-8 py-8 w-full" data-aos="fade-left">
          <div v-for="element in Experinces" :key="element.id"
            class="flex items-center w-full rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]">
            <div class="w-1/4 flex justify-center">
              <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer">
            </div>
            <div class="w-3/4 pl-4 text-left">
              <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {{ element.role }}
              </h3>
              <p class="text-white">{{ element.company }}</p>
              <p class="text-white">{{ element.date }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

  
  <script setup>
  import { ref } from 'vue';
  
  const Experinces = ref([
    {
      id: 1,
      role: 'FullStack Developer',
      company: 'NEORIS',
      date: 'Sep 2024 - Currently'
    }
  ]);
  </script>
  