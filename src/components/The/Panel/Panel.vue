<script lang="ts" setup>
import PanelTags from "@components/The/Panel/Tags.vue";
import PanelMarks from "@components/The/Panel/Marks.vue";
import PanelStyle from "@components/The/Panel/Style.vue";
import { ref } from 'vue';


const panelShow = ref(false)
const togglePanel = () => {
    panelShow.value = !panelShow.value;
    console.log('toggle', panelShow.value)
}
const tabs = ['style', 'tags', 'marks'];
const currentTab = ref(tabs[0]);




// @ts-ignore
window.iak.togglePanel = togglePanel
</script>

<template>
    
<teleport to='body'>
    <transition name="from-rt">
        <div class="the-panel__wrapper" v-show="panelShow" @click.self="togglePanel()">
            <aside class="the-panel__content">
                <header class="panel-header">
                    <div class="tab-container">
                        <button :class="'tags' === currentTab ? 'tab active' : 'tab'" @click="currentTab = 'tags'">
                            <svg t="1678702472194" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3584"><path d="M897.808 429.952l-82.128-78.56a6.704 6.704 0 0 0-0.272 0.448L546.016 94.144A47.84 47.84 0 0 0 512 80l-0.128 0.016v-0.128H208V80a48 48 0 0 0-48 48h352l385.296 370.48 3.504-4.08 0.032 0.016A47.6 47.6 0 0 0 912 464a47.84 47.84 0 0 0-14.192-34.048z m-17.856 145.264a44.976 44.976 0 0 0-0.208-4.16l-0.128-0.72a42.912 42.912 0 0 0-0.624-4.064v-0.064a47.76 47.76 0 0 0-13.44-24.496L498.016 190.144A47.84 47.84 0 0 0 464 176l-0.128 0.016v-0.128H160V176a48 48 0 0 0-48 48h-0.112v304.784h0.208a47.68 47.68 0 0 0 16.368 35.136l-0.176 0.192 400 368 0.096-0.08c6.32 5.568 14.064 9.504 22.688 11.088 0.336 0.08 0.72 0.128 1.072 0.176A43.584 43.584 0 0 0 560 944c14.656 0 27.744-6.576 36.544-16.944l0.016 0.032 272-320-0.016-0.032A47.68 47.68 0 0 0 880 576l-0.048-0.784zM240 368a64 64 0 1 1 0-128 64 64 0 0 1 0 128z" p-id="3585"></path></svg>
                        </button>
                        <button :class="'marks' === currentTab ? 'tab active' : 'tab'" @click="currentTab = 'marks'">
                            <svg t="1678702577311" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4594"><path d="M241.198 65.086h541.604c38.436 0 69.884 31.448 69.884 69.884v768.729c0 0.384-0.003 0.768-0.009 1.151-0.838 51.207-67.281 71.914-99.654 32.23L512 641.633 269.927 938.367c-32.889 40.316-98.188 17.36-98.613-34.668V134.971c-0.001-38.437 31.447-69.885 69.884-69.885z" p-id="4595"></path></svg>
                        </button>
                        <button :class="'style' === currentTab ? 'tab active' : 'tab'" @click="currentTab = 'style'">
                            <svg class="icon the-style" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9656" width="32" height="32"><path d="M975.04 278.186667c8.32-8.32 8.32-21.866667 0-30.186667L776 48.96c-4.053333-4.053333-9.386667-6.293333-15.04-6.293333s-11.093333 2.24-15.04 6.293333L668.906667 125.866667l229.333333 229.226666 76.8-76.906666zM67.52 736v199.146667c0 11.84 9.493333 21.333333 21.333333 21.333333H288c0.106667 0 0.213333-0.106667 0.426667-0.106667l-220.693334-220.8c-0.106667 0.213333-0.213333 0.32-0.213333 0.426667zM898.24 668.906667l-102.826667 102.933333c-4.16 4.16-9.6 6.293333-15.04 6.293333s-10.88-2.133333-15.04-6.293333c-8.32-8.32-8.32-21.866667 0-30.186667l102.826667-102.933333-60.373333-60.373333-148.906667 148.906666c-4.16 4.16-9.6 6.293333-15.04 6.293334s-10.88-2.133333-15.04-6.293334c-8.32-8.32-8.32-21.866667 0-30.186666L777.493333 548.266667l-36.266666-36.266667 98.026666-98.026667-99.52-99.52L251.733333 802.346667l99.52 99.626666L512 741.226667l233.813333 233.813333c4.053333 4.053333 9.386667 6.293333 15.04 6.293333s11.093333-2.24 15.04-6.293333l199.146667-199.146667c8.32-8.32 8.32-21.866667 0-30.186666l-76.8-76.8zM122.026667 672.64l99.52 99.52 488-488-99.52-99.52-98.026667 98.133333-36.16-36.16-148.8 148.693334c-4.16 4.16-9.6 6.293333-15.04 6.293333s-10.88-2.133333-15.04-6.293333c-8.32-8.32-8.32-21.866667 0-30.186667l148.8-148.8-60.373333-60.373333-102.826667 102.826666c-4.16 4.16-9.6 6.293333-15.04 6.293334s-10.88-2.133333-15.04-6.293334c-8.32-8.32-8.32-21.866667 0-30.186666L355.2 125.866667l-77.013333-77.013334c-8-8-22.186667-8-30.186667 0L48.96 248c-8.32 8.32-8.32 21.866667 0 30.186667L282.773333 512 122.026667 672.64z" p-id="9657"></path></svg>
                        </button>
                    </div>
                </header>
                <div class="panel-container">
                    <PanelTags v-show="currentTab === 'tags'" />
                    <PanelMarks v-show="currentTab === 'marks'" />
                    <PanelStyle v-show="currentTab === 'style'" />
                </div>
            </aside>
        </div>
    </transition>
