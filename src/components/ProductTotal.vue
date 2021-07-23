<template>
  <div class="
              bg-primary-700
              text-white
              flex flex-row
              justify-between
              px-6
              items-center
              rounded-b-md">
    <svg
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    <div class="uppercase">Cant: <b>{{qtyTotal}}</b></div>
    <div class="uppercase">Total: <b>{{total}}</b></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";

interface Product {
  qty: number;
  price: number;
}

const cart = inject("products") as any;
const qtyTotal = computed(() =>
  Object.values(cart.value as Product).reduce((acc, { qty }) => acc + qty, 0)
);

const total = computed(() =>
  Object.values(cart.value as Product).reduce(
    (acc, { qty, price }) => acc + qty * price,
    0
  )
);
</script>
