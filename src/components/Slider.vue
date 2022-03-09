<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-hidden"
      @close="$emit('closeSlider')"
    >
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />
        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div class="w-screen max-w-md">
              <div
                class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
              >
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-xl font-bold text-gray-700">
                      Editor menu
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                        @click="$emit('closeSlider')"
                      >
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mt-6 relative flex-1 px-4 sm:px-6">
                  <div class="flex flex-col gap-y-5">
                    <div v-if="iconList">
                      <label
                        class="block text-md font-bold text-gray-900 mb-1 dark:text-gray-100"
                      >
                        Add social media links
                      </label>
                      <div class="flex flex-col w-full">
                        <div
                          v-for="icon in icons"
                          :key="icon"
                          class="flex gap-x-1 w-full mt-3"
                        >
                          <svg class="fill-current text-gray-600 w-7 h-7">
                            <path class="w-5 h-5" :d="icon" />
                          </svg>

<<<<<<< HEAD
                          <input
                            @click="handleClick($event)"
                            @keydown="handleKeyDown($event)"
                            class="border border-gray-600 rounded outline-none p-0.5"
=======
                          <input @focus="handleFocus($event)"
                            class="placeholder:text-gray-500 icon-input border border-gray-600 rounded outline-none p-0.5"
>>>>>>> fedb64d23df0ef178ef33c74971049fe027af143
                            placeholder="http://example.com"
                          />

                          <div class="flex gap-x-2">
<<<<<<< HEAD
                            <CIcon 
                              class="w-4 opacity-100 hover:opacity-70 hover:text-green-600 cursor-pointer"
=======
                            <CIcon id="add"
                              class="w-4 opacity-100 hover:opacity-70 hover:text-green-700 cursor-pointer"
>>>>>>> fedb64d23df0ef178ef33c74971049fe027af143
                              :icon="cilCheckAlt"
                              @click="addIcon($event, icon)"
                            />

<<<<<<< HEAD
                            <CIcon 
                              class="w-4 opacity-100 hover:opacity-70 hover:text-red-600 cursor-pointer hidden"
=======
                            <CIcon id="remove"
                              class="w-4 hidden opacity-100 hover:opacity-70 hover:text-red-700 cursor-pointer"
