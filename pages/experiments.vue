<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="design">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#design`" v-scroll-to="'#design'">Experimental Design</a></li>
                <li><a :href="`${currentPage}/#synthesis`" v-scroll-to="'#synthesis'">Nanostructure Synthesis</a></li>
                <li><a :href="`${currentPage}/#validation`" v-scroll-to="'#validation'">Detection method validation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#primary`" v-scroll-to="'#primary'" parent="validation">Primary validation</a></li>
                  <li class="sub"><a :href="`${currentPage}/#full`" v-scroll-to="'#full'" parent="validation">Full validation</a></li>
                  <li class="sub"><a :href="`${currentPage}/#cross`" v-scroll-to="'#cross'" parent="validation">Cross-validation</a></li>
                </ul>
                <li><a :href="`${currentPage}/#evaluation`" v-scroll-to="'#evaluation'">Biomarker evaluation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#crna`" v-scroll-to="'#crna'" parent="evaluation">Circular RNA expression</a></li>
                  <li class="sub"><a :href="`${currentPage}/#ldn`" v-scroll-to="'#ldn'" parent="evaluation">Cell-line-derived target detection</a></li>
                  <li class="sub"><a :href="`${currentPage}/#stability`" v-scroll-to="'#stability'" parent="evaluation">Target stability</a></li>
                </ul>
                <li><a :href="`${currentPage}/#ancillary`" v-scroll-to="'#ancillary'">Ancillary experiments</a></li>
                <li><a :href="`${currentPage}/#protocols`" v-scroll-to="'#protocols'">Protocols</a></li>
                <li><a :href="`${currentPage}/#references`" v-scroll-to="'#references'">References</a></li>
              </ol>              
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="design">
            <h2 class="main-title">Experimental Design</h2>
            <p>Our experimental design consists of three aspects: the Linear DNA Nanostructure (LDN) synthesis, our detection method validation, and the target evaluation to examine if it operates as the ideal diagnostic biomarker. Refer to the <a class="link-ref" v-scroll-to="'#protocols'">Protocols</a> section for the exact reaction conditions used in each step of our experimental design.</p>
            <figure class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/experiments/fig1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/experiments/fig1.jpg"/></a>
              <figcaption class="figure-caption text-left">Fig.1 Schematic Representation of our Experimental Design</figcaption>
            </figure>
          </section>
          <section id="synthesis">
            <h2 class="main-title">Nanostructure Synthesis</h2>
            <p>We divided the DNA nanostructure synthesis into three steps. First, a <a class="link-primary" @click="changeWord('Phosphorylation')">phosphorylated</a> DNA template's cyclization occurs <span>(Fig.1)</span> using T4 DNA ligase <a class="link-ref" href="https://international.neb.com/products/m0202-t4-dna-ligase">(M0202L)</a> and a sequence specific primer (Note: this circular DNA is not our target). Next, we purify the circular product using Exonuclease I <a class="link-ref" href="https://international.neb.com/products/m0293-exonuclease-i-e-coli">(M0293S)</a>, Exonuclease III <a class="link-ref" href="https://international.neb.com/products/m0206-exonuclease-iii-e-coli">(M0206S)</a> and a PCR purification kit <a class="link-ref" href="https://www.mn-net.com/nucleospin-gel-and-pcr-clean-up-mini-kit-for-gel-extraction-and-pcr-clean-up-740609.50">(740609.50)</a>. As a second step, we use phi29 DNA polymerase <a class="link-ref" href="https://international.neb.com/products/m0269-phi29-dna-polymerase">(M0269L)</a>, which possesses excellent <a class="link-primary" @click="changeWord('Strand displacement activity')">strand displacement activity</a>, to create a long linear DNA molecule. This process is also known as <a class="link-primary" @click="changeWord('Rolling circle amplification (RCA)')">Rolling Circle Amplification (RCA)</a>, and the product consists of multiple repeats of the original DNA template sequence. We purified the RCA product using a PCR purification kit. In order to get a high yield of the RCA product, we repeated steps 1 and 2 multiple times, varying the conditions, until we ended up with the ideal ones (See <a class="link-ref" href="engineering">Engineering Success Page</a>). Finally, the Nanostructure assembly step (step 3) follows this process: multiple <a class="link-primary" @click="changeWord('Hairpin DNA probes')">hairpin probes</a>, H1 and H2, are installed to the DNA scaffold because one of their two "hanging tails" is complementary to the installation site. Of course, we repeated everything with different H1 and H2 specific sequences for each target.</p>
            <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/experiments/fig3.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/experiments/fig3.png"/></a>
              <figcaption class="figure-caption text-left">Fig.2 Linear DNA Nanostructure synthesis. T4 DNA ligase cyclizes the  DNA template using ATP. Then, the purified product is used for RCA, and the H1/H2 probes hybridize to the long DNA backbone in the right incubation conditions</figcaption>
            </figure>
            <br>
            <p>So we understand that we must design the DNA template sequence carefully before proceeding to the experimental part (See <a class="link-ref" href="model">Model Page</a>). It carries two hairpin probe hybridization sites for the H1 and H2 hairpin probes. By extension, the long linear DNA scaffold carries multiple hairpin probe installation sites <span>(Fig.2)</span>. Spacer domains between the installation sites tune ligand density. The designed template and primer sequences can be found on the <a class="link-ref" href="parts">Parts page</a>.</p>
            <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/experiments/fig2.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/experiments/fig2.png"/></a>
              <figcaption class="figure-caption text-left">Fig.3 Circular Template Design. The template possesses four distinct domains that are found in the RCA product. In addition, we observe that the long DNA scaffold comes installed with multiple repeats of the original DNA template’s sequence.</figcaption>
            </figure>
            <br>
            <p>In order to prove the feasibility of our design, we tested each step separately:</p>
            <ul class="bullets">
              <li>We measured the circular DNA concentration by Implen NanoPhotometer® P330 using the oligonucleotide's unique analysis constant.</li>
              <li>We verified the long DNA scaffold preparation with agarose gel electrophoresis experiments. We have also scheduled <a class="link-primary" @click="changeWord('Sanger sequencing')">Sanger sequencing</a> to verify the RCA sequence.</li>
              <li>We tried to validate the LDN Assembly via <a class="link-primary" @click="changeWord('Atomic force microscopy (AFM)')">Atomic Force Microscopy (AFM)</a> imaging. However, we could not get a high-quality image due to the high salt concentration in the mixture.</li>
            </ul>
            <br>
          </section>
          <section id="validation">
            <h2 class="main-title">Detection method validation</h2>
            <p>In order to reach reliable results, a <a class="link-primary" @click="changeWord('a Bioanalytical method')">Bioanalytical method</a> needs to be validated <a class="link-ref" v-scroll-to="'#references'">[1]</a>, <a class="link-ref" v-scroll-to="'#references'">[2]</a>. We organized our experimental assays to output results to estimate the method's reliability, reproducibility, and quality. We provide three types of validation: partial, full, and cross-validation.</p>
            <section id="primary">
              <h3 class="small-title">Primary validation</h3>
              <p>Our partial validation involves the method's specificity, linearity, accuracy, precision, and sensitivity, using the <a class="link-primary" @click="changeWord('Back-splicing')">back-splice</a> junction (BSJ) site with the desired sequence as a target. We ordered a synthetic BSJ sequence for all three targets (hsa_circ_070354, hsa_circ_0102533, hsa_circ_005962).</p>
              <ul class="bullets">
                <li><span>Specificity:</span> The method must detect the analyte of interest in the presence of whatever components. Other components should not interfere with the quantification signal a specific quantity of target gives out. In parallel, a mixture that does not contain the analyte must produce zero signal. To ensure our technique is selective, we created positive and negative samples. Positive samples contained a specific concentration of the synthetic BSJ sequence and our Nanostructure. On the other hand, negative samples contained water instead of the target. We measured the fluorescence of the samples after incubation.</li>
                <li><span>Calibration model:</span> We must investigate the relationship between the concentration of the BSJ in the reaction tube and the fluorescence intensity. We can achieve it by creating different target concentration samples through serial dilutions and setting them for detection. According to FDA guidelines, calibration curves should contain five or more calibration points.</li>
                <li><span>Accuracy and precision:</span> Accuracy describes the correctness of the experimental result. It requires the calculation of relative and absolute errors. Precision defines the concentration of the results between a central value for two or more repeated measurements. It is calculated by the value of variance and standard variation. So, we conducted each experiment on duplicates or triplicates. </li>
                <li><span>Sensitivity:</span> Through accuracy and precision data, we can verify the sensitivity of our method, estimating the limits of detection.</li>
              </ul>
            </section>
            <section id="full">
              <h3 class="small-title">Full validation</h3>
              <p>Our full validation consists of the same assays as our partial validation, using the complete circRNA sequence. So, we ordered the whole sequence for all three targets (hsa_circ_070354, hsa_circ_0102533, hsa_circ_005962) as synthetic linear phosphorylated DNA. Then, we performed cyclization of the phosphorylated DNA using T4 DNA ligase (M0202L) and a sequence specific primer. Next, we purified the circular product using Exonuclease I (M0293S), Exonuclease III (M0206S), and the PCR purification kit (740609.50). After the purification, we measured the circular DNA concentration by Implen NanoPhotometer® P330 using the oligonucleotide's unique analysis constant.</p>
              <ul class="bullets">
                <li><span>Specificity:</span> Again, we created positive and negative samples. Positive samples contained the circular DNA in known concentrations and our Nanostructure, while negative samples contained water instead of the target. We measured the fluorescence of these samples. We also tested the Nanostructure's ability to distinguish between circular and linear targets. So we created samples containing linear DNA (prior to the ligation reaction) and measured their fluorescence after incubation at the ideal conditions. It was also recommended to test the selectivity of our method using the degraded synthetic target, but we had neither enough time nor enough reagents.</li>
                <li><span>Calibration model:</span> We created different target concentration samples through serial dilutions and set them for detection. The calibration curves contained more than five calibration points. Of course, we compared the calibration curves from this assay with the ones derived from the partial validation assay to see how partial validation deflects from full validation.</li>
                <li><span>Accuracy and precision:</span> We conducted each experiment on duplicates or triplicates. </li>
                <li><span>Sensitivity:</span> Through accuracy and precision data, we can verify the sensitivity of our method, estimating the limits of detection.</li>
              </ul>
            </section>
            <section id="cross">
              <h3 class="small-title">Cross-validation</h3>
              <p>We compared the method with the gold standard one, which is reverse transcription PCR. We used data from PCR and LDN reactions described below (biomarker evaluation) to cross-validate our method. </p>
            </section>
          </section>
          <section id="evaluation">
            <h2 class="main-title">Biomarker evaluation</h2>
            <p>We adopted the following methods to examine if our three target circular RNAs can work ideally to establish this method.</p>
            <section id="crna">
              <h3 class="small-title">Circular RNA expression on cell lines</h3>
              <p>First, we obtained the following lung cancer cell lines: A549 (CRM-CCL-185), H1299 (CRL-5803), DMS454 (CRL-2064), H460 (HTB-177), and H2347 (CRL-5942). They account for Lung adenocarcinoma, Lung large cell carcinoma, Small Cell Lung Carcinoma, Large Cell Carcinoma, and Lung Adenocarcinoma Stage 1 subtypes, respectively. We also ordered a bronchial epithelium cell line derived from healthy human lung tissue, BEAS-2B (CRL-9609). First, we extracted the total RNA from the cell lines using TRIzol™ Reagent (15596026). Then, we digested all linear RNAs using RNase R (ab286929), a ribonuclease with the ability to digest all RNAs except lariat or circular ones. Next, we performed reverse transcription on circular RNAs to generate complementary DNA (cDNA). Finally, we added the cDNA for real-time Polymerase Chain Reaction (real-time PCR), using specific primers for each circular RNA target. This way, we could get information on the expression of each target in the lung cancer cells contrasting to the normal epithelial cells.</p>
            </section>
            <section id="ldn">
              <h3 class="small-title">Cell-line-derived target detection using LDN</h3>
              <p>We created positive and negative samples. Positive samples contained a quantity of the total RNA extracted from the cell lines and our Nanostructure, while negative samples contained water instead of the RNA. After incubation, we measured the fluorescence emission. Since we had performed full validation of our technique with synthetic circular DNA instead of RNA, we wanted to test the LDN's ability to detect the RNA.</p>
            </section>
            <section id="stability">
              <h3 class="small-title">Target stability</h3>
              <p>Samples of total RNA from cell lines were frozen at -80 oC prior to RT-PCR. Also, samples were treated with RNase R prior to RT-PCR. Therefore, we can conclude whether targets have sufficient temperature and enzyme stability. </p>
            </section>
          </section>
          <section id="ancillary">
            <h2 class="main-title">Ancillary experiments</h2>
            <h3 class="small-title">H2 fluorescence intensity</h3>
            <p>We diluted the H2 hairpin probe at a final concentration equal to the concentration of H2 in the detection reaction and measured the fluorescence intensity of the sample. This way, we estimated the fluorescence emission of the probe at a closed conformation.</p>
            <h3 class="small-title">H1 & H2 mixture fluorescence intensity</h3>
            <p>We mixed H1 & H2 hairpin probes at a final concentration equal to their concentration in the detection reaction and measured the fluorescence intensity of the sample. Comparing these results with H2 fluorescence intensity, we made conclusions about the hybridization level of the two probes in the absence of the target in the reaction mixture.</p>
            <h3 class="small-title">LDN's fluorescence intensity in the absence of the target</h3>
            <p>Before incubating the negative samples (samples containing only LDN and water), we measured their fluorescence emission. This way, we could calculate the amount of fluorescence emitted by the LDN alone. </p>
            <h3 class="small-title">LDN's stability</h3>
            <p>We created a calibration curve with increasing amounts of the BSJ target with LDN that was previously stored at -80<sup>o</sup>C.</p>
            <h3 class="small-title">Time-response kinetics analysis</h3>
            <p>We performed LDN detection reactions that halted at consecutive times to measure the system's fluorescence enhancement with time. By doing so, we could find the optimal reaction time.</p>
          </section>
          <section id="protocols">
            <h2 class="main-title">Protocols</h2>
          </section>
          <section id="references">
            <ul class="acc">
              <li class="acc-item references">
                <input id="s1" class="hide" type="checkbox">
                <label for="s1" class="acc-label icon">References</label>
                <div class="acc-child">
                  <p>[1]. Tiwari, G., & Tiwari, R. (2010). Bioanalytical method validation: An updated review. Pharmaceutical Methods, 1(1), 25. <a class="link-ref" href="https://doi.org/10.4103/2229-4708.72226">https://doi.org/10.4103/2229-4708.72226</a> <br>
                  [2]. Moein, M. M., El Beqqali, A., & Abdel-Rehim, M. (2017, February). Bioanalytical method development and validation: Critical concepts and strategies. Journal of Chromatography B, 1043, 3–11. <a class="link-ref" href="https://doi.org/10.1016/j.jchromb.2016.09.028">https://doi.org/10.1016/j.jchromb.2016.09.028</a>
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Scrollspy>
    <a class="link-ref" href=""></a>
  </div>
