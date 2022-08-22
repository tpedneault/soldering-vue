<template>
  <div class="w-full h-full flex flex-col overflow-hidden">
    <!-- Current component header -->
    <ComponentRow :component="this.GET_CURRENT_COMPONENT" />

    <!-- Content -->
    <div class="flex flex-row flex-grow bg-gray-100 overflow-hidden">
      <div
        class="w-1/6 h-full bg-gray-200 border-r border-gray-500 p-4 overflow-y-auto"
      >
        <div class="text-sm text-gray-500 p-1">Components</div>
        <div
          v-for="(component, index) in this.$store.state.components"
          class="text-sm my-1 p-1 hover:bg-gray-300 rounded cursor-pointer"
          v-bind:class="
            component['completed'] ? 'line-through text-gray-500' : ''
          "
          :key="component['libref']"
          @click="this.changeComponent(index)"
        >
          {{ component["comment"] }}
        </div>
      </div>
      <div class="flex flex-grow w-5/6 justify-center">
        <img :src="this.$store.state.schematicsURL" id="schematics" />
      </div>
    </div>
  </div>
</template>

<script>
import ComponentRow from "@/components/ComponentRow";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "SolderingView",
  components: { ComponentRow },
  methods: {
    ...mapMutations(["SET_SELECTED_INDEX"]),
    changeComponent(index) {
      this.SET_SELECTED_INDEX(index);
      this.$forceUpdate();
    },
  },
  mounted() {
    /*
    let image = { width: 1600, height: 1600 };
    let canvas = document.getElementById("schematics");
    let ctx = canvas.getContext("2d");
    let imageRatio = image.width / image.height;
    let newImage = {};
    if (imageRatio <= 1) {
      newImage.width = canvas.height * imageRatio;
      newImage.height = canvas.height;
      newImage.x = canvas.width / 2 - newImage.width / 2;
      newImage.y = 0;

      let img = new window.Image();
      img.src = this.$store.state.schematicsURL;
      ctx.drawImage(
        img,
        newImage.x,
        newImage.y,
        newImage.width,
        newImage.height
      );

    }

     */
  },
  computed: {
    ...mapGetters(["GET_CURRENT_COMPONENT"]),
  },
};
</script>
