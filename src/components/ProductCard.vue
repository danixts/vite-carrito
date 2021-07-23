<template>
  <div class="bg-primary-600 rounded-lg group">
    <img
      :src="`img/${data.url}`"
      loading="lazy"
      class="
            w-full
            mx-auto
            transform
            transition-transform
            duration-300
            group-hover:scale-110
          "
    />
    <div class="p-5 bg-primary-200 rounded-b-md">
      <div class="flex flex-row justify-between items-center">
        <span class="text-3xl text-primary-700 font-bold uppercase">{{data.name}}</span>
        <div class="
                bg-gradient-to-br
                rounded-md
                from-primary-500
                to-primary-800
              ">
          <div class="
                  text-2xl
                  py-2
                  px-2
                  text-white
                  font-bold
                  shadow-lg
                  transition-colors
                  group-hover:text-primary-200
                ">
            <strong>{{data.price}}</strong><b class="text-sm ml-2 font-semibold group-hover:text-white">BOB</b>
          </div>
        </div>
      </div>
      <button
        @click="$emit('selectProduct',data.id)"
        class="
              bg-primary-700
              w-full
              mt-4
              py-3
              shadow-lg
              rounded-md
              text-white
              font-bold
              text-xl
              transition-all
              duration-500
              hover:bg-primary-800 hover:-translate-y-1
            "
      >
        Comprar
      </button>
    </div>
  </div>

</template>

<script lang="ts" setup>
emits: ["selectProduct"];

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>