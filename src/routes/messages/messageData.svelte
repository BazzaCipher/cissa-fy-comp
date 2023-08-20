<script>
    const messageData = [
        {
            user: '@' + 'username',
            content: 'Hey girlie! I just wanted to ask you for some advice to...',
        },
        {
            user: '@' + 'anotheruser',
            content: "have u done the assignment yet? I'm kinda stuck on...",
        }
    ]

</script>

{#each messageData as message (message)}
    <slot name="message" user={message.user} content={message.content} />
{/each}