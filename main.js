import { render, router } from "./lib";
import contactPage from "./page/contact";
import homePage from "./page/home";
import notFound from "./page/notFound";
import postDetail from "./page/post-detail";
import postsPage from "./page/posts";
import projectsPage from "./page/projects";
import projectDetail from "./page/project-detail";
import aboutPage from "./page/about";

const app = document.querySelector("#app");
// app.innerHTML = aboutPage();

router.on("/", () => render(homePage, app));
router.on("/about", () => render(aboutPage, app));
router.on("/contact", () => render(contactPage, app));
router.on("/posts", () => render(postsPage, app));
router.on("/postsDetail/:id", () => render(postDetail, app));
router.on("/projects", () => render(projectsPage, app));
router.on("/projectDetail/:id", () => render(projectDetail, app));
router.notFound(() => render(notFound, app));
router.resolve();
