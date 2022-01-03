<template>
  <div class="dialog-xp">
    <VContainer>
      <VBtn @click="uploadDialog = true" class="my-2">Upload File</VBtn>
      <Upload :dialog.sync="uploadDialog" :multiple="true" @filesUploaded="processUpload($event)" />
    </VContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import Upload from '@/components/Upload';

export default {
  name: 'Dialog Experiement',
  components: {
    Upload,
  },
  data: () => ({
    uploadDialog: false,
  }),
};
</script>
