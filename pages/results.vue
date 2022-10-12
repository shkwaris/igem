<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
      <section class="intro">
        <p>We deliver our results according to our experimental design. First, we synthesized the Linear DNA Nanostructure. Long DNA strands were synthesized in two steps: first, a DNA template circularization and then the template's Amplification with a polymerase that possesses great strand displacement activity. Then, hairpin probes H1 and H2 were installed on the linear scaffold. After our Nanostructure was assembled we optimized and validated our method’s efficacy on detecting circular RNAs. Finally, we evaluated our biomarker selection. Additional experiments are presented at the end of the section. On this page, we present only our final results. Please visit our <a href="engineering" class="link-ref">Engineering Success</a> page for more info on the process by which we reached these results.</p>
      </section>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="synthesis">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>              
              <ol>
                <li><a :href="`${currentPage}/#synthesis`" v-scroll-to="'#synthesis'">Nanostructure Synthesis</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#ligaition`" v-scroll-to="'#ligaition'" parent="synthesis">Ligation Reaction</a></li>
                  <li class="sub"><a :href="`${currentPage}/#rca`" v-scroll-to="'#rca'" parent="synthesis">RCA Reaction</a></li>
                  <li class="sub"><a :href="`${currentPage}/#assembly`" v-scroll-to="'#assembly'" parent="synthesis">LDN Assembly</a></li>
                </ul>
                <li><a :href="`${currentPage}/#validation`" v-scroll-to="'#validation'">Method validation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#bsj1`" v-scroll-to="'#bsj1'" parent="validation">BSJ hsa_circ_0102533</a></li>
                  <li class="sub"><a :href="`${currentPage}/#bsj2`" v-scroll-to="'#bsj2'" parent="validation">BSJ hsa_circ_0005962</a></li>
                  <li class="sub"><a :href="`${currentPage}/#full`" v-scroll-to="'#full'" parent="validation">Full sequence hsa_circ_0102533</a></li>
                  <li class="sub"><a :href="`${currentPage}/#linear`" v-scroll-to="'#linear'" parent="validation">Linear isoform of hsa_circ_0102533</a></li>
                </ul>
                <li><a :href="`${currentPage}/#evaluation`" v-scroll-to="'#evaluation'">Biomarker evaluation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#extraction`" v-scroll-to="'#extraction'" parent="evaluation">Total RNA extraction</a></li>
                  <li class="sub"><a :href="`${currentPage}/#pcr`" v-scroll-to="'#pcr'" parent="evaluation">PCR results</a></li>
                  <li class="sub"><a :href="`${currentPage}/#detection`" v-scroll-to="'#detection'" parent="evaluation">Cell line circRNA detection</a></li>
                </ul>
                <li><a :href="`${currentPage}/#ancillary`" v-scroll-to="'#ancillary'">Ancillary experiments</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="synthesis">
            <h2 class="main-title">Nanostructure Synthesis</h2>
            <section id="ligaition">
              <h3 class="small-title">Ligation Reaction</h3>
              <p>The preparation of the circular DNA template was verified by Implen NanoPhotometer® P330 technology. The concentration of individual synthetic oligos can be measured using each oligonucleotide's nucleotide sequence. After Exonuclease I & III treatment and purification of the ligation product by the PCR purification kit, the circular DNA concentration was found to be 0.50±0.03 pmol/μL (A260/280 = 2.10±0.48). </p>
              <p>We calculated the reaction yield equal to 40±2.4%. The initial quantity of linear DNA template (reactant) added to the reaction mixture was 25 pmol. The final quantity of circular DNA recovered was 10 pmol (Final Volume of 20 μL).</p>
            </section>
            <section id="rca">
              <h3 class="small-title">RCA Reaction</h3>
              <p>Agarose gel electrophoresis experiments verified the RCA product. As shown in Fig.1, the long DNA scaffold remains at the top of the electrophoresis gel due to its low electrophoretic ability caused by its high molecular weight.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-1.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.1:</span> Agarose gel electrophoresis analysis of successfully synthesized RCA product</figcaption>
              </figure>
              <br>
              <p>Moreover, we measured the concentration of the long DNA scaffold using Implen NanoPhotometer® P330. Through optimizations, we retrieved a low yield at the beginning, followed by high yield of RCA products at the end of optimization experiments (see Engineering Success page). We started by cleaning two reaction products (100 μL each) in one clean-up column of our PCR clean-up kit. But in order to retrieve a higher concentration of linear DNA, we changed the number of reaction products purified in one column from two to three.</p>
              <p>We recovered 28.6±5.6 ng/μL of the product from the 2-reactions-1-column products. From the 3-reactions-1-column products, we recovered 67.0±8.43 ng/μL of the product. Finally, we retrieved 211.5±22.2 ng/μL of the product from the high-yield reactions. High-concentration RCA products from three reactions were purified in a single column. The different yields of the product obtained are displayed in <span>Fig.2</span>.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 50%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-2.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-2.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.2:</span> Concentrations of RCA products</figcaption>
              </figure>
            </section>
            <section id="assembly">
              <h3 class="small-title">LDN Assembly</h3>
              <p>We also attempted visualization of the synthesized Nanostructures for all three circRNA targets by implementing Atomic Force Microscopy (AFM). A fellow laboratory with greater experience in the field was eager enough to help. After air-drying the Nanostructures for 12-16 hours, we sent them for AFM. Unfortunately, we had no satisfying results due to the high salt concentration in the reaction buffer. The only hint we obtained from the AFM analysis is that a circular structure was present in our samples, indicating possible coiling of the LDN. However, this result should be further evaluated by repeating experiments regarding AFM with a diluted reaction buffer, minimizing salt concentration without lowering the salt concentration too much, hindering DNA-DNA interactions in the LDN. </p>
              <div class="gallery d-flex justify-content-center">
                <figure class="gallery">
                  <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/ldn-2.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/ldn-2.png"></a>
                </figure>
                <figure class="gallery">
                  <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/ldn-1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/ldn-1.png"></a>
                </figure>
              </div>
              <figcaption class="figure-caption text-left"><span>Fig.3:</span> Atomic Force Microscopy (AFM) Images of air-dried LDN drops</figcaption>
            </section>
          </section>
          <section id="validation">
            <h2 class="main-title">Method validation</h2>
            <p>As previously mentioned, we have organized our <a class="link-ref" target="_blank" href="experiments">Experiments</a> to retrieve data and estimate the method's specificity, linearity, accuracy, precision, and sensitivity. Thus, we designed our experiments accordingly. </p>
            <section id="bsj1">
              <h3 class="small-title">Calibration curve: BSJ hsa_circ_0102533</h3>
              <p>First, we tested whether the LDN could effectively detect the synthetic BSJ in a single reaction. Therefore, after we constructed an LDN for hsa_circ_0102533 target, we prepared a reaction pool that contained: LDN and 1×PBS buffer pH 7.4 (5:13 volume ratio). Then, we added 18 μL of the reaction pool and the target BSJ, in a range of 100nM to 0.5nM, in each reaction tube. In addition, we prepared the corresponding negative controls containing water (RNase-free) instead of the target. After incubation at 37 <sup>o</sup>C for 70 min, we loaded the samples on a microplate and measured the fluorescence emitted with an excitation wavelength of 554 nm. The emission spectra (576-630 nm) is depicted in <span>Fig.4.</span></p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-3.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-3.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.4 Fluorescence emission spectra of LDN reaction mixture after incubation with different BSJ target concentrations (100 nM, 50 nM, 10 nM, 5 nM, 1 nM, and 0.5 nM) and absence of the target:</span> Samples were loaded on Thermo Scientific™ Nunc 384-Well Clear Plates. Excitation 554 nm, Emission 576-630 nm.</figcaption>
              </figure>
              <br>
              <p>We observe that the negative sample displays lower fluorescence intensity in comparison to the positive ones. The system reached almost a 2-fold signal-to-background ratio in only 70 minutes. We created a calibration curve by plotting the fluorescence intensity emitted at 576 nm versus the target concentration <span>(Fig.4)</span>.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-4.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-4.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.5 Calibration curve of the LDN system in 0.5-100 nM BSJ target concentration range:</span>  Error bars correspond to standard deviation of n=2 replicates. The horizontal axis is displayed on a logarithmic scale.</figcaption>
              </figure>
              <br>
              <p>We also notice a linear relationship between the fluorescence intensity and the logarithm of the target concentration. The equation and R-square value of the curve are displayed on the chart. After we estimated the intercept's standard error and standard deviation, we calculated the Lower Limit of Detection (LOD) and the Lower Limit of Quantification equal to 2.11 nM and 9.6 nM respectively. LOD was calculated according to the formula LOD = 10<sup>[3.3 (SE/S)]</sup>, where SE is the intercept’s standard error and, S is the slope corresponding to the fluorescence intensity versus log[concentration] curve. LOQ was calculated according to the formula <span>LOQ = 10<sup>[10 (SE/S)]</sup></span>.</p>
            </section>
            <section id="bsj2">
              <h3 class="small-title">Calibration curve: BSJ hsa_circ_0005962</h3>
              <p>We performed the same experiment, as above, for hsa_circ_0005962 target. We measured the fluorescence emitted from reaction systems with various BSJ target concentrations (100 nM, 10 nM, 5 nM, 2.5 nM, 1 nM, 0.1 nM). Samples were loaded on Thermo Scientific™ Nunc 384-Well Black Plates and measured with an excitation wavelength of 615 nm, while the emission was measured at 634 nm. We noticed a 2-fold signal-to-background ratio in only 70 min when the most concentrated positive sample reached a fluorescence emission of 42.2±2.2 (a.u), while the negative sample had a lower value of 17.7±0.2 (a.u.). The calibration curve constructed is presented in <span>Fig.5</span>.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-5.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-5.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.6 Calibration curve of the LDN system in 0.5-100 nM BSJ target concentration range:</span> Error bars correspond to standard deviation of n=2 replicates. The horizontal axis is displayed on a logarithmic scale.</figcaption>
              </figure>
              <br>
              <p>A best-fit curved logarithmic trendline was calculated based on the method of least squares. The equation and R-square value of the curve are displayed on the chart. We calculated the Lower Limit of Detection (LOD) and the Lower Limit of Quantification (LOQ) equal to 2.15 nM and 10.23 nM, respectively, from the intercept's standard error and standard deviation.</p>
            </section>
            <section id="full">
              <h3 class="small-title">Calibration curve: Full sequence hsa_circ_0102533</h3>
              <p>Our next goal was to verify the LDN’s ability to detect the BSJ site when the whole circRNA is present. Therefore, we performed the same experiment using synthetic circular DNA, carrying the sequence of hsa_circ_0102533 target in various concentrations. Also, the corresponding negative controls were prepared and analyzed. The emitted fluorescence intensity acquired from excitation wavelength at 554 nm are shown in <span>Fig.6</span>.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-6.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-6.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.7 Fluorescence emission spectra of LDN reaction mixture after incubation with different circular DNA target concentrations (100 nM, 50 nM, 10 nM, 5 nM, 1 nM, and 0.5 nM) and absence of the target:</span> Samples were loaded on Thermo Scientific™ Nunc 384-Well Clear Plates. Excitation 554 nm, Emission 576-630 nm.</figcaption>
              </figure> <br>
              <br>
              <p>Unfortunately, we observed only a 1.5-fold signal-to-background ratio. Negative controls gave an average fluorescence intensity of 107.1±1.2. The positive control for the maximum concentration of BSJ target (100 nM) showed a fluorescence intensity of 184.6±4.0, while the highest concentration of circular DNA (100 nM) gave a fluorescence intensity of only 138.8±1.9. However, this can be explained if we consider that the larger the target, the lower the free diffusion rate of the target to the probes, thus reducing the reaction efficiency. We constructed a calibration curve by plotting the fluorescence intensity, at 576 nm, versus the logarithm of the target's concentration <span>(Fig.7)</span>.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/102-h1-the-h2-bsj-in-center-error-bars.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/102-h1-the-h2-bsj-in-center-error-bars.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.8 Calibration curve of the LDN system in 0.5-100 nM circular DNA concentration range:</span> Error bars correspond to standard deviation of n=3 replicates. The horizontal axis is displayed on a logarithmic scale. </figcaption>
              </figure> <br>
              <p>The logarithmic equation upon which the fluorescence intensity increases with the target concentration is shown on Fig.8. Unfortunately, the signal-to-background ratio is not high enough to calculate significant limits of detection and quantification.</p>
            </section>
            <section id="linear">
              <h3 class="small-title">Selectivity: Linear isoform of hsa_circ_0102533</h3>
              <p>This assay aimed to test the Nanostructure's ability to distinguish between circular and linear targets. For this study, we prepared positive samples containing the circular DNA in known concentrations and our Nanostructure, negative samples containing linear DNA (prior to the ligation reaction) and blanks containing water (RNase-free) instead of the target. We  measured their fluorescence after incubation at 37 <sup>o</sup>C, and excitation at 554 nm. Emission spectra at 576-630 nm are presented in <span>Fig.9.</span></p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/5962-linear.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/5962-linear.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.9 Fluorescence emission spectra of LDN reaction mixture containing circular DNA, linear DNA, or water (RNase-free):</span> Samples were loaded on Thermo Scientific™ Nunc 384-Well Clear Plates. Excitation 554 nm, Emission 576-630 nm.</figcaption>
              </figure><br>
              <p>We observe an increase in the fluorescence only in the presence of circular DNA, concluding that our Nanostructure is selective for the circular isoform of our target. Of course, we need more results to make safe conclusions. </p>
            </section>
          </section>
          <section id="evaluation">
            <h2 class="main-title">Biomarker evaluation</h2>
            <section id="extraction">
              <h3 class="small-title">Total RNA extraction</h3>
              <p>RNA extraction was performed in lung cancer cell lines A549, NCI-H1299, DMS454, NCI-H460, and NCI-H1237 and from normal epithelial cell line BEAS-2B, using the TRIzoL reagent kit. After RNA extraction, the extract was immediately evaluated for its content before proceeding. RNA concentration was measured using Implen NanoPhotometer® P330 with the dedicated RNA setting. In <span>Fig.10</span>, the total RNA concentration derived from cell lines is depicted, and in <span>Fig.11</span>, we present the circRNA concentration after RNase R treatment.</p>
              <div class="gallery d-flex justify-content-center">
                <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                  <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-9.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-9.jpg"></a>
                  <figcaption class="figure-caption text-left"><span>Fig.10:</span> Table presenting total RNA concentration after RNA extraction.</figcaption>
                </figure>
                <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto;">
                  <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-10.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-10.jpg"></a>
                  <figcaption class="figure-caption text-left"><span>Fig.11:</span> Table presenting circRNA concentration after RNase R treatment.</figcaption>
                </figure>
              </div><br>
              <p>Validation of circRNA presence in our sample is a crucial step before proceeding to analysis with PCR.</p>
            </section>
            <section id="pcr">
              <h3 class="small-title">PCR results</h3>
              <p>By performing the following experiments, we aimed to evaluate the biomarkers we had initially selected. A calibration curve was constructed for hsa_circ_0005962 target, with serial dilutions of a stock solution, so that the input copies range from 10<sup>2</sup> to 10<sup>6</sup>. We focused only on hsa_circ_0005962 target for constructing a calibration curve, since it was the only one consistently found overexpressed in cancer cell lines. CircRNA from two different RNA extraction steps was used for RT-PCR. Hsa_circ_0005962, obtained from the first RNA extract from cell lines A549 and NCI-H1299, was found only in A549 cell line extract. Hsa_circ_0070354 and hsa_circ_0005962 targets obtained from the second RNA extract originating from cell lines A549, NCI-H1299, DMS454, NCI-H460, and NCI-H1237, were found to be overexpressed, taking into consideration the correlation of RFU and concentration. When the above results were compared to BEAS-2B, a normal epithelial cell line, we observed that circRNA concentration was higher in the lung cancer cell lines. BEAS-2B had a concentration of hsa_circ_0005962 target and hsa_circ_0070354 target almost halved, respectively, proving that the selected biomarkers can be successfully exploited for lung cancer diagnosis. In <span>Fig.12</span> the quantification amplification results are presented for all cell lines. We note that in the DMS 457 plot, amplification to hsa_circ_0102533 Negative control is present indicating sample contamination.</p>
              <div class="gallery d-flex justify-content-center">
                <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto; margin-right: 10px; margin-left: 10px;">
                  <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/a549-all-3.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/a549-all-3.png"></a>
                </figure>
                <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto; margin-right: 10px; margin-left: 10px;">
                  <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/h1299-all-3.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/h1299-all-3.png"></a>
                </figure>
                <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto; margin-right: 10px; margin-left: 10px;">
                  <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/h460-all-3.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/h460-all-3.png"></a>
                </figure>
              </div>
              <div class="gallery d-flex justify-content-center" style="margin-top: 10px">
                <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto; margin-right: 10px; margin-left: 10px;">
                  <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/h2347-all-3.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/h2347-all-3.png"></a>
                </figure>
                <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto; margin-right: 10px; margin-left: 10px;">
                  <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/dms457-all-3.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/dms457-all-3.png"></a>
                </figure>
                <figure class="gallery rounded mx-auto d-block" style="width: 100%; height: auto; margin-right: 10px; margin-left: 10px;">
                  <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/beas-2b-all-3.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/pcr/beas-2b-all-3.png"></a>
                </figure>
              </div><br>
              <figcaption class="figure-caption text-left"><span>Fig.12 Quantification PCR plots for cell lines:</span> a) A549, b) H1299, c) H460, d) H2347, e) DMS 457, f) BEAS-2B. </figcaption>
            </section>
            <section id="detection">
              <h2 class="main-title">Cell line circRNA detection</h2>
              <p>Total RNA extract from BEAS-2B, A549 and NCI-H1299 was used for circRNA detection with the developed LDN system. Ηsa_circ_0005962 and hsa_circ_0102533 were successfully detected in a pool of different RNA molecules ensuring that our technique provides the selectivity to detect the target of interest.</p>
              <p>For hsa_0005962 target, results are presented in <span>Fig.13</span> as a bar chart. A volume of 12 μL of total RNA isolated from A549 and NCI-H1299 were incubated for 70 min at 37 <sup>o</sup>C in a mixture containing LDN, hsa_circ_0005962, and PBS buffer. In addition, positive and negative samples containing 12 μL BSJ 100 nM  and H2O (RNase-free), respectively, were prepared. Samples were loaded on Thermo Scientific™ Nunc 384-Well Black Plates and excited at a wavelength of 615 nm, while the emission was measured at 634 nm.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-13.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-13.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.13 Bar chart of fluorescence intensity (a.u.) of samples containing total RNA from A549 and H1299:</span> Negative and positive samples were also plotted for reference. Error bars correspond to standard deviation of n=2 replicates.</figcaption>
              </figure><br>
              <p>For hsa_0102533 target, results are presented in <span>Fig.14</span> as a bar chart. A mixture containing LDN for hsa_circ_0102533, PBS buffer, and 12 μL of total RNA isolated from A549, NCI-H1299, and BEAS-2B were incubated for 70 min at 37 <sup>o</sup>C. Negative samples containing H2O (RNase-free) instead of RNA were prepared for reference. Samples were loaded on Thermo Scientific™ Nunc 384-Well Clear Plates where the emitted fluorescence at 576 nm was measured using an excitation wavelength of 554 nm.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-13.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/fig-13.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.14 Bar chart of fluorescence intensity (a.u.) of samples containing total RNA from A549, H1299, BEAS-2B</span> Negative samples were plotted for reference. Error bars correspond to standard deviation of n=2 replicates.</figcaption>
              </figure>
            </section>
          </section>
          <section id="ancillary">
            <h2 class="main-title">Ancillary experiments</h2>
            <section>
              <h3 class="small-title">H1 and H2 interaction experiments</h3>
              <p>We performed the following experiment to test the H1 and H2 ability to hybridize to each other in the absence of the target. First, we tested LDN for hsa_circ_0102533. For this study we prepared the following samples:</p>
              <ul class="bullets">
                <li>We diluted the H2 hairpin probe at a final concentration equal to the concentration of H2 in the detection reaction.</li>
                <li>We mixed H1 & H2 hairpin probes at a final concentration equal to their concentration in the detection reaction.</li>
                <li>We prepared a negative LDN sample using water (nuclease-free) instead of the target.</li>
              </ul><br>
              <p>We loaded the samples on Thermo Scientific™ Nunc 384-Well Clear Plates immediately after they were prepared. The emission spectra, that is presented in <span>Fig.15</span>, was obtained using an excitation wavelength of 554 nm.</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/102-h1-h2-clear-plate.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/102-h1-h2-clear-plate.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.15 Fluorescence emission spectra for the testing of H1 and H2 hybridization for hsa_circ_102533:</span> Samples were loaded on Thermo Scientific™ Nunc 384-Well Clear Plates. Excitation 554 nm, Emission 576-630 nm.</figcaption>
              </figure><br>
              <p>We can come to the following conclusions:</p>
              <ul class="bullets">
                <li>H2 emits a small amount of fluorescence.</li>
                <li>H1 and H2 hybridize to each other in a mixture even though the target is absent.</li>
                <li>H1 and H2 hybridize at a greater level when assembled on the linear scaffold in the absence of the target. This is probably due to the small distance between them when assembled on the Nanostructure.</li>
                <li>The fluorescence signal emitted  in the presence of the target is still stronger than the above mixtures in the absence of the target. By minimizing the fluorescence emitted in the absence of the target, we could improve the sensitivity of our method. We tried to resolve this issue, as you can see on our <a class="link-ref" href="engineering">Engineering</a> page. Of course, further optimization studies have been  added to the list of our future steps!</li>
              </ul><br>
              <p>Then, we repeated everything for the hsa_circ_0005962 target. Samples were loaded on Thermo Scientific™ Nunc 384-Well Black Plates and excited at a wavelength of 614 nm. We received the emission spectra that are presented in Fig.16 (634-700 nm).</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/5962-h1-h2-black-plates.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/5962-h1-h2-black-plates.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.16 Fluorescence emission spectra for the testing of H1 and H2 hybridization for hsa_circ_0005962:</span> Samples were loaded on Thermo Scientific™ Nunc 384-Well Black Plates. Excitation 614 nm, Emission 534-700 nm.</figcaption>
              </figure><br>
              <p>We remark on the following:</p>
              <ul class="bullets">
                <li>H2 emits a fair amount of fluorescence.</li>
                <li>The presence of H1 in the mixture does not significantly affect the fluorescence emission.</li>
              </ul><br>
              <p>Finally, we proceeded with the following experiment to verify the LDN function further. We constructed the following LDN variations:</p>
              <ul class="bullets">
                <li>An LDN that consists only of the RCA product and H1 probe,</li>
                <li>An LDN that consists only of the RCA product and H2 probe, and</li>
                <li>Our regular Linear Nanostructure.</li>
              </ul>
              <br>
              <p>The LDN variations were constructed for the hsa_circ_0102533 target.</p>
              <p>For each mentioned LDN, we prepared positive and negative samples using the synthetic BSJ site of hsa_circ_0102533 as a target and water was used for the negatives. We incubated all samples at 37 <sup>o</sup>C for 100 min. Then, we loaded the samples on Thermo Scientific™ Nunc 384-Well Black Plates and excited at a wavelength of 554 nm. We received the emission spectra that are presented in <span>Fig.17</span> (576-630 nm).</p>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/results/rca-h-bsj.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/results/rca-h-bsj.png"></a>
                <figcaption class="figure-caption text-left"><span>Fig.17 Fluorescence emission spectra for LDN function verification:</span> Samples were loaded on Thermo Scientific™ Nunc 384-Well Black Plates. Excitation 554 nm, Emission 576-630nm.</figcaption>
              </figure>
              <p><span>Note:</span> Unfortunately, this measurement was conducted on black plates. At that time, we used only black plates for the fluorescence measurements. Then we repeated all fluorescence measurements in white plates to retrieve our final results. Sadly, this experiment was not repeated. So, the results might not be comparable, but they are relative to our study.</p>
              <p>The conclusions we made are the following:</p>
              <ul class="bullets">
                <li>Both H1 and H2 are necessary for the detection of the target.</li>
                <li>Again, H1 and H2 hybridize to each other when assembled on the linear scaffold.</li>
                <li>The difference between the fluorescence signal emitted in the presence of the target and that of the other samples is apparent.</li>
              </ul>
            </section>
            <section>
              <h3 class="small-title">LDN's stability</h3>
              <p>LDN for all three targets (hsa_circ_0102533, hsa_circ_0070354, hsa_circ_0005962) were stored at -20 <sup>o</sup>C and -80 <sup>o</sup>C overnight, after assembly at 37 <sup>o</sup>C for 100 min. The next day they were let to thaw at room temperature. After they reached room temperature, we prepared the calibration samples as described in the validation section, using the BSJ site of each circRNAas a target. Unfortunately, we observed no difference between the different concentrations of the target and the negative control. The lack of a positive signal suggests that our Nanostructure changes conformation after freeze-thaw procedures.</p>
            </section>
            <section>
              <h3 class="small-title">Time-response kinetics analysis</h3>
              <p>The aim of this assay was to calculate the optimal reaction time. We prepared seven positive and seven negative samples containing the BSJ fragment and LDN for hsa_circ_0102533. We incubated the samples at 37 <sup>o</sup>C. We halted each reaction at 0, 20 min, 40 min, 60 min, 80 min, 100 min and 120 min. We observed that fluorescence reaches peak intensity at 60-80 min.  </p>
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
            currentPage: "Results",
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