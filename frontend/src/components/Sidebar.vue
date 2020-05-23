<template>
    <aside class="video-sidebar">
        <ul class="video-list">
            <li v-for="video in videos" :key="video.id" class="video-list-item">
                <router-link :to="'/video/' + video.id">
                    <img v-if="video.id.toString() === currentVideoId" class="video-list-item-image selected-video" :src="video.thumb_url" :alt="video.title" />
                    <img v-else class="video-list-item-image" :src="video.thumb_url" :alt="video.title" />
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "Sidebar",
        data() {
            return {
                currentVideoId: this.$route.params.id
            }
        },
        computed: mapState(['videos']),
        created() {
            this.$store.dispatch('getVideos');
        }
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