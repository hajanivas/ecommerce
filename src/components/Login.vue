<template>
  <div class="flex sm:py-10">
    <div class="mx-auto max-w-lg">
      <div class="text-center mt-7 sm:text-left sm:mt-0">
        <img
          src="@/assets/images/smyths-logo.png"
          alt="Smyths Logo"
          class="mx-auto w-40 sm:mx-0 sm:w-52"
        />
        <h1 class="mt-5 mb-4 text-2xl font-bold">Log Into Your Account</h1>
      </div>

      <div class="bg-white sm:rounded-xl sm:shadow-lg px-5 py-6 sm:px-8">
        <div class="flex flex-col mb-5">
          <p class="mt-3 text-sm text-gray-700 sm:text-base">
            Note, if you enter your password incorrectly five times, your
            account will be disabled. Please reset your password or contact us
            if you cannot log into your account.
          </p>
        </div>

        <form>
          <div class="space-y-6 mb-3">
            <div>
              <label
                for="email"
                class="block mb-2 text-md font-bold text-gray-900"
                >Email Address<span class="text-red-500">*</span></label
              >
              <input
                type="email"
                id="email"
                class="border border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 focus:outline-none w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-md font-bold text-gray-900"
                >Password<span class="text-red-500">*</span></label
              >
              <input
                type="password"
                id="password"
                class="border border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 focus:outline-none w-full p-2.5"
                required
              />
            </div>
          </div>

          <a
            href="javascript:void(0);"
            class="text-blue-600 underline text-base transition duration-150 ease-in-out hover:text-blue-500"
            >Forgot password?</a
          >

          <div class="mt-3 mb-5 block pl-[1.5rem] text-base">
            <input
              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]"
              type="checkbox"
              value=""
              id="staySign"
              checked
            />
            <label
              class="inline-block text-gray-600 pl-[0.15rem] hover:cursor-pointer"
              for="staySign"
            >
              Stay signed in for quicker access next time you visit our website.
            </label>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base w-full px-5 py-3 text-center"
            @click="$router.push({ path: '/list' })"
          >
            Log In
          </button>
        </form>

        <div
          class="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
        ></div>

        <div class="text-center">
          <p class="text-left text-gray-600 mb-3">
            Login using social media account:
          </p>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="mx-auto h-12 w-12 rounded-full bg-primary uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  props: {
    msg: String,
  },
};
</script>
