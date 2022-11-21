<template>
    <div class="card project" rel="noopener noreferrer">
        <div class="project-title">{{ project.name }}</div>
        <div v-if="project.video" class="project-video">
            <iframe
                width="100%"
                height="300px"
                :src="`https://www.youtube.com/embed/${project.video}`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
        <div v-else class="project-thumbnail">
            <img :src="project.thumbnail" alt="thumbnail" />
        </div>
        <div class="project-type">
            <strong>{{ project.type }}</strong>
        </div>
        <div class="project-description">{{ project.description }}</div>
        <div class="project-technologies">
            <span
                class="project-technology"
                v-for="technology in project.technologies"
                :key="technology"
            >
                {{ technology }}
            </span>
        </div>
        <div class="project-meta">
            <span class="project-stars">
                <StarIcon />
                {{ project.stars }}
            </span>
            <span class="project-link">
                <a
                    :href="project.website"
                    class="project-website is-link is-clickable"
                    target="_blank"
                >
                    Visit
                </a>
            </span>
            <span class="project-link">
                <a
                    :href="project.url"
                    class="project-website is-link"
                    target="_blank"
                >
                    Code
                </a>
            </span>
        </div>
    </div>
</template>

<script>
    import { CodeIcon, StarIcon } from 'vue-feather-icons'
    export default {
        components: {
            CodeIcon: CodeIcon,
            StarIcon: StarIcon,
        },
        props: {
            project: {
                type: Object,
                required: true,
            },
        },
        mounted() {
            console.log(this.project)
        },
    }
</script>

<style scoped>
    .project-title {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    .project-description,
    .project-type,
    .project-technologies {
        margin-bottom: 10px;
        /* white-space: nowrap; */
        max-height: 100px;
        /* background: red; */
        /* text-overflow: ellipsis; */
        overflow-y: scroll;
    }

    .project-technology:not(:first-child) {
        padding-left: 5px;
    }

    .project-technology:not(:last-child)::after {
        content: ',';
    }

    .project-thumbnail {
        width: 100%;
        height: auto;
    }

    .project-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .project-meta {
        display: flex;
    }

    .project-meta > span {
        display: flex;
        align-items: center;
    }

    .project-meta > span svg {
        width: 1rem;
        height: 1rem;
        margin-right: 5px;
    }

    .project-meta > span:not(:last-child) {
        margin-right: 15px;
    }
</style>
