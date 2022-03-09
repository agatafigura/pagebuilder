<template>
  <div class="wrapper">
    <div class="lists flex gap-x-5 my-5">
      <div class="list1 w-1/5 flex flex-col pl-5 items-start">
        <div class="flex pb-5 gap-x-2">
          <h2 class="font-bold text-xl">Elements</h2>
        </div>
        <draggable
          :group="{ name: 'test', pull: 'clone', put: false }"
          :list="list1"
          :sort="false"
          item-key="id"
          @change="log"
          :clone="cloneElement"
          class="flex flex-col gap-y-3 items-start"
        >
          <template #item="{ element }">
            <div class="elements flex flex-col cursor-pointer">
              {{ element.description }}
            </div>
          </template>
        </draggable>
      </div>

      <div class="vl w-0.5 min-h-75vh h-100 bg-gray-400"></div>

      <div class="list2 w-4/5 flex flex-col justify-start items-start">
      <div class="flex justify-end w-full">
        <button 
          @click="previewCurrentDesign"
          class="items-center bg-indigo-500 py-2 pl-3 pr-4 mr-5 mb-5 rounded-md shadow-sm text-white hover:bg-indigo-600">
          Preview
        </button>
      </div>
        <draggable
          :list="list2"
          class="w-full h-full flex flex-col gap-y-10"
          handle=".handle"
          group="test"
          item-key="id"
          @change="log"
          id="drag"
        >
          <template #item="{ element }">
            <div>
              <div class="flex justify-between pr-4">
                <CIcon
                  :icon="cilX"
                  @click="removeItem(element.id)"
                  class="w-6 cursor-pointer text-gray-500 hover:text-gray-700"
                />

                <CIcon
                  v-if="list2.length > 1"
                  :icon="cilElevator"
                  class="w-6 handle cursor-pointer text-gray-500 hover:text-gray-700"
                />
              </div>
              <section v-html="element.components"></section>
            </div>
          </template>
        </draggable>
        
        <div
          v-if="list2.length < 1"
          class="absolute rounded-md top-1/2 left-1/2 text-xl border-2 font-bold border-gray-400 border-dashed p-3"
        >
          Drop your elements here
        </div>
      </div>
    </div>
    <Slider :element="element" :editIcon="editIcon" :icons="icons" :iconList="iconList" :open="open" @close-slider="open = false, iconList = false, editIcon = false" />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { onMounted, ref } from "vue";
import { CIcon } from "@coreui/icons-vue";
import { useRouter } from 'vue-router';
import {
  cilElevator,
  cilChevronBottom,
  cilChevronTop,
  cilX,
} from "@coreui/icons";
import Slider from "../components/Slider.vue";

export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable,
    CIcon,
    Slider,
  },

  setup() {
    const list1 = ref([]);
    const list2 = ref([]);
    const open = ref(false);
    const iconList = ref(false);
    const editIcon = ref(false);
    const element = ref("");
    const icons = ref("");
    const router = useRouter();
    const savedPageVersionsLocalStorage = ref(['localStorageSavedHTML1', 'localStorageSavedHTML2', 'localStorageSavedHTML3', 'localStorageSavedHTML4', 'localStorageSavedHTML5']);

    const removeItem = function (id) {
      const newList = list2.value.filter((element) => {
        if (element.id !== id) {
          return element;
        }
        console.log(element.id);
      });
      list2.value = newList;
    };

    const previewCurrentDesign = function () {
      // html array
      
      const allAddedHtmlComponents = ref([]);
      document.querySelectorAll('[render-html]')
        .forEach(html => {
          allAddedHtmlComponents.value.push(html.outerHTML);
        });
      //
      localStorage.setItem('previewComponents', allAddedHtmlComponents.value);
      //
      //
      //
      // push to website preview
      const routeData = router.resolve({ name: 'WebsitePreview' });
      window.open(routeData.href, '_blank');
      // end function
    };

    const saveCurrentDesign = function () {
      // html array
      const allAddedHtmlComponents = ref([]);
      // start saving each page
      // allow to save up to 5 time/version
      for (let i = 0; i < savedPageVersionsLocalStorage.value.length; i++) {
        // logic: if no local storage item is taken: (ex: not set for: localStorageSavedHTML1)
        if (!localStorage.getItem(savedPageVersionsLocalStorage.value[i])) {
          document.querySelectorAll('[render-html]')
            .forEach(html => {
              allAddedHtmlComponents.value.push(html.outerHTML);
            });
          // add all added html components to local storage
          localStorage.setItem(savedPageVersionsLocalStorage.value[i], allAddedHtmlComponents.value);
          // break loop if first empty item in local storage is reached in local storage
          break;
        }
        //  if all items in local storage is occupied or taken, then save current save/session in localStorageSavedHTML1
        if (localStorage.getItem(savedPageVersionsLocalStorage.value[4])) {
          document.querySelectorAll('[render-html]')
            .forEach(html => {
              allAddedHtmlComponents.value.push(html.outerHTML);
            });
          // add all added html components to local storage
          localStorage.setItem(savedPageVersionsLocalStorage.value[i], allAddedHtmlComponents.value);
          // break loop
          break;
        }
      }
      // end function
    };

    const log = function (evt) {
      console.log("log", evt);
      console.log("change");

      document.querySelectorAll("input").forEach((input) => {
      input.addEventListener("focus", () => {
        input.value = "http://"
      })
      })


      document.querySelectorAll("[editable-element]").forEach((el) => {
        el.addEventListener("click", (e) => {
          open.value = true;
          element.value = e.target;
        });
      });

      document.querySelector("[iconList]").addEventListener("click", () => {
        open.value = true;
        iconList.value = true;
      });

    
    };

    const getFile = function () {
      let urls = ["1.html", "2.html", "3.html"];
      let descriptions = ["Subscribe to newsletter", "Our offices", "Footer"];

      try {
        urls.forEach(async (url, i) => {
          const response = await fetch("html/" + url);
          const data = await response.text();
          list1.value.push({
            name: i + 1,
            description: descriptions[i],
            components: data,
          });
        });
      } catch (err) {
        console.log("error");
      }
    };

    const cloneElement = function (original) {
      const element = { ...original };
      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      element.id = timestamp;
      console.log(element.id);
      return element;
    };

    onMounted(() => {
      getFile();
    });

    return {
      list1,
      list2,
      cilElevator,
      cilChevronBottom,
      cilChevronTop,
      cilX,
      Slider,
      open,
      icons,
      iconList,
      removeItem,
      cloneElement,
      element,
      log,
      previewCurrentDesign,
      saveCurrentDesign,
      savedPageVersionsLocalStorage
    };
  },
  methods: {},
};
</script>

<style>
[editable-element]:hover {
  box-shadow: inset 0 0 0 1px #0bb783, 0 0 0 2px #0bb783;
  border-radius: 2px;
  cursor: pointer;
}

/* [editable-icon]:hover {
  box-shadow: inset 0 0 0 1px red, 0 0 0 2px red;
  border-radius: 2px;
  cursor: pointer;
} */


.elements:hover {
  color: #0bb783;
}

</style>
