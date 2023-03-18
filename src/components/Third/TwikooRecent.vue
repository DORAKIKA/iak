<script setup lang="ts">
import { twikoo as twikoo_config } from 'src/config';
import { onMounted, ref } from 'vue';

interface Comment {
    id: string;
    url: string;
    nick: string;
    mailMd5: string;
    link: string;
    comment: string;
    commentText: string;
    created: number;
    avatar: string;
    relativeTime: string;
}
const comments = ref<Comment[]>([]);
onMounted(() => {
    // @ts-ignore
    twikoo && twikoo.getRecentComments({
        envId: twikoo_config.url, // 环境 ID
        pageSize: 10, // 获取多少条，默认：10，最大：100
        includeReply: false // 是否包括最新回复，默认：false
    }).then(function (res: any) {
        comments.value = res;
    }).catch(function (err: any) {
        // 发生错误
        console.error(err);
    });
})
</script>

<template>
    <h2 class="title">最近评论</h2>
    <div class="twikoo-recent">
        <a  class="comment-item" v-for="comment in comments" :key="comment.id" :href="comment.url" :title="comment.commentText">
            <img class="comment-item__avatar" :src="comment.avatar" alt="">
            <span class="comment-item__content">
                {{ comment.commentText.replaceAll(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/g,'[网址]') }}
            </span>
        </a>
        <a class="comment-item" :href="twikoo_config.board_url" title="留下评论">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9379" width="128" height="128"><path d="M711.339008 540.444672h-170.89536v170.894336c0 15.643648-12.742656 28.443648-28.443648 28.443648s-28.444672-12.8-28.444672-28.443648v-170.89536H312.660992c-15.643648 0-28.443648-12.742656-28.443648-28.443648s12.8-28.444672 28.443648-28.444672h170.89536V312.660992c0-15.643648 12.742656-28.443648 28.443648-28.443648s28.444672 12.8 28.444672 28.443648v170.89536h170.894336c15.643648 0 28.443648 12.742656 28.443648 28.443648s-12.8 28.444672-28.443648 28.444672M512 56.889344c-251.334656 0-455.110656 203.776-455.110656 455.110656 0 251.334656 203.776 455.110656 455.110656 455.110656 251.334656 0 455.110656-203.776 455.110656-455.110656 0-251.334656-203.776-455.110656-455.110656-455.110656" p-id="9380"></path></svg>
            <span class="comment-item__content">留下评论</span>
        </a>
    </div>
</template>

<style scoped>
.title{
    color: white;
    font-size: 2em;
    margin-bottom: 0.5em;
    text-align: center;
}
.twikoo-recent{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5em;
}
.comment-item{
    width: min-content;
    flex-shrink: 1;
    max-width: 300px;
    display: flex;
    align-items: center;
    background-color: var(--color-op);
    padding: var(--base-radius);
    border-radius: calc(2 * var(--base-radius));
    transition: 0.3s;
}
.comment-item:hover{
    background-color: var(--color-deep-op);
    color: var(--main-color);
}
.comment-item .comment-item__avatar{
    width: 2em;
    height: 2em;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
}
.comment-item .comment-item__content{
    flex: 1;
    width: calc(100% - 2.5em);
    margin-left: 0.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>