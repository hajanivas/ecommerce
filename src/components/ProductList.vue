<template>
  <div>
    <HeaderMain />
    <div class="mx-auto max-w-5xl px-4">
      <div class="flex flex-row flex-wrap">
        <aside class="w-full md:w-1/4">
          <div class="bg-white flex flex-col mb-5">
            <button class="group focus:outline-none">
              <div
                class="flex items-center justify-between h-12 px-3 font-bold"
              >
                <span class="truncate">Category</span>
                <svg
                  class="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40"
              >
                <a
                  class="flex items-center py-1 px-4 text-sm text-blue-500 underline"
                  href="javascript:void(0);"
                  >Slides</a
                >
                <a
                  class="flex items-center py-1 px-4 text-sm text-blue-500 underline"
                  href="javascript:void(0);"
                  >Swings</a
                >
                <a
                  class="flex items-center py-1 px-4 text-sm text-blue-500 underline"
                  href="javascript:void(0);"
                  >Swings Accessories</a
                >
              </div>
            </button>
            <button class="group focus:outline-none">
              <div
                class="flex items-center justify-between h-12 px-3 font-bold"
              >
                <span class="truncate">Brand</span>
                <svg
                  class="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40"
              >
                <a
                  class="flex items-center h-8 px-4 text-sm"
                  href="javascript:void(0);"
                  >Smoby Toys</a
                >
                <a
                  class="flex items-center h-8 px-4 text-sm"
                  href="javascript:void(0);"
                  >TP (1)</a
                >
              </div>
            </button>
          </div>
        </aside>

        <section class="w-full sm:w-3/3 md:w-3/4 px-4">
          <div>
            <div class="flex flex-wrap justify-between">
              <h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900">
                Swings & Slides
              </h2>
            </div>

            <div
              class="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            >
              <ProductTile
                v-for="(item, entryIndex) in list"
                :key="entryIndex"
                :item="item"
                @on-tile-click="routeToPage(item)"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    <FooterMain />
  </div>
</template>

<script>
import axios from "axios";
import HeaderMain from "./HeaderMain";
import FooterMain from "./FooterMain";
import ProductTile from "./ProductTile";

export default {
  name: "ProductList",
  components: {
    HeaderMain,
    FooterMain,
    ProductTile,
  },
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    this.getData();
  },
  methods: {
    routeToPage(item) {
      try {
        this.$router.push({ name: "ProductDetails", params: item });
      } catch (error) {
        console.log(error);
      }
    },
    async getData() {
      this.list = await axios
        .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
        .then((res) => {
          if (res.status === 200) return res.data || [];
          return [];
        });
      console.log(this.list);
    },
  },
};
</script>
