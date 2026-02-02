<template>
  <section class="max-w-7xl mx-auto px-4 py-16 space-y-12">

    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">
        Прайс-лист от 26.01.2025
      </h2>
      <p class="text-gray-600">Прозрачные цены на все услуги</p>
    </div>

    <!-- ===== ОСНОВНЫЕ ТАБЛИЦЫ ===== -->
    <div v-for="(table, index) in mainTables" :key="index" 
         class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      
      <!-- Контейнер для горизонтального скролла -->
      <div class="overflow-x-auto">
        <div class="min-w-[700px]">
          <table class="w-full">
            <thead class="bg-gradient-to-r from-orange-50 to-orange-100">
              <tr>
                <th class="px-6 py-4 text-left text-gray-700 font-bold text-lg border-b border-orange-200">
                  Услуга
                </th>
                <th v-for="col in columns" :key="col" 
                    class="px-6 py-4 text-center text-gray-700 font-bold text-lg border-b border-orange-200">
                  {{ col }}
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-100">
              <template v-for="(row, rIndex) in table" :key="rIndex">
                <tr v-if="row.type !== 'space'" 
                    :class="rIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50 hover:bg-orange-50/30'"
                    class="transition-colors duration-200">
                  <td class="px-6 py-4 font-medium text-gray-800 border-r border-gray-100">
                    {{ row.name }}
                  </td>
                  <td v-for="(val, i) in row.values" :key="i" 
                      class="px-6 py-4 text-center font-semibold text-gray-700 border-r border-gray-100 last:border-r-0">
                    {{ val }}
                  </td>
                </tr>

                <!-- пробел -->
                <tr v-else>
                  <td colspan="6" class="py-3 bg-gradient-to-r from-gray-50 to-gray-100/50"></td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- Футер таблицы -->
      <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-3 border-t border-gray-200">
        <div class="flex items-center">
          <div class="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
          <span class="text-sm text-gray-600">Цены указаны в рублях</span>
        </div>
      </div>
    </div>

    <!-- ===== РЕМОНТ ===== -->
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mt-12">
      <div class="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-blue-200">
        <h3 class="text-2xl font-bold text-gray-800 text-center">Ремонт</h3>
      </div>
      
      <!-- Контейнер для горизонтального скролла -->
      <div class="overflow-x-auto">
        <div class="min-w-[500px]">
          <table class="w-full">
            <thead class="bg-blue-50/50">
              <tr>
                <th class="px-6 py-4 text-left text-gray-700 font-semibold border-r border-blue-100">
                  Услуга
                </th>
                <th class="px-6 py-4 text-center text-gray-700 font-semibold border-r border-blue-100">
                  R12-R16
                </th>
                <th class="px-6 py-4 text-center text-gray-700 font-semibold">
                  R17+
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in repair" :key="i"
                  :class="i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30 hover:bg-blue-50/50'"
                  class="transition-colors duration-200">
                <td class="px-6 py-4 font-medium text-gray-800 border-r border-blue-100">
                  {{ item.name }}
                </td>
                <td class="px-6 py-4 text-center font-semibold text-blue-600 border-r border-blue-100">
                  {{ item.r12 }}
                </td>
                <td class="px-6 py-4 text-center font-semibold text-blue-600">
                  {{ item.r17 }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ===== ПРАВКА ДИСКОВ ===== -->
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mt-12">
      <div class="bg-gradient-to-r from-emerald-50 to-emerald-100 px-6 py-4 border-b border-emerald-200">
        <h3 class="text-2xl font-bold text-gray-800 text-center">Правка литого диска</h3>
      </div>
      
      <!-- Контейнер для горизонтального скролла -->
      <div class="overflow-x-auto">
        <div class="min-w-[700px]">
          <table class="w-full">
            <thead class="bg-emerald-50/50">
              <tr>
                <th class="px-6 py-4 text-left text-gray-700 font-semibold border-r border-emerald-100">
                  Тип
                </th>
                <th v-for="col in columns" :key="col" 
                    class="px-6 py-4 text-center text-gray-700 font-semibold border-r border-emerald-100 last:border-r-0">
                  {{ col }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in diskFix" :key="i"
                  :class="i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/30 hover:bg-emerald-50/50'"
                  class="transition-colors duration-200">
                <td class="px-6 py-4 font-medium text-gray-800 border-r border-emerald-100">
                  {{ item.name }}
                </td>
                <td v-for="(val, k) in item.values" :key="k" 
                    class="px-6 py-4 text-center font-semibold text-emerald-600 border-r border-emerald-100 last:border-r-0">
                  {{ val }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ===== ПРОСТЫЕ ТАБЛИЦЫ ===== -->
    <div v-for="(block, i) in simpleTables" :key="i" 
         class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mt-12">
      
      <div :class="getHeaderColor(i)" 
           class="px-6 py-4 border-b">
        <h2 class="text-2xl font-bold text-gray-800 text-center">{{ block.title }}</h2>
      </div>
      
      <!-- Контейнер для горизонтального скролла -->
      <div class="overflow-x-auto">
        <div class="min-w-[500px]">
          <table class="w-full">
            <thead :class="getSubHeaderColor(i)">
              <tr>
                <th class="px-6 py-4 text-left text-gray-700 font-semibold border-r border-gray-200">
                  Наименование
                </th>
                <th class="px-6 py-4 text-center text-gray-700 font-semibold">
                  Цена
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, j) in block.items" :key="j"
                  :class="[j % 2 === 0 ? 'bg-white' : getRowBgColor(i), 'hover:bg-opacity-80 transition-colors duration-200']">
                <td class="px-6 py-4 font-medium text-gray-800 border-r border-gray-100">
                  {{ row }}
                </td>
                <td class="px-6 py-4 text-center font-semibold text-gray-600">
                  <span v-if="block.title === 'Бесплатные услуги'" class="text-green-600">Бесплатно</span>
                  <span v-else class="text-gray-400">—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const columns = ["R12-R14", "R15-R16", "R17-18", "R19-R20", "R21+"]

const mainTables = [
  [
    { name: "Съем/установка", values: [130,155,180,220,270] },
    { name: "Шиномонтаж", values: [150,170,195,230,290] },
    { name: "Балансировка", values: [132,200,210,260,300] },
    { name: "Сборка/разборка", values: [75,85,97,115,145] },
    { type: "space" },
    { name: "Комплекс перекид л/а", values: [1648,2100,2340,2840,3440] },
    { name: "Комплекс перестановки", values: [1012,1125,1385,1510,1660] },
  ],
  [
    { name: "Съем/установка", values: [150,185,210,250,300] },
    { name: "Шиномонтаж", values: [160,200,225,260,330] },
    { name: "Балансировка", values: [180,230,240,290,320] },
    { name: "Сборка/разборка", values: ["-","-","-","-","-"] },
    { type: "space" },
    { name: "Комплекс перекид к/м", values: [1960,2460,2700,3200,3800] },
    { name: "Комплекс ремонт к/з", values: [1090,1215,1475,1600,1750] },
  ],
  [
    { name: "Съем/установка", values: [195,200,235,275,290] },
    { name: "Шиномонтаж", values: [200,210,275,300,340] },
    { name: "Балансировка", values: [225,230,295,325,340] },
    { name: "Сборка/разборка", values: [100,105,137,150,170] },
    { type: "space" },
    { name: "Комплекс перекид в/д", values: [2480,2560,3220,3600,3880] },
    { name: "Комплекс ремонт к/з", values: [1220,1240,1605,1700,1770] },
  ]
]

const repair = [
  { name: "Ремонт жгутом", r12: 400, r17: "-" },
  { name: "Ремонт кз или грибок", r12: 600, r17: 800 },
  { name: "Ремонт бокового пореза", r12: 2500, r17: 4000 },
]

const diskFix = [
  { name: "Седан", values: [1250,2000,2500,3125,4375] },
  { name: "Кроссовер", values: [1750,2250,2750,3500,5000] },
  { name: "Внедорожник", values: [2500,2500,3200,3600,5000] },
]

const simpleTables = [
  {
    title: "Услуги",
    items: [
      "Отчистка клея скотча",
      "Доплата за низкий профиль от-50",
      "Глубокая чистка бортов диска",
      "Доплата за оптимизацию шины",
      "Доплата за грязевую шину",
      "Технологическая мойка",
      "Технологическая мойка",
      "Обработка ступицы медной",
      "Обработка алюминиевой смазкой",
      "Доошиповка зимней шины",
      "Слесарные услуги",
    ]
  },
  {
    title: "Расходные материалы",
    items: [
      "Вентиль черный",
      "Вентиль хромированный",
      "Вентиль металлический",
      "Вентиль под датчик давления",
      "Пакеты",
      "Камеры",
    ]
  },
  {
    title: "Бесплатные услуги",
    items: [
      "Проверка или подкачка шин",
      "Проверка колеса на герметичность",
      "Проверка колеса на балансировку",
      "Проверка усилия затяжки болтов",
    ]
  }
]

// Функции для цветового оформления
const getHeaderColor = (index) => {
  const colors = [
    'bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200',
    'bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200',
    'bg-gradient-to-r from-green-50 to-green-100 border-green-200'
  ]
  return colors[index % colors.length]
}

const getSubHeaderColor = (index) => {
  const colors = ['bg-purple-50/50', 'bg-amber-50/50', 'bg-green-50/50']
  return colors[index % colors.length]
}

const getRowBgColor = (index) => {
  const colors = ['bg-purple-50/30', 'bg-amber-50/30', 'bg-green-50/30']
  return colors[index % colors.length]
}
</script>

<style scoped>
/* Плавные переходы для hover-эффектов */
tr {
  transition: background-color 0.2s ease-in-out;
}

/* Кастомные тени для таблиц */
.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Стили для скролла */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: #f97316 #f1f5f9;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #f97316;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #ea580c;
}
</style>
