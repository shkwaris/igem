<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>    
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="started">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#started`" v-scroll-to="'#started'">How it all started?</a></li>
                <li><a :href="`${currentPage}/#why`" v-scroll-to="'#why'">Why “syn-PNOIA”?</a></li>
                <li><a :href="`${currentPage}/#liquid`" v-scroll-to="'#liquid'">What about liquid biopsies?</a></li>
                <li><a :href="`${currentPage}/#bncr`" v-scroll-to="'#bncr'">Biomarkers & Circular RNAs</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#bio`" v-scroll-to="'#bio'" parent="bncr">Biomarkers</a></li>
                  <li class="sub"><a :href="`${currentPage}/#circ`" v-scroll-to="'#circ'" parent="bncr">Circular RNAs</a></li>
                  <li class="sub"><a :href="`${currentPage}/#our`" v-scroll-to="'#our'" parent="bncr">Our biomarkers</a></li>
                </ul>
                <li><a :href="`${currentPage}/#nano`" v-scroll-to="'#nano'">DNA Nanostructures</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#general`" v-scroll-to="'#general'" parent="nano">General</a></li>
                  <li class="sub"><a :href="`${currentPage}/#ldn`" v-scroll-to="'#ldn'" parent="nano">Our Design</a></li>
                </ul>
                <li><a :href="`${currentPage}/#next`" v-scroll-to="'#next'">Next Steps</a></li>
                <li><a :href="`${currentPage}/#refs`" v-scroll-to="'#refs'">References</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="started">
            <h2 class="main-title">How it all started?</h2>
            <p>Patras Medicine was formed in December 2021 with a shared vision; to contribute to the battle against lung cancer. With over 25% of all cancer fatalities attributed to lung cancer, including small and non-small cell lung cancer, it is the deadliest type of cancer among men and women. Detecting lung cancer in its earliest stages, when it is most treatable, is crucial to patients' survival, as with many other cancer types. The cure rate for people with localized, early-stage lung cancer can reach 80% to 90% <a class="link-ref" v-scroll-to="'#refs'">[1]</a>. The team's objective was to develop a new approach to diagnosis that would be non-invasive, inexpensive, accurate, sensitive, and quick. Shielding and saving human life has been our motivation as Patras Medicine team to develop our test named syn-PNOIA and contribute to the progress of medical science.</p>
            <figure class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/description/fig1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/description/fig1.png"/></a>
            </figure>
          </section>
          <section id="why">
            <h2 class="main-title">Why “syn-PNOIA”?</h2>
            <p>syn-PNOIA consists of the prefix "syn-," which means "together," and the suffix "-pnoia," which originates from the Greek word "pneo," pointing to breath fresh air. Additionally, without the assistance of Synthetic Biology, or SynBio for short, which gives the prefix "syn" a new meaning, our project would not be possible. With "syn-PNOIA," we breathe safer, healthier, and longer. As a result, collectively, we bring about the symbol of agreement on a healthier way of life.</p>
          </section>
          <section id="liquid">
            <h2 class="main-title">What about liquid biopsies?</h2>
            <p>Liquid biopsy allows cancer detection, analysis, and monitoring in various body effluents, such as blood or urine, instead of a fragment of cancer tissue <a class="link-ref" v-scroll-to="'#refs'">[2]</a>. The body fluid used most commonly for liquid biopsy is blood. By analyzing the sample for cancer cells or circulating tumor DNA, doctors can determine whether a tumor is present or whether treatment is working. In addition, liquid biopsies use blood as a tracking device for neoplastic cells in tumors. They also allow doctors to monitor how treatments work by observing mutations occurring over time within a tumor cell. Liquid biopsies are performed on peripheral blood, which is simple to access, allowing for more widespread use, particularly in patients who cannot undergo surgery.</p>
            <p>On the other hand, standard tissue biopsies typically require time-intensive and invasive procedures, such as bronchoscopy for lung cancer, to discover a malignancy. Often, these procedures do not seem appealing to the patient leading to them not getting tested at the onset of the disease. Because of this, liquid biopsies provide a simple way to diagnose malignancies, speeding up tumor identification and treatment of the patient. Liquid biopsy, in contrast to tissue biopsy, allows non-invasive and real-time monitoring of disease development, can estimate the risk for metastatic relapse or metastatic progression and may be able to identify therapeutic targets better.</p>
          </section>
          <section id="bncr">
            <h2 class="main-title">Biomarkers & Circular RNAs</h2>
            <section id="bio">
              <h3 class="small-title">Biomarkers</h3>
              <p>Biomarkers are tools used to measure the level of risk or predict an outcome of a disease or treatment <a class="link-ref" v-scroll-to="'#refs'">[3]</a>. They can be used to determine the efficacy of therapy, diagnosis, and prognosis (predicting what will happen next). Biomarkers can be found in blood, urine, saliva, other body fluids, and some organs, and can be DNA, RNA or proteins. Biomarker tests have enabled scientists to locate their presence in correlation with diseases such as cancer and diabetes over the past few decades.</p>
            </section>
            <section id="circ">
              <h3 class="small-title">Circular RNAs</h3>
              <p>After hours of literature review and discussions with professors, our team decided to concentrate on Circular RNAs, a cutting-edge approach to cancer regulation. Circular RNAs (circRNAs) are a class of covalently closed molecules that exert their physiological and pathological effects by acting as protein decoys, protein translators, or microRNA (miRNA) sponges <a class="link-ref" v-scroll-to="'#refs'">[4]</a> <span>(Fig.1)</span>.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/description/fig2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/description/fig2.jpg"/></a>
                <figcaption class="figure-caption text-left"><span>Fig.1 Circular RNA functions:</span> a. They can act as miRNA sponges protecting target mRNAs from miRNA-dependent degradation b. circRNAs containing RNA binding protein (RBP) motifs can act as sponges for these proteins and indirectly regulate their functions c. They can interact and enhance the function of specific proteins d. Some circRNAs have been shown to function as protein scaffolds, facilitating the localization of enzymes (phosphatases, acetylases, and ubiquitin ligases) and their substrates to influence reaction kinetics, e. and f. circRNAs can also recruit specific proteins or even be translated under certain conditions</figcaption>
              </figure>
              <br>
              <p>They were originally thought to be mere splicing byproducts with no functional capacity. Only one circRNA from the sex-determining region Y was found to have any function. In 2013, scientists found the first circRNA that functioned as a miRNA sponge. Today, with the help of RNAseq and Bioinformatics, over 100,000 circRNAs have been identified. Research on circRNA functions, although in its early stages, has shown many findings and is very promising. Specifically, in cancer cells, regulating the expression of many circRNAs seems to have a decisive role in the initiation and progression of the tumor. Numerous studies in the field of cancer <a class="link-ref" v-scroll-to="'#refs'">[5]</a>, including lung cancer <a class="link-ref" v-scroll-to="'#refs'">[6]</a>, <a class="link-ref" v-scroll-to="'#refs'">[7]</a>, have confirmed that circRNAs' abnormal expression contributes to carcinogenesis and the development of malignancies <span>(Fig.2)</span>, highlighting their potential as biomarkers for diagnosis, prognosis, and treatment.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/description/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/description/fig3.jpg"/></a>
                <figcaption class="figure-caption text-left">Fig.2 circRNA role in cancer: An abnormal increase or decrease in their expression levels makes them regulators of cell proliferation, metastasis, apoptosis, induction of resistance to many drugs, regulation of the tumor microenvironment, and immune tolerance.</figcaption>
              </figure>
              <br>
              <p>Circular RNAs appear to arise in two ways: either due to competition between linear (canonical) splicing and back-splicing (noncanonical) or as byproducts of linear splicing  <a class="link-ref" v-scroll-to="'#refs'">[4]</a>. Back-splicing is a noncanonical form of splicing in which the donor sequence of an upstream exon covalently links to the acceptor sequence of a downstream exon (back-splice junction), which results in the formation of single-stranded circRNA molecules. The back-splice junction site differentiates them from their linear isoforms <span>(Fig.3)</span>.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/description/fig4.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/description/fig4.jpg"/></a>
                <figcaption class="figure-caption text-left">Fig.3  Schematic representation of canonical and non-canonical splicing</figcaption>
              </figure>
              <br>
              <p>They have the potential to be the ideal biomarkers for Liquid Biopsy. Why?  </p>
              <ul class="bullets">
                <li>The continuous loop structure of circRNAs is covalently closed, which gives them more stability than linear RNAs.</li>
                <li>The detection of circRNAs has mainly been conducted in tissues and cell lines. Nevertheless, they are found in large quantities in human tissues and cells and in body fluids (e.g., blood, saliva, sputum, urine), making them ideal biomarkers for liquid biopsy <a class="link-ref" v-scroll-to="'#refs'">[8]</a>.</li>
                <li>Carcinogenesis and the development of cancer cells may be linked to the abnormal expression of circRNAs in lung cancer.</li>
                <li>Combining circRNAs with traditional cancer biomarkers can confer higher diagnostic accuracy than single traditional biomarkers.</li>
              </ul>
            </section>
            <section id="our">
              <h3 class="small-title">Our biomarkers</h3>
              <p>We decided it was best to choose a panel of circular RNAs instead of a single one because a panel of biomarkers may improve the predictive performance of the test. The three final targets were hsa_circ_0070354, hsa_circ_0102533, and hsa_circ_0005962.</p>
              <a class="primary-button" href="">See the biomarker choice process</a>
            </section>
          </section>
          <section id="nano">
            <h2 class="main-title">DNA Nanostructures</h2>
            <section id="general">
              <h3 class="small-title">General</h3>
              <p>In principle, constructing detectable DNA nanostructures to respond to disease-specific nucleic acids offers a tool for highly effective biomarker detection in diverse samples <a class="link-ref" v-scroll-to="'#refs'">[9]</a>. We see the innumerable possibilities that come at a low cost.</p>
            </section>
            <section id="ldn">
              <h3 class="small-title">Our Design: Linear DNA Nanostructure (LDN)</h3>
              <p>LDN is a DNA nanostructure that can be used to detect circRNA directly in complex samples, even in cells. The binding of LDN to the target circRNA causes enzyme-free amplification, and then conformational transformations of the two probes occur, emitting fluorescence signal <a class="link-ref" v-scroll-to="'#refs'">[10]</a>.</p>
              <p>More specifically, a long linear DNA scaffold with multiple hairpin probe installation sites is synthesized by Rolling Circle Amplification (RCA). The probes (H1 and H2) are then installed on the DNA scaffold because of their complementary hanging tail to form the LDN <span>(Fig.4a)</span>. </p>
              <p>In the reaction mixture, H1 identifies the unique Backsplice Junction site of circRNA, which is, as mentioned, a diagnostic advantage for distinguishing circRNA from its linear isoforms in a complex sample. H2 contains a pair of fluorophore and quencher groups. In the absence of a target circRNA, no interaction is observed between H1 and H2, which are in a hairpin structure. However, in the presence of the target circRNA, the circRNA hybridizes to H1, which then interacts and hybridizes with H2. During the second hybridization, the fluorophore group dissociates from the quencher. The released target circRNA can then continue to hybridize with other H1 probes, triggering a non-enzymatic amplification reaction along the linear scaffold, and the entire LDN immediately fluoresces <span>(Fig4b)</span>. With the aid of modeling, we designed the probe sequences to hybridize with the three corresponding circRNAs.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 70%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/description/fig5.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/description/fig5.jpg"/></a>
                <figcaption class="figure-caption text-left">Fig.4 Depiction of: a) LDN Synthesis and b) circRNA detection reactions.</figcaption>
              </figure>
              <br>
              <p>Compared to traditional circRNA detection approaches, the LDN-based method presents several advantages:</p>
              <ul class="bullets">
                <li>It does not require advanced laboratory equipment and expensive reagents. After LDN is formed, it can perform enzyme-free detection. It is an isothermal process and, unlike PCR, does not require a thermal cycler.</li>
                <li>It can accurately recognize circRNA without interference from its linear isoforms. Therefore, no RNAse treatment is required before the reaction.</li>
                <li>Biomarker detection happens in only 70 minutes, using a total RNA extract from a potential patient’s blood sample.</li>
              </ul>
            </section>
          </section>
          <section id="next">
            <h2 class="main-title">Next Steps</h2>
          </section>
          <section id="refs">
            <h2 class="main-title">References</h2>
            <p>[1]. Lung Cancer Statistics | How Common is Lung Cancer? (n.d.). Retrieved October 5, 2022, from <a class="link-ref" href="https://www.cancer.org/cancer/lung-cancer/about/key-statistics.html">https://www.cancer.org/cancer/lung-cancer/about/key-statistics.html</a>
              <br> [2]. Poulet, G., Massias, J., & Taly, V. (2019). Liquid Biopsy: General Concepts. Acta Cytologica, 63(6), 449–455. <a class="link-ref" href="https://doi.org/10.1159/000499337">https://doi.org/10.1159/000499337</a>
              <br> [3]. Strimbu, K., & Tavel, J. A. (2010, November). What are biomarkers? Current Opinion in HIV and AIDS, 5(6), 463–466. <a class="link-ref" href="https://doi.org/10.1097/coh.0b013e32833ed177">https://doi.org/10.1097/coh.0b013e32833ed177</a>
              <br> [4]. Kristensen, L. S., Andersen, M. S., Stagsted, L. V. W., Ebbesen, K. K., Hansen, T. B., & Kjems, J. (2019, August 8). The biogenesis, biology and characterization of circular RNAs. Nature Reviews Genetics, 20(11), 675–691. <a class="link-ref" href="https://doi.org/10.1038/s41576-019-0158-7">https://doi.org/10.1038/s41576-019-0158-7</a> 
              <br> [5]. Chen, L., & Shan, G. (2021, May). CircRNA in cancer: Fundamental mechanism and clinical potential. Cancer Letters, 505, 49–57. <a class="link-ref" href="https://doi.org/10.1016/j.canlet.2021.02.004">https://doi.org/10.1016/j.canlet.2021.02.004</a> 
              <br> [6]. Di, X., Jin, X., Li, R., Zhao, M., & Wang, K. (2019, March). CircRNAs and lung cancer: Biomarkers and master regulators. Life Sciences, 220, 177–185. <a class="link-ref" href="https://doi.org/10.1016/j.lfs.2019.01.055">https://doi.org/10.1016/j.lfs.2019.01.055</a>
              <br> [7]. Wang, C., Tan, S., Li, J., Liu, W. R., Peng, Y., & Li, W. (2020, November). CircRNAs in lung cancer - Biogenesis, function and clinical implication. Cancer Letters, 492, 106–115. <a class="link-ref" href="https://doi.org/10.1016/j.canlet.2020.08.013">https://doi.org/10.1016/j.canlet.2020.08.013</a>
              <br> [8]. Wang, S., Zhang, K., Tan, S., Xin, J., Yuan, Q., Xu, H., Xu, X., Liang, Q., Christiani, D. C., Wang, M., Liu, L., & Du, M. (2021, January 11). Circular RNAs in body fluids as cancer biomarkers: the new frontier of liquid biopsies. Molecular Cancer, 20(1). <a class="link-ref" href="https://doi.org/10.1186/s12943-020-01298-z">https://doi.org/10.1186/s12943-020-01298-z</a>
              <br> [9]. DNA Nanotechnology Tools: From Design to Applications. (2022, April 22). Wyss Institute. Retrieved October 5, 2022, from <a class="link-ref" href="">https://wyss.harvard.edu/technology/dna-nanotechnology-tools-from-design-to-applications/</a>
              <br> [10]. Jiao, J., Xiang, Y., Duan, C., Liu, Y., Li, C., & Li, G. (2020, August 24). Lighting Up CircRNA Using a Linear DNA Nanostructure. Analytical Chemistry, 92(18), 12394–12399. <a class="link-ref" href="https://doi.org/10.1021/acs.analchem.0c02146">https://doi.org/10.1021/acs.analchem.0c02146</a> 
            </p>
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
            currentPage: "Description",
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