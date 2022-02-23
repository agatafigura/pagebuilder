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
                      Panel title
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
                  <div class="flex flex-col gap-y-3">
                    <div>
                    <h2>Text color</h2>
                      <input class="border-2" type="color" id="text-color" @input="changeColor"/>
                    </div>
                     <div>
                    <h2>Background color</h2>
                      <input class="border-2" type="color" id="bg-color" @input="changeBgColor"/>
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
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    element: {
      required: true,
    },
  },
  setup(props) {
    console.log(props.element);

    const changeColor = function () {
      console.log(props.element);
      let currentColor = document.querySelector("#text-color").value;
      props.element.style.color = currentColor;
    }

    const changeBgColor = function () {
      console.log(props.element);
      let currentBgColor = document.querySelector("#bg-color").value;
      props.element.style.backgroundColor = currentBgColor;
    }

    return {
      changeColor,
      changeBgColor
    };


  },
};
</script>
