# Team Patras Medicine 2022 Wiki

## About this Template

### Files
The template structure is as follows:

    |__ assets/            -> contains uncompiled Sass files
    |__ components/        -> contains Vue.js components
        |__ Footer.vue     -> a footer that will appear in all the pages
        |__ Header.vue     -> a header component that will appear in all the pages 
        |__ Nav.vue        -> a navbar that will appear in all the pages
        |__ WikiTools.vue  -> the wiki tools to help getting started with this template
    |__ layouts/           -> contains Nuxt.js layouts
        |__ default.vue    -> a default layout 
    |__ pages/             -> contains all views and routes of the website
    |__ .dockerignore      -> tells dockers which files/directories should be excluded from the context
    |__ .editorconfig      -> a collection of text editor plugins for maintaining consistent coding styles
    |__ .gitignore         -> tells GitLab which files/directories should not be uploaded to the repository
    |__ .gitlab-ci.yml     -> an automated flow for building, testing and deploying your website.
    |__ docker-compose.yml -> a config file for Docker Compose
    |__ Dockerfile         -> a file with instructions on how to build the docker image
    |__ jsconfig.json      -> a Javascript configuration file
    |__ LICENSE            -> License CC-by-4.0, all wikis are required to have this license - DO NOT MODIFY
    |__ nuxt.config.js     -> a Nuxt configuration file
    |__ package-lock.json  -> the exact dependencies tree of the website
    |__ package.json       -> contains all the dependencies and scripts for the website
    |__ README.md          -> a file containing the text you are reading right now
    
### Technologies
  * [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
  * [Vue.js](https://vuejs.org/): a Javascript web framework
  * [Nuxt.js](https://nuxtjs.org/): a Vue.js framework
  * [Sass](https://sass-lang.com/): a CSS extension language
  * [Bootstrap](https://getbootstrap.com/): a CSS framework

## Building locally

### Using npm:
``` bash
git clone https://gitlab.igem.org/2022/patras-medicine.git
cd patras-medicine
npm install
npm run dev
```

### Using Docker:
``` bash
git clone https://gitlab.igem.org/2022/patras-medicine.git
cd patras-medicine
docker-compose up -d --build
docker-compose down #to stop the running container
```