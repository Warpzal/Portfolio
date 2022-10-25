<template>
    <home-section>
        <template #title> <LayersIcon /> Projects </template>
        <div class="columns is-multiline projects">
            <div
                v-for="project in projects"
                :key="project.name"
                class="column is-half"
            >
                <ProjectCard :project="project" />
            </div>
        </div>
    </home-section>
</template>

<script>
    import { LayersIcon } from 'vue-feather-icons'
    import ProjectCard from './ProjectCard.vue'
    export default {
        components: {
            LayersIcon: LayersIcon,
            ProjectCard: ProjectCard,
        },
        data() {
            return {
                projects: [
                    {
                        name: 'Pixiv Premium',
                        description:
                            'Creating a page from scratch with assets, HTML & CSS only',
                        language: 'html',
                        stars: 0,
                        url: 'https://github.com/zalonics/pixiv',
                        website: 'https://pixiv-bice.vercel.app/',
                        thumbnail: 'https://files.catbox.moe/6d7f6d.webp',
                    },
                    {
                        name: 'Skillshare Promotional Email',
                        description:
                            'Responsive HTML Email works in all popular email clients',
                        language: 'html',
                        stars: 0,
                        url:
                            'https://github.com/Zalonics/Skillshare-HTML-Email',
                        website: 'https://skillshare-email.vercel.app/',
                        thumbnail: 'https://files.catbox.moe/02vhcy.png',
                    },
                    {
                        name: 'AnimeReactions.moe',
                        description:
                            'Easily find and upload reaction images. Fullstack App',
                        language: 'vue',
                        stars: 0,
                        url: 'https://github.com/zalonics/anireact',
                        website: 'https://animereactions.moe',
                        thumbnail: 'https://files.catbox.moe/44gorg.webp',
                    },
                    {
                        name: 'Yui',
                        description:
                            'A multiplayer anime song quiz game made with Vue, Node.js, Firebase, WebSockets',
                        language: 'vue',
                        stars: 0,
                        url: 'https://github.com/yanyamz/Yui',
                        website: 'https://aniopeningsonline.netlify.app',
                        video: 'HEbPzbXhmns',
                    },
                    {
                        name: 'Nice Commerce',
                        description: 'A fully-responsive landing page',
                        language: 'vue',
                        stars: 0,
                        url: 'https://github.com/yanyamz/Nice_Commerce',
                        website: 'https://nice-commerce.netlify.app/',
                        thumbnail: 'https://files.catbox.moe/wc9l1t.png',
                    },
                    {
                        name: 'Key Visual Arts',
                        description: 'A fully-responsive landing page',
                        language: 'vue',
                        stars: 0,
                        url: 'https://github.com/yanyamz/Key_Visual_Arts',
                        website: 'https://keyvisualarts.netlify.app/',
                        thumbnail: 'https://files.catbox.moe/5xsrpd.webp',
                    },
                    {
                        name: 'Planet Viewer',
                        description: 'Fully responsive complete website',
                        language: 'vue',
                        stars: 0,
                        url: 'https://github.com/yanyamz/Planet_Viewer',
                        website: 'https://planet-viewer.netlify.app/mercury',
                        thumbnail: 'https://files.catbox.moe/k0zmi7.webp',
                    },
                ],
            }
        },
    }
</script>
