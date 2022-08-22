<template>
  <div class="w-full h-full flex flex-col items-center bg-gray-100">
    <img src="../assets/logo.png" class="w-48 h-48 my-24" />
    <div
      class="w-1/2 h-fit bg-gray-200 p-4 shadow shadow-gray-400 rounded-lg mb-8"
    >
      <p class="text-gray-800 mb-2">Step 1 - Import the Bill of Materials</p>
      <input
        class="w-full"
        type="file"
        accept=".csv"
        v-on:change="onBOMFileChange"
        ref="bomFile"
      />
    </div>
    <div
      class="w-1/2 h-fit bg-gray-200 p-4 shadow shadow-gray-400 rounded-lg mb-8"
    >
      <p class="text-gray-800 mb-2">Step 2 - Import the schematics</p>
      <input
        type="file"
        accept="image/png, image/jpeg"
        v-on:change="onSchematicsFileChange"
        ref="schFile"
      />
    </div>
    <div
      class="w-1/2 h-fit text-center bg-gray-200 text-gray-700 py-4 shadow shadow-gray-400 rounded-lg cursor-pointer hover:bg-gray-300"
      @click="start"
    >
      Start
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ImportView.vue",
  data() {
    return {
      csv: null,
      schematics: "",
    };
  },
  methods: {
    ...mapMutations(["ADD_COMPONENT", "ADD_SCHEMATICS"]),
    start() {
      // Parse the raw BOM file.
      let bom = this.csv.split("\n");
      bom.splice(0, 2);
      bom.forEach((component) => {
        this.ADD_COMPONENT(component);
      });
      this.ADD_SCHEMATICS(this.schematics);
      this.$router.push("/soldering");
    },
    onBOMFileChange() {
      let file = this.$refs.bomFile.files[0];
      const reader = new FileReader();
      if (file.name.includes(".csv")) {
        reader.onload = (res) => {
          this.csv = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(file);
      } else {
        console.log("invalid file extension provided");
        this.csv = null;
      }
    },
    onSchematicsFileChange() {
      let file = this.$refs.schFile.files[0];
      if (
        file.name.includes(".png") ||
        file.name.includes(".jpg") ||
        file.name.includes(".jpeg")
      ) {
        this.schematics = URL.createObjectURL(file);
      } else {
        this.schematics = "";
      }
    },
  },
};
</script>

<style scoped></style>
