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
                <li><a :href="`${currentPage}/#structural`" v-scroll-to="'#structural'">Structural Analysis</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#secondary`" v-scroll-to="'#secondary'" parent="structural">Secondary structure prediction</a></li>
                  <li class="sub"><a :href="`${currentPage}/#tertiary`" v-scroll-to="'#tertiary'" parent="structural">Tertiary structure prediction and Molecular Dynamics </a></li>
                </ul>
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
          <section id="overview">
            <h2 class="main-title">Overview</h2>
            <p>A crucial step in an experiment's design is understanding how different reaction components interact. Setting that as a center point for this year's Model, we tried to cover as many aspects of our project as possible. Integrating elements such as 2D/3D structural analysis, Molecular Dynamics/Docking, and Mass action kinetic analysis, we got a comprehensive and well-rounded view of how the novel LDN system functions.</p>
            <p>Make sure to check all our input files listed on <a class="link-ref" href="#">our GitHub Page</a>.</p>
          </section>
          <section id="structural">
            <h2 class="main-title">Structural Analysis</h2>
            <section id="secondary">
              <h3 class="small-title">Secondary structure prediction</h3>
              <p>After we selected our three circRNA biomarkers and derived their sequences in the previously mentioned databases, we proceeded with  the H1 and H2 probes design. The process is schematically represented in <span>(Fig.2)</span>.</p>
              <p>The back-splice junction (BSJ) site is a specific point for each circRNA target, and it separates them from their linear isoforms, RNAs arising from the same gene. So, we considered it best to design our Nanostructure based on  the ability to detect this sequence. Initially, we chose 15 bases upstream and 15 downstream of the BSJ site as the target sequence. </p>
              <p>Based on the BSJ sequence, we created the H1 probe to consist of the following domains:</p>
              <ul class="bullets">
                <li>A domain complementary to the BSJ sequence to "identify" the target circRNA among the various RNAs present in the sample (1),</li>
                <li>The loop domain (2),</li>
                <li>A domain complementary to 20 bases of sequence (1) to create a 20-base hairpin stem (3),</li>
                <li>A domain complementary to the RCA product (4)</li>
              </ul>
              <br>
              <p>We created the H2 probe accordingly:</p>
              <ul class="bullets">
                <li>A domain complementary to the RCA product (5),</li>
                <li>A domain complementary to sequences (2) and (3) that is responsible for the hybridization of the two probes (6),</li>
                <li>A domain complementary to 20 bases of sequence (6) to create a 20-base hairpin stem (7),</li>
                <li>The loop domain (8)</li>
              </ul>
              <br>
              <p>Taking the above into consideration, the first step of our Model design was to validate if the designed H1 and H2 probe sequences had the desired hairpin formation and how they interact with the linear DNA backbone when forming the LDN to determine whether the result is structurally acceptable. Using the NUPACK software suite [1], which uses SantaLucia's nearest neighbor model [2], we analyzed our structures at 37.0o C and 1.05 M salt concentration (1.0M Na+ and 0.05M Mg+2) to replicate our reaction conditions as close to reality as possible. </p>
              <p>We were happy that our system conformed to the desired structure while keeping theGibbs free energy (ΔG) energy levels low, proving a thermodynamically stable system. However, our original selection of 15 and 15 bases upstream and downstream, respectively, do not invariably achieve the desired result. At this point, a question was presented to us. Was there a better H1 and H2 probes combination than the one we had chosen?</p>
              <p>As you can imagine, creating each structure by hand is a very tedious and time-consuming process. Therefore, we automated our design using a python script that creates and simulates all possible combinations of LDNs that can occur given the mature circRNA sequence. You can view our ldn_generator.py script by clicking the interactive button below. See more details on the design behind the ldn_generator.py script on the Software page.</p>
              <p>Note that all nucleic acid secondary structures are represented in the dot-parens-plus notation, where each target represents a nucleotide. Dots depict unpaired nucleotides, two matching parentheses represent bonded nucleotides, and a + corresponds to a nick between adjacent strands.</p>
              <div class="row">
                <div class="col btns">
                  <a @click="folderIndex, activebutton = 1" class="primary-button" :class="activebutton == 1 ? 'active' : ''">hsa-circ-1</a>
                  <a @click="folderIndex, activebutton = 2" class="primary-button" :class="activebutton == 2 ? 'active' : ''">hsa-circ-2</a>
                  <a @click="folderIndex, activebutton = 3" class="primary-button" :class="activebutton == 3 ? 'active' : ''">hsa-circ-3</a>
                </div>
              </div>
              <div class="row ">
                <label for="range" class="form-label col"><span>Donor sequence length: </span>{{n1}}</label>
                <label for="range" class="form-label col"><span>Acceptor sequence length: </span>{{n2}}</label>
              </div>
              <input type="range" class="form-range" min="0" max="10" step="1" id="range" v-model="inputRange">
              <div class="gallery grid">
                <a :href="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/h1-${n1}-${n2}.png`"><img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/h1-${n1}-${n2}.png`" alt="" title="H1 probe"/></a>
                <a :href="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/h2-${n1}-${n2}.png`"><img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/h2-${n1}-${n2}.png`" alt="" title="H2 probe"/></a>
                <a :href="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/ldn-${n1}-${n2}.png`"><img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/ldn-${n1}-${n2}.png`" alt="" title="Nanostructure"/></a>
                <a :href="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/h1-${n1}-${n2}.png`"><img :src="`https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-1/h1-${n1}-${n2}.png`" alt="" title="Target detection"/></a>
              </div>
              <p>Unexpectedly, we observed no vast difference in ΔG between the various H1 and H2 probes and the LDN, proving our initial design was thermodynamically favored.</p>
              <h3 class="small-title">CircRNA secondary structure.</h3>
              <p>A necessary component to understanding our system and progressing our Modeling work is understanding how the circular RNAs appeared to be. Hence, we used the ViennaRNA Web services, particularly the RNAfold server, a gold standard in RNA 2D visualization [3], [4]. By importing the mature circRNA sequence and selecting the "assume RNA molecule to be circular" option under the advanced options menu, we generated the secondary structure for the circRNA targets.</p>
              <p>In the output, two different predictions are depicted: the Minimum Free Energy structure (MFE) and the Centroid structure, which represent the equilibrium ensemble differently. For the next steps of our Model, we used the MFE structure, depicted in <span>(Fig.3)</span>.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
                <figcaption class="figure-caption text-left"><span>Fig.3</span></figcaption>
              </figure>
            </section>
            <section id="tertiary">
              <h3 class="small-title">Tertiary structure prediction and Molecular Dynamics</h3>
              <p>Two methods were implemented, one to model the structure of the circular RNAs and one to model the LDN system's components. Following the secondary structure prediction and our understanding that circular RNAs are far from a circle, we aimed to model their tertiary structure in order to identify where the back splice junction domain is located. That proves to be a valuable point when designing our structure, because if the BSJ site is located in a place where steric hindrance occurs it would be difficult to be accessed by our Nanostructure. As a result the detection reaction will take longer than expected or even not accomplished at all.</p>
              <p>CircRNAs were modeled using 3DRNA/DNA web services [5], which functions as a comparative modeling method and an ab initio method combining user-defined data and already characterized nucleic acid segments to obtain the best possible tertiary structure. By importing the mature circRNA sequence and the corresponding secondary structure obtained in the previous step, the server follows a pipeline of assembling the smallest secondary elements (SSEs) containing stem (helix), hairpin loop, internal loop, bulge loop, pseudoknot loop, and junction loop, from already characterized RNA PDB files and optimizing the structure with Monte Carlo simulations. After the simulation, multiple models are depicted, all scored by a 3dRNA score acting as a method to evaluate distance and torsion angle functions of the structure, where a lower value corresponds to a better structure. Hsa_circ_0070354 scored 26.3831, hsa_circ_0102533 scored 26.5516 and hsa_circ_0005962 scored 26.7353, values low enough considering their complex structure [6].</p>
              <p>After comparing the output to the original secondary structure, we obtain the 3D structure of choice. We visualized the circRNA 3D structure using UCSF Chimera X [7] and Visual Molecular Dynamics (VMD) [8], [9]. These next-generation molecular visualization programs provide a command line and a Graphical User Interface. By the interactive side panel, the BSJ site is selected, and it is differentiated by blue color from the remaining structure. In Fig.3, all three circRNA targets are depicted providing an easy-to-access BSJ site.</p>
              <p>Since there is not an already characterized structure of the designed Nanostructure, it is necessary to follow a different modeling approach. As described carefully on the Project Description page, LDN acts as a polymer of specific repeating H1 and H2 probe domains. In order to simplify our system and after various Human Practises discussions, we decided it is better to model one of the multiple repeating structures and to assume that the remaining Nanostructure acts the same way. </p>
              <p>Our first step was to model the H1 and H2 probes separately. We utilized a coarse-grained DNA model, called oxDNA. OxDNA is a simulation code designed to implement Monte Carlo and Molecular Dynamics to analyze DNA and RNA structures, supporting simulations on both CPU [4] and Nvidia CUDA backends [7]. The Model treats DNA as a string of rigid nucleotides, which interact through potentials depending on the position and orientation of the nucleotides, leading to faster simulations than if an all-atomistic approach were to be followed. In addition, it treats each sugar-phosphate backbone as a single entity and each nitrogenous base as a single entity, but with specific electrostatic properties. Hydrogen bonds occur between complementary bases when they are anti-aligned, forming double helical structures [8]. Three different simulation techniques can be used with oxDNA [10]:</p>
              <ul class="bullets">
                <li>Metropolis Monte Carlo (MC) simulations sample a Boltzmann distribution to propose nucleotide configurational moves.</li>
                <li>Virtual Move Monte Carlo (VMMC) simulations generate co-moving nucleotide clusters to assess pairwise interactions, circumventing MC simulation's drawbacks.</li>
                <li>Molecular Dynamics (MD) simulations according to which molecule moves are made based on Newton's laws of motion.</li>
              </ul>
              <br>
              <p>We used the VMMC model for MOST OF our simulations since, in systems with less than 100 nucleotides, equilibration is reached faster with VMMC than with MD.</p>
              <p>We used oxDNA for three essential simulations:</p>
              <ul class="bullets">
                <li>Hybridization of RCA primer to the linear phosphorylated template</li>
                <li>Hairpin probe H1 and H2 formation</li>
                <li>Linear DNA Nanostructure creation</li>
              </ul>
              <br>
              <p>Initially, organizing the expected simulation steps and results is very important. Therefore, initial input file preparation is crucial for Molecular Dynamics simulations. OxDNA uses two separate files to characterize a sequence, a topology (.top) file and a configuration (.conf) file. The .top file stores the intra-strand fixed topology in the order the nucleotides are depicted. The .conf file contains the current timestep, the length of the simulation box's sides, and the total, potential, and kinetic energies. After the original header, information about every single nucleotide is depicted. More information about the input files is mentioned in the oxDNA documentation [9]. We must consider that due to legacy reasons, the simulation code prefers structures to be listed in reverse direction (3' → 5'). Using an online converter [11], we prepared all the input sequences and transferred them to a .txt file in the correct order. Using the generate-sa.py script provided with the oxDNA pack, we can generate the structure input files based on the original .txt file. Note that the simulation box should have box sides at least as big as the largest sequence in the .txt file.</p>
              <p>As output files we are expecting three different file types.</p>
              <ul class="bullets">
                <li>A trajectory (.dat) depicting how our system changes conformations with each timestep.</li>
                <li>A last configuration (.conf) file to be used for the conversion of the oxDNA files to all-atomic Protein Data Bank (.pdb) structures.</li>
                <li>An energy file (.dat), to be plotted so we can estimate if our system has reached equilibration.</li>
              </ul>
              <br>
              <p>The next step is to prepare the input file for the simulation process. The user defines the options in a text file with a key = value style. We set the simulation parameters to be as suitable and compatible as possible to our experimental design. Before each simulation we performed a standard relaxation procedure, consisting of :</p>
              <ul class="bullets">
                <li>10<sup>3</sup> steps of MC simulations on a CPU, followed </li>
                <li>10<sup>6</sup> steps of an MD relaxation on CUDA with a maximum-value of the cutoff for the backbone potential </li>
              </ul>
              <br>
              <p>T?he oxDNA2 model [12] was used, since it allows DNA to be studied with salt concentrations, and sequence-specific parameters were applied. The temperature and salt concentration were set according to each experiment. You can view all our input options in their corresponding files on our GitHub Page. The visualization of the output was achieved using oxView [13], a web-service that provides the ability for oxDNA models to be dynamically represented through their initial .top file and the output trajectory or last configuration files.</p>
            </section>
          </section>
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
              <div class="row gallery">
                <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"/></a>
                  <figcaption class="figure-caption text-right">Fig 1.</figcaption>
                </figure>
                <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig2-step1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig2-step1.png"/></a>
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
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"/></a>
                  <figcaption class="figure-caption text-right">Fig 3.</figcaption>
                </figure>
                <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step1.png"/></a>
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