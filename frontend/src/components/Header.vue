<template>
    <header class="main-header">
        <div class="main-header-user-bar">
            <h1 class="welcome-message">Welcome, <span>Henry</span></h1>
        </div>
        <div class="main-header-title-bar">
            <img class="logo" src="@/assets/images/svg/24g_logo.svg" alt="24G Logo" />
            <h1 class="app-title">Video Player</h1>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss">

    .main-header {
        color: $white;

        &-user-bar {
            background-color: $moonlight-blue;
            padding: 1.25rem 3.125rem;

            .welcome-message {
                font-family: $font-light;
                @include fontSize(20px);

                span {
                    font-family: $font-med;
                }
            }
        }

        &-title-bar {
            background-color: $midnight-gray;
            padding: 1.875rem 3.125rem;
            display: flex;

            @media(max-width: $mobile) {
                display: block;
            }

            .logo {
                width: 6.25rem;
                margin-right: 2.1875rem;

                @media(max-width: $mobile) {
                    display: block;
                    margin: 0 auto 1.875rem;
                }
            }

            .app-title {
                @include fontSize(28px);
                text-transform: uppercase;
                align-self: center;
                letter-spacing: 2px;

                @media(max-width: $mobile) {
                    display: block;
                    text-align: center;
                }
            }
        }
    }
</style>