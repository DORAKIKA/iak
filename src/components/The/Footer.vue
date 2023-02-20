<script setup lang="ts">
import { beian, footer_links, author, slogan } from 'src/config';
</script>

<template>
    <footer id="footer" class="the-footer">
        <div class="footer-left">
            <h2 class="footer-title">{{author}}'S BLOG</h2>
            <p>{{ slogan }}</p>
            <p>
                <a href="https://beian.miit.gov.cn/" target="_blank">{{beian}}</a>
                |
                Theme By <a href="https://astro.build/" target="_blank">Astro</a> & <a target="_blank" href="https://github.com/DORAKIKA/iak">Iak</a>
            </p>
            
        </div>
        <ul class="footer-right">
            <li v-for="flink in footer_links" :key="flink.href">
                <a :href="flink.href" class="footer-icon" :title="flink.title" v-html="flink.icon"></a>
            </li>
        </ul>
    </footer>
</template>


<style scoped>
#footer{
    padding: 60px var(--side-padding);
    margin-top: 2rem;
    color: white;
    display: grid;
    grid-template-columns: 2fr 1fr;
    position: relative;
    box-shadow: inset 0 4px rgba(255, 255, 255, 0.2);
}
@media (max-width: 768px) {
    #footer{
        grid-template-columns: 1fr;
        gap: 0.5rem;
    }
}
#footer .footer-left{
    align-self: start;
}
#footer .footer-title{
    margin: 0;
    display: inline-block;
    box-shadow:  0 -8px 0 inset rgba(255, 255, 255, 0.2);
}
#footer .footer-right{
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: right;
    gap: 1rem;
    align-self: end;
}
#footer .footer-right .footer-icon{
    display: inline-flex;
    width: 36px;
    height: 36px;
    background-color: var(--deep-bg);
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    transition: background-color 0.3s;
}
#footer .footer-right .footer-icon:hover{
    background-color: white;
}
#footer .footer-right svg,
#footer .footer-right img{
    width: 18px;
    height: 18px;
}
#footer .footer-right path{
    fill: #233742;
}
</style>