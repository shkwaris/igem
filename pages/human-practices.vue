<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
      <section class="intro">
      <div class="container">
          <div class="row">
            <div class="gallery col-xs-12 col-xl-6 align-self-xl-center">
              <a class="half-content" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/fig1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/fig1.png"/></a>
            </div>
            <div class="col-xs-12 col-xl-6">
                <p>Inspired by "The iGEM Cycle," we oriented the work of our Integrated Human Practices around it. Therefore, changing the categories, we divided our own cycle into 6 new ones while maintaining the chronological order defined by the competition. We start by understanding the problem we are willing to solve, and finally, we come to a proposed implementation and some future steps.
                  If you want to follow us on the journey of Integrated Human Practices, all you have to do is consult the circle.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="intro">
        <p>Respecting personal data and the applicable laws that concern them, our team has created a <a class="link-download" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/integrated/consent-form.pdf">consent form</a> to be filled out by the participants. Some have decided to remain anonymous and not have their photos published. For this reason, not all of our interviews have photographic material.</p>
      </section>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#section1`" v-scroll-to="'#section1'">Understanding the Problem</a></li>
                <li><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'">Verifying the Need</a></li>
                <li><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'">Define a Good Solution</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section3-1`" v-scroll-to="'#section3-1'" parent="section3">Wet Lab Experts</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section3-2`" v-scroll-to="'#section3-2'" parent="section3">Dry Lab Experts</a></li>
                </ul>
                <li><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'">Design a Good Solution</a></li>
                <li><a :href="`${currentPage}/#section5`" v-scroll-to="'#section5'">Proposed Implementation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section5-1`" v-scroll-to="'#section5-1'" parent="section5">Public Sector</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section5-2`" v-scroll-to="'#section5-2'" parent="section5">Private Sector</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section5-3`" v-scroll-to="'#section5-3'" parent="section5">Future Doctors</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section5-3`" v-scroll-to="'#section5-3'" parent="section5">Future Steps</a></li>
                </ul>
                <li><a :href="`${currentPage}/#section6`" v-scroll-to="'#section6'">Bioethics & Biosafety</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section4-1`" v-scroll-to="'#section4-1'" parent="section6">Governmental Associatons</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section4-2`" v-scroll-to="'#section4-2'" parent="section6">Biosafety & Biosecurity</a></li>
                </ul>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="section1">
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
            <p>Ηaving already formed our team for iGEM Competition 2022, and in the process of searching for the project we will work on, the idea arose from a lecture at the Medical School of the University of Patras.</p>
            <p>During the Pathology lesson, executed by professor Taraviras, head of the laboratory of Biological Chemistry, lung cancer emerged as a crucial and persistent medical issue. Mr. Taraviras analyzed the pathophysiology of the disease and underlined the high mortality rate of lung cancer due to late diagnosis. Τhis particular lecture became an object of reflection for our team members and immediately sparked interest in further investigation. Focusing on lung cancer diagnosis, we realized the necessity for further research in this sector.</p>
            <p>How about developing a new method to diagnose or even prognose lung cancer to save thousands of lives? </p>
            <p>We immediately came up with various ideas for the resolution of this problem, many of them being too expensive or complicated, requiring much time and technical stuff. So, after much thought, literature studying, discussions, and brainstorming, we ended up with an affordable kit, easily handled, precise, and highly sensitive. This kit is based on an innovative biochemical procedure, and it detects biomarkers in the blood that are over-increased in non-small cell lung cancer.
              First and foremost, we searched the literature to reassure that this approach could be applied and extracted some credible results. Our next step was to reach Mr. Taraviras to share our initial thoughts with him and gain further information related to lung cancer disease.
            </p>
            <p>Aiming to understand our project better, we decided to approach experts in our research field.</p>
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
          <section id="section2">
            <h2 class="main-title">Section 2</h2>
            <section id="section2-1">
              <h3 class="small-title">Section 2-1</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="section2-2">
              <h3 class="small-title">Section 2-2</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="section2-3">
              <h3 class="small-title">Section 2-3</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="section2-4">
              <h3 class="small-title">Section 2-4</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
          <section id="section3">
            <h2 class="main-title">Section 3</h2>
            <section id="section3-1">
              <h3 class="small-title">Section 3-1</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="section3-2">
              <h3 class="small-title">Section 3-2</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
          <section id="section4">
            <h2 class="main-title">Section 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <section id="section4-1">
              <h3 class="small-title">Section 4-1</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="section4-2">
              <h3 class="small-title">Section 4-2</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="section4-3">
              <h3 class="small-title">Section 4-3</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
          <section id="section5">
            <h2 class="main-title">Section 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
          <section id="section6">
            <h2 class="main-title">Section 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
        </div>
      </div>
    </Scrollspy>
  </div>
</template>

<script>
import SimpleLightbox from "simplelightbox";

export default {
    data() {
        return {
            currentPage: "Human Practices",
        };
    },
    mounted() {
      var lightbox = new SimpleLightbox('.gallery a',
          {
            overlayOpacity: 0.9,
            animationSpeed: '150',
            animationSlide: false,
          }
        );
      window.addEventListener("scroll", this.scrolled);
      window.addEventListener("load", () => {
          this.scrolled();
        });
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.scrolled);
    },
    methods: {
      scrolled: function () {
        document.querySelector("progress").value = window.scrollY / (document.querySelector("#main-content").offsetHeight - window.innerHeight + document.querySelector("#header").clientHeight) * 100;
      }
    }
}
</script>