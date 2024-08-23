import { ref, Ref } from "vue";

class AuthService {
  private jwt: Ref<string>;
  private error: Ref<string>;

  constructor() {
    this.jwt = ref("");
    this.error = ref("");
  }

  getJwt(): Ref<string> {
    return this.jwt;
  }

  getError(): Ref<string> {
    return this.error;
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      // La idea es que aquí se haga la petición al backend para obtener el JWT
      // The idea is to make the request to the backend to get the JWT here
      const res = await fetch("Url backend", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const response = await res.json();
      if ("errors" in response) {
        this.error.value = "Login failed";
        return false;
      }

      this.jwt.value = response.data.access_token;
      return true;
    } catch (error) {
      this.error.value = "Login failed";
      return false;
    }
  }
}

export default AuthService;
