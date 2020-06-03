<template>
  <div class="home bg-dark text-light">
    <Nasa />
  </div>
</template>
<script>
// @ is an alias to /src

import Nasa from "../components/Nasa";

export default {
  name: "Home",
  components: { Nasa }
};
</script>
