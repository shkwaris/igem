<template>
  <div>
    <Header :title="currentPage"></Header>

    <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
      <h1 class="head-title">{{currentPage}}</h1>
    </div>

    <section class="intro">
      <p>syn-PNOIA kit introduces a new era regarding early-stage lung cancer detection, making the diagnosis more straightforward, more accessible, more affordable, and user-friendly for any customer and patient, and significantly increasing patients’ chances of survival. We performed questionnaires, market and financial analyses to implement the product in the real world. By investigating the market, we defined our customers and our goals. The confirmation results of our surveys in the initial phase of Primary Market Research among doctors make us quite hopeful of our product’s potential establishment and success. You can find all of the above in our <a class="link-ref" download="" target="_blank" href="">Business Plan.</a></p>
    </section>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#section1`" v-scroll-to="'#section1'">Market</a></li>
                <li><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'">Application</a></li>
                <li><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'">Safety</a></li>
                <li><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'">Challenges & Risks</a></li>
              </ol>
            </div>  
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="section1">
            <h2 class="main-title">Market</h2>
            <p>People at a high risk of getting lung cancer, such as long-term smokers over 40 years old or employees exposed to asbestos and radium, are the recommended end users. Nonetheless, anyone can incorporate our test in their yearly/6-month check-up. Since it needs trained staff and specialized equipment, our diagnostic tool can be used in hospitals, clinics, and diagnostic centers. The goal for the first years is to approach the Greek market and expand the network worldwide. As shown in the graphics below, we can confirm the acceptance and the need for a new faster method of diagnosing lung cancer in its early stages. More than 100 medical students answered the questionnaire, with more than 50% considering the development of a new diagnostic method a necessity. This generation of doctors is young, innovative, and—with guidance—poised to take on healthcare's current and future challenges. The bar chart displayed below is on a scale of one to five with five indicating the strong agreement of the participants to the particular statement.</p>  
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/implementation/bar-chart.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/implementation/bar-chart.png"/></a>
            </figure>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/implementation/pie-chart.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/implementation/pie-chart.png"/></a>
            </figure>
          </section>
          <section id="section2">
            <h2 class="main-title">Application</h2>
            <p>The kit's use is simple and about a three step-process after blood sampling. First, with the use of a RNA extraction kit, total RNA is extracted, then added directly to the reaction mixture containing the Linear DNA Nanostructure and the buffer solution. Positive and Negative calibration samples are prepared as well to ensure that the delivered Nanostructure has retained its integrity and purity. After incubation for 70 minutes in a standard thermal cycler the medical personnel can proceed to sample analysis. The fluorescence signal emitted by the fluorescent labels present in the Nanostructure is detected using a Plate-Reader spectrophotometer. The steps are presented in the graphic below and detailed instructions can be found on the corresponding protocol listed in the Product Sheet Proposition listed in section Product Design.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/implementation/overview.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/implementation/overview.jpg"/></a>
            </figure>
            <h3 class="small-title">Product Design</h3>
            <p>Our kit is contained in a sealed foam box to avoid photobleaching and maintain its temperature at -20 ±5 &#8451. Inside the box, a 96-well plate is supplied alongside the following reagents: <br></p>
            <ul class="bullets">
              <li>Invitrogen<sup>&#8482</sup> TRIzol<sup>&#8482</sup></li>
              <li>2nd reagent for TRIzol<sup>&#8482</sup></li>
              <li>1x 200 μL tube of PBS Buffer with 1% BSA (pH=7,4)</li>
              <li>4x lyophilized Positive Calibration Sample</li>
              <li>4x lyophilized Negative Calibration Sample</li>
              <li>12x lyophilized Reaction mixture, containing the Nanostructure</li>
            </ul>
            <p>Please advise our <a class="link-ref" download="" target="_blank" href="">Product Sheet Proposition</a> and the instruction video supplied below for more details about the product.</p>
            <div class="d-flex justify-content-center" style="margin-top: 50px; margin-bottom: 50px;">
              <iframe title="Patras_Medicine: Product Video (2022) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/c903ca8c-7d12-4ad6-8a7b-5ab4f7dc56d0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
            </div>
            <p>Our product design was based on Dr. Klapa’s advice. Dr. Klapa suggested that our diagnostic kit should contain positive and negative calibration samples. When a product is stored for long periods, the fluorescence signal might decay, or our Nanostructure might denature. So, we should include controls that can be tested simultaneously as our sample. In addition, the reference samples must return an expected value to ensure the test is valid. She also suggested that the test should include the total RNA extraction kit besides our diagnostic kit to ensure the ease of testing. <a class="link-ref" target="_blank" href="human-practices#section4">Read the full interview.</a></p>
          </section>
          <section id="section3">
            <h2 class="main-title">Safety</h2>
            <h3 class="small-title">COVID-19 Considerations</h3>
            <p>The laboratories that represent the project perform site- and activity-specific risk assessments to determine the most appropriate safety measures to implement for particular circumstances and activities. The staff is up to date with their vaccines, wears face masks and is judicious with personal hygiene and disinfection.</p>
            <h3 class="small-title">Product Sheet Proposition</h3>
            <p>We have developed a product sheet with all the details required for using the kit correctly and safely. On top of this, we have produced a graphic movie that walks viewers through the steps required for using the device correctly. In this way, we seek to win the confidence of potential partners, clients, and investors.<br><br>
               Please refer to the previous section to obtain the full Product Sheet Proposition.</p>
            <h3 class="small-title">Other Actions</h3>
            <p>We've been learning a lot about biosafety in our Values and Risks iGEM workshop. One of the things we learned is that it's important to keep track of who has access to the lab and when they have access, and what they're doing there. We also gained an understanding about the difference between levels of biosafety, how to use different kinds of equipment in your labs, what procedures we should follow if there's an emergency, and more!</p>
            <p>Our team is working hard to make sure all our employees are trained on these topics so that they know what they need to do when they work with dangerous materials.</p>
          </section>
          <section id="section4">
            <h2 class="main-title">Challenges & Risks</h2>
            <p>Despite the fact that the product is quite promising, we need to take into consideration possible risks and challenges. Both of them are explained in our Business plan in the SWOT and risk analysis which are presented below.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/implementation/table-2-finance.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/implementation/table-2-finance.jpg"/></a>
            </figure>
            <p>The weaknesses and threats should not discourage us but make us work harder to overcome those challenges and improve our product. In the graphic below we present the possible risks. Nonetheless, with the right precautions there should be no problem while using our kit.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/implementation/activity.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/implementation/activity.png"/></a>
            </figure>
          </section>
        </div>
      </div>
    </Scrollspy>
  </div>
</template>

<script>
import SimpleLightbox from "simplelightbox"
export default {
    data() {
        return {
            currentPage: "Implementation",
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