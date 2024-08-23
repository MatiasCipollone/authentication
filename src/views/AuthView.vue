<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="authUser">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import AuthService from "@/services/AuthService";

let email: Ref<string> = ref("");
let password: Ref<string> = ref("");

const authUser = async () => {
  const auth = new AuthService();
  const success = await auth.login(email.value, password.value);
  if (success) {
    alert("Login successful");
  } else {
    alert(`
      Siempre va a dar error ya que no hay un backend ---
      Always going to give an error because there is no backend
    `);
  }
};
</script>

<style scoped></style>
