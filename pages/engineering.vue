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
                <li><a :href="`${currentPage}/#references`" v-scroll-to="'#references'">References</a></li>
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
              <p>So, after some research <a class="link-ref" v-scroll-to="'#references'">[1]</a>, <a class="link-ref" v-scroll-to="'#references'">[2]</a>, <a class="link-ref" v-scroll-to="'#references'">[3]</a> and troubleshooting, and with the guidance of our lab instructors, we decided to perform an optimal 90-min hybridization step of the primer and the DNA template. We also chose to incubate the ligase reaction at 16 <sup>o</sup>C overnight. Finally, we measured a concentration of 7.770 ng/μL or 0.49 pmol/μL (A260/280 = 1.680).</p>
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
              <p>After review of the literature, we found that we can readily tune the length and graft density of the RCA products in the mixture by varying the time of RCA reaction and primer/circular template concentration. However, although longer RCA products contain more H1/H2 couples, extended reaction times likely create more intra- and intermolecular interactions, which may limit the accessibility of the probes <a v-scroll-to="'#references'" class="link-ref">[4]</a>. In other words, extended RCA reactions cause the RCA product to be too concentrated and tangled,which can restrain the accessibility of the probes to the hybridization sites. Thus, after consulting the literature, we chose a 40-min RCA reaction for subsequent experiments.</p>
            </section>
            <section>
              <h3 class="small-title">Design and Test</h3>
              <p>First, we designed a protocol where we prepared a reaction pool containing: the Phi29 DNA polymerase, primer, dNTPs, and buffer. Then we added the circular DNA template. After the reaction, we purified the product with the PCR purification kit <a href="https://www.mn-net.com/nucleospin-gel-and-pcr-clean-up-mini-kit-for-gel-extraction-and-pcr-clean-up-740609.50" class="lin-ref">(740609.50)</a>. We used as a DNA template the one with the lowest concentration (0.13 pmol/μL). This practice yielded 2.764 ng/μL of RCA product (measured by Implen NanoPhotometer® P330) when the negative control reaction (not containing any circular DNA) had a measured concentration of 2.782 ng/μL! This is indicative, that all samples probably contained a small quantity of linear DNA or primer that was not digested during the Exonuclease treatment step</p>
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
              <p>Fluorescence is the center point of our diagnostic test; for the cause of engineering, selecting the correct combination of fluorescent dyes-quencher proves to be a vital point before we start our experimental design. In order to achieve our final selection of fluorophore quencher pairs, we went through three engineering cycles. Our first try consisted of these pairs:</p>
              <p><span>Try #1</span></p>
              <p>Fluorophore and quencher for hsa_circ_0070354:</p>
              <ul class="bullets">
                <li>Fluorophore: ATTO 425 (Ex: 346 nm, Em: 442 nm)</li>
                <li>Quencher: BHQ1-dT (Quenching range: 480-580 nm)</li>
              </ul>
              <br>
              <p>Fluorophore and quencher for hsa_circ_0102533:</p>
              <ul class="bullets">
                <li>Fluorophore: Oregon Green 488 (Ex: 496 nm, Em: 524 nm)</li>
                <li>Quencher: BHQ1-dT (Quenching range: 480-580 nm)</li>
              </ul>
              <br>
              <p>Fluorophore and quencher for hsa_circ_0005962:</p>
              <ul class="bullets">
                <li>Fluorophore: Bodipy TMR-X (Ex: 534 nm, Em: 551 nm)</li>
                <li>Quencher: BHQ1-dT (Quenching range: 480-580 nm)</li>
              </ul><br>
              <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/try-1-eng.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/try-1-eng.png"/></a>
                <figcaption class="figure-caption text-left"><span>Spectrum.2:</span> The fluorophores depicted from left to right are: Alexa Fluor 350, Fluorescein-dT and ATTO 550.</figcaption>
              </figure><br>
              <p>Our first goal was to select quenchers with a quenching range wide enough to cover the targeted fluorophore. For that reason, we chose BHQ1-dT, possessing a quenching range of 480-580 nm, capable enough to quench ATTO 425, Oregon Green 488, and Bodipy TMR-X. Unfortunately, a problem presented itself; significant emission spectral overlap made using all three fluorophores for multiplex detection unachievable.</p>
              <p>Our following selection of fluorophore-quencher pairs was:</p>
              <p><span>Try #2</span></p>
              <p>Fluorophore and quencher for hsa_circ_0070354:</p>
              <ul class="bullets">
                <li>Fluorophore: Alexa Fluor 350  (Ex: 346 nm, Em:442 nm)</li>
                <li>Quencher: BHQ1-dT (Quenching range: 480-580 nm)</li>
              </ul><br>
              <p>Fluorophore and quencher for hsa_circ_0102533:</p>
              <ul class="bullets">
                <li>Fluorophore: Fluorescein-dT  (Ex: 494 nm, Em: 522 nm)</li>
                <li>Quencher: BHQ1-dT   (Quenching range: 480-580 nm)</li>
              </ul><br>
              <p>Fluorophore and quencher for hsa_circ_0005962:</p>
              <ul class="bullets">
                <li>Fluorophore: ATTO 550 (Ex: 554 nm, Em: 576 nm)</li>
                <li>Quencher: BHQ1-dT   (Quenching range: 480-580 nm)</li>
              </ul><br>
              <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/try-2-eng.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/try-2-eng.png"/></a>
                <figcaption class="figure-caption text-left"><span>Spectrum.1:</span> The fluorophores depicted from left to right are: ATTO 425, Oregon Green 488 and  Bodipy TMR-X. </figcaption>
              </figure><br>
              <p>Although after alternating all three fluorophores, we still did not manage to get the minimum spectral overlap we aimed for. So to minimize that, Fluorescein-dT was changed with Bodipy FL, and ATTO 550 was altered to 5'-TAMRA. Shaping our fluorophore-quencher groups as follows, hoping to be our final selection:</p>
              <p><span>Try #3</span></p>
              <p>Fluorophore and quencher for hsa_circ_0070354:</p>
              <ul class="bullets">
                <li>Fluorophore: Alexa Fluor 350 MW: 409.35 g/mol (Ex: 346 nm, Em: 442 nm)</li>
                <li>Quencher: BHQ1-dT (Quenching range: 480-580 nm)</li>
              </ul><br>
              <p>Fluorophore and quencher for hsa_circ_0102533:</p>
              <ul class="bullets">
                <li>Fluorophore: Bodipy FL MW: 391.30 g/mol (Ex: 504 nm, Em: 510 nm)</li>
                <li>Quencher: BHQ1-dT   (Quenching range: 480-580 nm)</li>
              </ul><br>
              <p>Fluorophore and quencher for hsa_circ_0005962: </p>
              <ul class="bullets">
                <li>Fluorophore: 5-TAMRA  MW: 512.50 g/mol (Ex: 544 nm, Em: 576 nm)</li>
                <li>Quencher: BHQ1-dT   (Quenching range: 480-580 nm)</li>
              </ul><br>
              <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/try-3-eng.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/try-3-eng.png"/></a>
                <figcaption class="figure-caption text-left"><span>Spectrum.3:</span> The fluorophores depicted from left to right are: Alexa Fluor 350, Bodipy FL and 5’-TAMRA</figcaption>
              </figure><br>
              <p>After a thorough discussion with our Instructors and PIs, we decided to make a few last changes, implementing the following parameters to select our final fluorophore-quencher pairs. First, molecular weight plays an essential role in a molecule's stability, so choosing fluorophores and quenchers with low molecular weight seemed like the right thing to do. Also, we considered the intensity of emitted fluorescence by adding fluorophores with high values of extinction coefficients. Finally, our updated selection achieved a minor to no spectral overlap.</p>
              <p><span>Try #4</span></p>
              <p>Fluorophore and quencher for hsa_circ_0070354:</p>
              <ul class="bullets">
                <li>Fluorophore: Bodipy FL  (Ex: 504 nm, Em: 510 nm)</li>
                <li>Quencher: BHQ1-dT   (Quenching range: 480-580 nm)</li>
              </ul><br>
              <p>Fluorophore and quencher for hsa_circ_0102533:</p>
              <ul class="bullets">
                <li>Fluorophore: ATTO 550  (Ex: 554 nm, Em: 576 nm)</li>
                <li>Quencher: BHQ1-dT   (Quenching range: 480-580 nm)</li>
              </ul><br>
              <p>Fluorophore and quencher for hsa_circ_0005962:</p>
              <ul class="bullets">
                <li>Fluorophore: ATTO 610 (Ex: 615 nm, Em: 634 nm)</li>
                <li>Quencher: BHQ2-dT  (Quenching range: 550-650 nm)</li>
              </ul><br>
              <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/try-4-eng.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/try-4-eng.png"/></a>
                <figcaption class="figure-caption text-left"><span>Spectrum.4</span> The fluorophores depicted from left to right are: Bodipy FL, ATTO 550 and ATTO 610</figcaption>
              </figure><br>
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
              <p>Our next decision was concerning the buffer selection. We repeated everything using two different buffers instead of the Tris-MgCl2 buffer. We used 4x Saline Sodium Citrate (4x SSC, 1% BSA, pH=7.0) and 1x Phosphate Buffer Saline (1x PBS, 1% BSA, pH=7.4). Please refer to the <a @click="scrollToProtocols()" class="link-ref">Buffer preparation protocol</a> for more details. We prepared one LDN (hsa_circ_0102533) using 35 μL of each buffer, 5 μL of H1 (10 pmol/μL), 5 μL of H2 (10 pmol/μL), and 5μL of Linear scaffold (95.3 ng/μL). After incubation positive and negative samples were prepared as per our last experiment. Samples were incubated and loaded on Thermo Scientific™ Nunc 384-Well Black Plates. Fluorescence intensity was measured. Unfortunately, the ratio 7:5 did not vary between the different buffers. Therefore, we decided to continue our experiments with PBS (pH=7.4) because our fluorescent dye is more stable at this pH.</p>
              <p>Also, after our kinetics experiment results described in the “Time-response kinetics analysis” subsection of our Results page, we decided to halt our reaction at 70 min, when it reaches maximum fluorescence intensity.</p>
            </section>
            <section>
              <h3 class="small-title">Retest</h3>
              <p>So, next, we prepared an LDN for our last target, hsa_circ_0005962. We repeated the same protocol using 35 μL PBS buffer (pH=7.4), 5 μL of H1 (10 pmol/μL), 5 μL of H2 (10 pmol/μL), and 5μL of Linear scaffold. After incubation, we prepared positive samples with a range of BSJ fragment concentrations from 100 nM to 0.5 nM. Positive samples contained 18 μL of LDN reaction pool (LDN and buffer in 5:13 ratio). The samples were incubated in a thermal cycler at 37 <sup>o</sup>C for 70 min. We loaded the samples on Thermo Scientific™ Nunc 384-Well Black Plates, measured their fluorescence intensity at the corresponding wavelengths (Ex: 615 nm, Em: 634 nm), and received the calibration curve described in our Results page's <a @click="scrollToBsj()" class="link-ref">"Calibration curve: BSJ hsa_circ_0005962"</a> subsection. This was our first satisfactory result. The ratio between positive and negative samples was 2.5, and the calibration curve is shown on <span>Fig.2</span>.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/fig-2-1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/fig-2-1.png"/></a>
                <figcaption class="figure-caption text-left"><span>Fig.2 Calibration curve of the LDN system in 0.5-100 nM BSJ target concentration range:</span> Error bars correspond to standard deviation of n=2 replicates. The horizontal axis is displayed on a logarithmic scale.</figcaption>
              </figure>
              <br><br>
              <p>We decided that preparing calibration curves instead of positive-negative samples could give us more info on the quantification efficacy of the technique. So, we created a calibration curve for hsa_circ_102533, following exactly the last protocol. We, also, decide to load our samples on Thermo Scientific™ Nunc 384-Well Clear Plates. The fluorescence was measured at the corresponding wavelength and the results are presented on <span>Fig.3</span>. Results might not be comparable with positives and negatives of previous assays due to the change of microplate type, but, again, we see a ratio  S<sub>positive</sub>/S<sub>negative</sub> = 1.4 between the most concentrated sample and the negative.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/102-cal-curve-f-w.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/engineering/102-cal-curve-f-w.png"/></a>
                <figcaption class="figure-caption text-left"><span>Fig.3 Fluorescence emission spectra of LDN reaction mixture after incubation with different target concentrations (100 nM, 50 nM, 10 nM, 5 nM, 1 nM, and 0.5 nM) and absence of the target: </span>Samples were loaded on Thermo Scientific™ Nunc 384-Well Clear Plates. Excitation 554 nm, Emission 576-630 nm.</figcaption>
              </figure>
              <br><br>
            </section>
            <section>
              <h3 class="small-title">Learn and Improve</h3>
              <p>We observed that all negative samples showed a high fluorescence intensity. So, at this point, we had to pause our experiments and plan our next step. We also faced a practical difficulty: The H2 we ordered for the hsa_circ_0005962 target had a yield of 0.6 nmol, while the one we ordered for the hsa_circ_0102533 target had a yield of 6.27 nmol. Therefore, the number of experiments we could perform with the hsa_circ_0005962 target was limited. So, we had a question: Why did the LDN for the hsa_circ_0005962 target perform a more efficient detection than the hsa_circ_0102533 target? </p>
              <p>To solve this problem, we needed more info, hence, we planned the following experiments to test the interaction of H1 and H2 probes prior to target addition in the mixture. The experiments are described in our Results page, in the subsection <a @click="scrollToAncillary()" class="link-ref">“H1 and H2 interaction experiments”</a>. Please refer to this section before proceeding. After those experiments we concluded that H1 and H2 for the hsa_circ_0102533 target hybridize to each other in a mixture even though the target is absent. In fact, H1 and H2 hybridize at a greater level when assembled on the linear scaffold in the absence of the target. Of course, the fluorescence emitted in the presence of the target is still higher than the above mixtures in the absence of the target. We figured that we should minimize the fluorescence emitted in the absence of the target. On the other hand, for hsa_circ_0005962 the presence of H1 in a mixture of H2 did not significantly affect the fluorescence emission. Therefore, we concluded that H2 emits a significant amount of fluorescence when present in a mixture alone.</p>
              <p>We gained information, but the problem remained. The solution was found after a few days of troubleshooting when we came up with an idea: to change the order of the reagents added into the mixture. We figured that H1 and H2 hybridize to each other during the Assembly step. Hence, we modified the Assemble protocol for hsa_circ_102533: 5 μL of H1 (10 pmol/μL), 5μL of Linear scaffold, 35 μL of PBS buffer (pH=7.4) were added in a 0.2mL PCR tube. The mixture was incubated at 37 oC for 1h. Then 5 μL of H2 (10 pmol/μL) were added to the mixture and incubated for 1 h. The calibration curve constructed after this Assembly protocol is presented as our final result in the <a @click="scrollToBsj1()" class="link-ref">"Calibration curve: BSJ hsa_circ_0102533"</a> subsection. By this alteration we achieved a 2-fold signal-to-background ratio in only 70 min when the most concentrated positive sample reached fluorescence emission of 184.6±4.0 (a.u).</p>
              <p>This was our final <a @click="scrollToProtocols()" class="link-ref">protocol</a>. We proceeded with the rest of our <a href="experiments" class="link-ref">Experiments</a> following this optimized protocol. </p>
            </section>
            <section>
              <h3 class="small-title">Further work</h3>
              <p>We repeated the final protocol at 25 <sup>o</sup>C and 42 <sup>o</sup>C. We concluded that the temperature of 37 <sup>o</sup>C was the ideal. We concluded that the temperature of 37 <sup>o</sup>C, that was originally selected, provided the optimal  S<sub>positive</sub>/S<sub>negative</sub>. Also, we repeated the protocol for the hsa_circ_0070354 target, but we received no positive results. </p>
            </section>
          </section>
          <section id="steps">
            <h2 class="main-title">Future steps</h2>
            <p>Engineering work is never fully accomplished, and with that in mind, we organized steps that needed to be performed to optimize our system thoroughly. Re-designing of the H1 and H2 probes through modeling work and experimental testing of re-designed probes are in order. That will lead to the discovery of a better, more stable group of hairpin probes with less intramolecular interactions, increasing the affinity of the H1 probe to the circRNA target and subsequently lowering the Limit of Detection of our proposed method. Also, studies for a multiplex feasibility should be performed in order to identify if the LDN system can be used for multiple target detection in a single reaction mixture. Moreover, spectral overlap and the interaction between two different LDN molecules are some of the parameters we need to consider when designing such a complex system.</p>
          </section>
          <section id="references">
            <ul class="acc">
              <li class="acc-item references">
                <input id="s1" class="hide" type="checkbox">
                <label for="s1" class="acc-label icon">References</label>
                <div class="acc-child">
                  <p>[1]. Zhao, W., Gao, Y., Kandadai, S. A., Brook, M. A., & Li, Y. (2006, April 3). DNA Polymerization on Gold Nanoparticles through Rolling Circle Amplification: Towards Novel Scaffolds for Three-Dimensional Periodic Nanoassemblies. Angewandte Chemie International Edition, 45(15), 2409–2413. <a href="https://doi.org/10.1002/anie.200600061" class="link-ref">https://doi.org/10.1002/anie.200600061</a><br>
