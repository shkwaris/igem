<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="overview">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#overview`" v-scroll-to="'#overview'">Overview</a></li>
                <li><a :href="`${currentPage}/#kinetic`" v-scroll-to="'#kinetic'">Mass-action kinetic analysis</a></li>
                <li><a :href="`${currentPage}/#biomarker`" v-scroll-to="'#biomarker'">Biomarker Selection</a></li>
                <li><a :href="`${currentPage}/#structural`" v-scroll-to="'#structural'">Structural Analysis</a></li>
                <li><a :href="`${currentPage}/#md`" v-scroll-to="'#md'">Extended MD Simulations</a></li>
                <li><a :href="`${currentPage}/#steps`" v-scroll-to="'#steps'">Future Steps</a></li>
                <li><a :href="`${currentPage}/#references`" v-scroll-to="'#references'">References</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <!-- <div class="row">
            <div class="col btns">
              <a @click="buttonEvent(1)" class="primary-button" :class="activebutton == 1 ? 'active' : ''">hsa_circ_0070354</a>
              <a @click="buttonEvent(2)" class="primary-button" :class="activebutton == 2 ? 'active' : ''">hsa_circ_0102533</a>
              <a @click="buttonEvent(3)" class="primary-button" :class="activebutton == 3 ? 'active' : ''">hsa_circ_0005962</a>
            </div>
          </div>
          <div class="row">
            <label for="range" class="form-label col"><span>Donor sequence length: </span>{{n1}}</label>
            <label for="range" class="form-label col"><span>Acceptor sequence length: </span>{{n2}}</label>
          </div>
          <input type="range" class="form-range" min="0" max="10" step="1" id="range" v-model="inputRange">
          <div class="gallery grid">
            <figure>
              <a :href="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-${folderIndex}/h1-${n1}-${n2}.jpg`"><img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-${folderIndex}/h1-${n1}-${n2}.jpg`" alt="" title="H1 probe"/></a>
              <figcaption class="figure-caption text-legt">H1 probe</figcaption>
            </figure>
            <figure>
              <a :href="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-${folderIndex}/h2-${n1}-${n2}.jpg`"><img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-${folderIndex}/h2-${n1}-${n2}.jpg`" alt="" title="H2 probe"/></a>
              <figcaption class="figure-caption text-left">H2 probe</figcaption>
            </figure>
            <figure>
              <a :href="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-${folderIndex}/ldn-${n1}-${n2}.jpg`"><img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-${folderIndex}/ldn-${n1}-${n2}.jpg`" alt="" title="Nanostructure"/></a>
              <figcaption class="figure-caption text-left">Nanostructure</figcaption>
            </figure>
            <figure>
              <a :href="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-${folderIndex}/bsj-${n1}-${n2}.jpg`"><img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-${folderIndex}/bsj-${n1}-${n2}.jpg`" alt="" title="Target detection"/></a>
              <figcaption class="figure-caption text-left">Target detection</figcaption>
            </figure>
          </div>
          <a @click="thermoDetails()" class="primary-button thermo">View Thermodynamic details</a> -->
              
          <section id="overview">
            <h2 class="main-title">Overview</h2>
            <p>A crucial step in an experiment's design is understanding how different reaction components interact. Setting that as a center point for this year's Model, we tried to cover as many aspects of our project as possible. Integrating elements such as 2D/3D structural analysis, Molecular Dynamics/Docking, and Mass action kinetic analysis, we got a comprehensive and well-rounded view of how the novel LDN system functions. </p>
          </section>
          <section id="kinetic">
            <h2 class="main-title">Mass-action kinetic analysis</h2>
            <section>
              <h3 class="small-title">Modeling of LDN-circRNA reaction as a double toehold strand displacement reaction</h3>
              <p>In this model, we study the circRNA detection reaction by our Linear DNA Nanostructure as two consecutive toehold-mediated <a class="link-primary" @click="changeWord('Strand displacement')">strand displacement</a> reactions. In each reaction, one strand of DNA (or RNA) displaces another in binding to a third strand with partial complementarity to both. In each case, a short single-stranded overhang region, known as a <a class="link-primary" @click="changeWord('Toehold')">toehold</a>, initiates the strand displacement reaction.</p>
            </section>
            <section>
              <h3 class="small-title">Domain Notation</h3>
              <p><a class="link-primary" @click="changeWord('Domain')">Domains</a> are represented as lowercase letters. Asterisked letters denote domains complementary to the domains represented by not-asterisked letters (e.g., b* is complementary to b).</p>
            </section>
            <section>
              <h3 class="small-title">1<sup>st</sup> toehold-mediated strand displacement reaction</h3>
              <div class="row gallery">
                  <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                    <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"/></a>
                    <figcaption class="figure-caption text-left"><span>Fig.1:</span> Domain order of H1 hairpin probe</figcaption>
                  </figure>
                  <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                    <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig2-step1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig2-step1.png"/></a>
                    <figcaption class="figure-caption text-left"><span>Fig.2:</span> Reaction breakdown of BSJ recognition by the H1 hairpin probe</figcaption>
                  </figure>
              </div><br>
              <p>As shown in <span>Fig.1</span>, H1 consists of five domains c, b*, a, b, and r. Without the BSJ-target in the reaction mixture, H1 exists in a stem-loop conformation. The two complementary domains b and b* form the H1-stem. H1-loop consists of domain α. Η1 also possesses two different overhang regions, r, responsible for the hybridization with the RCA product through complementarity, and c, a toehold domain. The BSJ of the circRNA-target is complementary to the b and c domains. </p>
              <p>As shown in <span>Fig.2</span>, the first reaction includes two steps: BSJ binds to H1 via invading the toehold c and displaces the b* domain by branch migration.</p>
              <p>The rate kf1 denotes the hybridization rate of c to its complement. The base composition of the c domain can cause the value of kf1 to vary significantly. </p>
              <p>The rate kb1 denotes the rate at which the branch migration junction crosses the middle of the b domain. As the incumbent, b*, and invader, BSJ, exchange base pairs with the substrate, b, the branch point of the three-stranded complex moves back and forth. Eventually, the b* domain dissociates, completing strand displacement. Overall, displacement is thermodynamically driven forward by the net gain in base pairs due to the toehold. The length of the b domain determines the value of kb1. Finally, kr1 denotes the rate at which toehold c dissociates. The binding of c to its complement is reversible because the toehold may ‘fray’ and eventually dissociate.</p>
              <p>kr1 = kf1 * (2/b) * eΔGo(c)/RT</p>
              <p>where ΔGo(c) &lt; 0 is the binding energy between c and its complement, and b the length of b domain [1].</p>
            </section>
            <section>
              <h3 class="small-title">2<sup>nd</sup> toehold-mediated strand displacement reaction</h3>
              <div class="row">
                  <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                    <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"/></a>
                    <figcaption class="figure-caption text-left"><span>Fig.3:</span> Domain order of H2 hairpin probe</figcaption>
                  </figure>
                  <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                    <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"/></a>
                    <figcaption class="figure-caption text-left"><span>Fig.4:</span> Reaction breakdown of H1 and H2 hybridization </figcaption>
                  </figure>
              </div><br>
              <p>As depicted in <span>Fig.3</span>, H2 also consists of five domains a*, b, a, b*, and r. Initially, H2 forms a stem-loop conformation by hybridizing the two complementary domains, b and b*. The formed loop consists of domain l. Like H1, the H2 hairpin possesses two overhang regions: a toehold domain, a* domain, and an RCA binding domain, s domain. In addition, H2 brings a fluorophore and a quencher. We represent them in Fig3 as a green and a black dot, respectively.</p>
              <p>The second toehold reaction is illustrated in <span>Fig.4</span>. Toehold domain a* binds to H1’s complementary domain a. After the toehold invasion, branch migration displacement occurs. The H1 b domain displaces the stem b domain. H2 now exists in an open conformation, which results in the fluorophore diverging from the quencher and emitting fluorescence when excited at the right wavelength. </p>
              <p>As in step 1, the rate kf2 represents the hybridization rate of toehold domain a* to its complement. In addition, the rate kb2 denotes the rate at which the branch migration junction crosses the middle of the b domain. Finally, kr2 denotes the rate at which toehold a* frays and dissociates. </p>
              <p>kr2 = kf12 * (2/b) * eΔGo(a)/RT</p>
              <p>where ΔGo(a) &lt; 0 is the binding energy between a and its complement, and b the length of b domain.</p>
            </section>
            <section>
              <h3 class="small-title">KinDA: Kinetic DNA strand displacement analyzer</h3>
              <p>KinDA [2] is a python package that can predict system kinetic and thermodynamic behavior at the sequence level. With KinDA, we can determine if the system as a whole behaves as designed. We tested KinDA through the available Amazon Web Services (AWS) Amazon Machine Image (AMI).</p>
              <p>First, the user creates a PIL file that specifies the domains, as described above, stands, and complexes of the DNA strand-displacement system. An example of the user input is the following</p>
              <p>Then, KinDA uses Peppercorn, a reaction enumerator to create the Chain Reaction Network (CRN) at a domain-level. Next, the simulation proceeds with kinetics and thermodynamics analyses at a sequence-level using Multistrand and NUPACK, respectively. Of course, sequence-level interactions may not have direct counterparts in the domain-level system. Hence, KinDA calculates the conformation probability, that is the p-approximation for the sequence-level secondary structure to behave as the domain-level structure, from the fraction of nucleotides that are bound or unbound when both structures share the same ordered strands. </p>
              <p>KinDA uses the “first-step reaction model” and separates the reactions into two steps and calculates one constant for each reaction: the initial binding step, with a rate of initiating the reaction, k1, and the folding trajectory that follows, with the rate of how long it takes to complete, k2. Errors for k1 and k2 are determined based on the system parameters. Also, KinDA determines spurious reactions that do not correspond to the predicted behavior and unproductive reactions when reactants and products coincide. </p>
            </section>
            <section>
              <h3 class="small-title">The Simulation</h3>
              <p>We simulated our two steps as separate reactions. We chose this design because the system categorizes two complexes with the same strand order but different dot-and-bracket notation as a single reactant multiset and calculates the total k1 and k2. So, we decided to run a simulation for each step and retrieve the individual rate constant. Also, with two simulations, we could decrease the system's complexity to take only a few hours on a t2.micro instance.</p>
              <p>We calculated the following rates for the 1st toehold-mediated strand displacement reaction:</p>
              <p>From [I] we calculated that kf1 >>> kr1, using the value of ΔGo(c) = -10.88 kcal/mol, as calculated by ViennaRNA. So, we can assume that the toehold domain is long enough so that the dissociation step proceeds slowly relative to the toehold invasion step. Hence, the toehold invasion step determines the rate of the whole reaction.</p>
              <p>Then we calculated the following rates for the 2nd toehold-mediated strand displacement reaction:</p>
              <p>Following the same process, we proved that the toehold invasion step again determines the rate of the whole reaction.</p>
            </section>
            <section>
              <h3 class="small-title">The results</h3>
              <p>Modifying a MATLAB script provided by our partners, MetaThess team, we simulated our KinDA results.</p>
            </section>
          </section>
          <section id="biomarker">
            <h2 class="main-title">Biomarker selection</h2>
            <section>
              <h3 class="small-title">Literature Results</h3>
              <p>In search engines such as PubMed, we performed the following search: "circular RNA" OR "circular RNA" OR "circRNA" OR "circRNA" AND "lung cancer" AND ("liquid biopsy" OR "biomarker" OR "non-invasive"). We retrieved a total of 119 results that we sorted by title and abstract into the following categories:</p>
              <ul class="bullets">
                <li>Articles employing the use of a circRNA as a diagnostic biomarker for lung cancer</li>
                <li>Articles employing the use of a circRNA as a prognostic biomarker for lung cancer</li>
                <li>Articles regarding the function of a circRNA in the initiation and progression of lung cancer</li>
                <li>Articles that examine the role of a circRNA in the drug resistance shown by lung cancer patients</li>
                <li>Review summarizing the role of circRNAs in lung cancer</li>
              </ul><br>
              <p>We rejected articles about other types of cancer. We further studied the articles in the first category to select the biomarkers. Articles belonging to the latter category were studied to establish the necessary knowledge regarding the role of circRNAs, specifically for the type of cancer in question.</p>
              <p>We categorized circRNAs reported in the first category articles as potential targets according to their characteristics. Then, we selected the studies conducted on blood samples from patients with NSCLC. The studies should have had sufficient samples of patients and healthy volunteers and included patients in the early stages of the disease. Articles regarding circRNAs that are potential targets for NSCLC subtypes, such as lung adenocarcinoma, were not rejected. However, CircRNAs detected exclusively in cancer tissues and circRNAs detected in plasma exosomes and not directly in patient plasma were discarded.</p>
              <p>From the total of 119 search results, we finally selected ten articles that concern the expression of 11 circRNAs, nine were found to be abnormally increased, and the remaining two abnormally decreased in the plasma of NSCLC patients. The publication dates of the articles start from July 2017, with the latest reaching January 2022. Then, we tabulated the characteristics of each selected study/circRNA for easier comparison. These tables included:</p>
              <ul class="bullets">
                <li>the name of the circular RNA, </li>
                <li>the type of lung cancer they have and,</li>
                <li>the number of patients and healthy volunteers who took part in the study, </li>
                <li>the biological material (e.g., plasma, serum, tissues, cell cultures), </li>
                <li>the detection method (e.g., RT-PCR), </li>
                <li>the specificity and sensitivity values calculated for the biomarker, and other results.</li>
              </ul>
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
    layout: "highlighter",
    props: {
      isOpened: {type: Boolean},
      wordName: {type: String},
      wordDescription: {type: String},
    },
    data() {
        return {
            currentPage: "Model",
            dictionaryData: null,
            folderIndex: 1,
            inputRange: 0,
            activebutton: 1,
        };
    },
    mounted() {
        this.$nextTick(() => {
          this.$nuxt.$loading.start()
          setTimeout(() => this.$nuxt.$loading.finish(), 1000)
        })
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
        fetch("https://static.igem.wiki/teams/4118/wiki/website-assets/dictionary/model2.json")
          .then(res => res.json())
          .then(data => this.dictionaryData = data)
          .catch(err => { throw err });
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrolled);
    },
    watch: {
      inputRange(oldRange, newRange) {
        this.changeDetails();
      }
    },
    computed: {
      n1 () {
        return Number(this.inputRange) + 10;
      },
      n2 () {
        return 20 - Number(this.inputRange);
      },
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
        },
        changeDetails: function () {
          const index = this.dictionaryData.findIndex((index) => index.name == this.folderIndex + "-" + this.inputRange);
          if (index != -1) {
            this.$emit('update:wordName', "Thermodynamic details");
            this.$emit('update:wordDescription', this.dictionaryData[index].description);              
          } else {
            this.$emit('update:wordName', "");
            this.$emit('update:wordDescription', "");
          }
        },
        thermoDetails: function () {
          if (this.isOpened) {
            this.$emit('update:isOpened', false);
            this.$emit('update:wordName', "");
            this.$emit('update:wordDescription', "");
          } else {
            this.$emit('update:isOpened', true);
            this.changeDetails();
          }
        },
        buttonEvent: function (index) {
          this.inputRange = 0;
          this.folderIndex = index; 
          this.activebutton = index; 
          this.changeDetails(); 
        }
    }
}
</script>