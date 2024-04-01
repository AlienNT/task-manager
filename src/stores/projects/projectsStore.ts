import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {ProjectInterface} from "./projectsStoreTypes.ts";
import {TId} from "@/types/types.ts";

export const useProjectsStore = defineStore('projects', () => {
    const projects = ref([] as ProjectInterface[])

    const projectById = (_id: TId) => computed((): ProjectInterface | null => {
        return projects.value.length ? projects.value.find(project => project._id === _id) || null : null
    })

    function setProjects(data: ProjectInterface[]) {
        projects.value = [...projects.value, ...data]
    }

    function addProject(data: ProjectInterface) {
        projects.value.push(data)
    }

    function removeProject(_id: string) {
        const index = projects.value.findIndex(project => project._id === _id)

        if (index !== -1) {
            projects.value.splice(index, 1)
        }
    }

    return {
        projects,
        projectById,
        setProjects,
        addProject,
        removeProject
    }
})