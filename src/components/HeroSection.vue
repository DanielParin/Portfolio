<template>
    <section class="relative w-full" data-aos="zoom-in-up">

        <div class="absolute top-0 inset-x-0 h-64 flex items-start">

            <div class="h-24 w-2/3 bg-gradient-to-br from-[#570CAC] blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-[#670CCF] blur-2xl opacity-40"></div>

        </div>

        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">

            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                
                <div class="lg:py-6">

                    <div class="text-center lg:text-left">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Daniel </span>👾
                        </h1>
                    </div>

                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl text-2xl">
                    Software developer, specialized in<br/>backend development with <b>Java</b> and <b>Go</b>.
                    </p>

                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">

                        <button class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center:">

                            <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">

                                <div class="svg-container">

                                    <svg class="download-icon" width="18" height="18" viewBox="0 0 18 22" fill="none" xmlns="https://www.w3.org/2000/svg">

                                        <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                                        <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                                                stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>

                                    </svg>
                                    <div class="download-loader text-white hidden"></div>
                                </div>
                                <a href="/src/assets/CV_DanielPaz.pdf" download="CV_DanielPaz.pdf" class="pl-2 text-primary">Download CV</a>
                            </div>
                        </button>
                    </div>
                </div>

                <div class="lg:h-full md:flex">

                    <div class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">

                        <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570CAC] to-primary blur-2xl"></div>

                        <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-primary">

                            <img src="@/assets/Dani.png" alt="My Photo" width="500" height="auto" loading="lazy"
                            class="w-full h-full rounded-full object-cover">

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
    import AOS from 'aos';
    import 'aos/dist/aos';
    AOS.init();
</script>
