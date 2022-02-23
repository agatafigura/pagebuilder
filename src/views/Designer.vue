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
              <section
                v-html="element.components"
    
              ></section>
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
    <Slider :element="element" :open="open" @close-slider="sliderClose()" />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { onMounted, ref } from "vue";
import { CIcon } from "@coreui/icons-vue";
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
    const element = ref("");

    // const setActive = function(e) {
    //   const HTMLelements = document.querySelector("#drag").children;
    //   const index = Array.prototype.indexOf.call(HTMLelements, e.currentTarget)
    //   currentIndex.value = index;
    // }

    const sliderClose = function () {
      open.value = false;
      // console.log(currentIndex.value)
      // const compHTML = document.querySelector("#drag").children[currentIndex.value].lastElementChild.firstElementChild.outerHTML;
      // list2.value[currentIndex.value].components = compHTML;
    }

 const removeItem = function (id) {
      const newList = list2.value.filter((element) => {
        if (element.id !== id) {
          return element;
        }
        console.log(element.id);
      });
      list2.value = newList;
    };

    const log = function (evt) {
      console.log("log", evt);
        document.querySelectorAll("[editable-element]").forEach((el) => {
          el.addEventListener("click", (e) => {
            open.value = true;
            element.value = e.target;
           });
        });
      }
    
    // const generateID = function () {
      // let ID = 0;
      // list2.value.forEach((element) => {
      //   element.id = ID;
      //   ID++;
      //   console.log("generateID", element.id);
      // });
      
    // };

    const getFile = function () {
      let urls = ["1.html", "2.html"];
      let descriptions = ["Subscribe to newsletter", "Our offices"];

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
      // menuOpen,
      // toggleMenu,
      Slider,
      open,
      removeItem,
      cloneElement,
      element,
      log,
      sliderClose,
      // setActive,

    };
  },
  methods: {
    
    }


};
</script>

<style>
[editable-element]:hover {
  box-shadow: inset 0 0 0 1px #0bb783, 0 0 0 2px #0bb783;
  border-radius: 2px;
  cursor: pointer;
}

.elements:hover {
  color: #0bb783;
}
</style>