[2]. Kuhn, H. (2002, January 15). Rolling-circle amplification under topological constraints. Nucleic Acids Research, 30(2), 574–580. <a href="https://doi.org/10.1093/nar/30.2.574" class="link-ref">https://doi.org/10.1093/nar/30.2.574</a> <br>
[3]. Billen, L. P., & Li, Y. (2004, December). Synthesis and characterization of topologically linked single-stranded DNA rings. Bioorganic Chemistry, 32(6), 582–598. <a href="https://doi.org/10.1016/j.bioorg.2004.06.010" class="link-ref">https://doi.org/10.1016/j.bioorg.2004.06.010</a> <br>
[4]. Zhao, W., Cui, C. H., Bose, S., Guo, D., Shen, C., Wong, W. P., Halvorsen, K., Farokhzad, O. C., Teo, G. S. L., Phillips, J. A., Dorfman, D. M., Karnik, R., & Karp, J. M. (2012b, November 12). Bioinspired multivalent DNA network for capture and release of cells. Proceedings of the National Academy of Sciences, 109(48), 19626–19631. <a href="https://doi.org/10.1073/pnas.1211234109" class="link-ref">https://doi.org/10.1073/pnas.1211234109</a><br></p>
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
      scrollToAncillary: function () {
        this.$router.push({path: "results"});
          setTimeout(() =>{
            this.$scrollTo("#ancillary", 350, this.options);
          }, 1000)
      },
      scrollToBsj: function () {
        this.$router.push({path: "results"});
          setTimeout(() =>{
            this.$scrollTo("#bsj2", 350, this.options);
          }, 1000)
      },
      scrollToBsj1: function () {
        this.$router.push({path: "results"});
          setTimeout(() =>{
            this.$scrollTo("#bsj1", 350, this.options);
          }, 1000)
      }
    }
}
</script>