<template>
  <button
    class="relative flex items-center ml-auto px-2 rounded-md bg-green-700"
    @click="toggleDropdown"
  >
    <unicon name="english-to-chinese" class="pr-1" fill="#ffffff"></unicon>
    <span>Language</span>
    <div
      class="absolute top-full right-0 w-40 mt-2 p-2 rounded flex flex-col space-y-2 items-stretch bg-green-500"
      v-show="showDropdown"
    >
      <div
        v-for="lang in locales"
        class="py-2 rounded hover:bg-green-700"
        :key="`${lang}`"
        @click.stop="selectLang(lang)"
      >{{ t('locale', [], {locale: lang}) }}</div>
    </div>
  </button>
</template>

<script lang="ts">
import { ref, computed, defineComponent, readonly } from 'vue'
import { Locale, useI18n } from 'vue-i18n'

export default defineComponent({
  components: {},
  setup() {
    const showDropdown = ref(false)

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value
    }
    const i18n = useI18n({ useScope: 'global' })

    const locales = readonly(i18n.availableLocales)

    const selectLang = (locale: Locale) => {
      toggleDropdown()
      i18n.locale.value = locale
    }

    return {
      showDropdown,
      toggleDropdown,
      selectLang,
      locales,
      t: i18n.t
    }
  },
})
</script>

<style scoped lang="postcss">
.template {
  border: solid 1px;
}
</style>
