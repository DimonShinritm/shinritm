<template>
  <footer class="bg-zinc-950 text-zinc-300 mt-16">
    <div class="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
      <!-- Бренд -->
      <div>
        <div class="text-lg font-bold text-white">ШИНОМОНТАЖ «ШИНРИТМ»</div>
        <p class="mt-2 text-sm text-zinc-400">
          Шиномонтаж, ремонт и обслуживание колёс.
        </p>
      </div>

      <!-- Навигация -->
      <nav class="text-sm space-y-2">
        <NuxtLink class="block hover:text-white transition" to="/"
          >Главная</NuxtLink
        >
        <NuxtLink class="block hover:text-white transition" to="/promotions"
          >Акции</NuxtLink
        >
        <NuxtLink class="block hover:text-white transition" to="/seasonal"
          >Сезонная перекидка</NuxtLink
        >
        <NuxtLink class="block hover:text-white transition" to="/services"
          >Услуги и цены</NuxtLink
        >
        <NuxtLink class="block hover:text-white transition" to="/contacts"
          >Контакты</NuxtLink
        >
        <NuxtLink class="block hover:text-white transition" to="/business"
          >Для юр. лиц</NuxtLink
        >
      </nav>

      <!-- Контакты -->
      <div class="text-sm space-y-2">
        <p>Пермь, ул. Ракитная, 38</p>
        <p>Ежедневно с 9:00 до 23:00</p>
        <p>Директор: 7 989 704 36 97</p>
        <p>Управляющий админ: 7 906 785 15 91</p>
        <p>ИП Полоса Д.Г. / ИНН</p>
      </div>
    </div>

    <!-- Нижняя строка -->
    <div
      class="border-t border-zinc-800 text-center text-xs text-zinc-500 py-4"
    >
      © {{ new Date().getFullYear() }} ШИНРИТМ.
      <NuxtLink to="/privacy" class="underline hover:text-white ml-1">
        Политика конфиденциальности
      </NuxtLink>
    </div>
  </footer>
</template>
