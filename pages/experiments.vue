<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/experiments.jpg') center center no-repeat; background-size: cover;">
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
                <li><a :href="`${currentPage}/#detection`" v-scroll-to="'#detection'">Detection method</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#optimization`" v-scroll-to="'#optimization'" parent="detection">Optimization of the method</a></li>
                  <li class="sub"><a :href="`${currentPage}/#validation`" v-scroll-to="'#validation'" parent="detection">Validation of the method</a></li>
                  <li class="sub"><a :href="`${currentPage}/#cross`" v-scroll-to="'#cross'" parent="detection">Cross-validation</a></li>
                </ul>
                <li><a :href="`${currentPage}/#evaluation`" v-scroll-to="'#evaluation'">Biomarker evaluation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#crna`" v-scroll-to="'#crna'" parent="evaluation">Circular RNA expression</a></li>
                  <li class="sub"><a :href="`${currentPage}/#ldn`" v-scroll-to="'#ldn'" parent="evaluation">Cell-line-derived target detection</a></li>
                  <li class="sub"><a :href="`${currentPage}/#stability`" v-scroll-to="'#stability'" parent="evaluation">Target stability</a></li>
                </ul>
                <li><a :href="`${currentPage}/#ancillary`" v-scroll-to="'#ancillary'">Ancillary experiments</a></li>
                <li><a :href="`${currentPage}/#protocols`" v-scroll-to="'#protocols'">Protocols</a></li>
                <li><a :href="`${currentPage}/#notebook`" v-scroll-to="'#protocols'">Notebook</a></li>
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
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/experiments/experimental-design-1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/experiments/experimental-design-1.jpg"/></a>
              <figcaption class="figure-caption text-left"><span>Fig.1:</span> Schematic Representation of our Experimental Design</figcaption>
            </figure>
          </section>
          <section id="synthesis">
            <h2 class="main-title">Nanostructure Synthesis</h2>
            <p>We divided the DNA nanostructure synthesis into three steps. First, a <a class="link-primary" @click="changeWord('Phosphorylation')">phosphorylated</a> DNA template's cyclization occurs <span>(Fig.1)</span> using T4 DNA ligase <a class="link-ref" href="https://international.neb.com/products/m0202-t4-dna-ligase">(M0202L)</a> and a sequence specific primer (Note: this circular DNA is not our target). Next, we purified the circular product using Exonuclease I <a class="link-ref" href="https://international.neb.com/products/m0293-exonuclease-i-e-coli">(M0293S)</a>, Exonuclease III <a class="link-ref" href="https://international.neb.com/products/m0206-exonuclease-iii-e-coli">(M0206S)</a> and a PCR purification kit <a class="link-ref" href="https://www.mn-net.com/nucleospin-gel-and-pcr-clean-up-mini-kit-for-gel-extraction-and-pcr-clean-up-740609.50">(740609.50)</a>. As a second step, we used phi29 DNA polymerase <a class="link-ref" href="https://international.neb.com/products/m0269-phi29-dna-polymerase">(M0269L)</a>, which possesses excellent <a class="link-primary" @click="changeWord('Strand displacement activity')">strand displacement activity</a>, to create a long linear DNA molecule. This process is also known as <a class="link-primary" @click="changeWord('Rolling circle amplification (RCA)')">Rolling Circle Amplification (RCA)</a>, and the product consists of multiple repeats of the original DNA template sequence. We purified the RCA product using a PCR purification kit. In order to get a high yield of the RCA product, we repeated steps 1 and 2 multiple times, varying the conditions, until we ended up with the ideal ones (See <a class="link-ref" href="engineering">Engineering Success Page</a>). Finally, the Nanostructure assembly step (step 3) follows this process: multiple <a class="link-primary" @click="changeWord('Hairpin DNA probes')">hairpin probes</a>, H1 and H2, are installed to the DNA scaffold because one of their two "hanging tails" is complementary to the installation site. Of course, we repeated everything with different H1 and H2 specific sequences for each target.</p>
            <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/experiments/fig3.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/experiments/fig3.png"/></a>
              <figcaption class="figure-caption text-left"><span>Fig.2 Linear DNA Nanostructure synthesis:</span> T4 DNA ligase cyclizes the  DNA template using ATP. Then, the purified product is used for RCA, and the H1/H2 probes hybridize to the long DNA backbone in the right incubation conditions</figcaption>
            </figure>
            <br>
            <br>
            <p>In order to prove the feasibility of our design, we tested each step separately:</p>
            <ul class="bullets">
              <li>We measured the circular DNA concentration by Implen NanoPhotometer® P330 using the oligonucleotide's unique analysis constant.</li>
              <li>We verified the long DNA scaffold preparation with agarose gel electrophoresis experiments. We have also scheduled <a class="link-primary" @click="changeWord('Sanger sequencing')">Sanger sequencing</a> to verify the RCA sequence.</li>
              <li>We tried to validate the LDN Assembly via <a class="link-primary" @click="changeWord('Atomic force microscopy (AFM)')">Atomic Force Microscopy (AFM)</a> imaging. However, we could not get a high-quality image due to the high salt concentration in the mixture.</li>
            </ul>
            <br>
          </section>
          <section id="detection">
            <h2 class="main-title">Detection method</h2>
            <p>After our Nanostructure is assembled, we can use it to detect our target. Reaction mixtures are prepared using the Nanostructure, our target, and buffer solution. In the reaction mixture, H1 identifies the unique Backsplice Junction site of circRNA, triggering a non-enzymatic amplification reaction along the linear scaffold, and fluorescence emission.</p>
            <p>In order to reach reliable results, our <a class="link-primary" @click="changeWord('a Bioanalytical method')">Bioanalytical method</a> needs to be validated <a class="link-ref" v-scroll-to="'#references'">[1]</a>, <a class="link-ref" v-scroll-to="'#references'">[2]</a>. We organized our experimental assays to output results to estimate the method's analytical performance. </p>
            <section id="optimization">
              <h3 class="small-title">Optimization of the method</h3>
              <p>We ordered a synthetic BSJ sequence for all three targets (hsa_circ_0070354, hsa_circ_0102533, hsa_circ_0005962) and used it as a model target for method development and optimization. To optimize our technique, we analyzed positive and negative samples in parallel. Positive samples contained a specific concentration of the synthetic BSJ sequence and our Nanostructure, while negative samples contained water instead of the target. Also, we prepared different target concentration samples by serial dilutions of a stock solution that were subsequently analyzed by the developed method.</p>
            </section>
            <section id="validation">
              <h3 class="small-title">Validation of the method</h3>
              <p>Next, the method was validated in terms of specificity, linearity, accuracy, precision, and sensitivity, using the complete circRNA sequence. For this purpose, we ordered the whole sequence for all three targets (hsa_circ_0070354, hsa_circ_0102533, hsa_circ_0005962) as a synthetic linear <a class="link-primary" @click="changeWord('Phosphorylation')">phosphorylated</a> DNA sequence. Then, we produced the circular targets by cyclization of the phosphorylated DNA using T4 DNA ligase <a href="https://international.neb.com/products/m0202-t4-dna-ligase" class="link-ref">(M0202L)</a> and a sequence specific primer. Next, we purified the circular product using Exonuclease I <a href="https://international.neb.com/products/m0293-exonuclease-i-e-coli" class="link-ref">(M0293S)</a>, Exonuclease III <a href="https://international.neb.com/products/m0206-exonuclease-iii-e-coli" class="link-ref">(M0206S)</a>, and the PCR purification kit <a href="https://www.mn-net.com/nucleospin-gel-and-pcr-clean-up-mini-kit-for-gel-extraction-and-pcr-clean-up-740609.50" class="link-ref">(740609.50)</a>. After the purification, we measured the circular DNA concentration using Implen NanoPhotometer® P330.</p>
              <ul class="bullets">
                <li><span>Specificity:</span> The method must detect the analyte of interest in a complex matrix in the presence of various components. Other components should not interfere with the analyte and should not affect the signal that a specific quantity of target gives out. In the ideal case, a mixture that does not contain the analyte must produce zero signal (or close to zero). Hence, we created positive and negative samples. Positive samples contained the circular DNA, in known concentrations, and our Nanostructure, while negative samples contained water instead of the target. We measured the fluorescence of these samples. We also tested the Nanostructure's ability to distinguish between circular and linear targets. So we created samples containing linear DNA (prior to the ligation reaction) and measured their fluorescence after incubation at the ideal conditions. It was also recommended to test the selectivity of our method using the degraded synthetic target, but we had neither enough time nor enough reagents.</li>
                <li><span>Calibration curve and linearity:</span> We must investigate the relationship between the target concentration in the reaction and the fluorescence intensity. According to FDA guidelines, calibration curves should contain five or more calibration points. We created different target concentration samples through serial dilutions and set them for detection. The calibration curves contained more than five calibration points. Of course, we compared the calibration curves from this assay with the ones derived from the partial validation assay to see how partial validation deflects from full validation.</li>
                <li><span>Accuracy and precision:</span> Accuracy describes the correctness of the experimental result regarding the actual concentration of the target in the sample. It requires the calculation of relative and absolute errors. Precision defines the reproducibility of the results between a central value for two or more repeated measurements. It is calculated by the coefficient of variance or standard deviation. To determine the precision of our method, we conducted each experiment in duplicates or triplicates.</li>
                <li><span>Sensitivity:</span> Through the calibration curve, we can verify the sensitivity of our method, determining the limits of detection.</li>
              </ul>
            </section>
            <section id="cross">
              <h3 class="small-title">Cross-validation</h3>
              <p>Finally, we compared the method with the gold standard one, the reverse transcription PCR (RT-PCR). We used data from PCR and LDN reactions, as described below (biomarker evaluation), to cross-validate our method. </p>
            </section>
          </section>
          <section id="evaluation">
            <h2 class="main-title">Biomarker evaluation</h2>
            <p>We adopted the following methods to establish the proposed method and to examine if our three circular RNA targets can serve as valuable biomarkers for lung cancer diagnosis.</p>
            <section id="crna">
              <h3 class="small-title">Circular RNA expression in cell lines</h3>
              <p>We obtained the following lung cancer cell lines: A549 <a href="https://www.atcc.org/products/crm-ccl-185" class="link-ref">(CRM-CCL-185)</a>, H1299 <a href="https://www.atcc.org/products/crl-5803" class="link-ref">(CRL-5803)</a>, DMS454 <a href="https://www.atcc.org/products/crl-2064" class="link-ref">(CRL-2064)</a>, H460 <a href="https://www.atcc.org/products/htb-177" class="link-ref">(HTB-177)</a>, and H2347 <a href="https://www.atcc.org/products/crl-5942" class="link-ref">(CRL-5942)</a> from ATCC that account for Lung adenocarcinoma, Lung large cell carcinoma, Small Cell Lung Carcinoma, Large Cell Carcinoma, and Lung Adenocarcinoma Stage 1 subtypes, respectively. We also purchased a bronchial epithelium cell line derived from healthy human lung tissue, BEAS-2B <a href="https://www.atcc.org/products/crl-9609" class="link-ref">(CRL-9609)</a>, as a normal control. First, we extracted the total RNA from the cell lines using the TRIzol™ Reagent <a href="https://www.thermofisher.com/order/catalog/product/15596026" class="link-ref">(15596026)</a>. Then, we digested all linear RNAs using <a class="link-primary" @click="changeWord('RNase R')">RNase R</a> <a href="https://www.abcam.com/rnase-r-ab286929.html" class="link-ref">(ab286929)</a>. Next, we performed reverse transcription on circular RNAs to generate complementary DNA (cDNA). Finally, the cDNA was subjected to real-time Polymerase Chain Reaction (real-time PCR), using forward and reverse primers specific to each circular RNA target. In this way, we could get information on the expression of each target in the lung cancer cells compared to the normal epithelial cells.</p>
            </section>
            <section id="ldn">
              <h3 class="small-title">Cell-line-derived target detection using LDN</h3>
              <p>Total RNA extracted from the cell lines was analyzed using LDN. We prepared both positive and negative samples. Positive samples contained a specific quantity of the total RNA extracted from the cell lines and our Nanostructure, while negative samples contained water instead of RNA. After incubation, we measured the emitted fluorescence. As we had validated our method using a synthetic circular DNA instead of RNA, we wanted to test the LDN's ability to detect circular RNA derived from cell lines.</p>
            </section>
            <section id="stability">
              <h3 class="small-title">Target stability</h3>
              <p>Samples of total RNA isolated from cell lines were frozen at -80 <sup>o</sup>C prior to RT-PCR. Also, samples were treated with RNase R prior to RT-PCR. Therefore, we ensured that  targets have sufficient temperature and enzyme stability. </p>
            </section>
          </section>
          <section id="ancillary">
            <h2 class="main-title">Ancillary experiments</h2>
            <h3 class="small-title">H2 fluorescence intensity</h3>
            <p>We diluted the H2 hairpin probe at a final concentration equal to the concentration of H2 in the final reaction and measured the fluorescence intensity of the sample. In this way, we estimated the emitted  fluorescence of the probe at a closed conformation. </p>
            <h3 class="small-title">H1 & H2 mixture fluorescence intensity</h3>
            <p>We mixed H1 & H2 hairpin probes at a final concentration equal to their concentration in the final reaction and measured the fluorescence intensity of the sample. Comparing these results with the fluorescence emitted by the closed conformation of H2 probe, we estimated the hybridization efficiency of the two probes in the reaction mixture in the absence of the target. </p>
            <h3 class="small-title">LDN's fluorescence intensity in the absence of the target</h3>
            <p>The negative samples (samples containing only LDN and water), prior to incubation step, were measured. In this way, we measured the fluorescence intensity emitted by the LDN alone. </p>
            <h3 class="small-title">LDN's stability</h3>
            <p>We constructed a calibration curve with increasing amounts of the BSJ target with LDN, that was previously stored at -80 <sup>o</sup>C, in order to assess the stability of LDN during time.</p>
            <h3 class="small-title">Time-response kinetics analysis</h3>
            <p>In order to find the optimal time of the final step of our method, we performed LDN detection reactions that were halted for consecutive times (0, 20 min, 40 min, 60 min, 80 min, 100 min and 120 min). Thus, the system's fluorescence enhancement with the time was determined. </p>
          </section>
          <section id="protocols">
            <h2 class="main-title">Protocols</h2>
            <div class="row">
                <div class="col btns">
                  <a @click="buttonEvent(1)" class="primary-button" :class="activebutton == 1 ? 'active' : ''" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/script-in-chinese-by-igem-cuhk-hong-kong-docx.pdf">RT-PCR Protocol</a>
                  <a @click="buttonEvent(2)" class="primary-button" :class="activebutton == 2 ? 'active' : ''" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/script-in-chinese-by-igem-cuhk-hong-kong-docx.pdf">Rolling Circle Amplication</a>
                  <a @click="buttonEvent(3)" class="primary-button" :class="activebutton == 3 ? 'active' : ''" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/script-in-chinese-by-igem-cuhk-hong-kong-docx.pdf">RNA Isolation</a>
                  <a @click="buttonEvent(4)" class="primary-button" :class="activebutton == 4 ? 'active' : ''" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/script-in-chinese-by-igem-cuhk-hong-kong-docx.pdf">LDN Assembly and Detection (hsa_circ_0102533)</a>
                  <a @click="buttonEvent(5)" class="primary-button" :class="activebutton == 5 ? 'active' : ''" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/script-in-chinese-by-igem-cuhk-hong-kong-docx.pdf">LDN Assembly and Detection (hsa_circ_0005962)</a>
                  <a @click="buttonEvent(6)" class="primary-button" :class="activebutton == 6 ? 'active' : ''" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/script-in-chinese-by-igem-cuhk-hong-kong-docx.pdf">Circularization of the phosphorylated DNA template cell culture</a>
                  <a @click="buttonEvent(7)" class="primary-button" :class="activebutton == 7 ? 'active' : ''" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/script-in-chinese-by-igem-cuhk-hong-kong-docx.pdf">Buffer solutions preparation protocol</a>
                </div>
            </div>
          </section>
          <secrion id="notebook">
            <h2 class="main-title">Notebook</h2>
            <div class="row">
                <div class="col btns">
                  <a @click="buttonEvent(8)" class="primary-button" :class="activebutton == 8 ? 'active' : ''" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/script-in-chinese-by-igem-cuhk-hong-kong-docx.pdf">Wet Lab Notebook</a>
                  </div>
            </div>
          </secrion>
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
      fetch("https://static.igem.wiki/teams/4118/wiki/website-assets/dictionary/experiments-2.json")
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