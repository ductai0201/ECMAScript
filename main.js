import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { render, router } from "./src/lib";
import contactPage from "./src/page/contact";
import homePage from "./src/page/home";
import notFound from "./src/page/notFound";
import postDetail from "./src/page/post-detail";
import postsPage from "./src/page/posts";
import projectsPage from "./src/page/projects";
import projectDetail from "./src/page/project-detail";
import aboutPage from "./src/page/about";

const app = document.querySelector("#app");
// app.innerHTML = aboutPage();

router.on("/", () => render(homePage, app));
router.on("/about", () => render(aboutPage, app));
router.on("/contact", () => render(contactPage, app));
router.on("/posts", () => render(postsPage, app));
router.on("/postsDetail/:id", () => render(postDetail, app));
router.on("/projects", () => render(projectsPage, app));
router.on("/projectDetail/:id", (params) => render(projectDetail(params.data.id), app)); 
// render(projectDetail, app)
router.notFound(() => render(notFound, app));
router.resolve();
