<script lang='ts'>
    import axios from 'axios';

    import FormLogin from "../components/FormLogin.svelte";
    import { readURLQuery } from '../ts/util';

    const {fromURL, toURL} = readURLQuery(location.search);

    function loginFunc(username: string, password: string) {
        axios.post('/api/account/login', {username, password})
            .then(res => {
                const {loginToken} = res.data;
                localStorage.setItem('loginToken', loginToken);
                
            })
            .catch(err => {
                console.error(err);
            })
    }

    function registerFunc(username: string, password: string) {

    }
</script>

<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <FormLogin {loginFunc} {registerFunc} hasRegisterBtn/>
        </div>
    </div>
</section>