<template>
    <div>
        <home-section>
            <template #title>
                <LayersIcon /> Projects -
                <span class="category-subtitle">
                    {{ currentlyShowing }}
                </span>
            </template>
            <div class="category-links">
                <a
                    class="category-link"
                    :class="{ active: currentlyShowing === 'all' }"
                    @click="filteredProjects('all')"
                    href="#all"
                    >All |
                </a>
                <a
                    class="category-link"
                    :class="{ active: currentlyShowing === 'email' }"
                    @click="filteredProjects('email')"
                    href="#emails"
                >
                    HTML Emails |
                </a>
                <a
                    class="category-link"
                    :class="{ active: currentlyShowing === 'frontend' }"
                    @click="filteredProjects('frontend')"
                    href="#frontend"
                >
                    Frontend |
                </a>
                <a
                    class="category-link"
                    :class="{ active: currentlyShowing === 'fullstack' }"
                    @click="filteredProjects('fullstack')"
                    href="#fullstack"
                >
                    Fullstack
                </a>
            </div>
            <div class="columns is-multiline projects">
                <div
                    v-for="project in showProjects"
                    :key="project.name"
                    class="column is-flexy"
                >
                    <ProjectCard :project="project" />
                </div>
            </div>
        </home-section>
    </div>
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
            mode: '',
            currentlyShowing: 'all',
            showProjects: [
                {
                    name: 'Pixiv Premium',
                    category: 'frontend',
                    type: 'Landing Page',
                    technologies: ['HTML', 'CSS', 'GSAP', 'Vue'],
                    description: `I wanted to practice creating parallax effects with native CSS, over Javascript. I also wanted to recreate a website using my own techniques, and ofcourse, it's fully responsive.`,
                    language: 'html',
                    stars: 0,
                    url: 'https://github.com/zalonics/pixiv',
                    website: 'https://pixiv-bice.vercel.app/',
                    thumbnail: 'https://files.catbox.moe/6d7f6d.webp',
                },
                {
                    name: 'Nice Commerce',
                    category: 'frontend',
                    technologies: ['HTML', 'CSS', 'Vue'],
                    type: 'Landing Page',
                    description:
                        'A fully-responsive landing page made utilizing modern techniques',
                    language: 'vue',
                    stars: 0,
                    url: 'https://github.com/yanyamz/Nice_Commerce',
                    website: 'https://nice-commerce.netlify.app/',
                    thumbnail: 'https://files.catbox.moe/wc9l1t.png',
                },
                {
                    name: 'Key Visual Arts',
                    category: 'frontend',
                    technologies: ['HTML', 'CSS'],
                    type: 'Landing Page',
                    description:
                        'I wanted to practice recreating a website my own way to discover the type of challenges I would have, and to challenge myself.',
                    language: 'vue',
                    stars: 0,
                    url: 'https://github.com/yanyamz/Key_Visual_Arts',
                    website: 'https://keyvisualarts.netlify.app/',
                    thumbnail: 'https://files.catbox.moe/5xsrpd.webp',
                },
                {
                    name: 'Planet Viewer',
                    category: 'frontend',
                    technologies: ['HTML', 'CSS'],
                    type: 'Landing Page',
                    description:
                        'Frontend Mentor challenge. Fun converting a Figma design to HTML and CSS, had a lot of fun utilizing grid features on this one when it comes to responsiveness.',
                    language: 'vue',
                    stars: 0,
                    url: 'https://github.com/yanyamz/Planet_Viewer',
                    website: 'https://planet-viewer.netlify.app/mercury',
                    thumbnail: 'https://files.catbox.moe/k0zmi7.webp',
                },
                {
                    name: 'Skillshare',
                    type: 'Promotional Email',
                    category: 'email',
                    technologies: ['HTML', 'CSS'],
                    description:
                        'Responsive HTML Email works in all popular email clients',
                    language: 'mjml',
                    stars: 0,
                    url: 'https://github.com/Zalonics/Skillshare-HTML-Email',
                    website: 'https://skillshare-email.vercel.app/',
                    thumbnail: 'https://files.catbox.moe/02vhcy.png',
                },
                {
                    name: 'Travelocity',
                    type: 'Promotional Email',
                    category: 'email',
                    technologies: ['HTML', 'CSS'],
                    description:
                        'Responsive HTML Email works in all popular email clients',
                    language: 'mjml',
                    stars: 0,
                    url: 'https://github.com/Zalonics/Travelocity-Email',
                    website: 'https://travelocity-email.vercel.app/',
                    thumbnail: 'https://files.catbox.moe/ccxtp1.png',
                },

                {
                    name: 'AnimeReactions.moe',
                    category: 'fullstack',
                    technologies: ['Vue', 'Pocketbase'],
                    type: 'Fullstack Web App (CRUD)',
                    description:
                        "Easily find and upload reaction images. Mainly made this for myself and friends, aswell as to test out some of the latest technologies! Pocketbase is a selfhosted backend as a service that's supposed to replace services like firebase.",
                    language: 'vue',
                    stars: 0,
                    url: 'https://github.com/zalonics/anireact',
                    website: 'https://animereactions.moe',
                    thumbnail: 'https://files.catbox.moe/44gorg.webp',
                },
                {
                    name: 'Yui',
                    category: 'fullstack',
                    technologies: ['Vue', 'Web Sockets', 'NodeJS', 'Firebase'],
                    type: 'Fullstack, Realtime Web Application',
                    description:
                        'A multiplayer anime song quiz game, the idea is to create a room with a bunch of friends and compete to see who can guess most of the songs correctly!',
                    language: 'vue',
                    stars: 0,
                    url: 'https://github.com/yanyamz/Yui',
                    website: 'https://aniopeningsonline.netlify.app',
                    video: 'HEbPzbXhmns',
                },
            ],
            projects: [
                {
                    name: 'Pixiv Premium',
                    category: 'frontend',
                    type: 'Landing Page',
                    technologies: ['HTML', 'CSS', 'GSAP', 'Vue'],
                    description: `I wanted to practice creating parallax effects with native CSS, over Javascript. I also wanted to recreate a website using my own techniques, and ofcourse, it's fully responsive.`,
                    language: 'html',
                    stars: 0,
                    url: 'https://github.com/zalonics/pixiv',
                    website: 'https://pixiv-bice.vercel.app/',
                    thumbnail: 'https://files.catbox.moe/6d7f6d.webp',
                },
                {
                    name: 'Nice Commerce',
                    category: 'frontend',
                    technologies: ['HTML', 'CSS', 'Vue'],
                    type: 'Landing Page',
                    description:
                        'A fully-responsive landing page made utilizing modern techniques',
                    language: 'vue',
                    stars: 0,
                    url: 'https://github.com/yanyamz/Nice_Commerce',
                    website: 'https://nice-commerce.netlify.app/',
                    thumbnail: 'https://files.catbox.moe/wc9l1t.png',
                },
                {
                    name: 'Key Visual Arts',
                    category: 'frontend',
                    technologies: ['HTML', 'CSS'],
                    type: 'Landing Page',
                    description:
                        'I wanted to practice recreating a website my own way to discover the type of challenges I would have, and to challenge myself.',
                    language: 'vue',
                    stars: 0,
                    url: 'https://github.com/yanyamz/Key_Visual_Arts',
                    website: 'https://keyvisualarts.netlify.app/',
                    thumbnail: 'https://files.catbox.moe/5xsrpd.webp',
                },
                {
                    name: 'Planet Viewer',
                    category: 'frontend',
                    technologies: ['HTML', 'CSS'],
                    type: 'Landing Page',
                    description:
                        'Frontend Mentor challenge. Fun converting a Figma design to HTML and CSS, had a lot of fun utilizing grid features on this one when it comes to responsiveness.',
                    language: 'vue',
                    stars: 0,
                    url: 'https://github.com/yanyamz/Planet_Viewer',
                    website: 'https://planet-viewer.netlify.app/mercury',
                    thumbnail: 'https://files.catbox.moe/k0zmi7.webp',
                },
                {
                    name: 'Skillshare',
                    type: 'Promotional Email',
                    category: 'email',
                    technologies: ['HTML', 'CSS'],
                    description:
                        'Responsive HTML Email works in all popular email clients',
                    language: 'mjml',
                    stars: 0,
                    url: 'https://github.com/Zalonics/Skillshare-HTML-Email',
                    website: 'https://skillshare-email.vercel.app/',
                    thumbnail: 'https://files.catbox.moe/02vhcy.png',
                },
                {
                    name: 'Travelocity',
                    type: 'Promotional Email',
                    category: 'email',
                    technologies: ['HTML', 'CSS'],
                    description:
                        'Responsive HTML Email works in all popular email clients',
                    language: 'mjml',
                    stars: 0,
                    url: 'https://github.com/Zalonics/Travelocity-Email',
                    website: 'https://travelocity-email.vercel.app/',
                    thumbnail: 'https://files.catbox.moe/ccxtp1.png',
                },

                {
                    name: 'AnimeReactions.moe',
                    category: 'fullstack',
                    technologies: ['Vue', 'Pocketbase'],
                    type: 'Fullstack Web App (CRUD)',
                    description:
                        "Easily find and upload reaction images. Mainly made this for myself and friends, aswell as to test out some of the latest technologies! Pocketbase is a selfhosted backend as a service that's supposed to replace services like firebase.",
                    language: 'vue',
                    stars: 0,
                    url: 'https://github.com/zalonics/anireact',
                    website: 'https://animereactions.moe',
                    thumbnail: 'https://files.catbox.moe/44gorg.webp',
                },
                {
                    name: 'Yui',
                    category: 'fullstack',
                    technologies: ['Vue', 'Web Sockets', 'NodeJS', 'Firebase'],
                    type: 'Fullstack, Realtime Web Application',
                    description:
                        'A multiplayer anime song quiz game, the idea is to create a room with a bunch of friends and compete to see who can guess most of the songs correctly!',
                    language: 'vue',
                    stars: 0,
                    url: 'https://github.com/yanyamz/Yui',
                    website: 'https://aniopeningsonline.netlify.app',
                    video: 'HEbPzbXhmns',
                },
            ],
        }
    },
    methods: {
        filteredProjects(type) {
            this.currentlyShowing = type || 'all'
            if (!type || type === 'all') {
                this.showProjects = this.projects
                return
            }

            this.showProjects = this.projects.filter(
                (proj) => proj.category === type.toLowerCase()
            )
        },
    },
}
</script>

<style scoped>
.is-flexy {
    flex-basis: clamp(100px, 100%, 350px);
}
.category-link {
    padding: 0px 2px;
}

.category-link.active {
    color: black;
}

.category-links {
    padding: 10px 0;
}

.category-subtitle {
    text-transform: capitalize;
    padding-left: 5px;
}
</style>
