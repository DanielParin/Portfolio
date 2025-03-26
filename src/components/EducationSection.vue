<template>
    <section class="text-white mt-8 mb-8 flex justify-center items-center h-auto w-full" id="about">

        <div class="w-full max-w-3xl mx-auto flex flex-col items-center text-center py-8 px-6">

            <!-- Sección de Educación -->
            <div class="w-full" data-aos="flip-right">

                <h2 class="text-4xl font-bold text-white text-center mb-6 w-full">My Education</h2>

                <div class="space-y-6 w-full">
                    <div v-for="element in education" :key="element.id" class="flex items-center w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-4">

                        <div class="w-1/4 flex justify-center">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="img404">
                        </div>

                        <div class="w-3/4 pl-4 text-left">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.school }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue';
const education=ref([
    {
        id:1,
        school:'IES Luis Vives',
        program:'Cross-platform Software Development',
        year:'2022-2024'
    },
])
</script>