<template>
  <div class="container">
    <h1 class="text-primary-500 font-semibold tracking-wider text-3xl text-center mt-4 py-8">
      Carrito de compras en JavaScript
    </h1>
    <!-- BOX -->
    <div class="flex flex-col md:flex-row -mx-4">
      <!-- CARDS -->
      <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full lg:w-6/12 xl:w-8/12 mx-0 md:mx-2">
        <!-- PINTAR CARDS -->
        <ProductCard
          :data="product"
          v-for="product in products"
          :key="product.id"
          @selectProduct="handleProduct"
        />
      </div>
      <!-- SIDEBAR -->
      <div class="overflow-hidden grid grid-rows-3-fix w-full lg:w-6/12 xl:w-4/12 bg-primary-600 shadow-lg rounded-md mx-0 md:mx-2 right-0 sticky top-4 mt-4 md:mt-0 h-[70vh]">
        <!-- DESCRIPCION -->
        <div>
          <div class="flex flex-row justify-between px-4 py-3">
            <h3 class="text-white font-semibold text-2xl">
              Carrito de compras
            </h3>
            <button
              @click="handleClear"
              class="flex justify-center items-center text-white w-8 h-8 p-1 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors duration-500"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                >
                </path>
              </svg>
            </button>
          </div>
          <div class="grid grid-cols-4 bg-primary-200 text-primary-900">
            <span class="py-4 text-center">#</span>
            <span class="py-4 text-center">Producto</span>
            <span class="py-4 text-center">Cantidad</span>
            <span class="py-4 text-center">Total</span>
          </div>
        </div>
        <!-- PRODUCTOS -->
        <div class="overflow-y-auto h-full">
          <AddProduct :cart="Object.values(cart)" />
        </div>
        <!-- MONTO Y CANTIDAD -->
        <ProductTotal />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, provide, ref } from "vue";
import data from "./assets/data.json";

interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
}

const products = ref<Array<Product>>(
  data.products.sort((a, b) => 0.5 - Math.random())
);

const cart = ref({}) as any;

const handleClear = () => {
  cart.value = {};
  localStorage.removeItem("cart");
};

const handleProduct = (select: number) => {
  const { id, name, price } = products.value.find(
    ({ id }) => select === id
  ) as Product;

  const product = { id, price, name, qty: 1 };

  if (cart.value.hasOwnProperty(id)) {
    product.qty = cart.value[id].qty + 1;
  }
  cart.value[id] = product;
  // console.log(Object.values(cart.value));
};

provide("products", cart);

onMounted(() => {
  if (localStorage.getItem("cart")) {
    cart.value = JSON.parse(localStorage.getItem("cart") as string);
  }
});
</script>

<!-- <componete-name></componete-name> <ComponenteName/> -->
