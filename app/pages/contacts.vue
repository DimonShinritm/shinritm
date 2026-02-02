<template>
  <section class="py-16 px-4 flex items-center justify-center">
    <div class="max-w-2xl w-full">
      <!-- Карточка контактов -->
      <div class="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-10">
        
        <!-- Заголовок с иконкой -->
        <div class="text-center mb-10">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
            <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-gray-800">Контакты</h1>
          <p class="text-gray-600 mt-2">Мы всегда на связи</p>
        </div>

        <!-- Контактная информация в сетке -->
        <div class="grid md:grid-cols-2 gap-8">
          
          <!-- Левый столбец -->
          <div class="space-y-8">
            <!-- Адрес -->
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Адрес</h3>
              </div>
              <p class="text-gray-700 pl-13">г. Пермь, ул. Ракитная, 38</p>
            </div>

            <!-- Режим работы -->
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Режим работы</h3>
              </div>
              <p class="text-gray-700 pl-13">Ежедневно с 9:00 до 23:00</p>
            </div>
          </div>

          <!-- Правый столбец -->
          <div class="space-y-8">
            <!-- Директор -->
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Директор</h3>
              </div>
              <a href="tel:+79897043697" 
                 class="text-gray-800 hover:text-orange-600 font-medium pl-13 transition-colors duration-200 inline-block">
                7 (989) 704-36-97
              </a>
            </div>

            <!-- Администратор -->
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Администратор</h3>
              </div>
              <a href="tel:+79067851591" 
                 class="text-gray-800 hover:text-orange-600 font-medium pl-13 transition-colors duration-200 inline-block">
                7 (906) 785-15-91
              </a>
            </div>
          </div>
        </div>

        <!-- Кнопка карты -->
        <div class="mt-12 text-center pt-8 border-t border-gray-100">
          <a
            href="https://yandex.ru/maps/org/shinritm/219713865014/?ll=56.401012%2C58.089601&z=17"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200 shadow-sm hover:shadow"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Посмотреть на карте
          </a>
          <p class="text-gray-500 text-sm mt-3">Наш сервисный центр на Яндекс.Картах</p>
        </div>
      </div>
    </div>
  </section>
</template>
