<template>
    <article class="comments-widget">
        <h3 class="comments-widget-heading">Comments</h3>
        <textarea v-model="commentText" class="comment-input" type="textarea" placeholder="Type up a sweet comment..."></textarea>
        <Button class="comment-button" label="add comment" :callback="addComment"></Button>
        <ul v-if="currentVideo && comments" class="comment-list">
            <SingleComment v-for="comment in comments" :key="comment.id" :comment="comment"></SingleComment>
        </ul>
    </article>
</template>

<script>
    import Button from '@/components/Button';
    import SingleComment from '@/components/SingleComment'
    import { mapState } from 'vuex'
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import moment from 'moment'

    Vue.use(VueAxios, axios);

    export default {
        name: "Comments",
        components: {
            Button,
            SingleComment
        },
        data() {
            return {
                commentText: ''
            }
        },
        props: {
            currentVideo: Object
        },
        computed: mapState(['comments']),
        created() {
            this.$store.dispatch('getVideoComments', this.$route.params.id);
        },
        methods: {
            addComment() {
                const user = this.$store.getters.user;
                const comment = {
                    user_id: user.id,
                    video_id: this.currentVideo.id,
                    comment: this.commentText,
                    comment_date: moment()
                };
                Vue.axios.post('comments', comment).then(result => {
                    this.$store.dispatch('getVideoComments', this.$route.params.id);
                }).catch(error => {
                    throw new Error(`API ${error}`);
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
    .comments-widget {
        width: calc(75% - 50px);
        margin-top: 1.875rem;
        @include fontSize(22px);

        @media(max-width: $mobile) {
            width: 100%;
        }

        &-heading,
        .comment-button {
            margin-bottom: 1.875rem;
        }

        .comment-input {
            width: 100%;
            display: block;
            height: 3.125rem;
            padding: 1.25rem 1.875rem;
            margin-bottom: 1.875rem;
            @include fontSize(22px);
            font-family: $font-light;
            resize: none;
            border: 1px solid $moonglow-accent;

        }
        
    }
</style>