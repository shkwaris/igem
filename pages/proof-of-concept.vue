<template>
  <div>
    <Header :title="currentPage"></Header>

    <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
      <h1 class="head-title">{{currentPage}}</h1>
    </div>

    <section class="intro">
      <h3 class="main-title">Overview</h3>
      <p>The team's objective was to develop a new approach to diagnose NSCLC that would be non-invasive, offer early disease diagnosis, and provide reliable performance with application on clinical samples. We decided to focus on Circular RNAs, expressed by cancer cells, and found in blood circulation. We aim to develop an analytical method, using a new tool called Linear DNA Nanostructure (LDN), that would successfully detect the circRNA targets of interest in a complex sample, such as blood. On this page, we demonstrate the level at which our method is likely to work.</p>  
    </section>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <ol>
              <li><a :href="`${currentPage}/#section1`" v-scroll-to="'#section1'">Can the system detect our biomarker?</a></li>
              <ul>
                <li class="sub"><a :href="`${currentPage}/#section1-1`" v-scroll-to="'#section1-1'" parent="section1">Target quantification & Selectivity</a></li>
                <li class="sub"><a :href="`${currentPage}/#section1-2`" v-scroll-to="'#section1-2'" parent="section1">Cross Validation</a></li>
                <li class="sub"><a :href="`${currentPage}/#section1-3`" v-scroll-to="'#section1-3'" parent="section1">Can the Nanostructure be successfully synthesized?</a></li>
                <li class="sub"><a :href="`${currentPage}/#section1-4`" v-scroll-to="'#section1-4'" parent="section1">Can the Nanostructure be successfully shipped from the point of manufacturing to the point of testing?</a></li>
              </ul>
              <li><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'">Can our technique be implemented in other diseases?</a></li>
              <li><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'">References</a></li>
            </ol>
          </nav>
        </div>

        <div class="col-lg-9 main-content">
          <section id="section1">
            <h2 class="main-title">Can the system detect our biomarker?</h2>
            <p>We successfully managed to detect two out of three targets. Before reading this section, please refer to our <a class="link-ref" href="results">Results</a> page.</p>
            <section id="section1-1">
              <h3 class="small-title">Target quantification & Selectivity</h3>
              <p><span>Proof of concept</span>: We tested our Nanostructure's ability to detect the BSJ site when it is present as a small DNA fragment or a part of a circular DNA sequence. We constructed calibration curves and calculated the specific parameters of each curve. Based on the results of the proposed method we deduced that the circular RNA targets could be detected and quantified. Also, the LDN system is selective for circular targets in a complex mixture containing their linear isoforms. </p>
              <p><span>Drawbacks & future steps</span>: The difference in signal intensity between negative and positive samples and consequently the signal over background ratio (S/B), could be increased. We could achieve this by reducing the interaction between the two probes in the mixture prior to target addition. We have already made some optimization studies to overcome this hurdle. However, we believe that we can achieve a remarkable result with further Dry Lab modeling and optimization studies. This way, we can also reduce the limits of detection. Our goal is to reach a LOD as low as 1 fmol/μL. Please visit our <a class="link-ref" href="engineering">Engineering</a> page for more details. </p>
            </section>
            <section id="section1-2">
              <h3 class="small-title">Cross-Validation</h3>
              <p><span>Proof of concept</span>: To ensure that the validated designed LDN system could identify the circRNA biomarkers, we compared our results with the gold-standard method: RT-PCR. Reverse Transcription Polymerase Chain Reaction (RT-PCR) possesses the ability to identify circular RNAs with great success. The cross-validation was achieved by comparing the developed method, based on the LDN system, with the RT-PCR method. Initially, we successfully identified hsa_circ_0070354 and hsa_circ_0005962 targets in NCI-H1299 and A549 cell lines. Hsa_circ_0102533 was identified one time in the A549 cell line. In addition, A549, NCI-H1299, DMS454, NCI-H460, and NCI-H1237 cancer cell lines contained hsa_circ_0070354 and hsa_circ_0005962 as well. Experiments on BEAS-2B, a normal epithelial cell line, confirmed our original assumption that at least two of the selected initial biomarkers are overexpressed in lung cancer.</p> 
              <p>The presence of hsa_circ_0070354 and hsa_circ_0005962 was also verified with the designed LDN. Using the total RNA extract for cell lines A549, NCI-H1299, and BEAS-2B, we tested if our technique could successfully identify hsa_circ_0070354 and hsa_circ_0005962 in a complex sample, such as total RNA extract. We could detect both circRNAs verifying the selectivity of our LDN system.</p>
              <p><span>Drawbacks</span>: Due to Rolling Circle Transcription artifacts, data obtained from RT-PCR can not always be used to quantify the circRNA biomarker of choice <a class="link-ref" v-scroll-to="'#section3'">[1]</a> accurately. So direct comparison between results acquired from RT-PCR and LDN is restricted. Hsa_circ_0102533 was successfully identified in the A549 cancer cell line. Even though this sounds like a positive result, we have not been able to identify hsa_circ_0102533 ever since. That might indicate that further culture is needed for this circRNA to be expressed or that further research is needed to validate this biomarker. </p>
            </section>
            <section id="section1-3">
              <h3 class="small-title">Can the Nanostructure be successfully synthesized??</h3>
              <p><span>Proof of concept</span>: In the present method developed, we are working on a synthesis procedure where each step's successful completion can verify the previous one's successful completion. Regardless, we provide proof of the successful completion of each synthetic step. We chose the agarose gel electrophoresis technique and visualization of the sequences of interest under UV light, for nucleic acid quantification, as our top verification method. Finally, the DNA template's circularization and the linear scaffold's formation were confirmed based on the above.</p>
              <p><span>Drawbacks & future steps</span>: We have two suggestions for achieving our validation. First, we need an established method for verifying and purifying nucleic acids if we need a more mass production of the RCA products in the future. For example, sequence determination could be carried out by Sanger sequencing. We have already scheduled to send our RCA for Sanger sequencing. Furthermore, we need an established method to verify our LDN Assembly. Unfortunately, the Nanostructure is denatured in agarose gels due to temperature increase. We tried to verify the Nanostructure using Atomic Force Microscopy (AFM) imaging, but the concentration of salts in the sample was too high, preventing us from obtaining significant results. </p>
            </section>
            <section id="section1-4">
              <h3 class="small-title">Can the Nanostructure be successfully shipped from the point of manufacturing to the point of testing</h3>
              <p>We may be able to synthesize our product, but can we successfully distribute it to clinics, hospitals, and microbiological laboratories? We have experimentally proven that we are not able to store our Nanostructure in liquid form. For more information please refer to the “LDN Stability” subsection of our Results page.</p>
              <p>We propose the lyophilization of our Nanostructure to preserve its structural integrity during long-term storage. Lyophilization, or freeze drying, enhances the long-term storage stability of cells, proteins, microorganisms, or nanoparticles. Pharmaceutical companies are using freeze drying to increase the shelf life of products, especially at room temperature.  However, DNA integrity is said to be compromised by freeze drying due to its vulnerability to common factors, such as pH or ionic interactions. DNA nanostructures can be lyophilized with the addition of stabilizers such as lipids or polymers. For example, plasmid DNA nanoparticles can be lyophilized with high amounts of sugars, such as sucrose or trehalose, in concentrations up to 0.5 M to maintain particle size and transfection activity <a class="link-ref" v-scroll-to="'#section3'">[2]</a>,<a class="link-ref" v-scroll-to="'#section3'">[3]</a>. Also, DNA/polymer complexes with polymers like poly(2-dimethylamino)ethyl methacrylate are used in the lyophilization of plasmid DNA. This DNA complex, with the addition of sucrose, can maintain its size and integrity for up to 10 months at 4 oC <a class="link-ref" v-scroll-to="'#section3'">[4]</a>. </p>
              <p>Furthermore, a study has shown that DNA nanostructures can preserve their structural integrity during freeze-drying with different concentrations of Mg+2. Tetrahedral DNAs and triangular origami DNA nanostructures were frozen with a solution containing 50 μM Mg+2 at -80 oC and then reconstituted with deionized water. Gel electrophoresis demonstrated that DNA molecules had identical mobilities with freshly prepared DNA molecules, and no structural changes were observed <a class="link-ref" v-scroll-to="'#section3'">[5]</a>. Therefore, DNA nanostructures can easily withstand lyophilization.</p>
            </section>
          </section>
          <section id="section2">
            <h2 class="main-title">Can our technique be implemented in other diseases?</h2>
            <p><span>Proof of concept</span>: We know our design process is too complicated to follow. Therefore, we automated our design by creating a python script that calculates and simulates possible LDNs given the mature circRNA sequence. So, given the target, anyone can design the desirable LDN system. This way, our LDN system can be easily applied on different types of diseases, when  circRNAs are used as biomarkers.</p>
            <p><span>Drawbacks & future steps</span>: However, research on the pathophysiological functions of circRNAs in lung cancer has a long way to go. We propose a detection method based on Linear DNA Nanostructures to make circRNAs a widely-used biomarker. Implementation of our Modeling work can automate the sequences needed to create a specific circRNA biomarker or even simultaneously model multiple LDNs for various circRNA mature sequence inputs.</p>
          </section>
          <section id="section3">
            <ul class="acc">
              <li class="acc-item references">
                <input id="s1" class="hide" type="checkbox">
                <label for="s1" class="acc-label icon">References</label>
                <div class="acc-child">
                  <p>[1]. Cocquet, J., Chong, A., Zhang, G., & Veitia, R. A. (2006, July). Reverse transcriptase template switching and false alternative transcripts. Genomics, 88(1), 127–131. <a class="link-ref" href="https://doi.org/10.1016/j.ijpharm.2022.122233">https://doi.org/10.1016/j.ygeno.2005.12.013</a>
                  <br>[2] T.J. Anchordoquy, J.F. Carpenter, D.J. Kroll, Maintenance of Transfection Rates and Physical Characterization of Lipid/DNA Complexes after Freeze-Drying and Rehydration, Arch. Biochem. Biophys., 348 (1997) 199-206.
                  <br>[3] K.K. Abla, M.M. Mehanna, Freeze-drying: A Flourishing Strategy to Fabricate Stable Pharmaceutical and Biological Products, International Journal of Pharmaceutics (2022), <a class="link-ref" href="https://doi.org/10.1016/j.ijpharm.2022.122233">https://doi.org/10.1016/j.ijpharm.2022.122233</a>
                  <br>[4] J.-Y. Cherng, P. van de Wetering, H. Talsma, D.J.A. Crommelin, W.E. Hennink, Freeze-Drying of Poly((2-dimethylamino)ethyl Methacrylate)-Based Gene Delivery Systems, Pharm.Res., 14 (1997) 1838-1841.
                  <br>[5] Zhu, B., Zhao, Y., Dai, J., Wang, J., Xing, S., Guo, L., … Wang, L. (2017). Preservation of DNA Nanostructure Carriers: Effects of Freeze–Thawing and Ionic Strength during Lyophilization and Storage. ACS Applied Materials & Interfaces, 9(22), 18434–18439. <a class="link-ref" href="https://pubs.acs.org/doi/10.1021/acsami.7b04784">doi:10.1021/acsami.7b04784</a>
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
            currentPage: "Proof of Concept",
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