<template>
  <header class="w-full bg-zinc-900 text-white">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

      <!-- Лого -->
      <div class="text-xl font-bold tracking-wide">
        ШИНОМОНТАЖ «ШИНРИТМ»
      </div>

      <!-- Навигация (desktop) -->
      <nav class="hidden md:flex gap-6 text-sm text-zinc-200">
        <NuxtLink class="hover:text-white transition" to="/">Главная</NuxtLink>
        <NuxtLink class="hover:text-white transition" to="/promotions">Акции на ремонт</NuxtLink>
        <NuxtLink class="hover:text-white transition" to="/seasonal">Сезонная перекидка</NuxtLink>
        <NuxtLink class="hover:text-white transition" to="/services">Услуги и цены</NuxtLink>
        <NuxtLink class="hover:text-white transition" to="/contacts">Контакты</NuxtLink>
        <NuxtLink class="hover:text-white transition" to="/business">Для юр. лиц</NuxtLink>
      </nav>

      <!-- Бургер -->
      <button
        class="md:hidden text-2xl"
        @click="isOpen = !isOpen"
      >
        ☰
      </button>

    </div>

    <!-- Mobile menu -->
    <div
      v-if="isOpen"
      class="md:hidden bg-zinc-800 border-t border-zinc-700"
    >
      <nav class="flex flex-col p-4 gap-3 text-zinc-200">
        <NuxtLink class="hover:text-white transition" to="/">Главная</NuxtLink>
        <NuxtLink class="hover:text-white transition" to="/promotions">Акции</NuxtLink>
        <NuxtLink class="hover:text-white transition" to="/seasonal">Сезонная перекидка</NuxtLink>
        <NuxtLink class="hover:text-white transition" to="/services">Услуги и цены</NuxtLink>
        <NuxtLink class="hover:text-white transition" to="/contacts">Контакты</NuxtLink>
        <NuxtLink class="hover:text-white transition" to="/business">Для юр. лиц</NuxtLink>
      </nav>
    </div>

  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
