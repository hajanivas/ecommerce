<template>
  <footer class="bg-blue-500 shadow dark:bg-gray-900 mt-5">
    <div class="mx-auto max-w-5xl p-4 md:py-4">
      <div class="sm:flex sm:items-center sm:justify-between">
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0"
        >
          <li>
            <a
              href="javascript:void(0);"
              @click="$router.push({ path: '/list' })"
              class="mr-4 hover:underline md:mr-6"
              >Products</a
            >
          </li>
          <li>
            <a href="javascript:void(0);" class="mr-4 hover:underline md:mr-6"
              >Privacy Policy</a
            >
          </li>
          <li>
            <a href="javascript:void(0);" class="mr-4 hover:underline md:mr-6"
              >Licensing</a
            >
          </li>
        </ul>
      </div>
      <hr class="my-4 border-gray-200 sm:mx-auto lg:my-5" />
      <span class="block text-sm text-white"
        >© 2023 Smyths All Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterMain",
  components: {},
};
</script>
