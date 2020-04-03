<template>
  <form>
    <v-text-field
      placeholder="Add Restaurant"
      filled
      type="text"
      data-testid="new-restaurant-name-field"
    />
    <v-btn color="primary" class="black--text">
      Add
    </v-btn>
  </form>
</template>

<script>
export default {
  name: 'NewRestaurantForm',
};
</script>
