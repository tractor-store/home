<script>
  import { Router, Link } from "svelte-routing";
  export let url = "";
</script>

<style>
</style>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="product">Product</Link>
    <Link to="checkout">Checkout</Link>
  </nav>
</Router>

