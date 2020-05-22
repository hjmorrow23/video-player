<template>
    <article class="comments-widget">
        <h3 class="comments-widget-heading">Comments</h3>
        <textarea class="comment-input" type="textarea" placeholder="Type up a sweet comment..."></textarea>
        <Button class="comment-button" label="add comment" :callback="addComment"></Button>
        <ul class="comment-list">
            <SingleComment></SingleComment>
        </ul>
    </article>
</template>

<script>
    import Button from '@/components/Button';
    import SingleComment from '@/components/SingleComment'

    export default {
        name: "Comments",
        components: {
            Button,
            SingleComment
        },
        methods: {
            addComment() {
                console.log('clicked')
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
            width: calc(100% - 3.75rem);
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