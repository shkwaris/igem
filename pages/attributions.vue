<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="team">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#team`" v-scroll-to="'#team'">Team</a></li>
                <li><a :href="`${currentPage}/#supervisors`" v-scroll-to="'#supervisors'">Supervisors</a></li>
                <li><a :href="`${currentPage}/#instructors`" v-scroll-to="'#instructors'">Instructors</a></li>
                <li><a :href="`${currentPage}/#advisor`" v-scroll-to="'#advisor'">Advisor</a></li>
                <li><a :href="`${currentPage}/#general-support`" v-scroll-to="'#general-support'">General Support - Acknowledgment</a></li>
                <li><a :href="`${currentPage}/#human-practices`" v-scroll-to="'#human-practices'">Human Practices</a></li>
                <li><a :href="`${currentPage}/#education`" v-scroll-to="'#education'">Education</a></li>
                <li><a :href="`${currentPage}/#finance`" v-scroll-to="'#finance'">Finance</a></li>
                <li><a :href="`${currentPage}/#acknowledgment `" v-scroll-to="'#acknowledgment '">Acknowledgment</a></li>
                <li><a :href="`${currentPage}/#sponsors`" v-scroll-to="'#sponsors'">Sponsors</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="team">
            <h2 class="main-title">Team</h2>
            <p><span>Bochalis Eleftherios:</span> Undergraduate Pharmacy student at the University of Patras. He is the team Leader and a member of the lab. He is the one who constructed our team and is responsible for its proper guidance. He was responsible for total RNA extraction from cell lines, circRNA extraction, and RT-PCR validating circRNA biomarkers in the wet lab. In the dry lab part, he dealt with molecular dynamics and thermodynamic analysis of the LDN system. Also, 2D and 3D modeling of all the structures used in our project.</p>
            <p><span>Dereki Eirini:</span> Undergraduate Pharmacy student at the University of Patras. She is a lab member and our team's graphic designer. She designed all the graphics required by the team. As a lab member, she was responsible for detecting the specific biomarkers with LDN on the wet lab part and did the kinetic model in the dry lab.</p>
            <p><span>Markos Sotiriou:</span> MSc in Analytical Chemistry and Nanotechnology at the department of Chemistry at the University of Patras. He is a member of the lab. He helped the wet lab subgroup with literature and provided lab guidance.</p>
            <p><span>Betsou Anatoli:</span> Undergraduate Pharmacy student at the University of Patras. She is a member of the Human Practices team. She was responsible for most of our Integrated Human Practices work. She also managed the Partnership with the iGEM MetaThess team and all the activities it included.</p>
            <p><span>Konidi Garyfalina:</span> Undergraduate Pharmacy student at the University of Patras. She is a member of the Human Practices team. She contributed to the organization of several activities related to the social implications of our project. She managed the Social Media of the team and she was responsible for our podcast series.</p>
            <p><span>Karaoglanis Christos:</span> Undergraduate Medicine student at the University of Patras. He is a member of the Human Practices team. He was co-responsible for the organization of the partnership.</p>
            <p><span>Velissariou Ilias:</span> Undergraduate Nursing student at the National and Kapodistrian University of Athens (NKUA). He is a member of the Human Practices team. He helped with the promotion of our project on medical websites and newspapers.</p>
            <p><span>Chandrinos Nikiforos:</span> Undergraduate Pharmacy student at the University of Patras. He is a member of the Fundraising and Entrepreneurship team. He had a key role in the fundraising strategy design and was responsible for developing the product sheet. He also helped with the visualization of nucleic acid interactions in the dry lab.</p>
            <p><span>Giannakopoulou Athina:</span> Undergraduate Civil Engineering student at the University of Patras. She is a member of the Fundraising and Entrepreneurship team. She also designed the structure and created the content of the business plan.</p>
            <p><span>Souliotis Sofianos:</span> Undergraduate Mechanical Engineering student at the University of Patras. He is a member of the Fundraising and Entrepreneurship team. He was exclusively focused on entrepreneurship, specifically contributing to the business plan and the inspirer of our brand name.</p>
            <p><span>Derekis Grigoris:</span> High school student and our web developer / IT team member. He was responsible for the construction of our Wiki page.</p>
          </section>
          <section id="supervisors">
            <h2 class="main-title">Supervisors</h2>
            <p><span>Kalogianni Despina:</span> Primary PI, Assistant Professor at the University of Patras, head of the Laboratory of Analytical Chemistry of the Department of Chemistry. She provided us with lab space, guidance, and general support throughout the development of our project.</p>
            <p><span>Kallergi Galatea:</span> Secondary PI, Assistant Professor at the University of Patras, head of the Biochemistry / Metastatic Signaling Laboratory in the Genetics, Cell Biology, and Development of the Biology Department. She provided us with lab space, guidance, and general support throughout the development of our project.</p>
          </section>
          <section id="instructors">
            <h2 class="main-title">Instructors</h2>
            <p><span>Vardas Vasileios:</span> Ph.D. Candidate in Cancer Research at the Department of Biology at the University of Patras. He is our cell lines expert, guiding us with cell culture and RNA extraction.</p>
            <p><span>Kalligosfyri Panagiota:</span> Chemist Ph.D., Postdoctoral Researcher at the Department of Chemistry at the University of Patras. She helped us with the experimental procedure. We did a lot of troubleshooting together and overcame many of the lab problems we faced. Also, she helped us with the optimization of the experimental protocol.</p>
            <p><span>Lamprou Eleni: </span> Research Ph.D. candidate in Analytical Chemistry at the Department of Chemistry at the University of Patras. She helped us with our first lab steps. She taught us the fundamental lab procedures needed in our experiments, such as agarose gel electrophoresis, safe lab etiquette, and buffer preparation.</p>
          </section>
          <section id="advisor">
            <h2 class="main-title">Advisor</h2>
            <p><span>Bochalis Christodoulos:</span> MSc in Artificial Intelligence at the National Centre for Scientific Research “Demokritos”. He was our coding advisor. He helped with the setup of Linux and the compilation of the software used in our Dry Lab. With his guidance, we created the thermodynamic model to identify which LDN was best.</p>
          </section>
          <section id="general-support">
            <h2 class="main-title">General Support - Acknowledgment</h2>
            <p><span>Andronikidis George:</span> MSc, Data-Driven Computing and Decision Making, Department Computer Engineering and Informatics, University of Patras. With his three-year experience in the iGEM competition, he guided us through many aspects of the competition, such as Human Practices, Project Design, and Wiki Design.</p>
            <p><span>Varitis George:</span> Pharmacist | International Master in Innovation & Entrepreneurship (IMIE), Graduate School of Management, Politecnico di Milano. Alongside Andronikidis George, his iGEM experience proved valuable in aspects such as deliverables management, Science Communication, and Project Design.</p>
            <p><span>Botsou Anna:</span> History and Theory of Art graduate student, ASFA. She contributed to the creation of the team's comic in the context of science communication.</p>
            <p><span>Tsiros Panagiotis:</span> Undergraduate student at the University of Patras. He helped us with the 3D printing of dice and a DNA figure for the team’s board games.</p>
            <p><span>Tourna Tatiana and Arampatzi Despina,</span> who work at the T-shop Marketing Services, helped us create a video required for a collaboration and designed and printed our team’s t-shirts.</p>
            <p><span>Digiland:</span> Τhey helped us with the printing of the banner, the brochures, and our team’s comic.</p>
            <p><span>BadFX:</span> They helped us with the creation of our Promotion Video.</p>
          </section>
          <section id="human-practices">
            <h2 class="main-title">Human Practices</h2>
            <p><span>Athanasiou Eustratios:</span> Founder, Chief Executive Officer & President of BoD Chief Director at CPRGG. He participated in one of the podcast series episodes and organized a webinar that managed to get 524 participants. He also gave his fellow medical colleagues our questionnaire to fill out, reaching 100 responses.</p>
            <p>We want to thank the Cancer Prevention Research Group in Greece and especially Mr. Efstratios Athanasiou for our constructive cooperation throughout our team's preparation for the competition!</p>
            <p><span>Laimos – Geranios Konstantinos:</span> MSc student at the Laboratory of Medicinal Chemistry department of Pharmacy at the University of Patras. He provided a brainstorming session to get us started with our modeling.</p>
            <p><span>Panitsa Georgia:</span> Psychologist at Alma Zois of Achaia. She told us about the psychology of cancer patients. She helped us with the creation of a questionnaire for cancer patients and with the promotion of our project in local associations.</p>
            <p><span>Taraviras Stavros:</span> Professor of Medicine, head of the laboratory of Biological Chemistry at the University of Patras. He helped us in the initial steps of the team to set up our final idea. </p>
            <p><span>Vizirianakis Ioannis:</span> Associate Professor of Molecular Pharmacology and Pharmacogenomics at the Department of Pharmacy at the Aristotle University of Thessaloniki. He is the Principal Investigator of the MetaThess iGEM team and helped us with their feedback regarding our project throughout the Partnership.</p>
            <p><span>Symeonidis Argyris:</span> Professor of Medicine, Hematologist at the Hematology Department at the University Hospital of Patras. He gave us insight into a hematologist’s role in lung cancer diagnosis. He also pointed out the advantages and disadvantages of liquid biopsies.</p>
            <p><span>Liouta Galateia:</span> Oncologist, Junior Doctor at the General Oncological Hospital of Kifisia. She helped us understand lung cancer's physiology and its characteristics with precise and up-to-date information.</p>
            <p><span>Stauropoulos George:</span> Thoracic surgeon, head of his department at the Hippocrates hospital, studied at the Medical School of Athens and had his specialty and his master's degree in Great Britain. He precisely described to us the procedures followed by surgeons in order to remove the lung tumor and explained the importance of early detection of lung cancer to perform a successful surgery, as there will most likely be no metastasis to other tissues or organs.</p>
            <p><span>Tsoukalas Nikolaos:</span> Medical Oncologist, MSc in Bioinformatics, Deputy Director of the Oncology Department at 401 General Military Hospital, Consultant at Henry Dunant Hospital Center of Athens. He gave us insight into the biogenesis of lung cancer and biomarker analysis.</p>
            <p><span>Sotiropoulos Christos:</span> Microbiologist at the microbiological laboratory “Alphalab''. He presented us with all the details and procedures needed in order to preserve and utilize the blood samples and extract RNA molecules, without deforming them.</p>
            <p><span>Torosiadis Nikolaos:</span> Head of Department for Biological sample collection, processing, isolation, storage, and information management at the Access to Genome - ATG Laboratory. He was helpful regarding the circular RNA detection techniques, pointing out their pros and cons in order to select the most suitable one for our project.</p>
            <p><span>Nikokavoura Aspasia:</span> Chemist, National Association for the Medicines Health Material Evaluation Department employee. She enlightened us about the legal aspects of our diagnostic tool, providing information on the biosafety and biosecurity of our project to be approved.</p>
            <p><span>Nasigogos Dimitrios:</span> Sales Manager at Menarini Diagnostics Greece. He helped us complete the structure of the product sheet, define the price of our kit, and propose ideas for the further development of the project.</p>
            <p><span>Kavakiotis Ioannis:</span> Head of Biomedical Data Science and Bioinformatics Unit. He instructed on the different methods RNAs.</p>
            <p><span>Klapa Maria:</span> Principal Researcher, Lab Head at FORTH/ICE-HT. During our Human Practices meeting with her, she analyzed all the experiments we had to do to validate our method.</p>
            <p><span>Kourkoumelis Nikolaos:</span> Biophysicist at the department of Medicine at the University of Ioannina. He was our molecular dynamics teacher, he showed us the basics of a simulation and how to use different software such as GROMACS and OxDNA.</p>
            <p><span>Liloglou Triantafillos (Lakis):</span> Director of the CardioRespiratory Research Centre, Faculty of Health, Social Care & Medicine / Edge Hill University. He pointed out that we must use blood samples cautiously when our project gets to that point. He also gave us ideas on organizing our lab work and doing a proper total RNA extraction from cancer cell lines.</p>
            <p><span>Maria Giovanna Pastore Carbone:</span> Postdoc Fellow at FORTH/ICEHT. She helped us with the Atomic Force Microscopy (AFM) experiments, to visualize the synthesized Nanostructure.</p>
            <p><span>Miliotis Marios:</span> Ph.D. Candidate, Researcher at the University of Thessaly. He instructed us on how to do bioinformatic analysis and familiarized us with the Gene Expression Omnibus (GEO) database. We also discussed nucleic acid interactions and how to incorporate thermodynamic analysis into our project.</p>
            <p><span>Apostolou Panagiotis:</span> Molecular Biology Department - Quality Manager at Research Genetic Cancer Centre S.A. We discussed laboratory safety procedures and how to set up fluorescence spectroscopy experiments.</p>
            <p><span>Parsonidis Panagiotis:</span> Molecular Biology Department at Research Genetic Cancer Centre S.A. He advised us on cell culture and RNA extraction.</p>
            <p><span>Katsimantas Alexandros:</span> Warehouse Research Genetic Cancer Centre S.A. He helped us with ordering all the laboratory reagents.</p>
            <p><span>Serafeim Athanasia Panagiota:</span> Molecular Biologist at Research Genetic Cancer Centre S.A | MSc in Drug Design. After hearing about our project, we had a brainstorming session to design our dry lab work.</p>
            <p><span>Papasotiriou Ioannis:</span> Managing Director at Research Genetic Cancer Centre International GmbH. He is our grand sponsor. Apart from his financial support, he gave us access to his company’s supercomputer.</p>
            <p><span>Theologou Liana, Kapritsou Maria & Pissaka George:</span> Members of the Association “Pnoi Agapis”. Based on their knowledge as doctors, they informed us about the statistics regarding lung cancer and the already existing diagnostic methods.</p>
          </section>
          <section id="education">
            <h2 class="main-title">Education</h2>
            <p><span>Arlapanos George:</span> Biology teacher at the Experimental high school of Patras. He contributed to the improvement of our board games and the instructions manual of them.</p>
            <p>We want to thank the principal and the professors at the Experiments High School of Patras, who gave us the approval to present our idea to students.</p>
            <p><span>Petsiou Dioni – Pinelopi:</span> Undergraduate medicine student at the National and Kapodistrian University of Athens and Deputy Secretary General at CPRGG. She participated in one of the episodes of the podcast series from the perspective of a future doctor.</p>
            <p>We want to thank the Scientific Society of Medical Students of Greece and the iGEM Athens team for the invitation to the 28th Scientific Conference of Medical Students of Greece.</p>
          </section>
          <section id="finance">
            <h2 class="main-title">Finance</h2>
            <p><span>Carrasco Federico:</span> CEO of the Swiss company Graypes GmbH. He pointed out the main entrepreneurship pillars to focus our attention on the market, the conditions, the pressure, and primarily, the people - users. The above sparked much inspiration in our team, and thus, among others, we came up with the idea of an informative how-to video addressed to the upcoming clients.</p>
            <p><span>Giannakopoulos Pavlos:</span> Undergraduate pharmacy student with knowledge of economics. He helped us with the development of the business plan.</p>
            <p><span>Kosmidou Maria:</span> MSc Business Administration at the Aristotle University of Thessaloniki. We exchanged business and financial advice on creating our business plan and fundraising process.</p>
          </section>
          <section id="acknowledgment">
            <h2 class="main-title">Acknowledgment</h2>
            <p><span>Milona Athina:</span> iGEM Ambassador for Europe (EU). She helped us by guiding as far as the competition requirements are concerned.</p>
            <p><span>Akan Madina:</span> She is our team’s mentor. We did some ZOOM meetings and she helped us with the procedures related to the competition and gave us a general idea of ​​how to organize our work.</p>
            <p><span>Haddock-Angelli Traci and iGEM Headquarters:</span> They helped us solve every query we had about the registration for the competition or the payment procedures.</p>
          </section>
          <section id="sponsors">
            <h2 class="main-title">Sponsors</h2>
            <p><span>R.G.C.C. International GmbH:</span> Research Genetic Cancer Centre</p>
            <p><span>University of Patras</span></p>
            <p><span>NACO XEROX</span></p>
            <p><span>IDT:</span> Integrated DNA Technologies</p>
            <p><span>NEB:</span> New England Biolabs</p>
            <p><span>SnapG</span></p>
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
            currentPage: "Attributions",
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
      scrolled: function () {
        document.querySelector("progress").value = window.scrollY / (document.querySelector("#main-content").offsetHeight - window.innerHeight + document.querySelector("#header").clientHeight) * 100;
      }
    }
}
</script>