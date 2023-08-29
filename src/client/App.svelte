<script lang='ts'>
    import {Router, Route} from "svelte-routing";
    import HomePage from "./pages/HomePage.svelte";
    import LoginPage from "./pages/LoginPage.svelte"

    import 'bulma/css/bulma.css';
    
    export let url = "";
</script>

<Router url="{url}" basepath="/game">
    <Route path="/">
        <HomePage />
    </Route>
    <Route path="/login">
        <LoginPage />
    </Route>
    <Route path="/about">
        <!-- <AboutPage/> -->
        <h1>absout page</h1>
    </Route>
</Router>