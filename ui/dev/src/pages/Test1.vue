<template>
  <q-page padding>
    <q-ext-test1 label="Test 1" dense >
      <template v-slot:append>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
        </q-avatar>
      </template>
    </q-ext-test1>
  </q-page>
</template>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
