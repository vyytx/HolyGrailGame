<script lang='ts' context='module'>
    
</script>

<div class="field is-grouped">
    <p class="control is-expanded">
        <input class="input" type="text" {placeholder} bind:this={input}>
    </p>
    <p class="control">
        <button class="button is-info" on:click={clkFunc}>
            {btnText}
        </button>
    </p>
</div>

<script lang="ts">
    let input: HTMLInputElement;    // bond

    export let btnText: string;
    export let placeholder: string;
    export let whenClick: (inputVal: string) => any;

    function clkFunc() {
        whenClick(input.value);
    }
</script>