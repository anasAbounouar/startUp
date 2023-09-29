<template>
  <div class="upNavbar">
    <div class="container">
      <div class="row justify-content-space-between">
        <div
          class="col-lg-4 col-md-6 col-sm-12 contact d-flex align-items-center justify-content-space-around ms-0 ps-0"
        >
          <a href="" class="d-flex align-items-center">
            <i class="fa-regular fa-envelope me-2"></i>
            <span class="c-white">dipoDirect@gmail.com</span>
          </a>
          <div class="d-flex align-items-center">
            <i class="fa-regular fa-message me-2"></i>
            <router-link to="/" class="c-white">
              <span>Contact us</span>
            </router-link>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-12 socials d-flex align-items-center pe-0 me-0"
        >
          <a href="" class="d-flex align-items-center">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="" class="d-flex align-items-center">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="" class="d-flex align-items-center">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "upnavbar",
};
</script>
<style lang="scss" scoped>
.upNavbar {
  position: relative;
  z-index: 999999999;
  height: var(--upNavbar-height);
  @media (max-width: 991px) {
    padding-top: 20px;
    display: none;
  }
  background-color: var(--brand-color);
  .contact {
    i {
      color: var(--secondary-color-coral);
      font-size: 25px;
    }
    span {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.15px;
    }
  }
  .socials {
    justify-content: end;
    a {
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.4);
      padding: 7px;
      margin: 7px;
      transition: 0.3s;
      i {
        font-size: 20px;
        color: white;
        transition: 0.3s;
      }
    }
    a:hover {
      background-color: var(--brand-color);
      i {
        font-size: 21;
        transform: translateY(-2px);
      }
    }
    @media (max-width: 767px) {
      justify-content: space-around;
      margin-top: 20px;
    }
  }
}
</style>