</template>

<script>
import SimpleLightbox from "simplelightbox";

export default {
    layout: "highlighter",
    props: {
      isOpened: {type: Boolean},
      wordName: {type: String},
      wordDescription: {type: String},
    },
    data() {
        return {
            currentPage: "Experiments",
            dictionaryData: null,
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
      fetch("https://static.igem.wiki/teams/4118/wiki/website-assets/dictionary/experiments.json")
        .then(res => res.json())
        .then(data => this.dictionaryData = data)
        .catch(err => { throw err });
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrolled);
    },
    methods: {
      scrolled: function () {
          document.querySelector("progress").value = window.scrollY / (document.querySelector("#main-content").offsetHeight - window.innerHeight + document.querySelector("#header").clientHeight) * 100;
      },
      changeWord: function (word) {
        if (this.wordName != word) {
          if (!this.isOpened) {
            this.$emit('update:isOpened', true);
          }
          if (this.dictionaryData != null && this.wordIndex != "") {
            const index = this.dictionaryData.findIndex((index) => index.name == word)
            this.$emit('update:wordName', this.dictionaryData[index].name);
            this.$emit('update:wordDescription', this.dictionaryData[index].description);
          }
        } else if (this.wordName == word || this.wordName == "") {
          this.$emit('update:isOpened', !this.isOpened);
          this.$emit('update:wordName', "");
          this.$emit('update:wordDescription', "");
        }
      }
    }
}
</script>