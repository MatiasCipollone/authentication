<template>
  <div class="container">
    <h1>Social View</h1>
    <button @click="loginGoogle">Login with Google</button>
    <button @click="loginGithub">Login with Github</button>
  </div>
</template>

<script setup lang="ts">
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  GithubAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

const loginGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      alert("User authenticated", result);
    })
    .catch((error) => {
      alert("LOGIN FAIL: ", error.message);
    });
};

const loginGithub = () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      alert("User authenticated", result);
    })
    .catch((error) => {
      alert("LOGIN FAIL: ", error.message);
    });
};
</script>

<style scoped></style>
