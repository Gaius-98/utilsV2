<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <gu-virtual-list :data="arr" style="height: 400px" @click="onClick">
      <template #content="scope">
        <div :class="'list' + scope.item.value">
          {{ scope.item.label + "(" + scope.item.value + ")" }}
        </div>
      </template>
    </gu-virtual-list>
    <button @click="onOpenModal">打开弹窗</button>
  </div>
</template>

<script>
import GuVirtualList from "../packages/components/GuVirtualList.vue";
import Dialog from "../packages/components/Dialog";
export default {
  components: {},
  data() {
    return {
      arr: [],
      dialog: new Dialog({
        title: "测试",
        content: GuVirtualList,
        componentProps: {
          data: new Array(20000).fill(1).map((item, idx) => ({
            label: "label" + idx,
            value: "val" + idx,
            key: "key" + idx,
          })),
          style: {
            height: "500px",
          },
        },
        cb: (e) => {
          console.log(e);
          this.dialog.destroyed();
        },
      }),
    };
  },
  methods: {
    onClick(e) {
      console.log(e);
    },
    onOpenModal() {
      this.dialog.create();
    },
  },
  mounted() {
    this.arr = new Array(20000).fill(1).map((item, idx) => ({
      label: "label" + idx,
      value: "val" + idx,
      key: "key" + idx,
    }));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
