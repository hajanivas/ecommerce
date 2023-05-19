<template>
  <div>
    <HeaderMain />
    <div class="mx-auto max-w-5xl px-4">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <lingallery :width="600" :height="400" :items="carosalImages" />
        </div>

        <div class="bg-white rounded-md py-6 px-4">
          <div class="flex justify-between">
            <div class="flex">
              <svg
                aria-hidden="true"
                class="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-4 h-4 text-blue-500 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
            </div>
            <div class="text-right text-xs text-gray-400">Ref: 196125</div>
          </div>
          <h2 class="mt-4 text-xl font-bold">{{ listDetails.title }}</h2>
          <div class="mt-3 text-xl font-bold text-red-600">
            €{{ listDetails.price }}
          </div>
          <div
            class="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
          ></div>

          <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div class="p-3 bg-gray-100 rounded-lg block pl-[1.5rem] text-base">
              <input
                class="relative float-left mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]"
                type="radio"
                name="radio"
                id="radio1"
                checked
              />
              <label
                class="inline-block text-base font-bold text-gray-900 hover:cursor-pointer"
                for="radio1"
              >
                Home Delivery
              </label>
              <div class="flex flex-1 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 mr-1 text-green-500 font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                In Stock
              </div>
            </div>
            <div class="p-3 rounded-lg block pl-[1.5rem] text-base">
              <input
                class="relative float-left mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]"
                type="radio"
                name="radio"
                id="radio2"
              />
              <label
                class="inline-block text-base font-bold text-gray-900 hover:cursor-pointer"
                for="radio2"
              >
                Click & Collect
              </label>
              <div class="flex flex-1 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 mr-1 text-green-500 font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                In Stock
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="my-10 text-white bg-green-500 focus:bg-green-600 focus:outline-none font-medium rounded-full text-base w-full px-5 py-3 text-center"
          >
            Add To Basket
          </button>
          <div
            class="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
          ></div>
          <div class="flex font-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 mr-1 text-green-500 font-bold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Home Delivery available on this item
          </div>
          <div
            class="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
          ></div>
          <div class="flex font-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 mr-1 text-green-500 font-bold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Free Click & Collect within 2 hours
          </div>
        </div>
      </div>
    </div>
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from "./HeaderMain";
import FooterMain from "./FooterMain";
import Lingallery from "lingallery";

export default {
  name: "ProductDetails",
  components: {
    HeaderMain,
    FooterMain,
    Lingallery,
  },
  data() {
    return {
      detail: [],
      listDetails: null,
    };
  },
  created() {
    this.listDetails = this.$route.params;
  },
  computed: {
    carosalImages() {
      return (
        this.listDetails &&
        this.listDetails.images.map((image, index) => {
          return {
            id: index + 1,
            src: image,
            thumbnail: image,
          };
        })
      );
    },
  },
};
</script>
<style lang="scss">
.lingallery {
  > figure {
    border: 10px solid #fff;
    border-radius: 10px;
    img {
      min-width: 100%;
    }
  }
  &_thumbnails {
    margin-top: 10px;
    &_content_elem {
      margin-right: 8px;
      img {
        background-color: #fff;
        width: 80px;
        height: 80px;
        padding: 4px;
        border-radius: 10px;
        box-shadow: 0 0 8px #e6e5e5;
      }
    }
  }
}
</style>
