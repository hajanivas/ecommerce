<template>
  <div>
    <header class="bg-blue-400 mb-6 p-4">
      <nav class="mx-auto max-w-5xl px-4 border-gray-200">
        <div
          class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
        >
          <a
            href="javascript:void(0);"
            @click="$router.push({ path: '/list' })"
            class="flex items-center"
          >
            <img
              src="@/assets/images/smyths-logo.png"
              class="mr-3 h-8 sm:h-12"
              alt="Smyths Logo"
            />
          </a>
          <div class="flex items-center lg:order-2">
            <a
              href="javascript:void(0);"
              @click="$router.push({ path: '/' })"
              class="text-white hover:bg-blue-500 transition rounded-lg font-bold text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >Log Out</a
            >
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:text-primary-700 lg:p-0"
                  aria-current="page"
                  >Toys</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white border-gray-100 hover:text-yellow-300 lg:hover:text-primary-700 lg:p-0"
                  >Baby Room</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white border-gray-100 hover:text-yellow-300 lg:hover:text-primary-700 lg:p-0"
                  >Outdoor</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white border-gray-100 hover:text-yellow-300 lg:hover:text-primary-700 lg:p-0"
                  >Gaming</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="mx-auto max-w-5xl px-4 mb-4">
      <nav class="w-full rounded-md">
        <ol class="list-reset flex">
          <li>
            <a
              href="javascript:void(0);"
              @click="$router.push({ path: '/list' })"
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >Home</a
            >
          </li>
          <li>
            <span class="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
          </li>
          <li class="text-neutral-500 dark:text-neutral-400">Products</li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMain",
  components: {},
};
</script>
