<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>  
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="quiz">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#quiz`" v-scroll-to="'#quiz'">Quiz</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="quiz">
            <div class="d-flex justify-content-between">
              <h2 class="main-title">Quiz</h2>
              <a @click="resetQuiz()" class="primary-button" >Reset quiz</a>
            </div>
            <ul class="acc">
              <li class="acc-item">
                <input id="s1" class="hide" type="checkbox">
                <label for="s1" class="acc-label icon" style="margin-bottom: 20px">Synthetic Biology</label>
                <div class="acc-child">
                  <Question question="1. Synthetic Biology combines Biology with?" :answers="['Chemistry', 'Engineering', 'Physics']" rightAnswer="Engineering" :revealed="reset"/>
                  <Question question="2. When was the term “ Synthetic Biology” first mentioned?" :answers="['1910', '1958', '1978', '1990']" rightAnswer="1910" :revealed="reset"/>
                  <Question question="3. In 1973 was produced the first genetically modified?" :answers="['Bacterium', 'Animal', 'Plant']" rightAnswer="Bacterium" :revealed="reset"/>
                  <Question question="4. Medical Applications of Synthetic Biology:" :answers="['Tissue Engineering', 'Diagnostics', 'Gene therapy', 'Vaccines', 'All of the above']" rightAnswer="All of the above" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s2" class="hide" type="checkbox">
                <label for="s2" class="acc-label icon" style="margin-bottom: 20px">Cancer disease</label>
                <div class="acc-child">
                  <Question question="1. Cancer is a disease caused when:" :answers="['There is a chromosomal rearrangement', 'The organism is infected by pathogens', 'Cells divide uncontrollably', 'All of the above']" rightAnswer="All of the above" :revealed="reset"/>
                  <Question question="2. Cancerous tumors spread into, or invade, nearby tissues and can travel to distant places in the body to form new tumors. This process is called:" :answers="['Tumorigenesis', 'Leukemia', 'Metastasis', 'Oncogenesis']" rightAnswer="Metastasis" :revealed="reset"/>
                  <Question question="3. How may normal cells become cancer cells?" :answers="['Normal 🡪 Hyperplasia 🡪 Dysplasia 🡪 Cancer', 'Normal 🡪 Ysplasia 🡪 Hyperplasia 🡪 Cancer']" rightAnswer="Normal 🡪 Ysplasia 🡪 Hyperplasia 🡪 Cancer" :revealed="reset"/>
                  <Question question="4. How many types of cancer exist?" :answers="['Less than 30', '50', '80', 'More than 100']" rightAnswer="More than 100" :revealed="reset"/>
                  <Question question="5. Which type of cancer was the most common in 2021?" :answers="['Breast cancer', 'Lung cancer', 'Prostate cancer', 'Colon and rectum cancer']" rightAnswer="Breast cancer" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s3" class="hide" type="checkbox">
                <label for="s3" class="acc-label icon" style="margin-bottom: 20px">Lung cancer</label>
                <div class="acc-child">
                  <Question question="1. How many main types of lung cancer are there?" :answers="['2', '4', '5', '6']" rightAnswer="2" :revealed="reset"/>
                  <Question question="2. In which part of the respiratory system respiration occurs?" :answers="['Mouth ', 'Bronchus', 'Alveoli', 'Trachea']" rightAnswer="Alveoli" :revealed="reset"/>
                  <Question question="3. Is lung cancer a common misdiagnosed condition with many deaths due to late diagnosis?" :answers="['Yes', 'No']" rightAnswer="Yes" :revealed="reset"/>
                  <Question question="4. What hormone does small cell lung cancer mainly produce as an ectopic site of it?" :answers="['ADH', 'Epinephrine', 'Noradrenaline', 'Cortisol']" rightAnswer="ADH" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s4" class="hide" type="checkbox">
                <label for="s4" class="acc-label icon" style="margin-bottom: 20px">Non-Small Cell Lung Cancer</label>
                <div class="acc-child">
                  <Question question="1. What is the most common NSCLC?" :answers="['Squamous cell carcinoma', 'Adenocarcinoma', 'Large cell carcinoma']" rightAnswer="Adenocarcinoma" :revealed="reset"/>
                  <Question question="2. When cancer has not spread outside the lungs it is called:" :answers="['localized NSCLC', 'regional NSCLC', 'metastatic lung cancer']" rightAnswer="localized NSCLC" :revealed="reset"/>
                  <Question question="3. Which of the following is true about adenocarcinoma?" :answers="['Men are more prone than women to develop this cancer.', 'It is the most common lung cancer type for smokers.', 'It’s the most common cancer among people who never smoked.']" rightAnswer="It’s the most common cancer among people who never smoked." :revealed="reset"/>
                  <Question question="4. Which of the following is often found in the center of the lung next to an air tube? " :answers="['Squamous cell carcinoma', 'Adenocarcinoma', 'Large cell carcinoma']" rightAnswer="Squamous cell carcinoma" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s5" class="hide" type="checkbox">
                <label for="s5" class="acc-label icon" style="margin-bottom: 20px">Biomarkers</label>
                <div class="acc-child">
                  <Question question="Which cancer biomarker is related to breast tumors?" :answers="['estrogen receptor', 'CD20 Antigen', 'BRAF']" rightAnswer="estrogen receptor" :revealed="reset"/>
                  <Question question="Which cancer biomarker is related to Leukemia/Lymphoma?" :answers="['KRAS', 'HER-2/neu', 'CD20 Antigen; CD30']" rightAnswer="CD20 Antigen; CD30" :revealed="reset"/>
                  <Question question="Which cancer biomarker is related to colorectal tumors?" :answers="['BRCA1, BRCA2', 'EGFR', 'Philadelphia Chromosome (BCR/ABL)']" rightAnswer="EGFR" :revealed="reset"/>
                  <Question question="Which cancer biomarker is related to melanoma tumors?" :answers="['c-KIT', 'BRAF', 'Philadelphia Chromosome (BCR/ABL)']" rightAnswer="BRAF" :revealed="reset"/>
                  <Question question="Which cancer biomarker is related to lung tumors?" :answers="['ALK; EGFR; KRAS', 'PML/RAR alpha, TPMT', 'FIP1L1-PDGRF alpha, PDGFR']" rightAnswer="ALK; EGFR; KRAS" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s6" class="hide" type="checkbox">
                <label for="s6" class="acc-label icon" style="margin-bottom: 20px">Nucleic acid probes</label>
                <div class="acc-child">
                  <Question question="What is a probe?" :answers="['Chemically synthesized DNA', 'Purified DNA', 'Fragmented DNA duplex', 'Either purified or synthesized single stranded DNA']" rightAnswer="Either purified or synthesized single stranded DNA" :revealed="reset"/>
                  <Question question="Why is a probe labeled?" :answers="['Improve visibility', 'Improve stability', 'Improve location identification', 'Improve binding capability']" rightAnswer="Improve location identification" :revealed="reset"/>
                  <Question question="Which of the following probe is generally used for screening cDNA libraries?" :answers="['Oligonucleotide probes', 'DNA probe', 'RNA probe']" rightAnswer="Oligonucleotide probes" :revealed="reset"/>
                  <Question question="Long probes are usually made of:" :answers="['Gene expression', 'Cloning', 'Hybridization', 'PCR']" rightAnswer="Cloning" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s7" class="hide" type="checkbox">
                <label for="s7" class="acc-label icon" style="margin-bottom: 20px">Laboratory</label>
                <div class="acc-child">
                  <Question question="Nucleic acid hybridization is used to identify:" :answers="['DNA', 'RNA', 'Proteins', 'Complementary base sequences']" rightAnswer="Complementary base sequences" :revealed="reset"/>
                  <Question question="The procedure by which DNA gel is transferred to a membrane is termed as:" :answers="['blotting', 'cloning', 'injection']" rightAnswer="blotting" :revealed="reset"/>
                  <Question question="Which of the following does not affect the formation of hybrid DNA?" :answers="['Ionic strength', 'Temperature', 'Pressure', 'Homologous DNA']" rightAnswer="Pressure" :revealed="reset"/>
                  <Question question="Which of the following is not termed as hybridization?" :answers="['DNA from male and female of same species', 'DNA and mRNA', 'DNA and cDNA', 'DNA from different species']" rightAnswer="DNA from male and female of same species" :revealed="reset"/>
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
export default {
    data() {
        return {
            currentPage: "Communication",
            reset: false
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
      resetQuiz: function () {
        this.reset = true
        setTimeout(() =>{
          this.reset = false
          }, 10)
      },
      scrolled: function () {
        document.querySelector("progress").value = window.scrollY / (document.querySelector("#main-content").offsetHeight - window.innerHeight + document.querySelector("#header").clientHeight) * 100;
      }
    }
}
</script>