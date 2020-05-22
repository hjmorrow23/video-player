<template>
    <li class="comment">
        <img class="comment-user-profile-image" src="@/assets/images/png/placeholder_avatar.png" alt="User Profile Image" />
        <div class="comment-data">
            <div class="comment-data-heading">
                <h4 class="commenter-name">Rick Sanchez</h4>
                <span class="comment-time">9 minutes ago</span>
            </div>
            <p class="comment-text">You take the good, you take the bad, you take em both and there you have the facts of life. The facts of life.</p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "SingleComment"
    }
</script>

<style lang="scss" scoped>
    .comment {
        display: inline-flex;
        align-content: space-between;

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