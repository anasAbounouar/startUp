<template>
  <div id="login-page" class="p-relative">
    <img src="" alt="" class="p-absolute" /><img
      src="@/assets/login/leftDown.png"
      alt=""
      class="p-absolute leftDown img-fluid"
    /><img src="" alt="" class="p-absolute" /><img
      src="@/assets/login/leftUp.png"
      alt=""
      class="p-absolute leftUp img-fluid"
    /><img src="" alt="" class="p-absolute" /><img
      src="@/assets/login/rightUp.png"
      alt=""
      class="p-absolute rightUp img-fluid"
    /><img src="" alt="" class="p-absolute rightUp" /><img
      src="@/assets/login/rightDown.png"
      alt=""
      class="p-absolute rightDown img-fluid"
    />
    <div class="container">
      <div class="row p-4 align-items-center justify-content-center">
        <div class="col-sm-10 col-lg-7 bg-white p-3">
          <p>llllllllllllllllll</p>
          <p>llllllllllllllllll</p>
          <p>llllllllllllllllll</p>
          <p>llllllllllllllllll</p>
          <p>llllllllllllllllll</p>
          <p>llllllllllllllllll</p>
          <p>llllllllllllllllll</p>
          <p>llllllllllllllllll</p>
          <p>llllllllllllllllll</p>
          <p>llllllllllllllllll</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login-page",
};
</script>
<style lang="scss" scoped>
#login-page {
  background-color: var(--login-bg);
  height: 100vh;
  .rightDown {
    right: 5px;
    bottom: 5px;
    max-height: 200px;
  }
  .leftDown {
    left: 5px;
    bottom: 5px;
    max-height: 200px;
  }
  .rightUp {
    right: 5px;
    top: 5px;
    max-height: 200px;
  }
  .leftUp {
    left: 5px;
    top: 5px;
    max-height: 200px;
  }
}
@media (max-height: 767px) {
  .rightDown,
  .leftDown,
  .rightUp,
  .leftUp {
    display: none;
  }
}
</style>
