<template>
  <div>
    <VMenu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <VBtn text color="orange" dark v-bind="attrs" v-on="on">
          <span v-if="$route.params.locale == 'en'">English</span>
          <span v-if="$route.params.locale == 'id'">Bahasa Indonesia</span>
          <span v-if="$route.params.locale == 'zh'">繁體中文</span>
        </VBtn>
      </template>
      <VList>
        <template v-for="locale in supportedLocales">
          <VListItem
            @click="switchLocale(locale)"
            :key="locale"
            v-if="locale != $route.params.locale"
          >
            <VListItem @click="switchLocale(locale)">
              <VListItemTitle>
                <span v-if="locale == 'en'">English</span>
                <span v-if="locale == 'id'">Bahasa Indonesia</span>
                <span v-if="locale == 'zh'">繁體中文</span>
              </VListItemTitle>
            </VListItem>
          </VListItem>
        </template>
      </VList>
    </VMenu>
  </div>
</template>

<script>
import { Trans } from '@/plugins/Translation';

export default {
  name: 'LocaleSwitcher',
  data() {
    return {
      localeLongName: '',
    };
  },
  computed: {
    supportedLocales() {
      return Trans.supportedLocales;
    },
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        const to = this.$router.resolve({ params: { locale } });
        return Trans.changeLocale(locale).then(() => {
          this.$router.push(to.location);
        });
      }
    },
  },
};
</script>

<style scoped>
li {
  text-decoration: underline;
  color: #459ce7;
  cursor: pointer;
}
</style>
