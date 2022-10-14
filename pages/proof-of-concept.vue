<template>
  <div>
    <Header :title="currentPage"></Header>

    <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/proof123.jpg') center center no-repeat; background-size: cover;">
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
              </ul>
              <li><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'">Can the Nanostructure be successfully synthesized?</a></li>
              <li><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'">Did we make the right biomaker choice?</a></li>
              <li><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'">Can our technique be implemented in other diseases?</a></li>
              <li><a :href="`${currentPage}/#section5`" v-scroll-to="'#section5'">References</a></li>
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
          </section>
          <section id="section2">
            <h3 class="small-title">Can the Nanostructure be successfully synthesized?</h3>
            <p><span>Proof of concept</span>: In the present method developed, we are working on a synthesis procedure where each step's successful completion can verify the previous one's successful completion. Regardless, we provide proof of the successful completion of each synthetic step. We chose the agarose gel electrophoresis technique and visualization of the sequences of interest under UV light, for nucleic acid quantification, as our top verification method. Finally, the DNA template's circularization and the linear scaffold's formation were confirmed based on the above.</p>
            <p><span>Drawbacks & future steps</span>: We have two suggestions for achieving our validation. First, we need an established method for verifying and purifying nucleic acids if we need a more mass production of the RCA products in the future. For example, sequence determination could be carried out by Sanger sequencing. We have already scheduled to send our RCA for Sanger sequencing. Furthermore, we need an established method to verify our LDN Assembly. Unfortunately, the Nanostructure is denatured in agarose gels due to temperature increase. We tried to verify the Nanostructure using <a @click="changeWord('Atomic force microscopy (AFM)')" class="link-primary">Atomic Force Microscopy (AFM)</a> imaging, but the concentration of salts in the sample was too high, preventing us from obtaining significant results. </p>
          </section>
          <section id="section3">
            <h3 class="small-title">Did we make the right biomarker choice?</h3>
            <p>We created a tool for diagnosing lung cancer, proving that we can use the circRNAs’ diagnostic advantage; their unique BSJ read differentiates them from the rest of the RNAs. Furthermore, given the fact that their expression relies on the tumor location and size, they have the potential to be the ideal biomarker molecule. As we have mentioned, circular RNAs are a breakthrough in cancer diagnosis but need to be further explored. We have chosen a panel of circRNAs that complete both criteria: their expression in lung cancer cell lines to have a tool to test our method on and their existence in the blood circulation of lung cancer patients. The data supporting our biomarker choice derived from literature reviews [2],[3],[4] and circRNA databases [5],[6],[7],[8],[9], as mentioned in the "Biomarkers selection" section of our Model page, are organized in the following table. </p>
            <br>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead class="table-dark">
                   <tr>
                      <th scope="col">circRNA</th>
                      <th scope="col">circBase result</th>
                      <th scope="col">Cell lines expression</th>
                      <th scope="col">Number of patients participating the study</th>
                      <th scope="col">AUC (patients’ serum)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">hsa_circ_0070354</th>
                      <td><a href="http://www.circbase.org/cgi-bin/singlerecord.cgi?id=hsa_circ_0070354" class="link-primary">hsa_circ_0070354</a></td>
                      <td>SPCA (****), H1299 (***), A549 (****)</td>
                      <td>133 NSCLC patients (I-IV stage) and 97 healthy donors</td>
                      <td>0.66</td>
                    </tr>
                    <tr>
                      <th scope="row">hsa_circ_0102533</th>
                      <td><a href="http://www.circbase.org/cgi-bin/singlerecord.cgi?id=hsa_circ_0102533" class="link-primary">hsa_circ_0102533</a></td>
                      <td>A549 (***), H1299 (***), H1792 (***), SK-MES-1 (***), SPC-A1 (***)</td>
                      <td>41 NSCLC patients and 26 healthy donors</td>
                      <td>0.744 and 0.774 (for stages I-II)</td>
                    </tr>
                    <tr>
                      <th scope="row">hsa_circ_0005962</th>
                      <td><a href="http://www.circbase.org/cgi-bin/singlerecord.cgi?id=hsa_circ_0005962" class="link-primary">hsa_circ_0005962</a></td>
                      <td>A549, NCI-H1299, HCC827, 16HBE</td>
                      <td>153 LUAD patients (83 were in stage I, 13 in stage II, 30 in stage III, and 25 in stage IV) and 54 healthy donors<br></td>
                      <td>0.73</td>
                    </tr>
                </tbody>
              </table>
            </div>
            <br>
            <p>In our future steps, we include RNA-seq to analyze the expression profile of circular RNAs in lung cancer patients' circulation. This way, we can choose a biomarker panel more wisely that may be wider and certainly more accurate. Besides, now that we have proposed a way to detect them, we can easily create a Nanostructure given any circRNA sequence using our Software ldn_generator.py. </p>
          </section>
          <section id="section4">
            <h2 class="main-title">Can our technique be implemented in other diseases?</h2>
            <p><span>Proof of concept</span>: We know our design process is too complicated to follow. Therefore, we automated our design by creating a python script that calculates and simulates possible LDNs given the mature circRNA sequence. So, given the target, anyone can design the desirable LDN system. This way, our LDN system can be easily applied on different types of diseases, when  circRNAs are used as biomarkers.</p>
            <p><span>Drawbacks & future steps</span>: However, research on the pathophysiological functions of circRNAs in lung cancer has a long way to go. We propose a detection method based on Linear DNA Nanostructures to make circRNAs a widely-used biomarker. Implementation of our Modeling work can automate the sequences needed to create a specific circRNA biomarker or even simultaneously model multiple LDNs for various circRNA mature sequence inputs.</p>
          </section>
          <section id="section5">
            <ul class="acc">
              <li class="acc-item references">
                <input id="s1" class="hide" type="checkbox">
                <label for="s1" class="acc-label icon">References</label>
                <div class="acc-child">
                  <p>[1]. Cocquet, J., Chong, A., Zhang, G., & Veitia, R. A. (2006, July). Reverse transcriptase template switching and false alternative transcripts. Genomics, 88(1), 127–131. <a href="https://doi.org/10.1016/j.ygeno.2005.12.013" class="link-ref">https://doi.org/10.1016/j.ygeno.2005.12.013</a>  
                  <br>[2]. Huang, Y., Qin, S., Gu, X., Zheng, M., Zhang, Q., Liu, Y., Cheng, C., Huang, K., Peng, C., & Ju, S. (2022, January 13). Comprehensive Assessment of Serum hsa_circ_0070354 as a Novel Diagnostic and Predictive Biomarker in Non-small Cell Lung Cancer. Frontiers in Genetics, 12. <a href="https://doi.org/10.3389/fgene.2021.796776" class="link-ref">https://doi.org/10.3389/fgene.2021.796776</a>  
                  <br>[3].Zhou, X., Liu, H. Y., Wang, W. Y., Zhao, H., & Wang, T. (2018). Hsa_circ_0102533 serves as a blood-based biomarker for non-small-cell lung cancer diagnosis and regulates apoptosis in vitro. International journal of clinical and experimental pathology, 11(9), 4395–4404.
                  <br>[4]. Liu, X. X., Yang, Y. E., Liu, X., Zhang, M. Y., Li, R., Yin, Y. H., & Qu, Y. Q. (2019, February 18). A two-circular RNA signature as a noninvasive diagnostic biomarker for lung adenocarcinoma. Journal of Translational Medicine, 17(1). <a href="https://doi.org/10.1186/s12967-019-1800-z" class="link-ref">https://doi.org/10.1186/s12967-019-1800-z</a>   
                  <br>[5]. Glažar, P., Papavasileiou, P., & Rajewsky, N. (2014, September 18). circBase: a database for circular RNAs. RNA, 20(11), 1666–1670. <a href="https://doi.org/10.1261/rna.043687.113" class="link-ref">https://doi.org/10.1261/rna.043687.113</a>   
                  <br>[6]. Liu, M., Wang, Q., Shen, J., Yang, B. B., & Ding, X. (2019, April 25). Circbank: a comprehensive database for circRNA with standard nomenclature. RNA Biology, 16(7), 899–905. <a href="https://doi.org/10.1080/15476286.2019.1600395" class="link-ref">https://doi.org/10.1080/15476286.2019.1600395</a>   
                  <br>[7]. Wu, W., Ji, P., & Zhao, F. (2020, April 28). CircAtlas: an integrated resource of one million highly accurate circular RNAs from 1070 vertebrate transcriptomes. Genome Biology, 21(1). <a href="https://doi.org/10.1186/s13059-020-02018-y" class="link-ref">https://doi.org/10.1186/s13059-020-02018-y</a>   
                  <br>[8]. Chen, X., Han, P., Zhou, T., Guo, X., Song, X., & Li, Y. (2016, October 11). circRNADb: A comprehensive database for human circular RNAs with protein-coding annotations. Scientific Reports, 6(1). <a href="https://doi.org/10.1038/srep34985" class="link-ref">https://doi.org/10.1038/srep34985</a>  
                  <br>[9]. Xia, S., Feng, J., Chen, K., Ma, Y., Gong, J., Cai, F., Jin, Y., Gao, Y., Xia, L., Chang, H., Wei, L., Han, L., & He, C. (2017, September 28). CSCD: a database for cancer-specific circular RNAs. Nucleic Acids Research, 46(D1), D925–D929. <a href="https://doi.org/10.1093/nar/gkx863" class="link-ref">https://doi.org/10.1093/nar/gkx863</a></p>
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
    layout: "highlighter",
    props: {
      isOpened: {type: Boolean},
      wordName: {type: String},
      wordDescription: {type: String},
    },
    data() {
        return {
            currentPage: "Proof of Concept",
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