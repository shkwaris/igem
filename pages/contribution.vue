<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/contr.jpg') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
      <section class="intro">
        <p>In this section we present our contributions to the iGEM community. In our project, we developed several skills that we want to pass on to the next generation of iGEM teams. Our contribution consists of four aspects: Supporting Entrepreneurship, Lab, and Education.</p>
      </section>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="fundraising">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#lab`" v-scroll-to="'#lab'">Lab</a></li>
                <ul>
                  <li><a :href="`${currentPage}/#rca`" v-scroll-to="'#rca'" parent="lab">DNA template design for RCA reactions</a></li>
                  <li><a :href="`${currentPage}/#nano`" v-scroll-to="'#nano'" parent="lab">Automization of Linear DNA Nanostructure Design</a></li>
                  <li><a :href="`${currentPage}/#safety`" v-scroll-to="'#safety'" parent="lab">Safety</a></li>
                </ul>
                <li><a :href="`${currentPage}/#enterpreneurship`" v-scroll-to="'#enterpreneurship'">Supporting Enterpreneurship</a></li>
                <ul>
                  <li><a :href="`${currentPage}/#fundraising`" v-scroll-to="'#fundraising'" parent="enterpreneurship">Fundraising</a></li>
                  <li><a :href="`${currentPage}/#business`" v-scroll-to="'#business'" parent="enterpreneurship">Business plan</a></li>
                </ul>
                <li><a :href="`${currentPage}/#edu`" v-scroll-to="'#edu'">Education & Communication</a></li>
                <li><a :href="`${currentPage}/#refs`" v-scroll-to="'#refs'">References</a></li>
              </ol>
            </div>
              
          </nav>
        </div>
        <div class="col-lg-9 main-content" id="main-content">
          <section id="lab">
            <h2 class="main-title">Lab</h2>
            <section id="rca">
              <h3 class="small-title">DNA template design for RCA reactions</h3>
              <p>The circular DNA template used in the RCA process can be synthesized enzymatically or chemically through the intramolecular ligation of phosphate and hydroxyl end groups. The enzymatic ligation process is efficient for relatively large DNA templates. However, it may not be suitable for making small DNA circles (&lt;30 nt), presumably due to inadequate enzyme binding sites or the strain induced upon the ring closure of short oligonucleotides. <a class="link-ref" v-scroll-to="'#refs'">[1]</a></p>
              <p><span>DNA ligation problems:</span><br>In the enzymatic ligation approach, linear multimeric by-products can sometimes be formed in addition to circular DNA. This issue could be partly addressed by using a low concentration of DNA in the ligation reaction. The circular DNA products can then be purified from linear by-products by gel electrophoresis or by exonucleases treatment that only degrades non-circularized linear DNA molecules. </p>
              <p><span>Structure understanding: Ligand density and valency</span><br>The length of the RCA backbone (valency) and distance between probes (ligand density) can be easily modified by RCA reaction time and the length of spacer domains, respectively <a class="link-ref" v-scroll-to="'#refs'">[2]</a>. The RCA products contain repetitive sequence units complementary to the circular DNA template and can be tailor-designed. A critical feature of RCA products is their engineering versatility. </p>
              <p><span>The RCA reaction time controls the valency:</span><br>We can readily tune the length and graft density of the RCA products on a substrate by varying the time for RCA reaction and primer/circular template concentration. Although longer RCA products contain more ligants, extended reaction times likely create more intra- and intermolecular interactions, which may limit the accessibility of the ligants <a class="link-ref" v-scroll-to="'#refs'">[3]</a>. In other words, extended RCA reactions cause the RCA product to be too concentrated and tangled, which is not conducive to assembling the probes. Thus, after consulting the literature, we chose a 40-minute RCA reaction for subsequent experiments.</p>
              <p><span>The DNA template controls ligand density: </span><br>Two spacer domains between the probe hybridization sites are required. The shorter the spacer domains, the greater the ligand density, hence the shorter the distances between the probes. We chose spacer domains that consist of polyT sequences. We figured that incorporating a polyT (but not a random sequence) spacer between aptamer domains in the RCA product could reduce the nonspecific interactions. In our project, the distances between the H1 and H2 probes or H1/H2 groups on the RCA product are crucial to reaction efficiency in the LDN system and should be optimized carefully. Probes too close to each other will produce a steric hindrance effect, while a long distance will make the H1 and H2 hybridization challenging. A short distance between the groups affects the free diffusion rate of the target, while a long distance reduces the collision efficiency between the target and H1. Both will reduce the reaction efficiency and result in a weak fluorescence signal. <a class="link-ref" v-scroll-to="'#refs'">[3]</a></p>
            </section>
            <section id="nano">
              <h3 class="small-title">Automization of Linear DNA Nanostructure Design</h3>
              <p>At first, we found it difficult trying to visualize and analyze every secondary structure created by the components of our Linear DNA Nanostructure system. The need to engineer a way to automate the secondary production process presented itself. During our Human Practices calls and with the help of our Dry Lab advisor, Bochalis Christodoulos, we created a Python script combining NUPACK, a near neighbor model, and simple coding skills.</p> 
              <p>With the integration of for-loops, we made the software simple and provided fast results to the end user. Its design is based on the fact that H1 and H2 hairpin probes have sequences deriving from the target circRNA mature sequence, having a distinct domain called Backsplice Junction (BSJ) site. As discussed in the Project Description, the BSJ consists of an upstream donor sequence in circular RNAs that covalently links to the downstream acceptor sequence. For our initial design, we figured the selection of 15 bases upstream and 15 bases downstream, the Backsplice Junction site would be an excellent way to separate the circRNAs from their linear counterparts. But as our design evolved and our modeling work, we found structures more thermodynamically stable and with fewer artifacts than the original design.</p>
              <p>Per the information described in our Model page, by alternating the combination of 15-15 bases upstream and downstream, respectively, different H1 and H2 molecules arose, and the ldn_generator.py script was born. Being run on Python 3, and with its only dependency being the installation of NUPACK, the script works as follows:</p>
              <p>For the installation:</p>
              <p><span>Step 1</span>: Download our script and the requirements.txt file from our <a href="https://gitlab.igem.org/2022/software-tools/patras-medicine" class="link-ref" target="_blank">GitLab</a> page.</p> 
              <p><span>Step 2</span>: Run the command pip install -r requirements.txt.</p>
              <p>A FASTA (.fasta) file, including the target circRNA molecule name and mature sequence, and the RCA domain sequence, is needed before usage. An exemplary FASTA file, named example.fasta, is supplied with the code.</p>
              <p>After having obtained the FASTA file, the command to run the script goes as follows:
              <br><br>
              python ldn_generator.py input.fasta</p>
              <p>Temperature can be user-defined using the -t argument, and salt concentrations can be set using the -s and -m arguments. -s corresponds to the concentration of Sodium, and -m corresponds to the concentration of Magnesium. If not, the default settings are 37 oC and 1M for Sodium and 0.05M for Magnesium. </p>
              <p>The user can view results in the command line output with the following format.</p>
              <p>--------------------<br>
                20 10<br>
                --------------------<br>
                BSJ : CAACTTGACATCTCTTTTGGAAAAGTTCTT<br>
                H1 : AAGAACTTTTCCAAAAGAGATGTCAAGTTGGACATCTACCAACACAACTTGACATCTCTTTTGGCTCATACCATAT<br>
                H2 : CTTATCCGGAAGCAACTTGACATCTCTTTTGGAAAAGTTCTTCCAAAAGAGATGTCAAGTTGTGTTGGTAGATGTC<br><br>

                MFE proxy structure(s):<br><br>

                H1 probe 20: ..........((((((((((((((((((((..............))))))))))))))))))))............ (-23.14 kcal/mol)<br><br>

                H2 probe 20: (((......)))((((((((((((((((((((((......)))))))))))))))))))))).............. (-26.40 kcal/mol)<br><br><br>


                LDN 20:<br>
                .....(((((((((((((((((((((((((..............))))))))))))))))))))((((((((((((+))))))))))))(.......)))))).....((((((((((((........+))))))))))))((((((((((((((((((((((......)))))))))))))))))))))).............. (-83.52 kcal/mol)<br><br>

                LDN_BSJ detect 20:<br>
                ((((((((((((((((((((((((((((((+))))))))))))))))))))))))))))))((((((((((((((((((((((((((((((((((((((((((((((+))))))))))))((.......))(((((...((((((((((((........+))))))))))))((...))......((((....))))))))))))))))))))))))))))))))))))))))))) (-115.93 kcal/mol)</p>
                <p>Both secondary structure, in dot-bracket notation, and the Gibbs free energy are depicted in the parenthesis. At the beginning of the output, the RCA domain structure is shown. Following that, the rest go as follows:</p>
                <p>First, the Backsplice Junction sequence is depicted, following the H1 and H2 probes. Then, regarding the secondary structures, LDN corresponds to the Linear DNA Nanostructure, and the domain goes as follows: H1 probe, RCA domain, H2 probe, and the LDN_BSJ detect follows the same sequence of domains with the addition of Backsplice Junction in the beginning.</p>
            </section>
            <section id="safety">
              <h3 class="small-title">Safety</h3>
              <p>We designed safety stickers aiming to establish a universal safety system for Laboratory protection.</p>
              <a class="primary-button" @click="scrollToStickers()">Check out our stickers</a>
            </section> 
          </section>
          <section id="enterpreneurship">
            <h2 class="main-title">Supporting Enterpreneurship</h2>
            <section id="fundraising">
              <h3 class="small-title">Fundraising</h3>
              <p>For our team it is of high importance that future iGEM teams don't lose any time figuring out how to organize their fundraising. For that reason we documented our fundraising journey and prepared a plan for the future iGEM teams.</p>
              <a class="link-download" href="https://static.igem.wiki/teams/4118/wiki/website-assets/contribution/fundraising-tool.pdf" download="" target="_blank">Download the fundraising tool</a>
            </section>
            <section id="business">
              <h3 class="small-title">Business plan</h3>
              <p>A business plan can be very tricky so we are happy to provide this tool for the future iGEM teams, shaped from our experience. </p>
              <a class="link-download" href="https://static.igem.wiki/teams/4118/wiki/website-assets/contribution/business-plan-tool.pdf" download="" target="_blank">Download the business plan tool</a>
            </section>
          </section>
          <section id="edu">
            <h2 class="main-title">Education & Communication</h2>
            <p>With the help of iGEM teams around the world we created a Dictionary containing scientifically defined Synthetic Biology terms to help the next iGEM generation better understand SynBio terms.</p>
            <a class="link-download" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/the-synbio-dictionary.pdf" target="_blank" download="">Download the dictionary</a>
          </section>
          <section id="refs">
            <ul class="acc">
              <li class="acc-item references">
                <input id="s1" class="hide" type="checkbox">
                <label for="s1" class="acc-label icon">References</label>
                <div class="acc-child">
                  <p>[1]. Communication | Patras Medicine - iGEM 2022. (2022). Igem.wiki. <a class="link-ref" href="https://2022.igem.wiki/patras-medicine/communication">https://2022.igem.wiki/patras-medicine/communication</a>
                  <br>[2]. Zhang, Z., Eckert, M. A., Ali, M. M., Liu, L., Kang, D.-K., Chang, E., Pone, E. J., Sender, L. S., Fruman, D. A., & Zhao, W. (2014). DNA-Scaffolded Multivalent Ligands to Modulate Cell Function. ChemBioChem, 15(9), 1268–1273. <a class="link-ref" href="https://doi.org/10.1002/cbic.201402100">https://doi.org/10.1002/cbic.201402100</a>
                  <br>[3]. Zhao, W., Cui, C. H., Bose, S., Guo, D., Shen, C., Wong, W. P., Halvorsen, K., Farokhzad, O. C., Teo, G. S. L., Phillips, J. A., Dorfman, D. M., Karnik, R., & Karp, J. M. (2012). Bioinspired multivalent DNA network for capture and release of cells. Proceedings of the National Academy of Sciences of the United States of America, 109(48), 19626–19631. <a class="link-ref" href="https://doi.org/10.1073/pnas.1211234109">https://doi.org/10.1073/pnas.1211234109</a></p>
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
            currentPage: "Contribution",
            options: {
              easing: [0.25, 0.1, 0.25, 1.0],
              force: true,
              cancelable: false,
              x: false,
              y: true,
              offset: -80,
            },
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
      },
      scrollToStickers: function () {
        this.$router.push({path: "safety"});
          setTimeout(() =>{
            this.$scrollTo("#section1", 350, this.options);
          }, 1000)
      },
    }
}
</script>