</teleport>
</template>

<style scoped>
.the-panel__wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
    z-index: 3000;
}
.the-panel__content{
    position: absolute;
    right: 3em;
    bottom: 2em;
    width: 45vw;
    height: 60vh;
    min-width: 100px;
    min-height: 250px;
    padding: 1em;
    border-radius: var(--base-radius);
    background: var(--card-bg);
    color: var(--card-text-color);
    box-shadow: 0.5vw 0.5vw 16px 0 rgba(0, 0, 0, 0.4);
    transition: 0.3s cubic-bezier(.34,.99,.6,1);
    display: flex;
    flex-direction: column;
    gap: 1em;
}
@media (max-width: 1200px) {
    .the-panel__content{
        right: 10vw;
        width: 80vw;
    }
}
.panel-header{
    display: flex;
    justify-content: center;
    align-items: center;
}
.tab-container{
    gap: 0.2em;
    background: var(--card-tab-bg);
    padding: 4px;
    border-radius: 1em;
    min-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.panel-header .tab{
    min-width: 2em;
    min-height: 2em;
    flex: 1;
    border-radius: var(--base-radius);
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}
.panel-header .tab.active{
    background-color: var(--card-inner);
    color: var(--card-text-color);
}
.panel-container{
    flex: 1;
    border-radius: var(--base-radius);
    overflow: scroll;
}


.from-rt-enter-from, .from-rt-leave-to{
    opacity: 0;
}
.from-rt-enter-to, .from-rt-leave-from{
    opacity: 1;
}
.from-rt-enter-active,.from-rt-leave-active{
    transition: 0.3s cubic-bezier(.34,.99,.6,1);
}
.from-rt-enter-from .the-panel__content, .from-rt-leave-to .the-panel__content{
    transform: translate(calc(100% + 2em), 50%);
}
.from-rt-enter-to .the-panel__content, .from-rt-leave-from .the-panel__content{
    transform: translate(0,0);
}
</style>