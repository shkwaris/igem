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
              <p>The rate k<sub>f1</sub> denotes the hybridization rate of c to its complement. The base composition of the c domain can cause the value of k<sub>f1</sub> to vary significantly. </p>
              <p>The rate k<sub>b1</sub> denotes the rate at which the branch migration junction crosses the middle of the b domain. As the incumbent, b*, and invader, BSJ, exchange base pairs with the substrate, b, the branch point of the three-stranded complex moves back and forth. Eventually, the b* domain dissociates, completing strand displacement. Overall, displacement is thermodynamically driven forward by the net gain in base pairs due to the toehold. The length of the b domain determines the value of k<sub>b1</sub>. Finally, k<sub>r1</sub> denotes the rate at which toehold c dissociates. The binding of c to its complement is reversible because the toehold may ‘fray’ and eventually dissociate.</p>
              <p>k<sub>r1</sub> = k<sub>f1</sub> * (2/b) * e<sup>ΔG<sub>o</sub>(c)/RT</sup></p>
              <p>where ΔG<sub>o</sub>(c) &lt; 0 is the binding energy between c and its complement, and b the length of b domain <a v-scroll-to="'#references'" class="link-ref">[1]</a>.</p>
            </section>
            <section>
              <h3 class="small-title">2<sup>nd</sup> toehold-mediated strand displacement reaction</h3>
              <div class="row">
                  <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                    <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step2.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig1-step2.png"/></a>
                    <figcaption class="figure-caption text-left"><span>Fig.3:</span> Domain order of H2 hairpin probe</figcaption>
                  </figure>
                  <figure class="col-xs-12 col-xl-6 align-self-xl-center">
                    <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig2-step2.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig2-step2.png"/></a>
                    <figcaption class="figure-caption text-left"><span>Fig.4:</span> Reaction breakdown of H1 and H2 hybridization </figcaption>
                  </figure>
              </div><br>
              <p>As depicted in <span>Fig.3</span>, H2 also consists of five domains a*, b, a, b*, and r. Initially, H2 forms a stem-loop conformation by hybridizing the two complementary domains, b and b*. The formed loop consists of domain l. Like H1, the H2 hairpin possesses two overhang regions: a toehold domain, a* domain, and an RCA binding domain, s domain. In addition, H2 brings a fluorophore and a quencher. We represent them in Fig3 as a green and a black dot, respectively.</p>
              <p>The second toehold reaction is illustrated in <span>Fig.4</span>. Toehold domain a* binds to H1’s complementary domain a. After the toehold invasion, branch migration displacement occurs. The H1 b domain displaces the stem b domain. H2 now exists in an open conformation, which results in the fluorophore diverging from the quencher and emitting fluorescence when excited at the right wavelength. </p>
              <p>As in step 1, the rate k<sub>f2</sub> represents the hybridization rate of toehold domain a* to its complement. In addition, the rate k<sub>b2</sub> denotes the rate at which the branch migration junction crosses the middle of the b domain. Finally, kr2 denotes the rate at which toehold a* frays and dissociates. </p>
              <p>k<sub>r2</sub> = k<sub>k<sub>f1</sub>2</sub> * (2/b) * e<sup>ΔG<sub>o</sub>(a)/RT</sup></p>
              <p>where ΔGo(a) &lt; 0 is the binding energy between a and its complement, and b the length of b domain.</p>
            </section>
            <section>
              <h3 class="small-title">KinDA: Kinetic DNA strand displacement analyzer</h3>
              <p>KinDA <a v-scroll-to="'#references'" class="link-ref">[2]</a> is a python package that can predict system <a @click="changeWord('Thermodynamics-kinetics')" class="link-primary">kinetic and thermodynamic behavior</a> at the sequence level. With KinDA, we can determine if the system as a whole behaves as designed. We tested KinDA through the available Amazon Web Services (AWS) Amazon Machine Image (AMI).</p>
              <p>First, the user creates a PIL file that specifies the domains, as described above, stands, and complexes of the DNA strand-displacement system. An example of the user input is the following</p>
              <p># Specify all strands:
              <br>strand h1 = c b a b* r : 76
              <br>strand bsj = b* c* : 30
              <br>strand rca = r* s : 51
                            <br>
              <br># Specify all predicted complexes:
              <br>structure 1 = h1 + rca : .(.)(+).
              <br>structure B = bsj : ..
              <br>structure 2 = bsj + h1 + rca : .(+)(.)(+).
              <br>structure 3 = bsj + h1 + rca : ((+))..(+).
              </p>
              <p>Then, KinDA uses Peppercorn, a reaction enumerator to create the Chain Reaction Network (CRN) at a domain-level. Next, the simulation proceeds with kinetics and thermodynamics analyses at a sequence-level using Multistrand and NUPACK, respectively. Of course, sequence-level interactions may not have direct counterparts in the domain-level system. Hence, KinDA calculates the conformation probability, that is the p-approximation for the sequence-level secondary structure to behave as the domain-level structure, from the fraction of nucleotides that are bound or unbound when both structures share the same ordered strands. </p>
              <p>KinDA uses the “first-step reaction model” and separates the reactions into two steps and calculates one constant for each reaction: the initial binding step, with a rate of initiating the reaction, k1, and the folding trajectory that follows, with the rate of how long it takes to complete, k2. Errors for k1 and k2 are determined based on the system parameters. Also, KinDA determines spurious reactions that do not correspond to the predicted behavior and unproductive reactions when reactants and products coincide. </p>
            </section>
            <section>
              <h3 class="small-title">The Simulation</h3>
              <p>We simulated our two steps as separate reactions. We chose this design because the system categorizes two complexes with the same strand order but different dot-and-bracket notation as a single reactant multiset and calculates the total k1 and k2. So, we decided to run a simulation for each step and retrieve the individual rate constant. Also, with two simulations, we could decrease the system's complexity to take only a few hours on a t2.micro instance.</p>
              <p>We calculated the following rates for the 1st toehold-mediated strand displacement reaction:</p>
              <p>k1i: (3.41 ± 0.887) 10<sup>7</sup>
              <br>k2i: (2.18 ± 0.576) 10<sup>7</sup></p>
              <p>In this model:	k1i = k<sub>f1</sub> [k<sub>b1</sub> / (k<sub>b1</sub>+k<sub>r1</sub>)] [III],	k2i = k<sub>b1</sub> [IV]</p>
              <p>From [I] we calculated that k<sub>f1</sub> >>> k<sub>r1</sub>, using the value of ΔGo(c) = -10.88 kcal/mol, as calculated by ViennaRNA. So, we can assume that the toehold domain is long enough so that the dissociation step proceeds slowly relative to the toehold invasion step. Hence, the toehold invasion step determines the rate of the whole reaction.</p>
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
            <section>
              <h3 class="small-title">Databases for circular RNAs</h3>
              <p>After finding the 11 targets, we deemed it necessary to narrow our panel to only three circRNAs further to be detected at the laboratory level so that the experiments could meet the time frame of the competition. Initially, we compared each biomarker's sensitivity and specificity values ​​and their detection in the early stages of the disease.</p>
              <p>However, literature data were insufficient to make the optimal choice, so more information about the target molecules was searched in databases. The bases concern exclusively circRNAs and those used are the following: <a href="http://www.circbase.org/" class="link-ref">circBase</a>, <a href="http://www.circbank.cn/" class="link-ref">circBank</a>, <a href="http://159.226.67.237:8080/new/index.php" class="link-ref">circAtlas</a>, <a href="http://reprod.njmu.edu.cn/cgi-bin/circrnadb/circRNADb.php" class="link-ref">circRNADb</a> <a v-scroll-to="'#references'" class="link-ref">[3]</a>, <a v-scroll-to="'#references'" class="link-ref">[4]</a>, <a v-scroll-to="'#references'" class="link-ref">[5]</a>, <a v-scroll-to="'#references'" class="link-ref">[6]</a>. The information collected concerns the number of nucleotides of the circRNAs, the target gene, their sequence, and their expression in cell lines. As we had decided to start by testing the diagnostic ability of LDN on circRNAs isolated from lung cancer cell lines, the expression profile of these circRNAs in cell lines was examined using information collected from the databases <a v-scroll-to="'#references'" class="link-ref">[7]</a>, <a v-scroll-to="'#references'" class="link-ref">[8]</a>, <a v-scroll-to="'#references'" class="link-ref">[9]</a>.</p>
              <p>Also, we embedded the use of Cancer-specific circRNAs database <a class="link-ref" href="http://gb.whu.edu.cn/CSCD/#">CSCD</a> <a v-scroll-to="'#references'" class="link-ref">[10]</a>, a database that collects available RNA sequencing datasets from 87 cancer cell line samples. Using the genomic coordinates from circBank, we output information, including expression in normal and lung cancer cell lines, ratios (circRNA/linear gene), cellular location, prediction algorithm, and abundance. Since we had A549 and H1299 cell lines available in the laboratory, RNAs aberrantly expressed in them were preferred. We compared these data with the expression in normal cell lines or lines of other cancer types. Targets that were unique to non-small cell cancer were preferred. We discarded circRNAs that could not complete crossover between the different sources.</p>
              <p>The three final targets were <span>hsa_circ_0070354</span>, <span>hsa_circ_0102533</span> and <span>hsa_circ_0005962</span>.</p>
            </section>
            <section>
              <h3 class="small-title">GEO datasets</h3>
              <p>We performed a search using the Gene Expression Omnibus (GEO) <a v-scroll-to="'#references'" class="link-ref">[11]</a> dataset using "lung cancer" OR "lung tumor" AND "circRNA" and a second search using "lung cancer" AND ("plasma circRNA" or "blood circRNA" or "serum circRNA"). </p>
              <p>Unfortunately, we reached results (<a class="link-ref" href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE101586">GSE101586</a>, <a class="link-ref" href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE101684">GSE101684</a>, and <a class="link-ref" href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE112214">GSE112214</a>) with samples from adenocarcinoma tissues, not blood samples. In addition, these studies included 3-5 patients and 3-5 healthy participants, which is insufficient for conducting Bioinformatic analysis. This insufficiency of results only confirms that circRNA research is in its initial phase. With syn-PNOIA, we propose a tool for detecting circRNAs to bring these biomarkers into focus. </p>
            </section>
          </section>
          <section id="structural">
            <h2 class="main-title">Structural Analysis</h2>
            <section>
              <h3 class="small-title">Secondary structure prediction</h3>
              <p>After we selected our three circRNA biomarkers and derived their sequences in the previously mentioned databases, we proceeded with the H1 and H2 probes design. The process is schematically represented in <span>Fig.7</span></p>
              <p>The back-splice junction (BSJ) site is a specific point for each circRNA target, and it separates them from their linear isoforms, RNAs originating from the same gene. So, we considered it better to design our Nanostructure based on the ability to detect this sequence. Initially, we chose 15 bases upstream and 15 downstream of the BSJ site as the target sequence.</p>
              <p>Based on the BSJ sequence, we created the H1 probe to consist of the following domains:</p>
              <ul class="bullets">
                <li>A domain complementary to the BSJ sequence to "identify" the target circRNA among the various RNAs present in the sample (1)</li>
                <li>The loop domain (2)</li>
                <li>A domain complementary to 20 bases of sequence (1) to create a 20-base hairpin stem (3)</li>
                <li>A domain complementary to the RCA product (4)</li>
              </ul><br>
              <p>We created the H2 probe accordingly:</p>
              <ul class="bullets">
                <li>A domain complementary to the RCA product (5),</li>
                <li>A domain complementary to sequences (2) and (3) that is responsible for the hybridization of the two probes (6),</li>
                <li>A domain complementary to 20 bases of sequence (6) to create a 20-base hairpin stem (7)</li>
                <li>The loop domain (8)</li>
              </ul><br>
              <figure class="gallery rounded mx-auto d-block" style="width: 80%; height: auto;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/h1-and-h2-design.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/h1-and-h2-design.jpg"/></a>
                <figcaption class="figure-caption text-left"><span>Fig.7:</span> Creation of H1 and H2 probe domains based on the target circRNA sequence.</figcaption>
              </figure><br>
              <p>Taking the above into consideration, the first step of our Model design was to validate if the designed H1 and H2 probe sequences had the desired hairpin formation and how they interact with the linear DNA backbone when forming the LDN to determine whether the result is structurally acceptable. Using the NUPACK software suite <a v-scroll-to="'#references'" class="link-ref">[12]</a>, which uses SantaLucia's nearest neighbor model <a v-scroll-to="'#references'" class="link-ref">[13]</a>, we analyzed our structures at 37.0 <sup>o</sup>C and 1.05 M salt concentration (1.0M Na<sup>+</sup> and 0.05M Mg<sup>+2</sup>) to replicate our reaction conditions as close to reality as possible. </p>
              <p>We were satisfied that our system conformed to the desired structure while keeping theGibbs free energy (ΔG) energy levels low, proving a thermodynamically stable system. However, our original selection of 15 bases both upstream and downstream, respectively, do not invariably achieve the desired result. At this point, a question was presented to us. Was there a better H1 and H2 probes combination than the one we had chosen?</p>
              <p>As you can imagine, creating each structure by hand is a very tedious and time-consuming process. Therefore, we automated our design using a python script that creates and simulates all possible combinations of LDNs that can occur given the mature circRNA sequence. You can view our ldn_generator.py script by clicking the interactive button below. See more details on the design behind the ldn_generator.py script on the <a class="link-ref" href="software">Software</a> page. Finally, all nucleic acid secondary structures are represented in the <a @click="changeWord('Dot-parens-plus notation')" class="link-primary">dot-parens-plus notation</a>.</p>
              <div class="row">
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
              <a @click="thermoDetails()" class="primary-button thermo">View Thermodynamic details</a>
              <p>Unexpectedly, we observed no vast difference in ΔG between the various H1 and H2 probes and the LDN, proving our initial design was thermodynamically favored. Structural differences between the possible structures, self hybridization of the one dangling end to the other and the presence of secondary loops might hinder the LDN’s ability to function correctly at 37 <sup>o</sup>C.</p>
            </section>
            <section>
              <h3 class="small-title">CircRNA secondary structure</h3>
              <p>A necessary component to understanding our system and progressing our Modeling work is the illustration of how the circular RNAs appeared to be in space. Hence, we used the ViennaRNA Web services, particularly the RNAfold server, a gold standard in RNA 2D visualization <a v-scroll-to="'#references'" class="link-ref">[14]</a>, <a v-scroll-to="'#references'" class="link-ref">[15]</a>. By importing the mature circRNA sequence and selecting the "assume RNA molecule to be circular" option under the advanced options menu, we generated the secondary structure for the circRNA targets. </p>
              <p>In the output, two different predictions are depicted: the Minimum Free Energy structure (MFE) and the Centroid structure, which represent the equilibrium ensemble differently. For the next steps of our Model, we used the MFE structure, depicted in <span>Fig.8</span>.</p>
              <div class="gallery d-flex justify-content-center">
                <figure class="gallery">
                  <figcaption class="figure-caption text-left"><span>hsa_circ_0070354</span></figcaption>
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0070354.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0070354.jpg"/></a>
                </figure>
                <figure class="gallery">
                  <figcaption class="figure-caption text-left"><span>hsa_circ_0005962</span></figcaption>  
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0005962.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0005962.jpg"/></a>
                </figure>
                <figure class="gallery">
                  <figcaption class="figure-caption text-left"><span>hsa_circ_0102533</span></figcaption>
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0102533.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0102533.jpg"/></a>
                </figure>
              </div>                  
              <figcaption class="figure-caption text-left"><span>Fig.8 Secondary structures of all target circRNAs:</span> The colors in each nucleotide represent the pairing probability it possesses. Click the picture to see the Gibbs free energy each structure possesses.</figcaption>
            </section>
            <section>
              <h3 class="small-title">Tertiary structure prediction and Molecular Dynamics</h3>
              <p>Two methods were implemented, one to model the structure of the circular RNAs and one to model the LDN system's components. Following the secondary structure prediction and our understanding that circular RNAs are far from a circle, we aimed to model their tertiary structure in order to identify where the back splice junction domain is located. That proves to be a valuable point when designing our structure, because if the BSJ site is located in a place where steric hindrance occurs it would be difficult to be accessed by our Nanostructure. As a result the detection reaction would take longer than expected or even not accomplished at all. </p>
              <p>CircRNAs were modeled using 3DRNA/DNA web services <a v-scroll-to="'#references'" class="link-ref">[16]</a>, which functions as a comparative modeling method and an ab initio method combining user-defined data and already characterized nucleic acid segments to obtain the best possible tertiary structure. By importing the mature circRNA sequence and the corresponding secondary structure obtained in the previous step, the server follows a pipeline of assembling the smallest secondary elements (SSEs) containing stem (helix), hairpin loop, internal loop, bulge loop, pseudoknot loop, and junction loop, from already characterized RNA PDB files and optimizing the structure with Monte Carlo simulations. After the simulation, multiple models are depicted, all scored by a 3dRNA score acting as a method to evaluate distance and torsion angle functions of the structure, where a lower value corresponds to a better structure. Hsa_circ_0070354 scored 26.3831, hsa_circ_0102533 scored 26.5516 and hsa_circ_0005962 scored 26.7353, values low enough considering their complex structure.</p>
              <p>After comparing the output to the original secondary structure, we obtain the 3D structure of choice. We visualized the circRNA 3D structure using UCSF Chimera X <a v-scroll-to="'#references'" class="link-ref">[17]</a> and Visual Molecular Dynamics (VMD) <a v-scroll-to="'#references'" class="link-ref">[18]</a>, <a v-scroll-to="'#references'" class="link-ref">[19]</a>. These next-generation molecular visualization programs provide a command line and a Graphical User Interface. By the interactive side panel, the BSJ site is selected, and it is differentiated by blue color from the remaining structure. In <span>Fig.9</span>, all three circRNA targets are depicted providing an easy-to-access BSJ site.</p>
              <div class="gallery d-flex justify-content-center">
                <figure class="gallery">
                  <figcaption class="figure-caption text-left"><span>hsa_circ_0070354</span></figcaption>
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0070354.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0070354.png"/></a>
                </figure>
                <figure class="gallery">
                  <figcaption class="figure-caption text-left"><span>hsa_circ_0005962</span></figcaption>  
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0005962.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0005962.png"/></a>
                </figure>
                <figure class="gallery">
                  <figcaption class="figure-caption text-left"><span>hsa_circ_0102533</span></figcaption>
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0070354.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/hsa-circ-0070354.png"/></a>
                </figure>
              </div>                  
              <figcaption class="figure-caption text-left"><span>Fig.9:</span> Tertiary structures of all target circRNAs.</figcaption><br>
              <p>Since there is not an already characterized structure of the designed Nanostructure, it is necessary to follow a different modeling approach. As described carefully on the <a class="link-ref" href="description">Project Description page</a>, LDN acts as a polymer of specific repeats of H1 and H2 probe domains. In order to simplify our system and after various <a class="link-ref" href="">Human Practices discussions</a>, we decided that it is better to model one of the multiple repeating structures and to assume that the remaining Nanostructure acts in the same way. </p>
              <p>Our first step was to monitor the conformation of the H1 and H2 probes separately by modeling. We utilized a coarse-grained DNA model, called oxDNA. OxDNA is a simulation code designed to implement Monte Carlo and Molecular Dynamics to analyze DNA and RNA structures, supporting simulations on both CPU <a v-scroll-to="'#references'" class="link-ref">[20]</a> and Nvidia CUDA backends <a v-scroll-to="'#references'" class="link-ref">[21]</a>. The Model treats DNA as a string of rigid nucleotides, which interact through potentials that depend on the position and orientation of the nucleotides, leading to faster simulations than if an all-atomistic approach was followed. In addition, it treats each sugar-phosphate backbone and each nitrogenous base as a single entity, but with specific electrostatic properties. Hydrogen bonds occur between complementary bases when they are anti-aligned, forming double helical structures <a v-scroll-to="'#references'" class="link-ref">[22]</a>. Three different simulation techniques can be used with oxDNA <a v-scroll-to="'#references'" class="link-ref">[23]</a>:</p>
              <ul class="bullets">
                <li><span>Metropolis Monte Carlo (MC)</span> simulations sample a Boltzmann distribution to propose nucleotide configurational moves.</li>
                <li><span>Virtual Move Monte Carlo (VMMC)</span> simulations generate co-moving nucleotide clusters to assess pairwise interactions, circumventing MC simulation's drawbacks.</li>
                <li><span>Molecular Dynamics (MD)</span> simulations according to which molecule moves are predicted based on Newton's laws of motion. </li>
              </ul><br>
              <p>We used the VMMC model for our simulations as, in systems with less than 100 nucleotides, equilibration is reached faster with VMMC than with MD.</p>
              <p>We used oxDNA for three essential simulations:</p>
              <ul class="bullets">
                <li>Hybridization of RCA primer to the linear phosphorylated template</li>
                <li>Hairpin probe H1 and H2 formation</li>
                <li>Linear DNA Nanostructure construction</li>
              </ul><br>
              <p>Initially, organizing the expected simulation steps and results is very important. Therefore, initial input file preparation is crucial for Molecular Dynamics simulations. OxDNA uses two separate files to characterize a sequence, a topology (.top) file and a configuration (.conf) file. The .top file stores the intra-strand fixed topology in the order the nucleotides are depicted. The .conf file contains the current timestep, the length of the simulation box's sides, and the total, potential, and kinetic energies. On the configuration file after an original header, information about every single nucleotide, such as the velocity, is depicted. More information about the input files is mentioned in the oxDNA documentation <a v-scroll-to="'#references'" class="link-ref">[24]</a>. We must consider that due to legacy reasons, the simulation code prefers structures to be listed in reverse direction (3' → 5'). Using an online converter <a v-scroll-to="'#references'" class="link-ref">[25]</a>, we prepared all the input sequences and transferred them to a .txt file in the correct order. Using the generate-sa.py script provided with the oxDNA pack, we can generate the structure input files based on the original .txt file. Note that the simulation box should have box sides at least as big as the largest sequence in the .txt file. </p>
              <p>As output files we are expecting three different file types:</p>
              <ul class="bullets">
                <li>A trajectory (.dat) depicting how our system changes conformations with each timestep.</li>
                <li>A last configuration (.conf) file to be used for the conversion of the oxDNA files to <span>all-atomic Protein Data Bank (.pdb) structures</span>.</li>
                <li>An energy file (.dat), to be plotted so we can estimate if our system has reached equilibration.</li>
              </ul><br>
              <p>The next step is to prepare the input file for the simulation process. The user defines the options in a text file with a key = value style. We set the simulation parameters to be as suitable and compatible as possible to our experimental design. Before each simulation we performed a standard relaxation procedure, consisting of :</p>
              <ul class="bullets">
                <li>10<sup>3</sup> steps of MC simulations on a CPU, followed by </li>
                <li>10<sup>6</sup> steps of an MD relaxation on CUDA with a maximum-value of the cutoff for the backbone potential </li>
              </ul><br>
              <p>The oxDNA2 model <a v-scroll-to="'#references'" class="link-ref">[26]</a> was used, since it allows DNA to be studied with salt concentrations, and sequence-specific parameters were applied. The temperature and salt concentration were set according to each experiment. You can view all our input options in their corresponding files on our GitHub Page. The visualization of the output was achieved using oxView <a v-scroll-to="'#references'" class="link-ref">[27]</a>, a web-service that provides the ability for oxDNA models to be dynamically represented through their initial .top file and the output trajectory or last configuration files.</p>
            </section>
            <section>
              <h3 class="small-title">Primer hybridization to phosphorylated template</h3>
              <p>First step to our project was the creation of the circular DNA template, by hybridization of RCA primer to the phosphorylated template. Modeling that structure proved to be a simple task, following the oxDNA pipeline described earlier, we just had to incorporate one more aspect, that of Mutual Traps. If we let our system reach equilibration on its own, it would take at least 108 timesteps for a simple oligonucleotide hybridization, amounting to time-consuming simulations. Mutual Traps act as time-sustained external forces bringing user-defined complementary and anti-aligned nucleotides closer. See more details in the Contribution page on how to orchestrate a Mutual  By incorporating these forces in the first and last nucleotide of the primer and their complementary nucleotides in the template sequence we are able to reach equilibration obtaining the desired structure.Simulation was run with a temperature set to 25 <sup>o</sup>C. In <span>Fig.10</span> the initial and equilibrated tertiary structures are presented before and after oxDNA simulation.</p>
              <div class="gallery d-flex justify-content-center">
                <figure class="gallery">
                  <figcaption class="figure-caption text-left"><span>Circle start</span></figcaption>
                  <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/circle-start.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/circle-start.png"/></a>
                </figure>
                <figure class="gallery">
                  <figcaption class="figure-caption text-left"><span>Circle end</span></figcaption>
                    <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/circle-end.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/circle-end.png"/></a>
                </figure>
            </div>
            <figcaption class="figure-caption text-left"><span>Fig.10. Circular DNA template conformations:</span> In the left the initial structure is depicted, and in the right the formed padlock template is shown.</figcaption>
            </section>
            <section>
              <h3 class="small-title">Probe formation</h3>
              <p>One of the primary uses of oxDNA, apart from origami DNA structure visualization, is hairpin formation. We obtained the trajectories, tertiary structures, and energy files for each of the hairpin probes used in our project. By setting the temperature to 25 <sup>o</sup>C. You can observe that each probe has the expected loop structure and the two hanging tails, one for target detection and one for binding to the DNA backbone. Equilibration was achieved in 10<sup>8</sup> steps.</p>
            </section>
            <section>
              <h3 class="small-title">Nanostructure formation</h3>
              <p>Importing the modeled probe tertiary structures and the RCA domain, in oxView using the topology and last configuration files, we exported the image in oxDNA files, to be used for the next simulation. We set the temperature to 37.0 <sup>o</sup>C and salt concentration to 1.05M, using the corresponding Mutual Traps, and in just 10<sup>6</sup> time-steps the Nanostructure was formed retaining the designed structure. </p>
              <p>In order to use these results for further simulations, conversion to all-atomistic PDB files is necessary. First step was to install Python2 to WSL2 since most of the legacy utility scripts provided with oxDNA are written in Python2. Using the supplied convert_to_atomic.py script we obtained the desired structures. Upon visualization of the generated PDB files, we observed that in VMD bond breaks were apparent, whereas in ChimeraX the desired structure was depicted. After hours of trying to figure out if we had done something wrong during the simulation or during the .pdb file conversion, we found a discussion page in the oxDNA forum pointing out that this is a common problem presented when converting coarse-grained models to all-atomistic ones.  So we decided to continue with the generated .pdb files. </p>
            </section>
          </section>
          <section id="md">
            <h2 class="main-title">Extended MD simulations</h2>
            <p>Taking our Molecular Dynamics simulations a step further, we studied the stability and interaction of different components of our system. GROMACS <a v-scroll-to="'#references'" class="link-ref">[28]</a>, <a v-scroll-to="'#references'" class="link-ref">[29]</a>, a general purpose Molecular Dynamics software was implemented with the use of our Sponsors Supercomputer, to obtain faster results in our simulations. The simulation options used in our Model are the following <a v-scroll-to="'#references'" class="link-ref">[30]</a>, <a v-scroll-to="'#references'" class="link-ref">[32]</a>:</p>
            <p>For Protein - DNA stability analysis:</p>
            <ul class="bullets">
              <li><span>Force field selection:</span> AMBER99SB <a v-scroll-to="'#references'" class="link-ref">[32]</a> for the protein and AMBER94 <a v-scroll-to="'#references'" class="link-ref">[33]</a> for the DNA with the TIP3P <a v-scroll-to="'#references'" class="link-ref">[34]</a> water model.</li>
              <li><span>Simulation box size, solvation and system charge:</span> Cubic box, with the molecule centered, 2.0 nm away from box sides. Mg<sup>+2</sup> and Cl<sup>-</sup> ions were used to set the system's charge to neutral.</li>
              <li><span>Energy minimization parameters:</span> A steepest descent algorithm was used for energy minimization, with a maximum force tolerance (emtol) of 1000.0kJ mol<sup>-1</sup> nm<sup>-1</sup>.</li>
              <li><span>Temperature Equilibration (NVT):</span> Temperature was constantly set to 310.15 K (37.0<sup>o</sup> C) with the V-rescale thermostat, Coupling groups were set to Protein_DNA Water_and_ions. The temperature time constant was 0.2ps.</li>
              <li><span>Temperature Equilibration (NVT):</span> Pressure was constantly set to 1 bar using a C-rescale barostat.</li>
            </ul><br><br>
            <section>
              <h3 class="small-title">Stability analysis</h3>
              <p>Two different components were examined for their stability, the circular DNA template and its binding to phi29 DNA Polymerase. Importing the PDB files obtained from oxDNA, to GROMACS we followed the steps described in the Contribution page in order to minimize the system and follow a standard MD stability protocol. In the trajectory produced for 1ns the circular DNA template retained its structure, with bonds breaking and forming again.</p>
            </section>
            <section>
              <h3 class="small-title">Protein-DNA interactions</h3>
              <p>Two interactions were studied: The T4 DNA ligase binding to the circular DNA template and the interaction between phi29 DNA polymerase and the template. The first step was to do a docking analysis on the desired complexes. PDB files for the T4 DNA ligase and the phi29 DNA polymerase were obtained from the PDB server as complexes with target DNA. Using VMD, we exported the protein structure as a new PDB file to be used for docking. Using the HDOCK web server <a v-scroll-to="'#references'" class="link-ref">[35]</a>, we got: </p>
              <br>
              <div class="d-flex justify-content-around">
                <div>
                  <p>For the phi29-DNA complex: </p>
                  <ul class="bullets">
                    <li>Docking Score: -220.17 </li>
                    <li>Confidence Score: 0.8602 </li>
                    <li>Ligand RMSD: 248.25</li>
                  </ul>                  
                </div>
                <div>
                  <p>For the T4 ligase-DNA complex:</p>
                  <ul class="bullets">
                    <li>Docking Score: -270.22</li>
                    <li>Confidence Score: 0.9172</li>
                    <li>Ligand RMSD: 174.29</li>
                  </ul>
                </div>
              </div><br>
              <p>After docking the DNA template to phi29 DNA polymerase, we proceeded to a Molecular Dynamics analysis to verify the created complex's stability. For this protein-DNA complex, the Molecular Dynamic simulation parameters are specified above. A 1ns simulation was produced with the trajectory displayed below, proving the desired stability of our complex, indicating that we should further develop our Modeling work.</p>
            </section>
          </section>
          <section id="steps">
            <h2 class="main-title">Future Steps</h2>
            <p>Due to the complexity and the tremendous computational power needed for the Molecular Dynamics simulations, we generated only a 1ns simulation. More time is needed; we recommend approximately 10ns to generate an output that corresponds closely to a targeted molecule's behavior in the experimental conditions. Also, studying the interaction between the circRNA target and the nanostructure is a key aspect that must be studied. Umbrella sampling is often required to overcome the energy barriers present for toehold-mediated strand displacement reactions. Although some research is already available on that topic, defining the weights needed for each energy threshold is a difficult task requiring much trial and error. We aim to integrate this aspect in our Modeling work to understand better the interaction between the analyte and the LDN system. </p>
          </section>
          <section id="references">
            <ul class="acc">
              <li class="acc-item references">
                <input id="s1" class="hide" type="checkbox">
                <label for="s1" class="acc-label icon">References</label>
                <div class="acc-child">
                  <p>[1]. Zhang, D. Y., & Winfree, E. (2009, November 6). Control of DNA Strand Displacement Kinetics Using Toehold Exchange. Journal of the American Chemical Society, 131(47), 17303–17314. <a href="https://doi.org/10.1021/ja906987s" class="link-ref">https://doi.org/10.1021/ja906987s</a> 
                  <br>[2]. Berleant, J., Berlind, C., Badelt, S., Dannenberg, F., Schaeffer, J., & Winfree, E. (2018, December). Automated sequence-level analysis of kinetics and thermodynamics for domain-level DNA strand-displacement systems. Journal of the Royal Society Interface, 15(149), 20180107. <a href="https://doi.org/10.1098/rsif.2018.0107" class="link-ref">https://doi.org/10.1098/rsif.2018.0107</a> 
                  <br>[3]. Glažar, P., Papavasileiou, P., & Rajewsky, N. (2014, September 18). circBase: a database for circular RNAs. RNA, 20(11), 1666–1670. <a href="https://doi.org/10.1261/rna.043687.113" class="link-ref">https://doi.org/10.1261/rna.043687.113</a>  
                  <br>[4]. Liu, M., Wang, Q., Shen, J., Yang, B. B., & Ding, X. (2019, April 25). Circbank: a comprehensive database for circRNA with standard nomenclature. RNA Biology, 16(7), 899–905. <a href="https://doi.org/10.1080/15476286.2019.1600395" class="link-ref">https://doi.org/10.1080/15476286.2019.1600395</a>  
                  <br>[5]. Wu, W., Ji, P., & Zhao, F. (2020, April 28). CircAtlas: an integrated resource of one million highly accurate circular RNAs from 1070 vertebrate transcriptomes. Genome Biology, 21(1). <a href="https://doi.org/10.1186/s13059-020-02018-y" class="link-ref">https://doi.org/10.1186/s13059-020-02018-y</a>  
                  <br>[6]. Chen, X., Han, P., Zhou, T., Guo, X., Song, X., & Li, Y. (2016, October 11). circRNADb: A comprehensive database for human circular RNAs with protein-coding annotations. Scientific Reports, 6(1). <a href="https://doi.org/10.1038/srep34985" class="link-ref">https://doi.org/10.1038/srep34985</a> 
                  <br>[7]. Maass, P. G., Glažar, P., Memczak, S., Dittmar, G., Hollfinger, I., Schreyer, L., Sauer, A. V., Toka, O., Aiuti, A., Luft, F. C., & Rajewsky, N. (2017, August 25). A map of human circular RNAs in clinically relevant tissues. Journal of Molecular Medicine, 95(11), 1179–1189. <a href="https://doi.org/10.1007/s00109-017-1582-9" class="link-ref">https://doi.org/10.1007/s00109-017-1582-9</a>  
                  <br>[8]. Salzman, J., Chen, R. E., Olsen, M. N., Wang, P. L., & Brown, P. O. (2013, December 30). Correction: Cell-Type Specific Features of Circular RNA Expression. PLoS Genetics, 9(12). <a href="https://doi.org/10.1371/annotation/f782282b-eefa-4c8d-985c-b1484e845855" class="link-ref">https://doi.org/10.1371/annotation/f782282b-eefa-4c8d-985c-b1484e845855</a> 
                  <br>[9]. Luo, Y. H., Yang, Y. P., Chien, C. S., Yarmishyn, A. A., Ishola, A. A., Chien, Y., Chen, Y. M., Huang, T. W., Lee, K. Y., Huang, W. C., Tsai, P. H., Lin, T. W., Chiou, S. H., Liu, C. Y., Chang, C. C., Chen, M. T., & Wang, M. L. (2020, June 30). Plasma Level of Circular RNA hsa_circ_0000190 Correlates with Tumor Progression and Poor Treatment Response in Advanced Lung Cancers. Cancers, 12(7), 1740. <a href="https://doi.org/10.3390/cancers12071740" class="link-ref">https://doi.org/10.3390/cancers12071740</a> 
                  <br>[10]. Xia, S., Feng, J., Chen, K., Ma, Y., Gong, J., Cai, F., Jin, Y., Gao, Y., Xia, L., Chang, H., Wei, L., Han, L., & He, C. (2017, September 28). CSCD: a database for cancer-specific circular RNAs. Nucleic Acids Research, 46(D1), D925–D929. <a href="https://doi.org/10.1093/nar/gkx863" class="link-ref">https://doi.org/10.1093/nar/gkx863</a>  
                  <br>[11]. Barrett, T., Wilhite, S. E., Ledoux, P., Evangelista, C., Kim, I. F., Tomashevsky, M., Marshall, K. A., Phillippy, K. H., Sherman, P. M., Holko, M., Yefanov, A., Lee, H., Zhang, N., Robertson, C. L., Serova, N., Davis, S., & Soboleva, A. (2012, November 26). NCBI GEO: archive for functional genomics data sets—update. Nucleic Acids Research, 41(D1), D991–D995. <a href="https://doi.org/10.1093/nar/gks1193" class="link-ref">https://doi.org/10.1093/nar/gks1193</a> 
                  <br>[12]. Zadeh, J. N., Steenberg, C. D., Bois, J. S., Wolfe, B. R., Pierce, M. B., Khan, A. R., Dirks, R. M., & Pierce, N. A. (2010, November 17). NUPACK: Analysis and design of nucleic acid systems. Journal of Computational Chemistry, 32(1), 170–173. <a href="https://doi.org/10.1002/jcc.21596" class="link-ref">https://doi.org/10.1002/jcc.21596</a> 
                  <br>[13]. SantaLucia, J. (1998, February 17). A unified view of polymer, dumbbell, and oligonucleotide DNA nearest-neighbor thermodynamics. Proceedings of the National Academy of Sciences, 95(4), 1460–1465. <a href="https://doi.org/10.1073/pnas.95.4.1460" class="link-ref">https://doi.org/10.1073/pnas.95.4.1460</a>  
                  <br>[14]. Lorenz, R., Bernhart, S. H., Höner zu Siederdissen, C., Tafer, H., Flamm, C., Stadler, P. F., & Hofacker, I. L. (2011, November 24). ViennaRNA Package 2.0. Algorithms for Molecular Biology, 6(1). <a href="https://doi.org/10.1186/1748-7188-6-26" class="link-ref">https://doi.org/10.1186/1748-7188-6-26</a> 
                  <br>[15]. Gruber, A. R., Bernhart, S. H., & Lorenz, R. (2014, December 18). The ViennaRNA Web Services. Methods in Molecular Biology, 307–326. <a href="https://doi.org/10.1007/978-1-4939-2291-8_19" class="link-ref">https://doi.org/10.1007/978-1-4939-2291-8_19</a> 
                  <br>[16]. Wang, J., Zhao, Y., Zhu, C., & Xiao, Y. (2015, February 24). 3dRNAscore: a distance and torsion angle dependent evaluation function of 3D RNA structures. Nucleic Acids Research, 43(10), e63–e63. <a href="https://doi.org/10.1093/nar/gkv141" class="link-ref">https://doi.org/10.1093/nar/gkv141</a>  
                  <br>[17]. Pettersen, E. F., Goddard, T. D., Huang, C. C., Meng, E. C., Couch, G. S., Croll, T. I., Morris, J. H., & Ferrin, T. E. (2020, October 22). UCSF ChimeraX             : Structure visualization for researchers, educators, and developers. Protein Science, 30(1), 70–82. <a href="https://doi.org/10.1002/pro.3943" class="link-ref">https://doi.org/10.1002/pro.3943</a> 
                  <br>[18]. Humphrey, W., Dalke, A., & Schulten, K. (1996, February). VMD: Visual molecular dynamics. Journal of Molecular Graphics, 14(1), 33–38. <a href="https://doi.org/10.1016/0263-7855(96)00018-5" class="link-ref">https://doi.org/10.1016/0263-7855(96)00018-5</a> 
                  <br>[19]. Hsin, J., Arkhipov, A., Yin, Y., Stone, J. E., & Schulten, K. (2008, December). Using VMD: An Introductory Tutorial. Current Protocols in Bioinformatics, 24(1). <a href="https://doi.org/10.1002/0471250953.bi0507s24" class="link-ref">https://doi.org/10.1002/0471250953.bi0507s24</a>   
                  <br>[20]. Šulc, P., Romano, F., Ouldridge, T. E., Rovigatti, L., Doye, J. P. K., & Louis, A. A. (2012, October 7). Sequence-dependent thermodynamics of a coarse-grained DNA model. The Journal of Chemical Physics, 137(13), 135101. <a href="https://doi.org/10.1063/1.4754132" class="link-ref">https://doi.org/10.1063/1.4754132</a>
                  <br>[21]. Rovigatti, L., Šulc, P., Reguly, I. Z., & Romano, F. (2014, October 30). A comparison between parallelization approaches in molecular dynamics simulations on GPUs. Journal of Computational Chemistry, 36(1), 1–8. <a href="https://doi.org/10.1002/jcc.23763" class="link-ref">https://doi.org/10.1002/jcc.23763</a> 
                  <br>[22]. Team:Harvard/Model - 2020.igem.org. (n.d.). Retrieved October 6, 2022, from <a href="" class="link-ref"></a> https://2020.igem.org/Team:Harvard/Model 
                  <br>[23]. Sengar, A., Ouldridge, T. E., Henrich, O., Rovigatti, L., & Šulc, P. (2021, June 17). A Primer on the oxDNA Model of DNA: When to Use it, How to Simulate it and How to Interpret the Results. Frontiers in Molecular Biosciences, 8. <a href="https://doi.org/10.3389/fmolb.2021.693710" class="link-ref">https://doi.org/10.3389/fmolb.2021.693710</a> 
                  <br>[24]. Documentation - OxDNA. (n.d.). Retrieved October 6, 2022, from <a href="https://dna.physics.ox.ac.uk/index.php/Documentation#Input_file" class="link-ref">https://dna.physics.ox.ac.uk/index.php/Documentation#Input_file</a> 
                  <br>[25]. Reverse and/or complement DNA sequences. (n.d.). Retrieved October 6, 2022, from <a href="https://arep.med.harvard.edu/labgc/adnan/projects/Utilities/revcomp.html" class="link-ref">https://arep.med.harvard.edu/labgc/adnan/projects/Utilities/revcomp.html</a> 
                  <br>[26]. Snodin, B. E. K., Randisi, F., Mosayebi, M., Šulc, P., Schreck, J. S., Romano, F., Ouldridge, T. E., Tsukanov, R., Nir, E., Louis, A. A., & Doye, J. P. K. (2015, June 21). Introducing improved structural properties and salt dependence into a coarse-grained model of DNA. The Journal of Chemical Physics, 142(23), 234901. <a href="https://doi.org/10.1063/1.4921957" class="link-ref">https://doi.org/10.1063/1.4921957</a> 
                  <br>[27]. Bohlin, J., Matthies, M., Poppleton, E., Procyk, J., Mallya, A., Yan, H., & Šulc, P. (2022, June 6). Design and simulation of DNA, RNA and hybrid protein–nucleic acid nanostructures with oxView. Nature Protocols, 17(8), 1762–1788. <a href="https://doi.org/10.1038/s41596-022-00688-5" class="link-ref">https://doi.org/10.1038/s41596-022-00688-5</a>
                  <br>[28]. Van Der Spoel, D., Lindahl, E., Hess, B., Groenhof, G., Mark, A. E., & Berendsen, H. J. C. (2005). GROMACS: Fast, flexible, and free. Journal of Computational Chemistry, 26(16), 1701–1718. <a href="https://doi.org/10.1002/jcc.20291" class="link-ref">https://doi.org/10.1002/jcc.20291</a> 
                  <br>[29]. Abraham, M. J., Murtola, T., Schulz, R., Páll, S., Smith, J. C., Hess, B., & Lindahl, E. (2015, September). GROMACS: High performance molecular simulations through multi-level parallelism from laptops to supercomputers. SoftwareX, 1–2, 19–25. <a href="https://doi.org/10.1016/j.softx.2015.06.001" class="link-ref">https://doi.org/10.1016/j.softx.2015.06.001</a>
                  <br>[30]. Lysozyme in Water. (n.d.). Retrieved October 8, 2022, from <a href="http://www.mdtutorials.com/gmx/lysozyme/index.html" class="link-ref">http://www.mdtutorials.com/gmx/lysozyme/index.html</a> 
                  <br>[31]. Protein-Ligand Complex. (n.d.). Retrieved October 8, 2022, from <a href="http://www.mdtutorials.com/gmx/complex/index.html" class="link-ref">http://www.mdtutorials.com/gmx/complex/index.html</a> 
                  <br>[32]. Hornak, V., Abel, R., Okur, A., Strockbine, B., Roitberg, A., & Simmerling, C. (2006, November 15). Comparison of multiple Amber force fields and development of improved protein backbone parameters. Proteins: Structure, Function, and Bioinformatics, 65(3), 712–725. <a href="https://doi.org/10.1002/prot.21123" class="link-ref">https://doi.org/10.1002/prot.21123</a>  
                  <br>[33]. Jorgensen, W. L., Chandrasekhar, J., Madura, J. D., Impey, R. W., & Klein, M. L. (1983, July 15). Comparison of simple potential functions for simulating liquid water. The Journal of Chemical Physics, 79(2), 926–935. <a href="https://doi.org/10.1063/1.445869" class="link-ref">https://doi.org/10.1063/1.445869</a> 
                  <br>[34]. Cornell, W. D., Cieplak, P., Bayly, C. I., Gould, I. R., Merz, K. M., Ferguson, D. M., Spellmeyer, D. C., Fox, T., Caldwell, J. W., & Kollman, P. A. (1995, May). A Second Generation Force Field for the Simulation of Proteins, Nucleic Acids, and Organic Molecules. Journal of the American Chemical Society, 117(19), 5179–5197. <a href="https://doi.org/10.1021/ja00124a002" class="link-ref">https://doi.org/10.1021/ja00124a002</a> 
                  <br>[35]. Yan, Y., Zhang, D., Zhou, P., Li, B., & Huang, S. Y. (2017, May 17). HDOCK: a web server for protein–protein and protein–DNA/RNA docking based on a hybrid strategy. Nucleic Acids Research, 45(W1), W365–W373. <a href="https://doi.org/10.1093/nar/gkx407" class="link-ref">https://doi.org/10.1093/nar/gkx407</a></p>
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