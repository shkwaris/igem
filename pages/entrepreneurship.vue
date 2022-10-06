<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
    </Header>

    <!-- <section class="intro">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section> -->

    <Scrollspy :currentPage="currentPage" initialSection="summary">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#summary`" v-scroll-to="'#summary'">Summary</a></li>
                <li><a :href="`${currentPage}/#business-model-canvas`" v-scroll-to="'#business-model-canvas'">Business Model Canvas</a></li>
                <li><a :href="`${currentPage}/#market-analysis`" v-scroll-to="'#market-analysis'">Market Analysis</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#swot-analysis`" v-scroll-to="'#swot-analysis'" parent="market-analysis">SWOT analysis</a></li>
                  <li class="sub"><a :href="`${currentPage}/#pest-analysis`" v-scroll-to="'#pest-analysis'" parent="market-analysis">PEST analysis</a></li>
                  <li class="sub"><a :href="`${currentPage}/#target-market-research`" v-scroll-to="'#target-market-research'" parent="target-market-research">Target Market Research</a></li>
                </ul>
                <li><a :href="`${currentPage}/#financial-analysis`" v-scroll-to="'#financial-analysis'">Financial Analysis</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#cost-sheet`" v-scroll-to="'#cost-sheet'" parent="financial-analysis">Cost sheet</a></li>
                  <li class="sub"><a :href="`${currentPage}/#balance-sheet`" v-scroll-to="'#balance-sheet'" parent="financial-analysis">Balance sheet</a></li>
                  <li class="sub"><a :href="`${currentPage}/#cash-flow-sheet`" v-scroll-to="'#cash-flow-sheet'" parent="financial-analysis">Cash flow sheet</a></li>
                  <li class="sub"><a :href="`${currentPage}/#profit-loss-statement`" v-scroll-to="'#profit-loss-statement'" parent="financial-analysis">Profit Loss statement</a></li>
                </ul>
                <li><a :href="`${currentPage}/#prospects`" v-scroll-to="'#prospects'">Prospects</a></li>
                <li><a :href="`${currentPage}/#partnerships`" v-scroll-to="'#partnerships'">Partnerships</a></li>
                <li><a :href="`${currentPage}/#business-plan`" v-scroll-to="'#business-plan'">Business plan</a></li>
                <li><a :href="`${currentPage}/#references`" v-scroll-to="'#references'">References</a></li>
              </ol>
            </div>

          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="summary">
            <h2 class="main-title">Summary</h2>
            <p>Over the last few years synthetic biology has been successfully applied in medicine against many diseases. However, lung cancer is still a difficult to solve, persistent medical condition affecting a large part of the population worldwide. Specifically, it is by far the leading cause of cancer deaths among both men and women. The reasons behind this are two; on the one hand, the late diagnosis, since the symptoms usually occur when the lung cancer has reached an advanced stage where it is not still curable.</p>
            <p>Syn-PNOIA manufactured a diagnostic kit using Rolling Circle Amplification Technique (RCA) to create a Linear DNA Nanostructure (LDN) and integrated hairpin probe detection analysis to identify and quantify circular RNA biomarkers secreted in the bloodstream. After blood sampling, it’s a 3-step process. Firstly, the total RNA is extracted using Invitrogen™ TRIzol™ Reagent. Then, it’s directly added to the reaction mixture and finally, the fluorescence signal is measured with the use of a Plate-Reader spectrophotometer. </p>
            <p>Syn-PNOIA is a newly formed and student-led start-up synthetic biology company committed to research and develop a diagnostic test for detecting non-small cell lung cancer in the early stages.</p>
          </section>
          <section id="business-model-canvas">
            <h2 class="main-title">Business Model Canvas</h2>
            <p>In order to organize and document our business we developed the following business model canvas which visualizes the main points of our company. </p>
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/table1.jpg" width="100%" alt="" />
          </section>
          <section id="market-analysis">
            <h2 class="main-title">Market Analysis</h2>
            <section id="swot-analysis">
              <h3 class="small-title">Swot Analysis</h3>
              <p>Swot analysis is used as a way to identify and visualize our company's strengths, opportunities, weaknesses and threats and to overturn the last two.</p>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/table2.jpg" width="100%" alt="" />
            </section>
            <section id="pest-analysis">
              <h3 class="small-title">PEST Analysis</h3>
              <p>We conducted this in the table shown below to review in detail any possible threats we would encounter when taking our product to market. PEST analysis is a management method whereby an organization can assess the external factors (Political, Economic, Social and Technological) that influence its operation in order to become more competitive in the market.</p>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/table3.jpg"" width="100%" alt="" />
            </section>
            <section id="target-market-research">
              <h3 class="small-title">Target Market Research</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
          <section id="financial-analysis">
            <h2 class="main-title">Financial Analysis</h2>
            <section id="cost-sheet">
              <h3 class="small-title">Cost sheet</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="balance-sheet">
              <h3 class="small-title">Balance sheet</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="cash-flow-sheet">
              <h3 class="small-title">Cash flow sheet</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="profit-loss-statement">
              <h3 class="small-title">Profit Loss statement</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
          <section id="prospects">
            <h2 class="main-title">Prospects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
          <section id="partnerships">
            <h2 class="main-title">Partnerships</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
          <section id="business-plan">
            <h2 class="main-title">Business plan</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
          <section id="references">
            <h2 class="main-title">References</h2>
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
            currentPage: "Entrepreneurship",
        };
    },
    mounted() {
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