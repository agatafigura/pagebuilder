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
      if (document.querySelector("#header") !== null) {
     document.querySelectorAll("[menu-item]").forEach((el) => {
        el.addEventListener("click", () => {
          el.classList = "text-indigo-600 font-bold cursor-pointer";
          const parent = el.parentElement;
          const children = parent.children;

          console.log(children)

          parent.querySelectorAll("li").forEach((li) => {
            console.log(li)
            if (li !== el) {
              li.classList = "";
            }
          });
        });
      });
      } if (document.querySelector("#footer") !== null) {
         document.querySelector("[iconList]").remove();
      }
   }, 1);
   
   });
    // setting html value to item from local storage
    htmlPage.value = localStorage.getItem('previewComponents');
    console.log('html string from local storage:', htmlPage.value);
    return { htmlPage };
  },
   
};
</script>