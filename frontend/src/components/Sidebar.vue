<template>
    <aside class="video-sidebar">
        <ul class="video-list">
            <li class="video-list-item">
                <img class="video-list-item-image" src="https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.jpg" alt="Video Image" />
            </li>
            <li class="video-list-item">
                <img class="video-list-item-image" src="https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/ces_overview.jpg" alt="Video Image" />
            </li>
            <li class="video-list-item">
                <img class="video-list-item-image" src="https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/ces_overview.jpg" alt="Video Image" />
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style lang="scss" scoped>
    .video-sidebar {
        width: 20%;

        @media(max-width: $mobile) {
            display: block;
            width: 100%;
            margin-top: 3.125rem;
        }

        .video-list {
            width: 100%;

            @media(max-width: $mobile) {
                display: inline-flex;
                justify-content: space-evenly;
            }

            &-item {
                display: block;
                margin-bottom: 3.125rem;
                
                @media(max-width: $mobile) {
                    width: 25%;
                }

                &-image {
                    width: 100%;
                    height: 100%;
                    outline: 5px solid transparent;
                    outline-offset: -5px;
                    transition: outline .35s;

                    &:hover {
                        outline: 5px solid $twenty-four-g-orange;
                    }
                }

                .selected-video {
                    outline: 5px solid $twenty-four-g-orange;
                    outline-offset: -5px;
                }
            }
        }
    }
</style>