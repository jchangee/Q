<template>
  <div class="page-navbar">
    <mt-navbar class="page-part" v-model="selected">
      <slot name="mt-tab-item"></slot>
    </mt-navbar>

    <mt-tab-container v-model="selected">
        <slot name="mt-tab-container-item"></slot>
    </mt-tab-container>
  </div>
</template>

<script>
	
export default {
  name: 'page-navbar',

  data() {
    return {
      selected: '1'
    };
  }
};
</script>
