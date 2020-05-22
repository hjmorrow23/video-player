<template>
    <section class="video-section">
        <h2 class="video-title">24G Super Awesome Video</h2>
        <div class="video-flex-container">
            <div class="video-layout-container">
                <div class="video-container">
                    <video class="video" src="https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.mp4" width="100%"></video>
                </div>
                <div class="video-data-row">
                    <p class="views">300 views</p>
                    <div class="like-row">
                        <p class="likes"><span></span> 35</p>
                        <p class="dislikes"><span></span> 4</p>
                    </div>
                </div>
            </div>
            <Sidebar></Sidebar>
        </div>
        <Comments></Comments>
    </section>
</template>

<script>
    import Comments from '@/components/Comments'
    import Sidebar from '@/components/Sidebar'

    export default {
        name: "Player",
        components: {
            Sidebar,
            Comments
        }
    }
</script>

<style lang="scss" scoped>
    .video-section {
        width: 100%;

        .video-flex-container {
            display: inline-flex;

            @media(max-width: $mobile) {
                display: block;
            }
        }

        .video-layout-container {
            flex-grow: 0.7;
            padding-right: 50px;
            width: calc(80% - 50px);

            @media(max-width: $mobile) {
                display: block;
                width: 100%;
                padding-right: 0;
            }
        }

        .video-title {
            font-family: $font-med;
            @include fontSize(28px);
            color: $text;
            margin-bottom: 1.875rem;

            @media(max-width: $mobile) {
                @include fontSize(32px);
            }
        }

        .video-container {
            margin-bottom: 1.875rem;
        }

        .video-data-row {
            width: 100%;
            display: inline-flex;
            justify-content: space-between;
            @include fontSize(22px);
            font-family: $font-med;
            padding-bottom: 1.875rem;
            border-bottom: 2px solid $moonglow-accent;

            .views {
                justify-self: flex-start;
            }

            .like-row {
                justify-self: flex-end;
                color: $twenty-four-g-orange;

                .likes,
                .dislikes {
                    display: inline-block;
                    cursor: pointer;

                    span {
                        display: inline-block;
                        width: 1.25rem;
                        height: 1.5rem;
                        background-repeat: no-repeat;
                        background-size: 1.25rem;
                        background-position-y: .25rem;
                        position: relative;
                        top: .2rem;
                        margin-right: .25rem;
                    }
                }

                .likes {
                    margin-right: 40px;

                    span {
                        background-image: url('../assets/images/svg/thumbs_up.svg');
                    }
                }

                .dislikes {
                    span {
                        background-image: url('../assets/images/svg/thumbs_down.svg');
                    }
                }
            }
        }
    }
</style>