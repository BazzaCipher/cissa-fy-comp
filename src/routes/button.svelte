<script>
    export let buttonType = 'primary';
    export let flat = false;
    export let inverse = false;
    export let disabled = false

</script>

<button class={buttonType} class:flat={flat} class:inverse={inverse} class:disabled={disabled}>
    <slot></slot>
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    }
    .primary {
		background: #45c496;
        color: white
        
    }
    .secondary {
        background: #d91b42;
        color: white
    }
    .flat {
        box-shadow: none
    }
    .primary.inverse {
        color: #d91b42;
        background: white;
        border: 2px solid #d91b42
    }
    .secondary.inverse {
        color: #45c496;
        background: white;
        border: 2px solid #45c496
    }
    .primary.disabled {
        pointer-events: none;
        background-color: whitesmoke;
        color: lightgrey
    }
    .secondary.disabled {
        pointer-events: none;
        background-color: whitesmoke;
        color: lightgrey
    }

</style>