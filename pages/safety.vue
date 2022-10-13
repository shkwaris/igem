<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/safety123.jpg') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
      <section class="intro">
        <p>Safety and security are fundamental concepts of iGEM Competition and have definitely concerned us. Safety plays an essential role for our team in protecting ourselves and our lab colleagues, being aware of the possible risks, and handling them.</p>
      </section>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#section1`" v-scroll-to="'#section1'">Signage Stickers</a></li>
                <li><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'">Guidelines in the lab</a></li>
                <li><a :href="`${currentPage}/#section5`" v-scroll-to="'#section4'">Expert's advice</a></li>
                <li><a :href="`${currentPage}/#section6`" v-scroll-to="'#section5'">Biosafety Practices</a></li>
                <li><a :href="`${currentPage}/#section7`" v-scroll-to="'#section6'">Project safety</a></li>
                <li><a :href="`${currentPage}/#section7`" v-scroll-to="'#section7'">References</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="section1">
            <h2 class="main-title">Signage Stickers, an innovation for Safety in the Lab</h2>
            <p>Safety has been an integral part of our experimental process. Thus, we considered the necessity of universal signage in the lab spaces, enhancing security and contributing to avoiding accidents. Having implemented and precisely followed all of the rules and in accordance with the laboratory regulations, we decided to facilitate the lab members and ensure their protection by carefully designing safety stickers. Explicitly, we created three categories of stickers separated by their shapes:</p>
            <ul class="bullets">
              <li>Triangle-shaped stickers indicate a hazard.</li>
              <li>Square-shaped are related to the different spaces of the laboratory.</li>
              <li>Circular-shaped stickers show the equipment required to carry out a particular procedure. </li>
            </ul><br>
            <p>Finally, we printed the stickers and placed them in our laboratory, and we also provided them in a pdf archive so that all teams could reach and adopt this safety system for their laboratories worldwide. </p>
            <div class="gallery grid">
              <a class="half-content" href="https://static.igem.wiki/teams/4118/wiki/website-assets/safety/photo-1-min.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/safety/photo-1-min.jpg"/></a>
            </div><br>
            <a class="link-download" href="https://static.igem.wiki/teams/4118/wiki/website-assets/safety/safety-stickers.pdf" target="_blank" download="">Download safety stickers pdf archive</a>
          </section>
          <section id="section2">
            <h2 class="main-title">Guidelines in the lab</h2>
            <p>Aiming to get informed about the safety factors, we addressed <span>the Technical Security Office at the University of Patras</span>, which provides a Health and Safety Guide. Each section of the guide has been drafted and approved by the Health and Safety Coordinating Committee and is based on international and Greek literature and legislation. Strict observation of the provisions for the conduct of the experimental procedure is mandatory to guarantee the project's safety. </p>
            <div class="gallery grid">
              <a class="half-content" href="https://static.igem.wiki/teams/4118/wiki/website-assets/safety/photo-2-min.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/safety/photo-2-min.jpg"/></a>
            </div>
            <p>We are committed to the highest standards for quality assurance and compliance. All team members involved in the laboratory experiments are aware of and follow Good Laboratory Practice guidelines.</p>
            <div class="gallery grid">
              <a class="half-content" href="https://static.igem.wiki/teams/4118/wiki/website-assets/safety/photo-3-min.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/safety/photo-3-min.jpg"/></a>
            </div>  
            <p>For example, lab coats are worn at all times, and lab members must dress appropriately (e.g., closed shoes, long pants, and avoid loose sleeves). Gloves and protective glasses are used when needed, and the work area is always kept clean. Team members understand and consider the risk level of the organisms, parts, chemicals, and equipment used. In addition, they must be aware of all actions needed in case of an emergency. Before entering the lab, preparing the design and methodology of the experiment is a ritual. All personnel are trained to handle materials safely, as well as to follow safety guidelines. Furthermore, we are provided with safety training from Principal Investigators on how to best keep their labs safe.</p>
            <br>
            <section>
              <h2 class="small-title">COVID-19 Considerations</h2>
              <p>The laboratories that represent the project perform site- and activity-specific risk assessments to determine the most appropriate safety measures to implement for particular circumstances and activities. The staff is up to date with their vaccines, wears face masks, and is judicious with personal hygiene and disinfection.</p>
            </section>
            <section>
              <h2 class="small-title">Product Sheet</h2>
              <p>We have developed a product sheet with all the details required for using the kit correctly and safely. On top of this, we have produced a graphic movie that walks viewers through the steps needed to use the device correctly. In this way, we seek to win the confidence of potential partners, clients, and investors.</p>
            </section>
            <section>
              <h2 class="small-title">Other Actions</h2>
              <p>Our Values and Risks iGEM workshop has taught us a lot about biosafety. For example, we learned that it's essential to track who has access to the lab, when they have access, and what they are involved with. We also learned about the difference between biosafety levels, how to use different kinds of equipment in your labs, and what procedures we should follow if there's an emergency.</p>
              <p>Our team is working hard to ensure that all our employees are trained on these topics and know what they need to do when they work with dangerous materials.</p>
            </section>
          </section>
          <section id="section4">
            <h2 class="main-title">Expert's advice</h2>
            <p>Lastly, concerning the safety rules in the laboratory, we scheduled an online meeting with <span>Mr. Apostolou Panagiotis</span>. He is the Supervisor and Safety and Quality Manager at the Lab Facilities of the Research Genetic Cancer Center in Florina, Greece. </p>
            <p>Firstly, Mr. Apostolou informed us about the protective measures we should follow in the lab for our safety. In particular, he mentioned the dress code and the mandatory lab coats, nitrile gloves, and protective glasses. He then discussed managing bacterial cultures and disposing of bacterial debris and agarose gels after electrophoresis. In addition, he mentioned how the eukaryotic cell lines worked, their cleanliness, and mandatory processing in particular laminar flows. Finally, he asked each group to study the escape plan, which follows the laboratory that works in fire, flood, and earthquake cases.</p>
          </section>
          <section id="section5">
            <h2 class="main-title">Biosafety Practices</h2>
            <p>All the rules mentioned above are thoroughly described and explained through an informative video our team filmed in the context of our collaboration with iGEM IISER Mohali team. In this video, one of our lab members talks about biosafety related to a cell line that we use as a negative control to test our diagnostic tool. BEAS2B cell line is classified as biosafety level 2, because it contains polyoma viral DNA sequences. </p>
            <a class="link-download" href="https://video.igem.org/w/xkTMkySnmQEZfMc18hst9Y?start=0s">Watch the video</a>
          </section>
          <section id="section6">
            <h2 class="main-title">Project safety</h2>
            <p>Regarding the safety and security of our project, our team had a beneficial meeting with a microbiologist, <span>Mr. Sotiropoulos</span>, who assisted us in blood sample preservation and handling, and he also gave us worthwhile insights about laboratory procedures. </p>
            <p>Firstly he explained that after blood collection, we centrifuge the solution to differentiate blood's various substances. Then we extract the part of the solution that contains the biomarkers we are searching for, namely the circular RNAs, and then we can use our test to measure their concentration and decide if there is lung cancer. He also pinpointed that blood samples could be stored at -80 celsius for up to 2-3 months. 
            <br>Moreover, he explained to us the procedure of blood collection and how to treat the patient, highlighting the importance of using sterile equipment and disinfecting the location of blood extraction to get a proper blood sample. 
            </p>
            <p>In conclusion, our interview with Mr. Sotiropoulos was beneficial concerning our project's biosafety and sampling procedure.</p>
            <div class="gallery grid">
              <a class="half-content" href="https://static.igem.wiki/teams/4118/wiki/website-assets/safety/photo-4-min.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/safety/photo-4-min.png"/></a>
            </div>
          </section>
          <section id="section7">
            <ul class="acc">
              <li class="acc-item references">
                <input id="s1" class="hide" type="checkbox">
                <label for="s1" class="acc-label icon">References</label>
                <div class="acc-child">
                  <p>[1]. CDC. (2020, February 11). Information for Laboratories about Coronavirus (COVID-19). Centers for Disease Control and Prevention. <a href="https://www.cdc.gov/coronavirus/2019-ncov/lab/lab-safety-practices.html" class="link-ref">https://www.cdc.gov/coronavirus/2019-ncov/lab/lab-safety-practices.html</a>
‌                  <br>[2]. iGEM Responsibility. (n.d.). Responsibility.igem.org. Retrieved October 12, 2022, from <a href="https://responsibility.igem.org/safety-forms/project-safety" class="link-ref">https://responsibility.igem.org/safety-forms/project-safety</a>
                  <br>[3]. Cell Culture Laboratory Safety - US. (n.d.). Www.thermofisher.com. Retrieved October 12, 2022, from <a href="https://www.thermofisher.com/gr/en/home/references/gibco-cell-culture-basics/cell-culture-laboratory-safety.html" class="link-ref">https://www.thermofisher.com/gr/en/home/references/gibco-cell-culture-basics/cell-culture-laboratory-safety.html</a> 
                  </p>
                </div>
              </li>
            </ul>
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
            currentPage: "Safety",
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