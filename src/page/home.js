import footer from "../components/footer";
import Header from "../components/header";

const homePage = () => {
  return `
     ${Header()}
     <h1>Home Page </h1>
     ${footer()}
    `;
};
export default homePage;
