

<template>
  <div class="headertemp">

    <div class="customHeaderLabel">
      <span v-if="params.requered" class="customHeaderRequered"></span>
      {{ params.displayName }}
      <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
        <i v-if="params.isTooltip" class="fa fa-info-circle" aria-hidden="true"></i>
      </el-tooltip>

    </div>
    <!-- <div v-if="params.enableSorting" @click="onSortRequested('asc', $event)" :class="ascSort" class="customSortDownLabel">
      <i class="fa fa-long-arrow-down"></i>
    </div>
    <div v-if="params.enableSorting" @click="onSortRequested('desc', $event)" :class="descSort" class="customSortUpLabel">
      <i class="fa fa-long-arrow-up"></i>
    </div> -->

    <div v-if="params.enableMenu" ref="menuButton" class="customHeaderMenuButton" @click="onMenuClicked($event)">
      <i class="fa" :class="params.menuIcon"></i>
    </div>
  </div>
</template >

<script>
export default {
  data: function () {
    return {
      ascSort: null,
      descSort: null,
      noSort: null,
    };
  },
  beforeMount() { },
  mounted() {
    this.params.column.addEventListener("sortChanged", this.onSortChanged);
    this.onSortChanged();
  },
  methods: {
    onMenuClicked() {
      this.params.showColumnMenu(this.$refs.menuButton);
    },

    onSortChanged() {
      this.ascSort = this.descSort = this.noSort = "inactive";
      if (this.params.column.isSortAscending()) {
        this.ascSort = "active";
      } else if (this.params.column.isSortDescending()) {
        this.descSort = "active";
      } else {
        this.noSort = "active";
      }
    },

    onSortRequested(order, event) {
      this.params.setSort(order, event.shiftKey);
    },
  },
};
</script>

<style lang="css" scoped></style>

