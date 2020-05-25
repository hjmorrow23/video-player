<template>
    <footer class="footer">
        <img class="footer-logo" src="@/assets/images/svg/powered_by_24g.svg" alt="powered by 24G"/>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="scss" scoped>
    .footer {
        text-align: center;
        width: 100%;
        display: block;
        padding: 2rem 0;

        &-logo {
            width: 15%;

            @media(max-width: $tablet-p) and (min-width: $mobile) {
                width: 25%;
            }

            @media(max-width: $mobile) {
                width: 35%;
            }
        }
    }
</style>