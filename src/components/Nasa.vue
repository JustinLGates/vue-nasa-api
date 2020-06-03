<template>
  <div>
    <h2 class="text-primary">nasa api page here</h2>
    <button class="btn btn-primary" @click="getNasaPic()">clickforpic</button>
    <img :src="nasaImg" alt="hmmm..." />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  props: {
    msg: String,
  },
  methods: {
    getNasaPic() {
      console.log("fired request");
      this.$store.dispatch("getNasaPic");
    },
  },
  computed: {
    nasaImg() {
      return this.$store.state.nasaImg;
    },
  },
};
</script>

<style></style>
