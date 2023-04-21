<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <gu-virtual-list :data="arr" style="height: 400px">
      <template #content="scope">
        <div :class="'list' + scope.item.value">
          {{ scope.item.label + "(" + scope.item.value + ")" }}
        </div>
      </template>
    </gu-virtual-list>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      arr: [],
    };
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
