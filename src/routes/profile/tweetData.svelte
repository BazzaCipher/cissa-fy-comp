<script>
    const tweetData = [
        {
            user: '@' + 'username',
            content: 'Mauris nibh arcu, ornare eget imperdiet auctor, convallis ut eros. Donec vitae massa ut velit iaculis malesuada. Proin non efficitur lacus. Phasellus vitae turpis urna. Curabitur vitae erat erat. Duis fermentum nulla id interdum viverra',
            likes: 45,
            comments: 5,
            retweets: 100
        },
        {
            user: '@' + 'anotheruser',
            content: 'Mauris nibh arcu, ornare eget imperdiet auctor, convallis ut eros. Donec vitae massa ut velit iaculis malesuada. Proin non efficitur lacus. Phasellus vitae turpis urna. Curabitur vitae erat erat. Duis fermentum nulla id interdum viverra',
            likes: 45,
            comments: 5,
            retweets: 100
        }
    ]

</script>

{#each tweetData as tweet (tweet)}
    <slot name="tweet" user={tweet.user} content={tweet.content} likes={tweet.likes} comments={tweet.comments} retweets={tweet.retweets} />
{/each}