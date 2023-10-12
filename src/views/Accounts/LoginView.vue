<template>
  <div id="login-page" class="p-relative d-flex align-items-center">
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
        <div class="col-sm-10 login col-lg-5 bg-white p-3">
          <div class="d-flex align-items-center justify-content-center logo">
            <router-link to="/"
              ><img class="img-fluid" src="@/assets/logo.png" alt=""
            /></router-link>
          </div>
          <form action="" id="form-login">
            <input
              v-model="email"
              type="text"
              placeholder="Entrer votre email"
            />
            <input
              v-model="password"
              type="password"
              placeholder="Entrer votre mot de passe"
            />
            <button @click.prevent="loginUser" id="login-submit" type="submit">
              Continuer
            </button>
          </form>
          <p class="c-grey my-3">Or</p>
          <div class="boxes">
            <div class="box" v-for="way in ways" :key="way">
              <span>
                <img :src="way.img" alt="" />
              </span>
              <span class="way-text">
                {{ way.text }}
              </span>
            </div>
          </div>
          <div class="my-3">
            <ul class="d-flex justify-content-center">
              <li class="p-1">
                <a
                  id="resetPassword"
                  href="/login/resetpassword?application=trello&amp;continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&amp;display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D"
                  >Can't log in?</a
                >
              </li>
              <li>
                <p class="fw-bold">.</p>
              </li>
              <li class="p-1">
                <a
                  id="signup"
                  class="primary-action"
                  href="/signup?application=trello&amp;continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&amp;display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D"
                  >Create an account</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { AccountsData, toggleLogin } from "@/Js/Accounts";
// import { onlineUser } from "@/Js/User.js";

export default {
  name: "login-page",
  data() {
    return {
      AccountsData,
      email: "",
      password: "",
      ways: [
        {
          text: "Continuer avec google",
          img: require("@/assets/login/google-logo.svg"),
        },
        {
          text: "Continuer avec microsoft",
          img: require("@/assets/login/microsoft.svg"),
        },
        {
          text: "Continuer avec Apple",
          img: require("@/assets/login/apple-logo.svg"),
        },
      ],
    };
  },
  methods: {
    loginUser() {
      const user = AccountsData.find((user) => {
        return user.email === this.email && user.password === this.password;
      });
      console.log("user", user);
      if (user) {
        toggleLogin();
        user.isLoggedIn = !user.isLoggedIn;
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.go(-1);
      } else {
        console.log("user not correct");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#login-page {
  background-color: var(--login-bg);
  min-height: 100vh;
  .login {
    width: 400px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    .logo {
      margin-top: 10px;
      img {
        max-height: 50px;
        border-radius: 2px;
      }
    }
    #form-login {
      text-align: center;
      margin: 20px;
      input[type="text"],
      [type="password"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        transition: 0.3s;
        &:focus {
          outline: none;
          border: 1px solid black;
        }
      }
      #login-submit {
        background-color: var(--ds-background-brand-bold, #0052cc);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 12px 20px;
        font-size: 16px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 100%;
        transition: 0.3s;
        &:hover {
          background-color: var(--ds-background-brand-bold-hovered, #0065ff);
        }
      }
    }
    .boxes {
      margin-bottom: 16px;
      margin: 0;
      padding: 0;
      .box {
        cursor: pointer;
        display: flex;
        background: white;
        margin-bottom: 10px;
        padding: 5px 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 0px !important;
        transition: 0.3s;
        &:hover {
          opacity: 0.9;
          box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 5px 0px !important;
        }
        img {
          height: 18px;
          width: 18px;
        }
        .way-text {
          flex: 1;
        }
      }
    }
  }
  #resetPassword,
  #signup {
    color: #0052cc !important;
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  .rightDown,
  .leftDown,
  .rightUp,
  .leftUp {
    display: none;
  }
}
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
</style>
