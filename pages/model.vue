<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
    </Header>

    <section class="intro">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>

    <Scrollspy :currentPage="currentPage" initialSection="kinetics">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#kinetics`" v-scroll-to="'#kinetics'">Kinetics</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#circrna`" v-scroll-to="'#circrna'" parent="kinetics">Modeling of LDN-circRNA</a></li>
                  <li class="sub"><a :href="`${currentPage}/#domain`" v-scroll-to="'#domain'" parent="kinetics">Domain Notation</a></li>
                  <li class="sub"><a :href="`${currentPage}/#toehold1`" v-scroll-to="'#toehold1'" parent="kinetics">1st toehold-mediated strand displacement reaction</a></li>
                  <li class="sub"><a :href="`${currentPage}/#toehold2`" v-scroll-to="'#toehold2'" parent="kinetics">2nd toehold-mediated strand displacement reaction</a></li>
                  <li class="sub"><a :href="`${currentPage}/#analyzer`" v-scroll-to="'#analyzer'" parent="kinetics">Kinetic DNA strand displacement analyzer</a></li>
                </ul>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <div class="row">
            <div class="col btns">
              <a @click="folderIndex = 1" class="primary-button">hsa-circ-1</a>
              <a @click="folderIndex = 2" class="primary-button">hsa-circ-2</a>
              <a @click="folderIndex = 3" class="primary-button">hsa-circ-3</a>
            </div>
          </div>
          <label for="range" class="form-label">{{folderIndex}} - {{n1}} - {{n2}}</label>
          <input type="range" class="form-range" min="0" max="10" step="1" id="range" v-model="inputRange">
          <div class="row">
            <div class="col-xs-12 col-xl-6 align-self-xl-center">
              <img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/h1-${n1}-${n2}.png`"/>
            </div>
            <div class="col-xs-12 col-xl-6 align-self-xl-center">
              <img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/h2-${n1}-${n2}.png`"/>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-xl-6 align-self-xl-center">
              <img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/ldn-${n1}-${n2}.png`"/>
            </div>
            <div class="col-xs-12 col-xl-6 align-self-xl-center">
              <img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/h1-${n1}-${n2}.png`"/>
            </div>
          </div>
          <section id="kinetics">
            <h2 class="main-title">Kinetics</h2>
            <section id="circrna">
              <h3 class="small-title">Modeling of LDN-circRNA reaction as a double toehold strand displacement reaction</h3>
              <p>In this model, we study the circRNA detection reaction by our Linear DNA Nanostructure as two consecutive toehold-mediated strand displacement reactions. In each reaction, one strand of DNA (or RNA) displaces another in binding to a third strand with partial complementarity to both. In each case, a short single-stranded overhang region, known as a <a class="link-primary" @click="changeWord('Toehold')">toehold</a>, initiates the strand displacement reaction. </p>
            </section>
            <section id="domain">
              <h3 class="small-title">Domain Notation</h3>
              <p><a class="link-primary" @click="changeWord('Domain')">Domains</a> are represented as lowercase letters. Asterisked letters denote domains complementary to the domains represented by not-asterisked letters (e.g., b* is complementary to b).</p>
            </section>
            <section id="toehold1">
              <h3 class="small-title">1st toehold-mediated strand displacement reaction</h3>
              <div class="row">
                <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                  <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png" width="100%" alt="" />
                  <figcaption class="figure-caption text-right">Fig 1.</figcaption>
                </figure>
                <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                  <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig2-step1.png" width="100%" alt="" />
                  <figcaption class="figure-caption text-right">Fig 2.</figcaption>
                </figure>
              </div>
              <br>
              <p>As shown in fig1, H1 consists of five domains c, b*, a, b, and r. Without the BSJ-target in the reaction mixture, H1 exists in a stem-loop conformation. The two complementary domains b and b* form the H1-stem. H1-loop consists of domain α. Η1 also possesses two different overhang regions, r, responsible for the hybridization with the RCA product through complementarity, and c, a toehold domain. The BSJ of the circRNA-target is complementary to the b and c domains. </p>
              <p>As shown in fig2, the first reaction includes two steps: BSJ binds to H1 via invading the toehold c and displaces the b* domain by branch migration.</p>
              <p>The rate kf1 denotes the hybridization rate of c to its complement. The base composition of the c domain can cause the value of kf1 to vary significantly.</p>
              <p>The rate kb1 denotes the rate at which the branch migration junction crosses the middle of the b domain. As the incumbent, b*, and invader, BSJ, exchange base pairs with the substrate, b, the branch point of the three-stranded complex moves back and forth. Eventually, the b* domain dissociates, completing strand displacement. Overall, displacement is thermodynamically driven forward by the net gain in base pairs due to the toehold. The length of the b domain determines the value of kb1. Finally, kr1 denotes the rate at which toehold c dissociates. The binding of c to its complement is reversible because the toehold may ‘fray’ and eventually dissociate.</p>
              <p>kr1 = kf1 * (2/b) * eΔGo(c)/RT</p>
              <p>where ΔGo(c) &lt; 0 is the binding energy between c and its complement, and b the length of b domain.</p>
            </section>
            <section id="toehold2">
              <h3 class="small-title">2nd toehold-mediated strand displacement reaction</h3>
              <div class="row">
                <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                  <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png" width="100%" alt="" />
                  <figcaption class="figure-caption text-right">Fig 3.</figcaption>
                </figure>
                <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                  <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig2-step1.png" width="100%" alt="" />
                  <figcaption class="figure-caption text-right">Fig 4.</figcaption>
                </figure>
              </div>
              <p>As depicted in fig3, H2 also consists of five domains a*, b, a, b*, and r. Initially, H2 forms a stem-loop conformation by hybridizing the two complementary domains, b and b*. The formed loop consists of domain l. Like H1, the H2 hairpin possesses two overhang regions: a toehold domain, a* domain, and an RCA binding domain, s domain. In addition, H2 brings a fluorophore and a quencher. We represent them in fig3 as a green and a black dot, respectively.</p>
              <p>The second toehold reaction is illustrated in fig4. Toehold domain a* binds to H1’s complementary domain a. After the toehold invasion, branch migration displacement occurs. The H1 b domain displaces the stem b domain. H2 now exists in an open conformation, which results in the fluorophore diverging from the quencher and emitting fluorescence when excited at the right wavelength. </p>
              <p>As in step 1, the rate kf2 represents the hybridization rate of toehold domain a* to its complement. In addition, the rate kb2 denotes the rate at which the branch migration junction crosses the middle of the b domain. Finally, kr2 denotes the rate at which toehold a* frays and dissociates.</p>
              <p>kr2 = kf12 * (2/b) * eΔGo(a)/RT</p>
              <p>where ΔGo(c) &lt; 0 is the binding energy between a and its complement, and b the length of b domain.</p>
            </section>
            <section id="analyzer">
              <h3 class="small-title">Kinetic DNA strand displacement analyzer</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
        </div>
      </div>
    </Scrollspy>
  </div>
</template>

<script>
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
        };
    },
    mounted() {
        window.addEventListener("scroll", this.scrolled);
        window.addEventListener("load", () => {
            this.scrolled();
        });
        fetch("https://static.igem.wiki/teams/4118/wiki/website-assets/dictionary/model.json")
          .then(res => res.json())
          .then(data => this.dictionaryData = data)
          .catch(err => { throw err });
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrolled);
    },
    computed: {
      n1 () {
        return Number(this.inputRange) + 10;
      },
      n2 () {
        return 20 - Number(this.inputRange);
      }
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