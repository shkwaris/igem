<template>
    <div class="menu" :class="this.isOpened == true ? 'opened' : 'closed'">
        <div class="nav">
            <a class="logo" @click="scrollToTop()">
                <img src="https://static.igem.wiki/teams/4118/wiki/syn-pnoia-black.png" width="120" height="52"/>
            </a>
            <div class="spacer" @click="clickOuside()"></div>
            <button class="burger hamburger hamburger--spin-r" :class="this.isOpened == true ? 'is-active' : ''" type="button" @click="handleMenu()">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
        </div>
        <div class="blured"></div>
        <div class="content" @click="clickOuside()">
            <slot/>
        </div>
        <aside>
            <ul class="w-full flex flex-col text-white pt-5">
                <li class="menu items"><a @click="pushRoute('/')">Home</a></li>
                <li class="menu items">
                    <a @click="handleSubMenu('#team_')">Team</a>
                    <span class="arrow-right"></span>
                </li>
                <li class="menu items">
                    <a @click="handleSubMenu('#project')">Project</a>
                    <span class="arrow-right"></span>
                </li>
                <li class="menu items"><a @click="pushRoute('/model')">Model</a></li>
                <li class="menu items">
                    <a @click="handleSubMenu('#public-engagement')">Public Engagement</a>
                    <span class="arrow-right"></span>
                </li>
                <li class="menu items"><a @click="pushRoute('/partnership')">Partnership</a></li>
                <li class="menu items"><a @click="pushRoute('/entrepreneurship')">Entrepreneurship</a></li>
                <li class="menu items">
                    <a @click="handleSubMenu('#awards')">Awards</a>
                    <span class="arrow-right"></span>
                </li>
                <li class="menu items"><a @click="pushRoute('/safety')">Safety</a></li>
            </ul>
        </aside>
        <SubMenu id="team_" selected="#team_" className="submenu closed" :closeSubMenu="closeSubMenu">
            <li class="menu items"><a @click="pushRoute('/team')">Members</a></li>
            <li class="menu items"><a @click="pushRoute('/attributions')">Attributions</a></li>
            <li class="menu items"><a @click="pushRoute('/collaborations')">Collaborations</a></li>
            <li class="menu items"><a @click="pushRoute('/sponsors')">Sponsors</a></li>
        </SubMenu>
        <SubMenu id="project" selected="#project" className="submenu closed" :closeSubMenu="closeSubMenu">
            <li class="menu items"><a @click="pushRoute('/description')">Description</a></li>
            <li class="menu items"><a @click="pushRoute('/engineering')">Engineering</a></li>
            <li class="menu items"><a @click="pushRoute('/experiments')">Experiments</a></li>
            <li class="menu items"><a @click="pushRoute('/results')">Results</a></li>
            <li class="menu items"><a @click="pushRoute('/proof-of-concept')">Proof of Concept</a></li>
            <li class="menu items"><a @click="pushRoute('/implementation')">Proposed Implementation</a></li>
            <li class="menu items"><a @click="pushRoute('/parts')">Parts</a></li>
            <li class="menu items"><a @click="pushRoute('/contribution')">Contribution</a></li>
        </SubMenu>
        <SubMenu id="public-engagement" selected="#public-engagement" className="submenu closed" :closeSubMenu="closeSubMenu">
            <li class="menu items"><a @click="pushRoute('/human-practices')">(Integrated) Human Practices</a></li>
            <li class="menu items"><a @click="pushRoute('/communication')">Communication</a></li>
        </SubMenu>
        <SubMenu id="awards" selected="#awards" className="submenu closed" :closeSubMenu="closeSubMenu">
            <li class="menu items"><a @click="pushRoute('/education')">Education</a></li>
            <li class="menu items"><a @click="pushRoute('/inclusivity')">Diversity & Inclusion</a></li>
            <li class="menu items"><a @click="pushRoute('/software')">Software</a></li>
            <li class="menu items"><a @click="pushRoute('/sustainable')">Sustainable Development Impact</a></li>
        </SubMenu>
    </div>
</template>

<script>
import SubMenu from './SubMenu.vue';
export default {
    data() {
        return {
            isOpened: false,
            subMenuId: "",
            options: {
              easing: [0.25, 0.1, 0.25, 1.0],
              force: true,
              cancelable: false,
              x: false,
              y: true
            },
        };
    },
    methods: {
        closeSubMenu: function () {
            this.$el.querySelector(this.subMenuId).className = "submenu closed";
            this.subMenuId = "";
        },
        openSubMenu: function (id) {
            this.subMenuId = id;
            this.$el.querySelector(this.subMenuId).className = "submenu opened";
        },
        handleMenu: function () {
            this.isOpened = !this.isOpened;
            if (this.subMenuId != "") this.closeSubMenu();
        },
        handleSubMenu: function (id) {
            if (this.subMenuId == id) this.closeSubMenu();
            else this.openSubMenu(id);
        },
        clickOuside: function () {
            if (this.isOpened) {
                this.handleMenu();
            }
        },
        pushRoute: function (to) {
            this.handleMenu();
            this.$router.push({path: to});
        },
        scrollToTop: function () {
          this.$router.push({path: "/"});
          this.$scrollTo("#top", 350, this.options);
        },
    },
    components: { SubMenu }
}
</script>
