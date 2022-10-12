<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
      <section class="intro">
        <p>We deliver our results according to our experimental design. First, we synthesized the Linear DNA Nanostructure. Long DNA strands were synthesized in two steps: first, a DNA template circularization and then the template's Amplification with a polymerase that possesses great strand displacement activity. Then, hairpin probes H1 and H2 were installed on the linear scaffold. After our Nanostructure was assembled we optimized and validated our method’s efficacy on detecting circular RNAs. Finally, we evaluated our biomarker selection. Additional experiments are presented at the end of the section. On this page, we present only our final results. Please visit our <a href="engineering" class="link-ref">Engineering Success</a> page for more info on the process by which we reached these results.</p>
      </section>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>              
              <ol>
                <li><a :href="`${currentPage}/#synthesis`" v-scroll-to="'#synthesis'">Nanostructure Synthesis</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#ligaition`" v-scroll-to="'#ligaition'" parent="synthesis">Ligation Reaction</a></li>
                  <li class="sub"><a :href="`${currentPage}/#rca`" v-scroll-to="'#rca'" parent="synthesis">RCA Reaction</a></li>
                  <li class="sub"><a :href="`${currentPage}/#assembly`" v-scroll-to="'#assembly'" parent="synthesis">LDN Assembly</a></li>
                </ul>
                <li><a :href="`${currentPage}/#validation`" v-scroll-to="'#validation'">Method validation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#bsj1`" v-scroll-to="'#bsj1'" parent="validation">BSJ hsa_circ_0102533</a></li>
                  <li class="sub"><a :href="`${currentPage}/#bsj2`" v-scroll-to="'#bsj2'" parent="validation">BSJ hsa_circ_0005962</a></li>
                  <li class="sub"><a :href="`${currentPage}/#full`" v-scroll-to="'#full'" parent="validation">Full sequence hsa_circ_0102533</a></li>
                  <li class="sub"><a :href="`${currentPage}/#linear`" v-scroll-to="'#linear'" parent="validation">Linear isoform of hsa_circ_0102533</a></li>
                </ul>
                <li><a :href="`${currentPage}/#evaluation`" v-scroll-to="'#evaluation'">Biomarker evaluation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#extraction`" v-scroll-to="'#extraction'" parent="evaluation">Total RNA extraction</a></li>
                  <li class="sub"><a :href="`${currentPage}/#pcr`" v-scroll-to="'#pcr'" parent="evaluation">PCR results</a></li>
                  <li class="sub"><a :href="`${currentPage}/#detection`" v-scroll-to="'#detection'" parent="evaluation">Cell line circRNA detection</a></li>
                </ul>
                <li><a :href="`${currentPage}/#ancillary`" v-scroll-to="'#ancillary'">Ancillary experiments</a></li>
                <li><a :href="`${currentPage}/#references`" v-scroll-to="'#references'">References</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="synthesis">
            <h2 class="main-title">Nanostructure Synthesis</h2>
            <section id="ligaition">
              <h3 class="small-title">Ligation Reaction</h3>
              <p>The preparation of the circular DNA template was verified by Implen NanoPhotometer® P330 technology. The concentration of individual synthetic oligos can be measured using each oligonucleotide's nucleotide sequence. After Exonuclease I & III treatment and purification of the ligation product by the PCR purification kit, the circular DNA concentration was found to be 0.50±0.03 pmol/μL (A260/280 = 2.10±0.48). </p>
              <p>We calculated the reaction yield equal to 40±2.4%. The initial quantity of linear DNA template (reactant) added to the reaction mixture was 25 pmol. The final quantity of circular DNA recovered was 10 pmol (Final Volume of 20 μL).</p>
            </section>
            <section id="rca">
              <h3 class="small-title">RCA Reaction</h3>
              <p>Agarose gel electrophoresis experiments verified the RCA product. As shown in Fig.1, the long DNA scaffold remains at the top of the electrophoresis gel due to its low electrophoretic ability caused by its high molecular weight.</p>
              <figure class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-1.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.1 Agarose gel electrophoresis analysis of successfully synthesized RCA product</span></figcaption>
              </figure>
              <br>
              <p>Moreover, we measured the concentration of the long DNA scaffold using Implen NanoPhotometer® P330. Through optimizations, we retrieved a low yield at the beginning, followed by high yield of RCA products at the end of optimization experiments (see Engineering Success page). We started by cleaning two reaction products (100 μL each) in one clean-up column of our PCR clean-up kit. But in order to retrieve a higher concentration of linear DNA, we changed the number of reaction products purified in one column from two to three.</p>
              <p>We recovered 28.6±5.6 ng/μL of the product from the 2-reactions-1-column products. From the 3-reactions-1-column products, we recovered 67.0±8.43 ng/μL of the product. Finally, we retrieved 211.5±22.2 ng/μL of the product from the high-yield reactions. High-concentration RCA products from three reactions were purified in a single column. The different yields of the product obtained are displayed in <span>Fig.2</span>.</p>
              <figure class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-2.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-2.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.2 Concentrations of RCA products</span></figcaption>
              </figure>
            </section>
            <section id="assembly">
              <p>Na prostetei</p>
              <figure class="gallery">
                <a href=""><img src=""></a>
                <figcaption class="figure-caption text-left"><span>Fig.2 Concentrations of RCA products</span></figcaption>
              </figure>
            </section>
          </section>
          <section id="validation">
            <p>As previously mentioned, we have organized our <a class="link-ref" target="_blank" href="experiments">Experiments</a> to retrieve data and estimate the method's specificity, linearity, accuracy, precision, and sensitivity. Thus, we designed our experiments accordingly. </p>
            <section id="bsj1">
              <h3 class="small-title">Calibration curve: BSJ hsa_circ_0102533</h3>
              <p>First, we tested whether the LDN could effectively detect the synthetic BSJ in a single reaction. Therefore, after we constructed an LDN for hsa_circ_0102533 target, we prepared a reaction pool that contained: LDN and 1×PBS buffer pH 7.4 (5:13 volume ratio). Then, we added 18 μL of the reaction pool and the target BSJ, in a range of 100nM to 0.5nM, in each reaction tube. In addition, we prepared the corresponding negative controls containing water (RNase-free) instead of the target. After incubation at 37 οC for 70 min, we loaded the samples on a microplate and measured the fluorescence emitted with an excitation wavelength of 554 nm. The emission spectra (576-630 nm) is depicted in <span>Fig.3.</span></p>
              <figure class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-3.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-3.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.3 Fluorescence emission spectra of LDN reaction mixture after incubation with different BSJ target concentrations (100 nM, 50 nM, 10 nM, 5 nM, 1 nM, and 0.5 nM) and absence of the target.</span> Samples were loaded on Thermo Scientific™ Nunc 384-Well Clear Plates. Excitation 554 nm, Emission 576-630 nm.</figcaption>
              </figure>
              <br>
              <p>We observe that the negative sample displays lower fluorescence intensity in comparison to the positive ones. The system reached almost a 2-fold signal-to-background ratio in only 70 minutes. We created a calibration curve by plotting the fluorescence intensity emitted at 576 nm versus the target concentration <span>(Fig.4)</span>.</p>
              <figure class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-4.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-4.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.4 Calibration curve of the LDN system in 0.5-100 nM BSJ target concentration range.</span>  Error bars correspond to standard deviation of n=2 replicates. The horizontal axis is displayed on a logarithmic scale.</figcaption>
              </figure>
              <br>
              <p>We also notice a linear relationship between the fluorescence intensity and the logarithm of the target concentration. The equation and R-square value of the curve are displayed on the chart. After we estimated the intercept's standard error and standard deviation, we calculated the Lower Limit of Detection (LOD) and the Lower Limit of Quantification equal to 2.11 nM and 9.6 nM respectively. LOD was calculated according to the formula LOD = 10^ [3.3 (SE/S)], where SE is the intercept’s standard error and, S is the slope corresponding to the fluorescence intensity versus log[concentration] curve. LOQ was calculated according to the formula <span>LOQ = 10^ [10 (SE/S)]</span>.</p>
            </section>
            <section id="bsj2">
              <h3 class="small-title">Calibration curve: BSJ hsa_circ_0005962</h3>
              <p>We performed the same experiment, as above, for hsa_circ_0005962 target. We measured the fluorescence emitted from reaction systems with various BSJ target concentrations (100 nM, 10 nM, 5 nM, 2.5 nM, 1 nM, 0.1 nM). Samples were loaded on Thermo Scientific™ Nunc 384-Well Black Plates and measured with an excitation wavelength of 615 nm, while the emission was measured at 634 nm. We noticed a 2-fold signal-to-background ratio in only 70 min when the most concentrated positive sample reached a fluorescence emission of 42.2±2.2 (a.u), while the negative sample had a lower value of 17.7±0.2 (a.u.). The calibration curve constructed is presented in <span>Fig.5</span>.</p>
              <figure class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-5.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-5.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.5 Calibration curve of the LDN system in 0.5-100 nM BSJ target concentration range.</span>Error bars correspond to standard deviation of n=2 replicates. The horizontal axis is displayed on a logarithmic scale.</figcaption>
              </figure>
              <br>
              <p>A best-fit curved logarithmic trendline was calculated based on the method of least squares. The equation and R-square value of the curve are displayed on the chart. We calculated the Lower Limit of Detection (LOD) and the Lower Limit of Quantification (LOQ) equal to 2.15 nM and 10.23 nM, respectively, from the intercept's standard error and standard deviation.</p>
            </section>
            <section id="full">
              <h3 class="small-title">Calibration curve: Full sequence hsa_circ_0102533</h3>
              <p>Our next goal was to verify the LDN’s ability to detect the BSJ site when the whole circRNA is present. Therefore, we performed the same experiment using synthetic circular DNA, carrying the sequence of hsa_circ_0102533 target in various concentrations. Also, the corresponding negative controls were prepared and analyzed. The emitted fluorescence intensity acquired from excitation wavelength at 554 nm are shown in <span>Fig.6</span>.</p>
              <figure class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-6.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-6.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.6 Fluorescence emission spectra of LDN reaction mixture after incubation with different circular DNA target concentrations (100 nM, 50 nM, 10 nM, 5 nM, 1 nM, and 0.5 nM) and absence of the target.</span> Samples were loaded on Thermo Scientific™ Nunc 384-Well Clear Plates. Excitation 554 nm, Emission 576-630 nm.</figcaption>
              </figure>
              <p>Unfortunately, we observed only a 1.5-fold signal-to-background ratio. Negative controls gave an average fluorescence intensity of 107.1±1.2. The positive control for the maximum concentration of BSJ target (100 nM) showed a fluorescence intensity of 184.6±4.0, while the highest concentration of circular DNA (100 nM) gave a fluorescence intensity of only 138.8±1.9. However, this can be explained if we consider that the larger the target, the lower the free diffusion rate of the target to the probes, thus reducing the reaction efficiency. We constructed a calibration curve by plotting the fluorescence intensity, at 576 nm, versus the logarithm of the target's concentration <span>(Fig.7)</span>.</p>
              <figure class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/102-h1-the-h2-bsj-in-center-error-bars.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/102-h1-the-h2-bsj-in-center-error-bars.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.7 Calibration curve of the LDN system in 0.5-100 nM circular DNA concentration range.</span> Error bars correspond to standard deviation of n=3 replicates. The horizontal axis is displayed on a logarithmic scale. </figcaption>
              </figure>
            </section>
            <section id="linear">
              <h3 class="small-title">Calibration curve: BSJ hsa_circ_0102533</h3>
              <p></p>
              <figure class="gallery">
                <a href=""><img src=""></a>
                <figcaption class="figure-caption text-left"><span>Fig.2 Concentrations of RCA products</span></figcaption>
              </figure>
            </section>
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
            currentPage: "Results",
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