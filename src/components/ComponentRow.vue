<template>
  <div
    class="w-full grid grid-cols-6 gap-2 py-3 px-5 bg-gray-200 border-b border-gray-400 shadow"
  >
    <div
      v-for="field in fields"
      :key="field.title"
      class="h-12 flex flex-col overflow-y-auto scrollbar"
      :class="this.classes(field.span)"
    >
      <div class="text-sm text-gray-500">{{ field.title }}</div>
      <div class="text-gray-700">{{ this.component[field.index] }}</div>
    </div>
    <div class="flex flex-row items-center">
      <input
        v-model="
          this.$store.state.components[this.$store.state.selectedIndex]
            .completed
        "
        class="w-4 h-4"
        type="checkbox"
      />

      <div class="ml-2">Is completed</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentRow",
  props: {
    component: Array,
  },
  methods: {
    classes(span) {
      return this.cols[span];
    },
  },
  data() {
    return {
      cols: {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4",
        5: "col-span-5",
        6: "col-span-6",
      },
      fields: [
        {
          title: "Library Reference",
          index: "libref",
          span: 1,
        },
        {
          title: "Comment",
          index: "comment",
          span: 1,
        },
        {
          title: "Description",
          index: "description",
          span: 2,
        },
        {
          title: "Footprint",
          index: "footprint",
          span: 1,
        },
        {
          title: "Quantity",
          index: "quantity",
          span: 1,
        },
        {
          title: "Designators",
          index: "designators",
          span: 5,
        },
      ],
    };
  },
  computed: {},
};
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 20px;
  height: 20px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #f7f4ed;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #e0cbcb;
  border-radius: 100vh;
  border: 3px solid #f6f7ed;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #c0a0b9;
}
</style>