>>>>>>> fedb64d23df0ef178ef33c74971049fe027af143
                              :icon="cilTrash"
                              @click="removeIcon($event, icon)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mb-1" v-if="!iconList">
                      <label
                        class="block text-md font-bold text-gray-900 dark:text-gray-100"
                      >
                        Edit text
                      </label>
                      <input
                        @input="handleInput($event)"
                        class="dark:text-gray-100 dark:bg-gray-dark dark:border-gray-600 mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      />
                    </div>

                    <div class="mb-4" v-if="!iconList">
                      <label
                        class="block text-md font-bold text-gray-900 dark:text-gray-100"
                        for="text-size"
                        >Font Size</label
                      >
                      <select
                        id="text-size"
                        v-model="fontSize"
                        class="dark:text-gray-100 dark:bg-gray-dark dark:border-gray-600 mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        name="text-size"
                        @change="changeTextSize()"
                      >
                        <option disabled selected value="">Default size</option>
                        <option
                          v-for="size in sizes"
                          :key="size"
                          :class="'text-' + size"
                          :value="size"
                        >
                          {{ size.toUpperCase() }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-4" v-if="!iconList">
                      <label
                        class="block text-md font-bold text-gray-900 dark:text-gray-100"
                        for="text-weight"
                        >Font Weight</label
                      >
                      <select
                        id="text-weight"
                        v-model="fontWeight"
                        class="dark:text-gray-100 dark:bg-gray-dark dark:border-gray-600 mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        name="text-weight"
                        @change="changeTextWeight()"
                      >
                        <option disabled selected value="">
                          Default weight
                        </option>
                        <option
                          v-for="weight in weights"
                          :key="weight"
                          :class="'text-' + weight"
                          :value="weight"
                        >
                          {{ weight }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-4" v-if="!iconList">
                      <label
                        class="block text-md font-bold text-gray-900 dark:text-gray-100"
                        for="text-family"
                        >Font Family</label
                      >
                      <select
                        id="text-family"
                        v-model="fontFamily"
                        class="dark:text-gray-100 dark:bg-gray-dark dark:border-gray-600 mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        name="text-family"
                        @change="changeFontFamily()"
                      >
                        <option disabled selected value="">
                          Default font family
                        </option>
                        <option
                          v-for="family in families"
                          :key="family"
                          :class="'text-' + family"
                          :value="family"
                        >
                          {{ family }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-4" v-if="!iconList">
                      <label
                        class="block text-md font-bold text-gray-900 dark:text-gray-100"
                        for="text-style"
                        >Font Style</label
                      >
                      <select
                        id="text-style"
                        v-model="fontStyle"
                        class="dark:text-gray-100 dark:bg-gray-dark dark:border-gray-600 mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        name="text-style"
                        @change="changeFontStyle()"
                      >
                        <option disabled selected value="">
                          Default style
                        </option>
                        <option
                          v-for="style in styles"
                          :key="style"
                          :class="'text-' + style"
                          :value="style"
                        >
                          {{ style }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-4" v-if="!iconList">
                      <label
                        class="block text-sm font-medium text-gray-900 mb-1 dark:text-gray-100"
                        >Opacity</label
                      >
                      <div class="flex w-full">
                        <input
                          id="opacity"
                          v-model="opacityIndex"
                          class="flex-grow"
                          max="14"
                          min="0"
                          name="opacity"
                          type="range"
                          @input="changeOpacity()"
                        />
                      </div>
                    </div>

                    <div class="mb-4" v-if="!iconList">
                      <label
                        class="block text-md font-bold text-gray-900 mb-1 dark:text-gray-100"
                      >
                        Text color</label
                      >

                      <div class="flex flex-row mb-2">
                        <label class="mr-3 text-sm" for="colorpicker"
                          >Choose custom color</label
                        >
                        <input
                          id="text-color"
                          v-model="customTextColor"
                          name="colorpicker"
                          type="color"
                          @input="changeTextColorCustom()"
                        />
                      </div>

                      <div class="grid grid-cols-11 gap-1">
                        <div
                          v-for="color in colors"
                          :key="color"
                          :class="'bg-' + color"
                          class="h-6 w-6 cursor-pointer border border-gray-400 solid"
                          @click="changeTextColor('text-' + color)"
                        ></div>
                      </div>
                    </div>

                    <div class="mb-4" v-if="!iconList">
                      <label
                        class="block text-md font-bold text-gray-900 mb-1 dark:text-gray-100"
                      >
                        Background color
                      </label>

                      <div class="flex flex-row mb-2">
                        <label class="mr-3 text-sm" for="colorpicker"
                          >Choose custom color</label
                        >
                        <input
                          id="bg-color"
                          v-model="customBgColor"
                          name="colorpicker"
                          type="color"
                          @input="changeBgColorCustom()"
                        />
                      </div>

                      <div class="grid grid-cols-11 gap-1">
                        <div
                          v-for="color in colors"
                          :key="color"
                          :class="'bg-' + color"
                          class="h-6 w-6 cursor-pointer border border-gray-400 solid"
                          @click="changeBgColor('bg-' + color)"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import { CIcon } from "@coreui/icons-vue";
import { cilCheckAlt, cilTrash } from "@coreui/icons";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
    CIcon,
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    element: {
      required: true,
    },
    iconList: {
      type: Boolean,
      required: false,
    },
    editIcon: {
      required: false,
    },
  },

  setup(props) {
    //font size
    const fontSize = ref("");
    const sizes = ref([
      "xs",
      "sm",
      "base",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "6xl",
      "7xl",
      "8xl",
      "9xl",
    ]);

    //font weight
    const fontWeight = ref("");
    const weights = ref([
      "thin",
      "extralight",
      "light",
      "normal",
      "medium",
      "semibold",
      "bold",
      "extrabold",
      "black",
    ]);

    //font family
    const fontFamily = ref("");
    const families = ref(["sans", "serif", "mono"]);

    //font style
    const fontStyle = ref("");
    const styles = ref(["italic", "not-italic"]);

    //opacity
    const opacityIndex = ref("");
    const opacities = ref([
      "0",
      "5",
      "10",
      "20",
      "25",
      "30",
      "40",
      "50",
      "60",
      "70",
      "75",
      "80",
      "90",
      "95",
      "100",
    ]);

    //colors
    const colors = ref([
      "tranparent",
      "white",
      "black",
      "gray-50",
      "gray-100",
      "gray-200",
      "gray-300",
      "gray-400",
      "gray-500",
      "gray-600",
      "gray-700",
      "gray-800",
      "gray-900",
      "red-50",
      "red-100",
      "red-200",
      "red-300",
      "red-400",
      "red-500",
      "red-600",
      "red-700",
      "red-800",
      "red-900",
      "yellow-50",
      "yellow-100",
      "yellow-200",
      "yellow-300",
      "yellow-400",
      "yellow-500",
      "yellow-600",
      "yellow-700",
      "yellow-800",
      "yellow-900",
      "green-50",
      "green-100",
      "green-200",
      "green-300",
      "green-400",
      "green-500",
      "green-600",
      "green-700",
      "green-800",
      "green-900",
      "blue-50",
      "blue-100",
      "blue-200",
      "blue-300",
      "blue-400",
      "blue-500",
      "blue-600",
      "blue-700",
      "blue-800",
      "blue-900",
      "indigo-50",
      "indigo-100",
      "indigo-200",
      "indigo-300",
      "indigo-400",
      "indigo-500",
      "indigo-600",
      "indigo-700",
      "indigo-800",
      "indigo-900",
      "purple-50",
      "purple-100",
      "purple-200",
      "purple-300",
      "purple-400",
      "purple-500",
      "purple-600",
      "purple-700",
      "purple-800",
      "purple-900",
      "pink-50",
      "pink-100",
      "pink-200",
      "pink-300",
      "pink-400",
      "pink-500",
      "pink-600",
      "pink-700",
      "pink-800",
      "pink-900",
    ]);
    const customTextColor = ref("#ffffff");
    const customBgColor = ref("#ffffff");

    const icons = ref([
      "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
      "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
      "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
      "M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z",
    ]);

    //change text size

    const changeTextSize = function () {
      sizes.value.forEach((size) => {
        const reg = "text-" + size;

        if (props.element.className.match(reg)) {
          props.element.classList.remove(reg);
          props.element.classList.remove("sm:" + reg);
        }
      });
      props.element.classList.add("sm:text-" + fontSize.value);
    };

    //change text weight

    const changeTextWeight = function () {
      weights.value.forEach((weight) => {
        const reg = "font-" + weight;

        if (props.element.className.match(reg)) {
          props.element.classList.remove(reg);
          props.element.classList.remove("sm:" + reg);
        }
      });
      props.element.classList.add("sm:font-" + fontWeight.value);
    };

    //change font family

    const changeFontFamily = function () {
      families.value.forEach((family) => {
        const reg = "font-" + family;

        if (props.element.className.match(reg)) {
          props.element.classList.remove(reg);
          props.element.classList.remove("sm:" + reg);
        }
      });
      props.element.classList.add("sm:font-" + fontFamily.value);
    };

    //change font style

    const changeFontStyle = function () {
      styles.value.forEach((style) => {
        const reg = style;

        if (props.element.className.match(reg)) {
          props.element.classList.remove(reg);
          props.element.classList.remove("sm:" + reg);
        }
      });
      props.element.classList.add(fontStyle.value);
    };

    //change opacity

    const changeOpacity = function () {
      opacities.value.forEach((opacitySingle) => {
        props.element.classList.remove("opacity-" + opacitySingle);
        props.element.classList.add(
          "opacity-" + opacities.value[opacityIndex.value]
        );
      });
    };

    //change text color

    const changeTextColor = function (color) {
      colors.value.forEach((singleColor) => {
        props.element.classList.remove("text-" + singleColor);
        props.element.style.color = null;
      });
      props.element.classList.add(color);
    };

    //change text color custom

    const changeTextColorCustom = function () {
      console.log(props.element);
      let currentColor = document.querySelector("#text-color").value;
      props.element.style.color = currentColor;
    };

    //change background color

    const changeBgColor = function (color) {
      colors.value.forEach((singleColor) => {
        props.element.classList.remove("bg-" + singleColor);
        props.element.style.backgroundColor = null;
      });
      props.element.classList.add(color);
    };

    //change background color custom

    const changeBgColorCustom = function () {
      console.log(props.element);
      let currentColor = document.querySelector("#bg-color").value;
      props.element.style.backgroundColor = currentColor;
    };


    //adding SoMe icons

    const div = ref(null);
    const TwitterInput = ref(true);
    const TwitterAdd = ref(true);
    const TwitterDelete = ref(false);


    const addIcon = function (e, icon) {
      const icons = document.querySelector("#icon-list");
<<<<<<< HEAD
      const inputField = e.currentTarget.parentElement.previousElementSibling;
      const iconAdd = e.currentTarget;
      const iconRemove = e.currentTarget.nextElementSibling;
      const inputValue = inputField.value;
      
      //check if icon is added and validate link
      if (
        icons.getElementsByClassName(`${icon}`).length < 1 &&
        inputValue.length > 7
=======
      const inputValue = e.currentTarget.parentElement.previousElementSibling.value;
       const input = e.currentTarget.parentElement.previousElementSibling;
      const iconAdd = e.currentTarget;
      const iconRemove = e.currentTarget.nextElementSibling;
      console.log(`testing`, e.currentTarget.parentElement.previousElementSibling.value);

      if (
        icons.getElementsByClassName(`${icon}`).length < 1 && inputValue.length > 6
>>>>>>> fedb64d23df0ef178ef33c74971049fe027af143
      ) {
        //create div and append in list
        div.value = document.createElement("div");
        div.value.classList = "w-10 h-10 flex justify-center items-center";
        icons.appendChild(div.value);

        //wrap div in an anchor tag
        var parent = div.value.parentNode;
        var alink = document.createElement("a");
        parent.insertBefore(alink, div.value);
        alink.appendChild(div.value);

        //make anchor tags unclickable
        alink.addEventListener("click", (e) => {
          e.preventDefault();
        });

        //add href
        alink.setAttribute(
          "href",
          e.currentTarget.parentElement.previousElementSibling.value
        );
        alink.setAttribute("target", "_blank");
        console.log(`href is:`, alink.getAttribute("href"));

        //create svg and append to div
        const newIcon = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        newIcon.setAttributeNS(null, "viewBox", "0 0 24 24");
        newIcon.classList = "fill-current text-gray-600 w-7 h-7";
        newIcon.setAttributeNS(null, "editable-element", "");
        div.value.appendChild(newIcon);

        //create path and append to svg
        const newPath = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        newPath.setAttributeNS(null, "d", icon);
        newIcon.appendChild(newPath);
        let d = newPath.getAttribute("d");
        div.value.className += " " + d;

        //remove input field and icon
        iconAdd.style.display = "none";
        inputField.style.display = "none";
        iconRemove.style.display = "block";

        //set icon as added

        //show error
      } else if (inputValue.length <= 7) {
        inputField.classList.add("border-red-600");
        inputField.classList.add("animate-shake");
      }
    };

    //remove icons
    const removeIcon = function (e, icon) {
      const icons = document.querySelector("#icon-list");
      const inputField = e.currentTarget.parentElement.previousElementSibling;
      const iconAdd = e.currentTarget.previousElementSibling;
      const iconRemove = e.currentTarget;

      //for each icon
      icons.querySelectorAll("div").forEach((div) => {
        let svg = div.querySelector("svg");
        let path = svg.querySelector("path");
        let d = path.getAttribute("d");
        if (d === icon) {
          //remove div
          path.parentElement.parentElement.parentElement.remove();
          //add input field and icon
          iconRemove.style.display = "none";
          iconAdd.style.display = "block";
          inputField.style.display = "block";
          inputField.value = "";
        }
      });
    };

    

    //add value to input field
    const handleClick = function (e) {
      const inputField = e.currentTarget;
      if (inputField.value === "") {
        inputField.value = "http://";
      }
    };

    //remove error
    const handleKeyDown = function (e) {
      const inputField = e.currentTarget;
      const inputValue = inputField.value;
      if (inputValue.length >= 7) {
        inputField.classList.remove("border-red-600");
        inputField.classList.remove("animate-shake");
        inputField.classList.add("border-gray-600");
      }
    };

    //edit text
    const handleInput = function (e) {
      const inputValue = e.currentTarget.value;
      props.element.textContent = inputValue;
    };

    return {
      colors,
      customTextColor,
      customBgColor,
      sizes,
      fontSize,
      weights,
      fontWeight,
      families,
      fontFamily,
      styles,
      fontStyle,
      opacities,
      opacityIndex,
      changeTextColor,
      changeTextColorCustom,
      changeBgColor,
      changeBgColorCustom,
      changeTextSize,
      changeTextWeight,
      changeFontFamily,
      changeFontStyle,
      changeOpacity,
      addIcon,
      removeIcon,
      icons,
      div,
      cilCheckAlt,
<<<<<<< HEAD
      cilTrash,
      handleKeyDown,
      handleInput,
      handleClick,
=======
      cilTrash
>>>>>>> fedb64d23df0ef178ef33c74971049fe027af143
    };

  },
};
</script>


<style>

  .hide {
    display: none;
  }

  .show {
    display: block;
  }

</style>