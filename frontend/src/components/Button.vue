<template>
    <button class="tfg-button" @click='callback'>
        {{label}}
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            label: String,
            callback: Function
        }
    }
</script>

<style lang="scss" scoped>
    .tfg-button {
        background-color: $twenty-four-g-orange;
        color: $white;
        letter-spacing: 2px;
        font-family: $font-light;
        @include fontSize(18px);
        padding: 0.875rem 2.8125rem;
        transition: background-color .25s;
        cursor: pointer;

        &:hover {
            background-color: $twenty-four-g-orange-accent;
        }
    }
</style>