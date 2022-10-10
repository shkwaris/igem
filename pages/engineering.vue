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
                <li><a :href="`${currentPage}/#optimization`" v-scroll-to="'#optimization'">Circular template optimization</a></li>
                <li><a :href="`${currentPage}/#amplification`" v-scroll-to="'#amplification'">Rolling Circle Amplification</a></li>
                <li><a :href="`${currentPage}/#method`" v-scroll-to="'#method'">Method Optimization</a></li>
                <li><a :href="`${currentPage}/#steps`" v-scroll-to="'#steps'">Future steps</a></li>
              </ol>              
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="overview">
            <h2 class="main-title">Overview</h2>
            <p>Driven by the urgent need for innovative tests to diagnose NSCLC at an early stage effectively, we designed an innovative method to detect circular RNAs secreted in blood circulation by cancer cells. To deliver our proof-of-concept, we went through engineering cycles concerning all aspects of our project design. </p>
            <section>
              <h3 class="small-title">Design and Build the idea</h3>
              <p>Our first engineering steps are described on our <a href="human-practices" class="link-ref">Human Practices</a> page:</p>
              <ul class="bullets">
                <li>Through experts' opinions, we defined the problem.</li>
                <li>We verified the problem from the doctors' and patients' points of view.</li>
                <li>We built the idea by consulting doctors, wet lab, and dry lab experts.</li>
              </ul>
            </section>
            <section>
              <h3 class="small-title">Put the idea into practice</h3>
              <p>After we built the idea, we had to design our laboratory steps. In order to simplify the design process, we broke down our experiments into parts. We worked on two aspects: the Linear DNA Nanostructure (LDN) synthesis optimization and our detection method optimization. We followed a distinct engineering process for each aspect until we achieved optimal results. In this section, we analyze all the process steps to obtain the final results described on the Results page.</p>
            </section>
          </section>
          <section id="optimization">
            <h2 class="main-title">Circular template optimization</h2>
            <section>
              <h3 class="small-title">Design</h3>
              <p>We need to design the DNA template sequence carefully before proceeding to the experimental part (See <a href="model" class="link-ref">Model Page</a>). The DNA template sequence carries two hairpin probe hybridization sites for the H1 and H2 hairpin probes. By extension, the long linear DNA scaffold carries multiple hairpin probe installation sites <span>(Fig.2)</span>. Spacer domains between the hybridization sites tune ligand density. The designed template and primer sequences can be found on the <a href="parts" class="link-ref">Parts</a> page.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/fig-1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/fig-1.png"/></a>
                <figcaption class="figure-caption text-left"><span>Fig.1 Circular Template Design:</span> The template consists of four distinct domains that are found in the RCA product. The long DNA scaffold contains multiple repeats of the initial DNA template’s sequence.</figcaption>
              </figure>
            </section>
            <section>
              <h3 class="small-title">Build</h3>
              <p>The ligation reaction of the DNA template was performed at first using a concentration of 40 U/μL of T4 DNA ligase <a href="https://international.neb.com/products/m0202-t4-dna-ligase#Product%20Information_Reagents-Supplied" class="link-ref">(M0202L)</a>. Prior to the ligase addition step, we heated the DNA template and its primer at 95 <sup>o</sup>C for 5 min and the mixture was incubated at RT for 5 min. After adding the ligase, a 30 min incubation step at RT took place, followed by enzyme inactivation. Next, we purified the product using Exonuclease I <a href="https://international.neb.com/products/m0293-exonuclease-i-e-coli#Product%20Information" class="link-ref">(M0293S)</a> and III <a href="https://international.neb.com/products/m0206-exonuclease-iii-e-coli#Product%20Information" class="link-ref">(M0206S)</a> and a PCR purification kit <a href="https://www.mn-net.com/nucleospin-gel-and-pcr-clean-up-mini-kit-for-gel-extraction-and-pcr-clean-up-740609.50" class="link-ref">(740609.50)</a>. Unfortunately, we yielded a concentration not sufficiently high to be measured by Implen NanoPhotometer® P330. </p>
              <p>The second time, we increased the ligase concentration to 400 U/μL. Before the ligase addition, we heated the DNA template and its primer at 95 <sup>o</sup>C for 5 min. Then we incubated the mixture at RT for 30 min to ensure the accomplishment of the hybridization step. After we added the ligase, we increased the reaction time to 2h. We yielded a concentration of 2.167 ng/μL or 0.13 pmol/μL (A260/280 = 2.167), which is not sufficiently high, as measured by Implen NanoPhotometer® P330. </p>
            </section>
            <section>
              <h3 class="small-title">Troubleshooting</h3>
              <p>So, after some research <sup><a href="https://pubmed.ncbi.nlm.nih.gov/16526071/" class="link-ref">(5)</a>,<a href="https://pubmed.ncbi.nlm.nih.gov/11788721/" class="link-ref">(6)</a>,<a href="https://www.sciencedirect.com/science/article/pii/S0045206804000604" class="link-ref">(9)</a></sup> and troubleshooting, and with the guidance of our lab instructors, we decided to perform an optimal 90-min hybridization step of the primer and the DNA template. We also chose to incubate the ligase reaction at 16 <sup>o</sup>C overnight. Finally, we measured a concentration of 7.770 ng/μL or 0.49 pmol/μL (A260/280 = 1.680).</p>
              <p>Nevertheless, we did not stop at this point. Instead, we changed the reaction conditions once more. After the primer-DNA template hybridization, we cooled the mixture at 16 <sup>o</sup>C and added the ligase. This way, we could prevent the enzyme from being exposed to higher temperatures than needed. Then, we carried out Exonuclease I and III treatment. Finally, we used a PCR purification kit to purify the nuclease-treated product. We combined multiple reaction mixtures into a single column to get a higher yield. The concentration was calculated at 0.50 pmol/μL(A260/280 = 1.613) using Implen NanoPhotometer® P330.</p>
            </section>
            <section>
              <h3 class="small-title">Result</h3>
              <a @click="scrollToProtocols()" class="primary-button">View final detailed protocol</a>
            </section>
          </section>
          <section id="amplification">
            <h2 class="main-title">Rolling Circle Amplification</h2>
            <p>We optimized the RCA protocol, as well, to achieve the highest possible yield of the reaction.</p>
            <section>
              <h3 class="small-title">Research</h3>
              <p>After review of the literature, we found that we can readily tune the length and graft density of the RCA products in the mixture by varying the time of RCA reaction and primer/circular template concentration. However, although longer RCA products contain more H1/H2 couples, extended reaction times likely create more intra- and intermolecular interactions, which may limit the accessibility of the probes <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3511714/" class="link-ref">[1]</a>. In other words, extended RCA reactions cause the RCA product to be too concentrated and tangled,which can restrain the accessibility of the probes to the hybridization sites. Thus, after consulting the literature, we chose a 40-min RCA reaction for subsequent experiments.</p>
            </section>
            <section>
              <h3 class="small-title">Design and Test</h3>
              <p>First, we designed a protocol where we prepared a reaction pool containing: the Phi29 DNA polymerase, primer, dNTPs, and buffer. Then we added the circular DNA template. After the reaction, we purified the product with the PCR purification kit <a href="https://www.mn-net.com/nucleospin-gel-and-pcr-clean-up-mini-kit-for-gel-extraction-and-pcr-clean-up-740609.50" class="lin-ref">(740609.50)</a>. We used as a DNA template the one with the lowest concentration (0.13 pmol/μL). This practice yielded 2.764 ng/μL of RCA product (measured by Implen NanoPhotometer® P330) when the negative control reaction (not containing any circular DNA) contained a measured concentration of 2.782 ng/μL! This is indicative, that all samples probably contained a small quantity of linear DNA or primer that was not digested during the Exonuclease treatment step</p>
              <p>We performed the same protocol using the more concentrated DNA template we created. We followed the PCR clean-up protocol, as usual, using the PCR purification kit. We also attempted DNA extraction from agarose gel using the same kit. Αlongside we repeated the above procedure using the DNA template we created prior to purification. We are presenting the reaction yields in the following table.</p>
              <br>
              <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <figcaption class="figure-caption text-left"><span>Table.1:</span> The concentration of Linear DNA products after RCA reaction and purification.</figcaption>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/table-1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/table-1.png"/></a>
              </figure>
            </section>
            <section>
              <h3 class="small-title">Troubleshooting</h3>
              <p>We concluded that the agarose gel extraction had the same results but was time-consuming. So we agreed to continue with the PCR clean-up protocol. However, we judged that the RCA protocol required optimization.</p>
              <p>After troubleshooting with the lab instructors, we made the following realizations:</p>
              <ul class="bullets">
                <li>We had provided insufficient time for the circular DNA and the primer to bind prior to the RCA reaction. </li>
                <li>We needed to modify the PCR purification kit protocol to isolate larger DNA fragments (>1000 bp), as advised by the kit instructions. </li>
                <li>We should combine two reaction mixtures and purify them using a single column of the PCR clean-up kit. </li>
              </ul>
            </section>
            <section>
              <h3 class="small-title">Optimization</h3>
              <p>Therefore, we modified the protocol: We created two reaction mixtures. First, we mixed the circular DNA template with the primer and an amount of the Phi29 buffer. Next, we heated the mixture at 95 <sup>o</sup>C for 5 min, then placed it on ice for 5 min. Then, we added the rest of the reagents. </p>
              <p>After the reaction, we combined the two reaction mixtures in a single clean-up column. Prior to the elution step with the elution buffer, we heated the elution buffer and the column at 70 <sup>o</sup>C for 5 min before elution. The PCR clean-up kit instructions recommended this step to isolate larger DNA fragments. These modifications resulted in a concentration of 28.6±5.6 ng/μL (A260/280 = 1.861)</p>
              <p>Then, we decided to combine three reaction mixtures and purify them in a single column of the clean-up kit. As a result, we obtained a concentration of 67.0±8.43 ng/μL (A260/280 = 1.861) measured by Implen NanoPhotometer® P330. In addition, we used agarose gel electrophoresis to verify the linear DNA product, and for the first time we spotted a visible band indicating the presence of the RCA product. </p>
              <p>Finally, we decided to increase the RCA reaction time to 1h. We collected 211.5±22.2 ng/μL of linear product. Because of the highly concentrated product we performed a 4x dilution before the nanostructure assembly step.</p>
            </section>
            <section>
              <h3 class="small-title">Result</h3>
              <a @click="scrollToProtocols()" class="primary-button">View final detailed protocol</a>
            </section>
          </section>
          <section id="method">
            <h2 class="main-title">Method Optimization</h2>
            <section>
              <h3 class="small-title">Design</h3>
            </section>
            <section>
              <h3 class="small-title">Test</h3>
              <p>The first model used as a target for our detection method was hsa_circ_0070354. To prepare the LDN we designed the following experiment. We added 25 μL of H1 (10 pmol/μL), 25 μL of H2 (10 pmol/μL), 25μL of Linear scaffold (13.7 ng/μL), 125 μL of Tris-MgCl2 buffer (500 mM, pH=8.0) into a 0.2 mL reaction mixture. The mixture was incubated at 37 <sup>o</sup>C for 100 min. After incubation, we prepared positive and negative samples. The positives had a 30 μL final reaction volume containing 3 μL of the Assembled LDN, 12 μL of the BSJ fragment as a target (hsa_circ_0070354 - 100 nM), and 15 μL Tris-MgCl2 buffer. The mixture was incubated in a thermal cycler at 37 <sup>o</sup>C for another 100 min. Finally, we loaded the samples on Thermo Scientific™ Nunc 384-Well Black Plates.</p>
            </section>
            <section>
              <h3 class="small-title">Troubleshooting</h3>
              <p>Unfortunately, we noticed two major problems. First, the H2 for hsa_circ_0070354 target has an excitation maximum (504 nm) and an emission maximum (510 nm). The difference between the two wavelengths was inadequate.The light sent by the instrument's source at 504 nm was detected at 510 nm, distorting the measurement data. So, we had to reduce the excitation wavelength and increase the emission wavelength, unfortunately reducing the emitted fluorescence intensity. This aspect had not been foreseen while choosing the fluorophore labels, proving a defect in our design. The second problem arises by the fact that there was no significant difference between the negative and positive samples' fluorescence intensity. This was unsettling, but we did not give up on our first try. We had to redesign our experimental approach.</p>
            </section>
            <section>
              <h3 class="small-title">Redesign</h3>
              <p>Hence, we chose to proceed with the hsa_circ_0102533 target. H2 probe, specific for this target, carries Atto 550 with an Excitation maximum of 554 nm and an Emission maximum of 576 nm. 576-554 nm was proven to be an adequate wavelength difference for the excitation fluorescence not interfering with the instrument’s detector.</p>
              <p>To prepare the LDN, we adapt the reaction volume: 5 μL of H1 (10 pmol/μL), 5 μL of H2 (10 pmol/μL), 5μL of Linear scaffold (13.7 ng/μL), 35 μL of Tris-MgCl2 buffer (500 mM, pH=8.0) were added in a 0.2mL PCR tube. We decided to lower the reaction volume and the amount of H1 and H2 probes for two reasons:</p>
              <ul class="bullets">
                <li>After troubleshooting with our instructors, we figured that the Assembly efficacy could increase in a small-volume reaction system.</li>
                <li>Additionally, 200μL of LDN is enough for 40 samples. We considered this a large amount and a waste of reagents since all the LDN mixture had to be used immediately to ensure the experiments' consistency. </li>
              </ul>
              <br>
              <p>Also, the effect of the temperature of the incubation step was studied. The mixture was incubated at 37 <sup>o</sup>C for 100 min. After incubation, we prepared positive samples of 30 μL reaction volume containing 5 μl of the Assembled LDN, 12 μL of the BSJ fragment as a target (hsa_circ_0070354 100 nM), and 13 μL Tris-MgCl2 buffer. We increased the LDN concentration in the mixture from 3 μL to 5 μL. The mixtures were incubated in a thermal cycler at 37 <sup>o</sup>C or 42 <sup>o</sup>C for another 100 min. We loaded the samples on Thermo Scientific™ Nunc 384-Well Black Plates. We measured their fluorescence emission at the corresponding wavelengths (Ex: 554 nm, Em: 576 nm). </p>
              <p>Positive samples incubated at 37 <sup>o</sup>C gave off a fluorescence intensity of 57.4±3.9 (a.u.), while negative samples gave off 42.8±4.2 (a.u.). The standard error value was calculated for n=4 replicates. A S<sub>positive</sub>/S<sub>negative</sub> ratio of 1.4 indicated the possibility of our method to perform properly.</p>
              <p>Positive samples incubated at 42 <sup>o</sup>C gave off a fluorescence intensity of 46.9±3.7 (a.u.), while negative samples gave off 39.7±2.3 (a.u.). N=5 replicates were used for standard error calculation. Comparing the results above and the S<sub>positive</sub>/S<sub>negative</sub> ratios, we proceeded using 37 <sup>o</sup>C as an incubation temperature.</p>
              <p>Our next decision was concerning the buffer selection. We repeated everything using two different buffers instead of the Tris-MgCl2 buffer. We used 4x Saline Sodium Citrate (4x SSC, 1% BSA, pH=7.0) and 1x Phosphate Buffer Saline (1x PBS, 1% BSA, pH=7.4). Please refer to the <a href="" class="link-ref">Buffer preparation protocol</a> for more details. We prepared one LDN (hsa_circ_0102533) using 35 μL of each buffer, 5 μL of H1 (10 pmol/μL), 5 μL of H2 (10 pmol/μL), and 5μL of Linear scaffold (95.3 ng/μL). After incubation positive and negative samples were prepared as per our last experiment. Samples were incubated and loaded on Thermo Scientific™ Nunc 384-Well Black Plates. Fluorescence intensity was measured. Unfortunately, the ratio 7:5 did not vary between the different buffers. Therefore, we decided to continue our experiments with PBS (pH=7.4) because our fluorescent dye is more stable at this pH.</p>
            </section>
            <section>
              <h3 class="small-title">Design</h3>
            </section>
            <section>
              <h3 class="small-title">Design</h3>
            </section>
            <section>
              <h3 class="small-title">Design</h3>
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
            currentPage: "Engineering",
            options: {
              easing: [0.25, 0.1, 0.25, 1.0],
              force: true,
              cancelable: false,
              x: false,
              y: true
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
      scrollToProtocols: function () {
          this.$router.push({path: "experiments"});
          setTimeout(() =>{
            this.$scrollTo("#protocols", 350, this.options);
          }, 1000)
        },
    }
}
</script>