<template>
  <div ref="guList" class="gu-list" @scroll="onScroll()">
    <ul
      ref="virtualList"
      class="gu-virtual-list"
      :style="{
        height: data.length * itemHeight + 'px',
      }"
    >
      <li
        v-for="(item, idx) in showList"
        :key="item[field.key]"
        class="gu-virtual-list-item"
        :class="active == item[field.value] ? 'active' : ''"
        @click="onClick(item)"
        :style="{
          height: itemHeight + 'px',
          top: (startIndex + idx) * itemHeight + 'px',
        }"
      >
        <slot name="content" :item="item">
          {{ item[field.label] }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GuVirtualList",
  data() {
    return {
      needShowLength: 10,
      showList: [],
      startIndex: 0,
      endIndex: 12,
      active: "",
    };
  },
  components: {},
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    itemHeight: {
      type: Number,
      default: 40,
    },
    replaceField: {
      type: Object,
      default: () => ({
        children: "children",
        value: "value",
        label: "label",
        key: "key",
      }),
    },
  },
  computed: {
    field() {
      let obj = {
        children: "children",
        value: "value",
        label: "label",
        key: "key",
      };
      return {
        ...this.replaceField,
        ...obj,
      };
    },
  },
  methods: {
    onScroll() {
      const scrollTop = this.$refs.guList.scrollTop || 0;
      this.startIndex = Math.floor(scrollTop / this.itemHeight);
      this.endIndex = Math.floor(this.startIndex + this.needShowLength + 2);
      this.showList = this.data.slice(this.startIndex, this.endIndex);
    },
    init() {
      const { height } = this.$refs.guList.getBoundingClientRect();
      this.needShowLength = Math.floor(height / this.itemHeight);
      this.onScroll();
    },
    onClick(e) {
      this.active = e[this.field.value];
      this.$emit("click", e);
    },
  },
  watch: {
    data: {
      handler() {
        this.init();
      },
      deep: true,
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped lang="scss">
.gu-list {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .gu-virtual-list {
    padding: 0;
    margin: 0;
    position: relative;
    .gu-virtual-list-item {
      position: absolute;
      top: 0;
      left: 0;
      list-style: none;
      cursor: pointer;
      &.active {
        background: rgba($color: #ccc, $alpha: 0.5);
      }
    }
  }
}
</style>
