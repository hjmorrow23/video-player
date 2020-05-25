<template>
    <li class="comment">
        <img class="comment-user-profile-image" src="@/assets/images/png/placeholder_avatar.png" alt="User Profile Image" />
        <div class="comment-data">
            <div class="comment-data-heading">
                <h4 class="commenter-name">{{user.username}}</h4>
                <span class="comment-time">{{`${dateDiff.diff} ${dateDiff.timeFrame} ago`}}</span>
            </div>
            <p v-if="comment" class="comment-text">{{comment.comment}}</p>
        </div>
    </li>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import moment from 'moment'

    Vue.use(VueAxios, axios);

    export default {
        name: "SingleComment",
        props: ['comment'],
        data() {
            return {
                userComment: this.comment,
                user: {},
                dateDiff: this.calculateCommentDateDiff()
            }
        },
        mounted() {
            this.getUser();
        },
        methods: {
            calculateCommentDateDiff() {
                let diff = (moment() - moment(this.comment.comment_date)) / (1000*60*60*24);
                let timeFrame = diff >= 2 ? 'days' : 'day';
                if(diff > 28) {
                    diff = Math.floor((moment() - moment(this.comment.comment_date)) / (1000*60*60*24*30));
                    timeFrame = diff >= 2 ? 'months' : 'month';
                } else if(diff <= 28 && diff > 7) {
                    diff = Math.floor((moment() - moment(this.comment.comment_date)) / (1000*60*60*24*7));
                    timeFrame = diff >= 2 ? 'weeks' : 'week';
                } else if(diff <= 7 && diff > 1) {
                    diff = Math.floor(diff);
                } else if(diff <= 1 && diff > .04) {
                    diff = Math.floor((moment() - moment(this.comment.comment_date)) / (1000*60*60));
                    timeFrame = diff >= 2 ? 'hours' : 'hour';
                } else if (diff <= .04) {
                    diff = Math.floor((moment() - moment(this.comment.comment_date)) / (1000*60));
                    timeFrame = diff >= 2 ? 'minutes' : 'minute';
                } 
                return {
                    diff,
                    timeFrame
                }
            },
            getUser() {
                Vue.axios.get(`users/${this.userComment.user_id}`).then(result => {
                    this.user = result.data;
                }).catch(error => {
                    throw new Error(`API ${error}`);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .comment {
        display: flex;
        align-content: space-between;
        margin-bottom: 3.125rem;

        &:last-child {
            margin-bottom: 0;
        }

        &-user-profile-image {
            width: 6.25rem;
            margin-right: 1.25rem;

            @media(max-width: 950px) and (min-width: $mobile) {
                height: 6.25rem
            }

            @media(max-width: $mobile) {
                width: 4.6875rem;
                height: 4.6875rem;
            }
        }

        &-data {

            &-heading {
                display: inline-flex;
                margin-bottom: .25rem;

                .commenter-name {
                    margin-right: 1.25rem;
                    font-family: $font-bold;
                }

                .comment-time {
                    font-family: $font-light;
                    color: $moonglow-accent;
                }
            }

            .comment-text {
                font-family: $font-light;
                line-height: 35px;

            }
        }
    }
</style>