<template>
    <section class="video-section" v-if="currentVideo">
        <h2 class="video-title">24G Super Awesome Video</h2>
        <div class="video-flex-container">
            <div class="video-layout-container">
                <div class="video-container">
                    <video class="video" v-if="currentVideo" @ended="incrementVideoField(id, 'views')" :src="currentVideo.video_url" :poster="currentVideo.thumb_url" width="100%" controls></video>
                    <p v-else>Loading...</p>
                </div>
                <div class="video-data-row">
                    <p class="views">{{currentVideo ? `${currentVideo.views} views` : '0 views'}}</p>
                    <div class="like-row">
                        <p class="likes" @click="incrementVideoField(id, 'likes')"><span></span> {{currentVideo ? `${currentVideo.likes}` : '0'}}</p>
                        <p class="dislikes" @click="incrementVideoField(id, 'dislikes')"><span></span> {{currentVideo ? `${currentVideo.dislikes}` : '0'}}</p>
                    </div>
                </div>
            </div>
            <Sidebar></Sidebar>
        </div>
        <Comments :currentVideo="currentVideo"></Comments>
    </section>
</template>

<script>
    import Comments from '@/components/Comments'
    import Sidebar from '@/components/Sidebar'
    import { mapState } from 'vuex'
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios);

    export default {
        name: "Player",
        components: {
            Sidebar,
            Comments
        },
        data() {
            return {
                id: this.$route.params.id
            }
        },
        computed: mapState(['currentVideo']),
        created() {
            this.$store.dispatch('getVideo', this.$route.params.id);
        },
        methods: {
            incrementVideoField(id, field) {
                Vue.axios.put(`videos/${this.$route.params.id}/${field}`).then(result => {
                    this.currentVideo[field] = result.data[0][0][0][field];
                }).catch(error => {
                    console.log(error)
                    throw new Error(`API ${error}`);
                });
            },
            testEvent() {
                console.log('played')
            }
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