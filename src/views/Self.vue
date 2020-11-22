<template>
  <div>
    Это я построил
    <div style="display: flex" v-for="item in links" :key="item.href">
      <img :src="item.icon" height="25" width="25" class="img" />
      <a :href="item.href">{{ item.name }}</a>
    </div>
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

<style scoped>
.img {
  width: 25px;
  height: 25px;
  margin-right: 16px;
}
</style>
