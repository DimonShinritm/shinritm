<script setup>
import {
  Cog6ToothIcon,
  MapPinIcon,
  CreditCardIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <main>
    <!-- Контейнер с фоновой картинкой для первых двух секций -->
    <div
      class="relative bg-cover bg-center"
      style="background-image: url(&quot;/images/bg-main.jpg&quot;)"
    >
      <!-- Более темный оверлей для контраста -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"
      ></div>

      <div class="relative z-10">
        <!-- Заголовок -->
        <section class="max-w-7xl mx-auto px-4 py-16 text-center">
          <div
            class="inline-block bg-black/20 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/10 shadow-2xl"
          >
            <h1 class="text-4xl font-bold mb-4 text-white">
              Шиномонтаж «ШИНРИТМ»
            </h1>
            <p class="text-gray-100 text-xl">
              Профессиональное шиномонтажное обслуживание
            </p>
          </div>
        </section>

        <!-- Иконки преимуществ -->
        <section class="max-w-7xl mx-auto px-4 py-16">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 text-center">
            <div class="space-y-4">
              <div
                class="mx-auto w-20 h-20 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-lg"
              >
                <Cog6ToothIcon class="w-10 h-10 text-orange-300" />
              </div>
              <p
                class="font-medium text-white bg-black/20 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/10"
              >
                Профессиональное оборудование
              </p>
            </div>

            <div class="space-y-4">
              <div
                class="mx-auto w-20 h-20 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-lg"
              >
                <MapPinIcon class="w-10 h-10 text-orange-300" />
              </div>
              <p
                class="font-medium text-white bg-black/20 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/10"
              >
                Удобное расположение
              </p>
            </div>

            <div class="space-y-4">
              <div
                class="mx-auto w-20 h-20 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-lg"
              >
                <CreditCardIcon class="w-10 h-10 text-orange-300" />
              </div>
              <p
                class="font-medium text-white bg-black/20 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/10"
              >
                Доступные цены
              </p>
            </div>

            <div class="space-y-4">
              <div
                class="mx-auto w-20 h-20 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-lg"
              >
                <ClockIcon class="w-10 h-10 text-orange-300" />
              </div>
              <p
                class="font-medium text-white bg-black/20 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/10"
              >
                Высокая скорость обслуживания
              </p>
            </div>

            <div class="space-y-4">
              <div
                class="mx-auto w-20 h-20 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-lg"
              >
                <UserIcon class="w-10 h-10 text-orange-300" />
              </div>
              <p
                class="font-medium text-white bg-black/20 backdrop-blur-sm py-2 px-4 rounded-lg border border-white/10"
              >
                Опытные специалисты
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Остальной ваш код БЕЗ ИЗМЕНЕНИЙ -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">
        Почему выбирают нас
      </h2>

      <div
        class="grid gap-12 sm:grid-cols-2 lg:grid-cols-2 justify-items-center"
      >
        <!-- Качество -->
        <div class="max-w-xs text-center sm:text-left">
          <div
            class="flex items-center mb-3 space-x-3 justify-center sm:justify-start"
          >
            <!-- Галочка в кружочке -->
            <svg
              class="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke-width="2" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2l4-4"
              />
            </svg>
            <h3 class="text-2xl font-semibold">Качество</h3>
          </div>
          <ul class="list-disc list-inside space-y-1 text-gray-700 text-lg">
            <li>Соблюдение технологий при выполнении работ</li>
            <li>Стаж работы сотрудников от 3х лет</li>
            <li>Измерения биения диска на современном оборудовании</li>
            <li>Современное технологичное оборудование</li>
            <li>Даем гарантии на все виды работ</li>
          </ul>
        </div>

        <!-- Бесплатно -->
        <div class="max-w-xs text-center sm:text-left">
          <div
            class="flex items-center mb-3 space-x-3 justify-center sm:justify-start"
          >
            <!-- Значок рубля -->
            <span class="text-orange-500 font-bold text-2xl">₽</span>
            <h3 class="text-2xl font-semibold">Бесплатно</h3>
          </div>
          <ul class="list-disc list-inside space-y-1 text-gray-700 text-lg">
            <li>Полная диагностика колеса на геометрию</li>
            <li>Проверка на герметичность и износ шин</li>
            <li>Проверка давления в шинах</li>
            <li>Проверка балансировки колес</li>
          </ul>
        </div>

        <!-- Безопасность -->
        <div class="max-w-xs text-center sm:text-left">
          <div
            class="flex items-center mb-3 space-x-3 justify-center sm:justify-start"
          >
            <!-- Щит с галочкой -->
            <svg
              class="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              />
              <path
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2l4-4"
              />
            </svg>
            <h3 class="text-2xl font-semibold">Безопасность</h3>
          </div>
          <ul class="list-disc list-inside space-y-1 text-gray-700 text-lg">
            <li>Ремонт в присутствии клиента</li>
            <li>Контроль затяжки динамометрическим ключом</li>
            <li>Все работы производятся в масках</li>
            <li>Оплата бесконтактным методом</li>
          </ul>
        </div>

        <!-- Комфортная зона ожидания -->
        <div class="max-w-xs text-center sm:text-left">
          <div
            class="flex items-center mb-3 space-x-3 justify-center sm:justify-start"
          >
            <!-- Часы -->
            <svg
              class="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke-width="2" />
              <path
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6l4 2"
              />
            </svg>
            <h3 class="text-2xl font-semibold">Комфортная зона ожидания</h3>
          </div>
          <ul class="list-disc list-inside space-y-1 text-gray-700 text-lg">
            <li>Автомойка</li>
            <li>Просторная парковка</li>
            <li>АЗС</li>
            <li>Кафе</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Оборудование -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-10">
        Наше оборудование
      </h2>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Карточка 1 -->
        <div class="text-center">
          <div
            class="w-full h-64 rounded-xl overflow-hidden bg-gray-50 border border-gray-200 shadow-md flex items-center justify-center"
          >
            <img
              src="/images/equipment/machine1.jpg"
              alt="Шиномонтажный станок ATIS TCA26"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-3 font-medium text-lg">
            Шиномонтажный станок ATIS TCA26
          </p>
        </div>

        <!-- Карточка 2 -->
        <div class="text-center">
          <div
            class="w-full h-64 rounded-xl overflow-hidden bg-gray-50 border border-gray-200 shadow-md flex items-center justify-center"
          >
            <img
              src="/images/equipment/machine2.jpg"
              alt="Балансировочный станок GELIOS УЗ + ТЛУ"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-3 font-medium text-lg">
            Балансировочный станок GELIOS УЗ + ТЛУ
          </p>
        </div>

        <!-- Карточка 3 -->
        <div class="text-center">
          <div
            class="w-full h-64 rounded-xl overflow-hidden bg-gray-50 border border-gray-200 shadow-md flex items-center justify-center"
          >
            <img
              src="/images/equipment/machine3.jpg"
              alt="Стенд для правки литых дисков Фаворит 380В СИБЕК"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-3 font-medium text-lg">
            Стенд для правки литых дисков Фаворит 380В СИБЕК
          </p>
        </div>

        <!-- Карточка 4 -->
        <div class="text-center">
          <div
            class="w-full h-64 rounded-xl overflow-hidden bg-gray-50 border border-gray-200 shadow-md flex items-center justify-center"
          >
            <img
              src="/images/equipment/machine4.jpg"
              alt="Автоматическая мойка колес Торнадо AWD Base"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-3 font-medium text-lg">
            Автоматическая мойка колес Торнадо AWD Base
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
