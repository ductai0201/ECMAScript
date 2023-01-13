import Navigo from "navigo";

const router = new Navigo("/", {hash: true,linksSelector:"a"});

const render = (content,container) =>{
    if(typeof content == 'function'){
        container.innerHTML = content();
    }
    else{
        container.innerHTML = content;
    }
    console.log(typeof content)
}

export {render,router};