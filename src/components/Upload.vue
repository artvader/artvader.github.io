<template>
  <VDialog @click:outside="closeDialog" :value="dialog" max-width="450px">
    <VCard
      @drop.prevent="onDrop($event)"
      @dragover.prevent="dragover = true"
      @dragenter.prevent="dragover = true"
      @dragleave.prevent="dragover = false"
      :class="{ 'grey lighten-2': dragover }"
    >
      <VCardText>
        <VRow class="d-flex flex-column" dense align="center" justify="center">
          <VIcon :class="[dragover ? 'mt-2, mb-6' : 'mt-5']" size="60">
            mdi-cloud-upload
          </VIcon>
          <p>
            Drop your file(s) here, or click to select them.
          </p>
        </VRow>
        <VVirtualScroll
          v-if="uploadedFiles.length > 0"
          :items="uploadedFiles"
          height="150"
          item-height="50"
        >
          <template v-slot:default="{ item }">
            <VListItem :key="item.name">
              <VListItemContent>
                <VListItemTitle>
                  {{ item.name }}
                  <span class="ml-3 text--secondary">
                    {{ item.size }} bytes</span
                  >
                </VListItemTitle>
              </VListItemContent>

              <VListItemAction>
                <VBtn @click.stop="removeFile(item.name)" icon>
                  <VIcon> mdi-close-circle </VIcon>
                </VBtn>
              </VListItemAction>
            </VListItem>

            <VDivider></VDivider>
          </template>
        </VVirtualScroll>
      </VCardText>
      <VCardActions>
        <VSpacer></VSpacer>

        <VBtn @click="closeDialog" icon>
          <VIcon id="close-button">mdi-close</VIcon>
        </VBtn>

        <VBtn icon @click.stop="submit">
          <VIcon id="upload-button">mdi-upload</VIcon>
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script>
export default {
  name: "Upload",
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dragover: false,
      uploadedFiles: []
    };
  },
  methods: {
    closeDialog() {
      // Remove all the uploaded files
      this.uploadedFiles = [];
      // Close the dialog box
      this.$emit("update:dialog", false);
    },
    removeFile(fileName) {
      // Find the index of the
      const index = this.uploadedFiles.findIndex(
        file => file.name === fileName
      );
      // If file is in uploaded files remove it
      if (index > -1) this.uploadedFiles.splice(index, 1);
    },
    onDrop(e) {
      this.dragover = false;
      // If there are already uploaded files remove them
      if (this.uploadedFiles.length > 0) this.uploadedFiles = [];
      // If user has uploaded multiple files but the component is not multiple throw error
      if (!this.multiple && e.dataTransfer.files.length > 1) {
        this.$store.dispatch("addNotification", {
          message: "Only one file can be uploaded at a time..",
          colour: "error"
        });
      }
      // Add each file to the array of uploaded files
      else
        e.dataTransfer.files.forEach(element =>
          this.uploadedFiles.push(element)
        );
    },
    submit() {
      // If there aren't any files to be uploaded throw error
      if (!this.uploadedFiles.length > 0) {
        this.$store.dispatch("addNotification", {
          message: "There are no files to upload",
          colour: "error"
        });
      } else {
        // Send uploaded files to parent component
        this.$emit("filesUploaded", this.uploadedFiles);
        // Close the dialog box
        this.closeDialog();
      }
    }
  }
};
</script>