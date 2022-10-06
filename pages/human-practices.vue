<template>
  <div>
    <Header :title="currentPage"></Header>

    <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
      <h1 class="head-title">{{currentPage}}</h1>
    </div>

    <section class="intro">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <ol>
              <li><a :href="`${currentPage}/#section1`" v-scroll-to="'#section1'">Section 1</a></li>
              <li><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'">Section 2</a></li>
              <ul>
                <li class="sub"><a :href="`${currentPage}/#section2-1`" v-scroll-to="'#section2-1'" parent="section2">Section 2-1</a></li>
                <li class="sub"><a :href="`${currentPage}/#section2-2`" v-scroll-to="'#section2-2'" parent="section2">Section 2-2</a></li>
                <li class="sub"><a :href="`${currentPage}/#section2-3`" v-scroll-to="'#section2-3'" parent="section2">Section 2-3</a></li>
                <li class="sub"><a :href="`${currentPage}/#section2-4`" v-scroll-to="'#section2-4'" parent="section2">Section 2-4</a></li>
              </ul>
              <li><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'">Section 3</a></li>
              <ul>
                <li class="sub"><a :href="`${currentPage}/#section3-1`" v-scroll-to="'#section3-1'" parent="section3">Section 3-1</a></li>
                <li class="sub"><a :href="`${currentPage}/#section3-2`" v-scroll-to="'#section3-2'" parent="section3">Section 3-2</a></li>
              </ul>
              <li><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'">Section 4</a></li>
              <ul>
                <li class="sub"><a :href="`${currentPage}/#section4-1`" v-scroll-to="'#section4-1'" parent="section4">Section 4-1</a></li>
                <li class="sub"><a :href="`${currentPage}/#section4-2`" v-scroll-to="'#section4-2'" parent="section4">Section 4-2</a></li>
                <li class="sub"><a :href="`${currentPage}/#section4-3`" v-scroll-to="'#section4-3'" parent="section4">Section 4-3</a></li>
              </ul>
              <li><a :href="`${currentPage}/#section5`" v-scroll-to="'#section5'">Section 5</a></li>
              <li><a :href="`${currentPage}/#section6`" v-scroll-to="'#section6'">Section 6</a></li>
            </ol>
          </nav>
        </div>

        <div class="col-lg-9 main-content">
          <section id="section1">
            <h2 class="main-title">Section 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
export default {
    data() {
        return {
            currentPage: "Human Practices",
        };
    }, 
}
</script>