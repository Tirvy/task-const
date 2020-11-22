<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link v-for="item in routes" :key="item.name" :to="{name: item.route}">
        <v-btn class="mr-2" text>
          <span>{{ item.name }}</span>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data() {
    return {
      routes: [
        {
          route: 'Self',
          name: 'О себе',
        },
        {
          route: 'YaMap',
          name: 'Я.Карта',
        },
        {
          route: 'Timer',
          name: 'Таймер',
        },
      ],
    };
  },
  created() {
    this.$store.commit('setOpeningTimestamp', new Date().getTime());
  },
};
</script>
