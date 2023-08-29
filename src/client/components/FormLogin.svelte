<script lang='ts'>
    import { UserIcon, LockIcon } from 'svelte-feather-icons';
    import FieldInputIconLeft from './FieldInputIconLeft.svelte'

    let username: string;
    let password: string;

    export let hasRegisterBtn: boolean = false;
    export let registerFunc: (username: string, password: string) => any = undefined;
    export let loginFunc: (username: string, password: string) => any;

    function registerBtnClick() {
        registerFunc(username, password);
    }

    function loginBtnClick() {
        loginFunc(username, password);
    }
</script>

<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <h3 class="title">登入</h3>
                <hr>
                <p class="subtitle">請輸入使用者名稱與密碼以繼續</p>
                <div class="box">
                    <form>
                        <FieldInputIconLeft icon={UserIcon} _value={username} placeholder="使用者名稱"></FieldInputIconLeft>
                        <FieldInputIconLeft icon={LockIcon} _value={password} placeholder="密碼"></FieldInputIconLeft>


                        <div class="field is-grouped mt-5">
                            {#if hasRegisterBtn}
                                 <div class="control is-expanded">
                                     <button class="button is-fullwidth" on:click={registerBtnClick}>註冊</button>
                                 </div>
                            {/if}
                            <div class="control is-expanded">
                                <button class="button is-fullwidth is-info" on:click={loginBtnClick}>登入</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>