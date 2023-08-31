<script lang='ts'>
    import {Router, Route} from "svelte-routing";
    import HomePage from "./pages/HomePage.svelte";
    import LoginPage from "./pages/LoginPage.svelte"

    import 'bulma/css/bulma.css';
    
    export let url = "";
</script>

<Router url="{url}" basepath="/game">
    <Route path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route>
        <h1>Not Foundy</h1>
    </Route>
</Router>