<template>
  <div v-html="htmlPage">
  </div>
</template>


<script>
import { ref, watch } from 'vue';
export default {
  name: 'WebsitePreview',
  setup() {
    // html to begin widt is empty string
    const htmlPage = ref('');
   watch(htmlPage, () => {
     setTimeout(() => {
     document.querySelector("[iconList]").remove();
   }, 1)
   });
    // setting html value to item from local storage
    htmlPage.value = localStorage.getItem('previewComponents');
    console.log('html string from local storage:', htmlPage.value);
    return { htmlPage };
  },
   
};
</script>