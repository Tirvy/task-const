<template>
  <div id="ya-karto"></div>
</template>

<script>
export default {
  name: 'YaMap',
  components: {},
  mixins: [],
  data() {
    return {
      ymaps: null,
      map: null,
    };
  },
  mounted() {
    this.waitYmaps();
  },
  beforeUnmount() {
    if (this.map) {
      this.map.destroy();
      this.map = null;
    }
  },
  computed: {},
  methods: {
    waitYmaps() {
      if (!this.ymaps) {
        let script = document.createElement('script');
        script.src = '//api-maps.yandex.ru/2.1/?load=package.standard&lang=ru_RU';
        document.head.appendChild(script);
        script.onload = () => {
          this.ymaps = global.ymaps;
          this.ymaps.ready(this.initYandexMap);
        };
      } else {
        this.ymaps.ready(this.initYandexMap);
      }
    },
    initYandexMap() {
      this.map = new this.ymaps.Map('ya-karto', {
        center: this.$store.state.metroCoords,
        zoom: 12,
      });

      this.map.geoObjects.add(
        new this.ymaps.Placemark(this.$store.state.metroCoords, null, {
          cursor: 'default',
        })
      );
    },
  },
};
</script>

<style scoped lang="scss">
#ya-karto {
  width: calc(100vw - 16px);
  height: 500px;
}
</style>
