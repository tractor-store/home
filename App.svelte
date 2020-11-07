<script>
  import { Router, Link } from "svelte-routing";
  export let url = "";
</script>

<style>
</style>

<Router url="{url}">
<div>
  <h1>Welcome Home!</h1>
  <strong>Here are three tractors:</strong>
  <ul>
    <li>
    <Link to="product/eicher">Eicher</Link>
    </li>
    <li>
    <Link to="product/porsche">Porsche</Link>
    </li>
    <li>
    <Link to="product/fendt">Fendt</Link>
    </li>
  </ul>
</div>
</Router>

