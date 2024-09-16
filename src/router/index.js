import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Education from '../views/Education.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'
import Project from '../views/Project.vue'

const routes = [
  {
    path: `/about`,
    component: About
  },
  {
    path: `/education`,
    component: Education
  },
  {
    path: `/skills`,
    component: Skills
  },
  {
    path: `/contact`,
    component: Contact
  }, 
  {
    path: `/project`,
    component: Project,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
