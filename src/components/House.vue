<template>
  <div class="mt-3 selectable">
    <router-link :to="{ name: 'HouseDetails', params: { id: house.id } }">
      <div class="bg-light elevation-1 rounded">
        <img
          class="house-img rounded-top w-100"
          :src="house.imgUrl"
          alt="house image"
        />
        <div class="p-1 text-center">
          <p class="m-0">
            <b
              >{{ house.bedrooms }} bedrooms -
              {{ house.bathrooms }} bathrooms</b
            >
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    house: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>
<style lang="">
</style>