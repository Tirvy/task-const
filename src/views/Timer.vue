<template>
  <div>time spend on the page: {{ timeOnPageFormatted }}</div>
</template>

<script>
export default {
  name: 'timer',
  data() {
    return {
      currentTimeDifference: null,
      timerInterval: null,
    };
  },
  created() {
    this.updateTime();
    // На самом деле можно было бы сделать таймаут по % 1000 от начально разницы, а потом только запускать интервал
    // Было бы немного точнее. Но не уверен, что тут так нужны доли секунды
    this.timerInterval = setInterval(this.updateTime, 1000);
  },
  destroyed() {
    clearInterval(this.timerInterval);
  },
  computed: {
    timeOnPageFormatted() {
      // Не подключаем moment и прочие. Этого должно хватить, думаю
      return `${this.currentTimeDifference / 1000} sec`;
    },
  },
  methods: {
    getTimeDifference() {
      let currentTimestamp = new Date().getTime();
      return Math.round((currentTimestamp - this.$store.state.openingTimestamp) / 1000) * 1000;
    },
    updateTime() {
      if (this.currentTimeDifference) {
        this.currentTimeDifference += 1000;
      } else {
        this.currentTimeDifference = this.getTimeDifference();
      }
    },
  },
};
</script>

<style scoped></style>
