<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
    </Header>

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
                  <li class="sub"><a :href="`${currentPage}/#target-market-research`" v-scroll-to="'#target-market-research'" parent="target-market-research">Target Market - Customers</a></li>
                </ul>
                <li><a :href="`${currentPage}/#financial-analysis`" v-scroll-to="'#financial-analysis'">Financial Analysis</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#cost-sheet`" v-scroll-to="'#cost-sheet'" parent="financial-analysis">Cost sheet</a></li>
                  <li class="sub"><a :href="`${currentPage}/#cash-flow-sheet`" v-scroll-to="'#cash-flow-sheet'" parent="financial-analysis">Cash flow sheet</a></li>
                </ul>
                <li><a :href="`${currentPage}/#prospects`" v-scroll-to="'#prospects'">Prospects</a></li>
                <li><a :href="`${currentPage}/#partnership`" v-scroll-to="'#partnership'">Partnership</a></li>
                <li><a :href="`${currentPage}/#business-plan`" v-scroll-to="'#business-plan'">Business plan</a></li>
              </ol>
            </div>

          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="summary">
            <h2 class="main-title">Summary</h2>
            <p>The diagnostic test of syn-PNOIA is based on a groundbreaking concept and can be described as a cutting-edge Synthetic Biology field. It introduces a new era regarding lung cancer detection, making the diagnosis more straightforward, more accessible, more affordable, and user-friendly for any customer and patient, as well as significantly increasing patients’ chances of survival. Furthermore, it can be characterized as an anthropocentric initiative that prioritizes human life. Under this context, we have learned to believe more in people than the technology itself. That’s why in this section, we aim to demonstrate the entrepreneurship part of our project and how we plan to approach investors and make our project more business attractive, in general.</p>
            <p>The confirmation results of our surveys in the initial phase of Primary Market Research among doctors make us quite hopeful of our product’s potential establishment and success. SWOT and PEST analyses are shown as bonus plus points in favor of this prospect, highlighting the fertile conditions. Besides, the latter is cross-checked by the competitor research, which indicates the weaknesses of the existing methods against ours and the insufficiency of the current market. The Risk Analysis makes us cautious but not inactive. We have figured out ways to handle every upcoming risk and possible weaknesses and threats to finally overturn them. Lastly, we have set realistic and structured goals by adequately defining and sizing our target market leveraging the TAM/SAM/SOM business model. In this way, we can know our potential both in the short and long term.</p>
            <p>These goals are financially expressed in our Cash Flow Statement, considering the Cost Sheet. We are glad to state that we have thought about a plethora of funding resources, and we are also entitled to say that we have had a positive experience through our fundraising procedure until now in the framework of the competition. Moreover, it is proved that our company can be profitable after the first two years following a worst-case scenario. In conclusion, our project seems to be very promising in financial terms and societal, too.</p>
          </section>
          <section id="business-model-canvas">
            <h2 class="main-title">Business Model Canvas</h2>
            <p>In order to organize and document our business, we developed the following business model canvas, which visualizes the main points of our company.</p>
            <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/bmc.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/bmc.jpg"/></a>
            </figure>
          </section>
          <section id="market-analysis">
            <h2 class="main-title">Market Analysis</h2>
            <section id="swot-analysis">
              <h3 class="small-title">Swot Analysis</h3>
              <p>SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis is employed as a way to identify and visualize our company’s strengths, opportunities, weaknesses, and threats and to overturn the last two.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/swot.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/swot.jpg"/></a>
              </figure>
            </section>
            <section id="pest-analysis">
              <h3 class="small-title">PEST Analysis</h3>
              <p>PEST analysis is a management method whereby an organization can assess the external factors (Political, Economic, Social, and Technological) influencing its operation to become competitive in the market.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/pest.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/pest.jpg"/></a>
              </figure>
            </section>
            <section id="target-market-research">
              <h3 class="small-title">Target Market - Customers</h3>
              <br><br>
              <ul class="bullets">
                <li>TAM (Total Addressable Market / Total Available Market) Regarding our diagnostic test, every clinic, diagnostic center, and hospital worldwide could constitute this total market, defying any other constraint, such as competition, geography, financial or shipping limitations, as well as regulations.</li>
                <li>SAM (Serviceable Addressable Market / Served Available Market) Therefore, in our case, this specific segment of the market could comprise clinics, diagnostic centers, and hospitals in Greece, which is the base country for our diagnostic kit.</li>
                <li>SOM (Serviceable Obtainable Market / Share of Market). For our diagnostic test, SOM is planned to consist of clinics, diagnostic centers, and hospitals located in the biggest cities of Greece.</li>
              </ul>
              <br><br>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/tam.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/tam.png"/></a>
              </figure>
            </section>
          </section>
          <section id="financial-analysis">
            <h2 class="main-title">Financial Analysis</h2>
            <section id="cost-sheet">
              <h3 class="small-title">Cost sheet</h3>
              <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/cost-sheet.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/cost-sheet.png"/></a>
              </figure>
            </section>
            <section id="cash-flow-sheet">
              <h3 class="small-title">Cash flow sheet</h3>
              <p>In the following chart, we present our company’s costs and income. The tax in Greece is 22%, the interest rate for the loan is 3%, and the depreciation year is 2025, as shown below.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/cash-flow.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/cash-flow.png"/></a>
              </figure>
            </section>
          </section>
          <section id="prospects">
            <h2 class="main-title">Prospects</h2>
            <p>The future plan of our company is presented in the Gantt Chart below.</p>
            <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/gantt-chart.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/gantt-chart.png"/></a>
              </figure>
           </section>
          <section id="partnership">
            <h2 class="main-title">Partnership</h2>
            <p>Our cooperation with the iGEM team MetaThess was precious as we met virtually and in person to exchange business ideas. This excellent partnership was the first step for future cooperation. Thank you, iGEM MetaThess.</p>
            <div class="gallery grid">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/partnership1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/partnership1.jpg"/></a>
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/partnership2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/entrepreneurship/partnership2.jpg"/></a>
            </div>
          </section>
          <section id="business-plan">
            <h2 class="main-title">Business plan</h2>
            <br>
            <a class="link-download" href="" download="" target="_blank">Download our Business Plan</a>
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
            currentPage: "Entrepreneurship",
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