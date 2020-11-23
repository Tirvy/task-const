<template>
  <div>
    <v-col cols="12" sm="6" offset-sm="3">
      <div>
        <v-text-field label="ФИО" v-model="name"></v-text-field>
        <v-text-field label="Дата рождения" v-model="birthday"></v-text-field>
        <v-text-field label="Родной город" v-model="hometown"></v-text-field>
      </div>
    </v-col>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in links">
            <v-divider v-if="index > 0" :key="index"></v-divider>

            <v-list-item :key="item.title">
              <v-list-item-avatar>
                <img :src="item.icon" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <a :href="item.href" target="_blank">{{ item.name }}</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  name: 'self',
  data() {
    return {
      name: 'Гайнуллин Эрнест Зимфирович',
      birthday: '9 июля 1992',
      hometown: 'Сочи',
      links: [
        {
          icon: 'https://cdn.freebiesupply.com/images/large/2x/vk-logo-transparent.png',
          href: 'https://vk.com/tirvy',
          name: 'vk',
        },
        {
          icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
          href: 'https://github.com/Tirvy',
          name: 'github',
        },
        {
          icon: 'https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png',
          href: 'https://steamcommunity.com/id/tirvy/',
          name: 'steam',
        },
        {
          icon: 'https://user-images.githubusercontent.com/9140768/30163120-9bd90afe-938c-11e7-8141-4004c000eb27.png',
          href: 'https://boardgamegeek.com/collection/user/Tirvy',
          name: 'bgg',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
