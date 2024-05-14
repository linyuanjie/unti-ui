<template>
  <div>
    <template>
      <a-tooltip placement="top" title="Upload">
        <a-button
          icon="upload"
          type="link"
          @click="handleUpload()"
          :disabled="params.node.data['isDisabledUpload']"
        >
        </a-button>
      </a-tooltip>
    </template>
    <template>
      <a-tooltip placement="top" title="Withdraw">
        <a-button
          icon="rollback"
          type="link"
          @click="handleWithdraw()"
          :disabled="params.node.data['isDisabledWithdraw']"
        >
        </a-button>
      </a-tooltip>
    </template>
    <template>
      <a-tooltip placement="top" title="Update">
        <template v-if="params.node.data['isDisabledUpdate']">
          <a-button
            style="color: red"
            icon="interaction"
            type="link"
            @click="handleUpdate()"
          >
          </a-button>
        </template>
        <template v-if="!params.node.data['isDisabledUpdate']">
          <a-button icon="interaction" type="link" @click="handleUpdate()" disabled>
          </a-button>
        </template>
      </a-tooltip>
    </template>
    <template>
      <a-tooltip placement="top" title="Change Log" @click="handleChangeLog()">
        <a-button icon="snippets" type="link"> </a-button>
      </a-tooltip>
    </template>
  </div>
</template>

<script>
export default {
  name: "ActionButton",
  mounted() {},
  methods: {
    handleUpload() {
      this.params.context.componentParent.handleUpload(this.params.node.data);
    },
    handleWithdraw() {
      this.params.context.componentParent.handleWithdraw(this.params.node.data);
    },
    handleUpdate() {
      this.params.context.componentParent.handleUpdate(this.params.node.data);
    },
    handleChangeLog() {
      this.params.context.componentParent.handleChangeLog(this.params.node.data);
    },
  },
  computed: {},
  watch: {
    params: {
      handler: function (newVal, oldVal) {
        // console.log(newVal,'newVal')
      },
      immediate: true,
    },
  },
};
</script>

<style lang="css" scoped></style>
