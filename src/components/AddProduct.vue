<template>
  <transition-group
    name="animate"
    :duration="{ enter: 800, leave: 500 }"
  >
    <div
      v-for="p in cart"
      :key="p.id"
      class="
          grid grid-cols-4
          bg-primary-100
          text-primary-900
          hover:bg-primary-200/90
        "
    >
      <span class="py-4 text-center">{{p.id}}</span>
      <span class="py-4 text-center">{{p.name}}</span>
      <div class="flex flex-row items-center justify-center space-x-4">
        <button
          @click="decrementValue(p.id)"
          class="
      
              bg-primary-600
              px-2
              text-lg
              font-bold
              text-white
              rounded-full
              w-7
              h-7
              hover:bg-primary-500
            "
        >
          -
        </button>
        <span class="text-qty">{{p.qty}}</span>
        <button
          @click="incrementValue(p.id)"
          class="
              bg-primary-600
              px-2
              text-lg
              font-bold
              text-white
              rounded-full
              w-7
              h-7
              hover:bg-primary-500
            "
        >
          +
        </button>
      </div>
      <span class="text-total py-4 text-center">{{p.price * p.qty}}</span>
    </div>
  </transition-group>
</template>

<script lang="ts" setup>
import { inject, onUpdated } from "vue";
defineProps({
  cart: {
    type: Object,
    required: true,
  },
});

interface Qty {
  id: number;
  name: string;
  price: number;
  qty: number;
}

const cart = inject("products") as Array<Qty> | any;

const incrementValue = (id: number) => {
  const product = cart.value[id];
  product.qty++;
};

const decrementValue = (id: number) => {
  const product = cart.value[id];
  product.qty--;
  if (product.qty === 0) {
    delete cart.value[id];
  }
};

onUpdated(() => {
  console.log(cart.value);
  localStorage.setItem("cart", JSON.stringify(cart.value));
});
</script>

<style scoped>
.animate-enter-active,
.animate-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-enter-from,
.animate-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>