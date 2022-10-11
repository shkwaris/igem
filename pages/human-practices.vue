<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
      <section class="intro">
      <div class="container">
          <div class="row">
            <div class="gallery col-xs-12 col-xl-6 align-self-xl-center">
              <a class="half-content" href="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/syn-pnoia-cycle.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/syn-pnoia-cycle.png"/></a>
            </div>
            <div class="col-xs-12 col-xl-6">
                <p>Inspired by "The iGEM Cycle", we oriented the work of our Integrated Human Practices around it. Therefore, changing the categories, we divided our own cycle into 6 new ones while maintaining the chronological order defined by the competition. We start by understanding the problem we are willing to solve, and finally, we come to a proposed implementation and some future steps.
                  If you want to follow us on the journey of Integrated Human Practices, all you have to do is consult the "syn-PNOIA Cycle".</p>
                <p>Respecting personal data and the applicable laws that concern them, our team has created a <a class="link-ref" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/integrated/consent-form.pdf">consent form</a> to be filled out by the participants. Some have decided to remain anonymous and not have their photos published. For this reason, not all of our interviews have photographic material.</p>
            </div>
          </div>
        </div>
      </section>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#section1`" v-scroll-to="'#section1'">Understanding the Problem</a></li>
                <li><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'">Verifying the Need</a></li>
                <li><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'">Define a Good Solution</a></li>
                <li><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'">Design a Good Solution</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section4-1`" v-scroll-to="'#section4-1'" parent="section3">Wet Lab Experts</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section4-2`" v-scroll-to="'#section4-2'" parent="section3">Dry Lab Experts</a></li>
                </ul>
                <li><a :href="`${currentPage}/#section5`" v-scroll-to="'#section5'">Proposed Implementation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section5-1`" v-scroll-to="'#section5-1'" parent="section5">Public Sector</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section5-2`" v-scroll-to="'#section5-2'" parent="section5">Private Sector</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section5-3`" v-scroll-to="'#section5-3'" parent="section5">Future Doctors</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section5-3`" v-scroll-to="'#section5-3'" parent="section5">Future Steps</a></li>
                </ul>
                <li><a :href="`${currentPage}/#section6`" v-scroll-to="'#section6'">Bioethics & Biosafety</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section6-1`" v-scroll-to="'#section6-1'" parent="section6">Governmental Associatons</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section6-2`" v-scroll-to="'#section6-2'" parent="section6">Biosafety & Biosecurity</a></li>
                </ul>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="section1">
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/understanding-the-problem.jpg"/>
            <p>Ηaving already formed our team for iGEM Competition 2022, and in the process of searching for the project we will work on, the idea arose from a lecture at the Medical School of the University of Patras.</p>
            <p>During the Pathology lesson, executed by professor Taraviras, head of the laboratory of Biological Chemistry, lung cancer emerged as a crucial and persistent medical issue. Mr. Taraviras analyzed the pathophysiology of the disease and underlined the high mortality rate of lung cancer due to late diagnosis. Τhis particular lecture became an object of reflection for our team members and immediately sparked interest in further investigation. Focusing on lung cancer diagnosis, we realized the necessity for further research in this sector.</p>
            <p>How about developing a new method to diagnose or even prognose lung cancer to save thousands of lives? </p>
            <p>We immediately came up with various ideas for the resolution of this problem, many of them being too expensive or complicated, requiring much time and technical stuff. So, after much thought, literature studying, discussions, and brainstorming, we ended up with an affordable kit, easily handled, precise, and highly sensitive. This kit is based on an innovative biochemical procedure, and it detects biomarkers in the blood that are over-increased in non-small cell lung cancer.
              First and foremost, we searched the literature to reassure that this approach could be applied and extracted some credible results. Our next step was to reach Mr. Taraviras to share our initial thoughts with him and gain further information related to lung cancer disease.
            </p>
            <p>Aiming to understand our project better, we decided to approach experts in our research field.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/1.jpg"/></a>
            </figure>
            <p>The first official interview was with Cancer Prevention Research Group (CPRGGreece), an independent, free, non-profit group of scientists and volunteers from more than 73 countries.</p>
            <p>We scheduled an online meeting with the CEO and members of CPRG to discuss the statistics of lung cancer, the situation, the facilities, and the healthcare provided to patients with cancer, medically and psychologically. CPRGG presented useful information about the problem and gave us a clear picture of the situation.</p> 
            <p>We were informed that lung cancer is by far the leading cause of cancer deaths among both men and women, amounting to a mortality rate of  81.4%. According to the World Health Organization, lung cancer causes approximately 1.8 million deaths and 2.21 million new cases annually.</p>
            <p>“More than 50% of cancer cases could have been prevented” and “everyone as an individual should not only focus on dangers that may cause cancer, but also on the protective measures we could take to reduce the risk, such as aerobic exercise, avoidance of harmful substances, stress reduction and a healthy diet and lifestyle” were the statements that concerned us more.</p> 
            <p>Nowadays, cancer has become a blight, and technological advances have only provided minimal improvement in cancer diagnosis, management, and therapy.</p> 
            <p>However, this problem also has a more profound cultural background since people mainly depend on the healthcare system and do not care about themselves individually. As a result, they neglect their symptoms, and eventually, when they go to the hospital, it’s too late, and the condition has worsened. All of the above definitely convinced us to keep up with our research. Due to our excellent cooperation and the friendly environment between us and CPRG, we discussed the possibility of organizing some combined actions together intending to raise and concern the public.</p>
            <p>After we had formed an insight into the epidemiological and statistical data of the disease, we were looking for a valid source of information about lung cancer pathophysiology in order to get a full, complete picture of the problem we aim to solve and to compare and evaluate the currently used diagnostic methods. Therefore, it was imperative to turn to a specialist oncologist.</p>    
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/2.jpg"/></a>
            </figure>
            <p>We contacted Mr. Nikolaos Tsoukalas, Medical Oncologist, MSc in Bioinformatics, Deputy Director of the Oncology Department at 401 General Military Hospital, Consultant at Henry Dunant Hospital Center of Athens, who shared with us scientifically-based details about lung cancer.</p>
            <p>First, he defined cancer, in general, as abnormal cell proliferation related to the dysregulation of the cell cycle. Then, he specifically explained to us that lung cancer differs from thoracic cancers such as lymphoma, and this is due to the structure of the cells but also the different utilization of the proteins on their surface. He underlined that lung cancer divides into two main types, Small Cell Lung Cancer (SCLC) and Non-Small Cell Lung Cancer (NSCLC). The first one relapses more quickly, while the second one has a greater frequency and diversity as it is divided into subtypes: adenocarcinoma and squamous carcinoma. To distinguish the type of lung cancer a patient is suffering from, molecular genetic analysis is necessary, and this separation is crucial for the disease's staging, treatment, and prognosis.</p>
            <p>Referring to the risk groups and the factors that trigger lung cancer, Mr. Tsoukalas pointed out that heavy smokers, mine workers being exposed to harmful substances and chemicals, such as asbestos, radon, or even people inhaling fibers or dust, e.g., carpenters are by far more prone to lung cancer. He also highlighted air pollution and a history of lung disease as risk factors. As far as the symptoms are concerned, he mentioned cough, fever, hemoptysis, chest pain, and weight loss as the main ones and added that, often, the diagnosis due to metastases could be prompted by symptoms such as dizziness, epilepsy, blurred vision, and bone pain.</p>
            <p>However, he emphasized that symptoms usually appear at a very advanced cancer stage, where the tumor is not curable. Consequently, the vast majority of patients do not survive. At this point, he expressed the great need for the medical community to find a more timely diagnostic method that would allow cancer to be detected at an early stage so that the therapy would be possible.</p>
            <p>Mr. Tsoukalas also referred to the diagnostic techniques for lung cancer. He told us that the most commonly used ones are tissue sample biopsy, computed tomography, bronchoscopy, collection of lung fluid for examination of cells, magnetic resonance imaging (MRI) scan, positron emission tomography (PET) scan, chest x-ray, and, occasionally, sputum cytology. However, despite a wide range of diagnostic methods, lung cancer is yet a late-diagnosed disease and has lately been the subject of intensive research.</p>
            <p>Finally, after revealing to Mr. Tsoukalas our intention to design an innovative diagnostic tool and our initial thoughts for biomarkers detection-based diagnosis, he considered our idea as an up-and-coming solution that requires lots of research to be done. Furthermore, Ηe drew attention to the validity of specialist doctors regarding the diagnosis, suggesting that the test we will create is preferable to be prescribed and carried out in a special molecular analysis laboratory by experts and not as a self-test kit.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/3.jpg"/></a>
            </figure>
            <p>Our team organized a very interesting meeting with the Head of the thoracic surgery department of Hippocrates hospital in an effort to better acknowledge the process of surgical treatment of lung cancer and how it is affected by the diagnostic approach.</p>
            <p>Dr. Stavropoulos clarified that the patient was transferred to the proper hospital department for cancer verification according to the tumor's location in the lungs. If the tumor is located centrally and can be examined through the respiratory tract, the patient will have an endoscopy by a pulmonologist. However, if the lung tumor is distal, the patient will have surgery to extract cancer tissue and examine it.</p>
            <p>After that, if the patient has lung cancer, an oncologist board meeting will occur, in which doctors from various specialties will decide if the patient will benefit from the surgery, considering his age, other medical conditions, cancer type, and stage. The percentage of successful surgeries is related to the patient's profile, type of cancer, and complementary therapy. A typical surgery which is done with the "open" method, takes around 1-1,5 hours, and a routine surgery which is done with thoracoscopy, takes approximately 2-2,5 hours.</p>
            <p>Lastly, after presenting all these details about the procedures, he highlighted that an early diagnosis of lung cancer would facilitate his work and save thousands of lives, so he encouraged us to keep up the excellent work. In a few words, the meeting with Dr. Stavropoulos was beneficial and helped our team better understand the surgical procedures and diagnoses based on them.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/4.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/4.jpg"/></a>
            </figure>
            <p>Our team held another interesting meeting with Mr. Symeonidis, a Hematologist at the Hematology Department at the University Hospital of Patras. The purpose of our meeting is to understand the role of a hematologist in the diagnosis of lung cancer.</p>
            <p>More specifically, he referred to the fact that other medical specialties cannot detect the symptoms of the disease in time with corresponding techniques, resulting in the patient ending up in an advanced stage. He emphasized that the specialty of the hematologist is applicable in the diagnosis of any form of cancer and can contribute to its detection at an early stage.</p>
            <p>During our discussion, he mentioned the concept of liquid biopsies, a technique we had never heard of before and piqued our interest. So, we asked for more information about them, and he broke down their applications. More specifically, he referred to liquid biopsies with blood samples relating to his field of expertise and the pros and cons they may have in cancer detection.</p>
            <p>So it gave us the idea to invest more in the field of liquid biopsies.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/5.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/5.jpg"/></a>
            </figure>
            <p>To understand a problem fully, we should perceive all aspects of it. For example, one of the things we need to know about cancer is the patient's psychological position.</p>
            <p>Thus, our next meeting, which seemed particularly beneficial to us, was with the psychologist and psychotherapist Georgia Panitsa, a member of the association "Alma Zois." It is a Panhellenic Association of Women with Breast Cancer founded in 1988 by women who had personally experienced this type of cancer.</p>
            <p>Since Mrs. Panitsa is a psychologist in this association, we had the opportunity to talk about the patient's psychology throughout the time he was dealing with cancer. She also managed to orient us precisely around the problem since she explained in detail the everyday life of a cancer patient, from the diagnosis to the final stages of the treatment as well as the later stages of his life.</p>
            <p>Through our discussion, we understood the psychological wear and tear experienced by a patient with cancer of any type. At the same time, Mrs. Panitsa emphasized the vital prognosis achieved with the early cancer diagnosis as the key to reducing the number of patients suffering from this disease.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/6.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/6.jpg"/></a>
            </figure>
            <p>The next step was communication with a cancer institute or association since their members are constantly in contact with patients or even work with doctors; the result is that they precisely know the prevailing situation regarding lung cancer. For this reason, we contacted the association "Pnoi Agapis," whose members started in 2007 with the vision of providing shelter to cancer patients and their companions from specific regions of Greece to undergo external treatment.</p>
            <p>Our online meeting was attended by three members of the association, two of whom were doctors, so they provided us with the statistical data that is valid to date for lung cancer both in Greece and globally, highlighting the necessity of early diagnosis.</p>
            <p>Already knowing that lung cancer is the second most common type of cancer, the discussion with the association's doctors allowed us to further search the diagnostic methods that exist to date.</p>
            <p>During the call with the patient’s association, Pnoi Agapis, we had the chance to communicate with a radiologist, Mr. George Pissakas, who not only informed us about lung cancer statistics but also helped us gain an accurate understanding touching the pros and cons of the existing diagnostics techniques, especially chest x-ray.</p>
            <p>Chest x-rays usually are the first imaging tests done by a doctor to look for lung tumors. However, they cannot differentiate malignant from benign tumors or even detect smaller tumors.</p>
            <p>Another disadvantage of this method is the often extraction of a false-negative result. For this reason, such an examination cannot be considered valuable enough to diagnose lung cancer, and consequently, the necessity for developing a new method is obvious.</p>
          </section>
          <section id="section2">
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/verifying-the-need.jpg"/>
            <p>Concerned with the information we collected from previous meetings on lung cancer and its mortality rates, we wanted to get feedback on the current situation from people with a high risk of developing this type of cancer.</p> 
            <p>More specifically, our team made a questionnaire to get insights about people's knowledge concerning lung cancer and check if they are willing to try a liquid biopsy and biomarkers detection–based test. The survey was conducted among high-risk groups such as heavy smokers and mine workers exposed to asbestos and other harmful metals, i.e., people requiring regular lung cancer screening.</p>
            <p>We reached a construction industry involving chemicals hazardous to lung health and forwarded our questionnaire to the workers. Below are presented the results:</p>
            <div class="gallery grid2">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco1.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco2.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-1.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-2.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-3.jpg"/></a>
            </div>
            <div class="gallery grid2">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco1.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco2.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-1.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-2.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3-3.jpg"/></a>
            </div>
            <p>9. If not, for what reason?</p>
            <p>In this question, the participants filled in a short answer, with the most frequent being for preventive reasons.</p>
            <p>To summarize, there is a weak background and little knowledge about lung cancer and the importance of an early diagnosis among the sample of our survey. Consequently, the majority of the participants did not have any test for lung cancer due to lack of awareness. However, we were pleased to see that most of the workers who were asked if they would undergo our test answered positively, realizing that it is possible to detect lung cancer at an early stage and have higher chances of coping with it.</p>
            <p>Gathering all the advice and concerns of the experts and associations we contacted in the initial steps for the project design, we were informed and confirmed the necessity of creating a prompt and reliable diagnostic tool to detect lung cancer in its early stages.</p>
          </section>
          <section id="section3">
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/define.jpg">
            <p>With all the knowledge we acquired from our previous Human Practices meetings regarding lung cancer, we decided that the methodology of Liquid Biopsied, first introduced to us by Dr. Simeonidis, had the potential to be developed in an innovative early-stage diagnostic test. It was our first time hearing about Liquid Biopsies, so our first step was researching this subject further.</p>
            <p>That way, we came upon Galatea Kallergi, an Assistant Professor of Biochemistry at the University of Patras and a researcher at the European Liquid Biopsy Society (ELBS).</p>
            <p>We discussed the advantages and limitations of Liquid Biopsies and their implementation in lung cancer diagnosis. Compared to traditional tissue biopsies, their crucial advantage is their ease of sampling. In addition, being a non-invasive diagnostic method often means that a patient will be more eager to get tested for lung cancer by a simple blood test rather than a more complex examination such as a CT or a PET scan.</p>
            <p>Then our curiosity got the better of us, and we wondered why haven't a diagnostic test already been developed for lung cancer diagnosis. She pointed out that as appealing as Liquid Biopsies sound, they come with some limitations. The main one is that they need further clinical support to surpass the accuracy of tissue biopsies.</p>
            <p>Furthermore, a diagnostic test structured around Liquid Biopsies must be carefully assessed for its accuracy and ability to be implemented for various cancer subtypes due to the complexity of the tumor's genetic background. However, that does not mean medical personnel cannot use them to bridge the gap between early-stage diagnosis and the intricacy of tissue biopsies. So we were convinced to structure our early-stage diagnostic test around Liquid Biopsies, and the expertise Prof. Kallergi possessed made it clear that she should be one of the PIs our team needed. Thankfully she agreed to guide our project!</p>
            <p></p>
            <p>"An accurate diagnostic test using Liquid Biopsies consists of two crucial parts: a sensitive diagnostic technique and carefully selected biomarkers." These were the words of Despina Kalogianni, an Assistant Professor of Nanotechnology at the University of Patras. In our first meeting, she clarified that the diagnostic technique is centered around the biomarker.</p> 
            <p>Different types of biomarkers can be implemented into lung cancer diagnosis with Liquid Biopsies, from cancer antigens, such as PD-L1, to circulating tumor DNA and RNA (e.g., miRNA). Each one possesses certain advantages and disadvantages. She advised us to choose the desired biomarker. She introduced us to Dr. Liloglou Triantafillos, Director of the CardioRespiratory Research Centre, Faculty of Health, Social Care & Medicine / Edge Hill University.</p> 
            <figure class="gallery">
              <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
            </figure>
            <p>His help guided different aspects of our project. The first one is the choice of a lung cancer-specific biomarker. In our discussion, we got introduced to circular RNAs (circRNAs). Single-stranded circular RNAs derived from non-canonical backsplicing are found in extracellular vehicles and exosomes, giving them extra stability. The regulation of expression of many circRNAs in cancer cells seems to play a vital role in the onset and development of the tumor. In addition, they act as regulators of cell proliferation, metastasis, apoptosis, induction of resistance to many drugs, regulation of the tumor microenvironment, and immune tolerance.</p> 
            <p>Apart from that, they can be used as possible diagnostic, prognostic, or therapeutic biomarkers, ideal for liquid biopsy because:</p>
            <p>Compared to linear RNA biomarkers, they are found in large quantities in body fluids; their abnormal expression is associated with cancerous tissue and its developmental stage. Their circular structure provides them with excellent stability compared to linear RNAs because nuclease digestion is limited. Therefore, they can be combined with traditional biomarkers to increase the accuracy of the diagnosis. He also pointed out that they possess certain limitations due to their novelty, and it would be better to have a biomarker panel rather than choosing a specific circRNA target. This newly found information intrigued us to integrate circRNAs in our approach to diagnosing lung cancer in its early stages. With that in mind, we asked how circRNAs can be identified. He indicated that commonly used techniques include RNAseq, microarray assay, and the use of molecular beacons, suggesting we approach Torosiadis Nikolaos: Head of Department for Biological sample collection, processing, isolation, storage, and information management at the Access to Genome - ATG Laboratory for further information. Dr. Liloglou's help did not stop right there. Please refer to the Design a Good Solution section of our Integrated Human Practises, for information about our discussion.</p>
            <p></p>
            <p>Before moving on to the next step turning point in our project was presented; what circRNA biomarkers would we choose?</p>
            <p>After countless discussions between team members and numerous literature reviews, we decide on our biomarker panel, consisting of three circRNAs specific to lung cancer. These were hsa_circ_0070354, hsa_circ_0102533, hsa_circ_0005962. (references). Please refer to the Model page for more information on the biomarker selection.</p>
          </section>
          <section id="section4">
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/design.jpg">
            <p>After completing the biomarker selection process, we faced the difficult task of designing a diagnostic technique that provides easy, fast, and reliable detection of circRNAs, even at low concentrations, within a complex sample.</p>
            <p>Choosing circular RNAs as specific biomarkers for our diagnostic tool, our next step was to evaluate and compare all of the existing techniques for the detection of circular RNAs in order to finally pick the most suitable one for our case.</p>
            <p>After studying and conducting extensive research on circRNA targeting techniques, we decided to reach a specialist geneticist, particularly Mr. Nikos Torosiadis, the Head-Biomedical scientist at the Access to Genome Laboratory and Head of Dept. "Exercise Biochemistry & Epigenetics - Exercise Oncology" at CPRG Greece. Due to his expertise in biological sample collection, processing, isolation, storage and information management, he provided us with beneficial information about the pros and cons of each technique.</p>
            <p>In more detail, he explained to us hybridization-based methods:</p>
                <ul class="bullets">    
                  <li>RNA sequencing: Besides the reliable, fast results provided, it is by far less sensitive and accurate, requires a high amount of total RNA, it is expensive, low-efficient, time-consuming, and more prone to be influenced by endonuclease contamination.</li>
                  <li>Northern blotting has good specificity but low sensitivity and throughput; it is labor-intensive, time-consuming, and requires a large amount of RNA.</li>
                  <li>Microarray-based circRNA detection is superior to RNA seq since it can be applied to identify a wide range of circular RNAs, testing multiple samples simultaneously. Though it requires a high input of RNA, only measuring relative concentrations of RNA and it has low specificity and sensitivity.</li>
                  <li>Fluorescence in situ hybridization (FISH) allows subcellular localization of circRNAs. Still, the creation of probes is challenging, time-consuming, non-quantitative, and costly equipment for signal detection is required.</li>
                </ul>
            <p></p> 
            <p>We gained information regards amplification-based methods, also known as PCR (Polymerase Chain Reaction):</p>
                <ul class="bullets">    
                  <li>qRT-PCR is 1000-fold more sensitive than the previously mentioned methods. Nevertheless, it is not the most appropriate for the detection of circRNAs, since a single circRNA molecule can produce several repeated cDNA copies and that can lead to an overestimation of circRNA concentration. What is more, it is a costly procedure with low throughput.</li>
                  <li>RT-ddPCR: Even though it has high sensitivity, it is not pickable for our project due to the low throughput and the expensive equipment for signal detection.</li>
                  <li>Ligation-based PCR avoids rolling circle amplification limit of quantification, yet it has the limitation that only one circRNA can be detected at a time.</li>
                </ul>
            <p></p> 
            <p>Additionally, we discussed stem-loop primer-induced double exponential amplification-based circRNA detection:</p>
                <ul class="bullets">
                  <li>Loop-mediated isothermal amplification (LAMP): trace amounts of the target can generate large quantities of product in a single amplification step. Still, the elaborated and costly design of primers and the low throughput make it an unreliable technique for our diagnostics.</li>
                  <li>RNA detection using stem-loop primers (SLP), despite being the most sensitive method for circRNA profiling, is high-priced and requires elaborate design of primers.</li>
                </ul>
            <p></p> 
            <p>Nuclease-assisted amplification methods were also considered if they are applicable in detecting the circRNA triplet we aim to target. </p>
                <ul class="bullets">
                  <li>Duplex-specific nuclease (DSN) and Electrochemical assay with back splice junction site recognition and DSN-assisted amplification could not be selected for our project due to low amplification efficiency.</li>
                </ul>
            <p></p>        
            <p>Αpart from the techniques above, Rolling Circle Amplification-based circRNA detection caught our interest, and we soon concluded that it was the appropriate method to apply for the detection of circular RNAs in our diagnostic project.</p>
                <ul class="bullets">
                  <li>Linear DNA Nanostructure (LDN), which is used for imaging circRNAs in cells, is the key method for syn-PNOIA, since it combines high specificity with a limit of detection: 1pM with quantitative detection of circRNAs. One of the most important advantages of it is that a single circRNA can catalyze multiple LDNs, leading to signal amplification, and making the detection procedure way faster. Rigorously investigating this method, we searched for possible defects of it to figure it out and improve our experiments by ensuring the proper specifications</li>
                </ul>
            <p></p>    
            <p>With all the information we acquired, we reached back to Prof. Kalogianni to present what Dr. Liloglou and  Mr. Torosiadis presented. </p>
            <p>She was intrigued with the implementation of Rolling Circle Amplification (RCA) in our project and suggested that Molecular Beacons could hybridize to the long linear RCA product originating from a circRNA biomarker. Although that sounded like a great idea, we decided to find a way to incorporate both techniques into one "tool."</p>
            <p>Her expertise in Nanotechnology proved helpful because we aimed to create a Diagnostic Nanostructure after our two-hour conversation. Unfortunately, little research was done on nanostructures incorporating molecular beacons. However, a study done in 2020 about Linear DNA Nanostructures, possessing advantages lacking in other circRNA detection methods, was the starting point of the design of our diagnostic test. Prof. Kalogianni found our enthusiasm about this project exciting and she accepted to be our second PI.</p> 
            <p>That way, we created the foundation of our team.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
            <p>The advice we sought was categorized into Wet Lab and Dry Lab experts.</p>
            <section id="section4-1">
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg">
              <p>A second discussion with Dr. Liloglou proved that an excellent experimental starting point would be total RNA extraction from lung cancer cell lines since handling patient blood samples requires caution. Two methods for cell RNA extraction are alcohol precipitation and column purification when using TRIzoL reagent. With alcohol precipitation, we needed to ensure that RNA should be extracted from the first one while separating the clear aqueous and the phenol-red organic phases. </p>
              <p>Finally, he provided information on general practices used in experimental laboratories. These practices include the preparation of aliquots, decontamination of workspace areas, with 70% ethanol or bleach, before experimenting. </p>
              <p>Having orchestrated our experimental design, we set out to execute the much-needed lab work. Kalligosfyri Panagiota, one of our instructors, provided much-needed guidance in our first experiments. Her laboratory experience helped us with fluorescence measurements, gel-electrophoresis troubleshooting, and even with buffer preparation. In addition, she instructed us on how to use specific machinery, such as a Thermal Cycler and a Microplate Fluorescence reader, to minimize errors. Also, Vardas Vasileios modified the RNA extraction protocol by adding an extra vortexing step, better separating the aqueous and organic phases, resulting in a higher RNA extraction yield.  </p>
              <p>We​​ consulted Dr. Klapa Maria, founder, and head of FORTH/ICE-HT Metabolic Engineering and Systems Biology Laboratory, for her expertise in mathematical modeling of biological systems and networks and quantitative systems biology. </p>
              <p>She immediately pointed out poor decisions and flawed processes that we must avoid to prevent mistakes in analyzing and quantifying fluorescence signal. She advised us not to be biased by our findings in the literature. She explained that the fluorescence measured is determined by the concentration of the biomarker and molecule interactions between fluorophore and quencher. Dr. Klapa elucidated that we should study the relationship between target concentration and fluorescence intensity. To achieve this, a positive control is required in our diagnostic kit. We discussed using the back-splice junction sequence of the circRNA as a model target in known concentration for method optimization. However, we concluded that the whole circRNA sequence should be present for unbiased method validation. In addition, she recommended that we should study fluorescence as a function of time to calculate the optimal time for each LDN-circRNA system to reach equilibrium (maximum fluorescence signal). </p>
              <p>In a second meeting, we discussed some must-have features for the diagnostic kit we plan to distribute. </p>
              <p>First, Dr. Klapa suggested that our diagnostic kit should contain a reference sample. When a product is stored for long periods, the fluorescence signal might decay, or our nanostructure might denature. So, we should include a control that can be tested simultaneously as our sample. In addition, the reference sample must return an expected value to ensure the test is valid. </p>
              <p>She also suggested that the test should contain a total RNA extraction kit besides our diagnostic kit. She gave us the idea that we need to collaborate with a company that provides an RNA extraction kit or even create our own in the future. </p>
              <p>In addition, she told us that, given the detection limit of our technique, we should calculate the amount of blood sample we need to have the optimal result and that this amount must be minimum to keep the test as less invasive as possible.</p> 
              <p>After getting our first results, we reached out to Vizirianakis Ioannis: Associate Professor of Molecular Pharmacology and Pharmacogenomics at the Aristotle University of Thessaloniki Department of Pharmacy.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>In terms of our partnership with Thessaloniki_Meta, we got the opportunity to present our idea and our results to Prof. Vizirianakis, gaining very insightful feedback on our idea. In addition, he suggested the integration of fluorescent spectra into our measurements. Implementing that idea to our experiments helped us view how our fluorophores respond to different wavelengths. </p>
              <p>He also validated that our idea has enormous upside potential to be developed in a diagnostic test and suggested reaching out to companies involved in cancer diagnosis.</p>
              <p>With that idea in mind, we reached out to RGCC International GmbH,  a Cancer Research Centre, to present our idea. We spent a day discussing our project with Ioannis Papasotiriou, CEO of RGCC, Panagiotis Apostolou, Molecular Biologist and expert in Fluorophore selection, and Panagiotis Parsonidis, Molecular Biologist and expert in cancer cell line culture.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>They suggested incorporating multiple lung cancer cell lines to test if our circRNAs are present in all subtypes. Special care must be taken with their culture to minimize sample contamination. Fluorophore selection was also a crucial part of our project. Dr. Apostolou pointed out that minimal spectral overlap must be present if we aim to detect all three circRNAs in the same reaction mixture, a piece of knowledge that got incorporated into our Engineering Success process.</p>
            </section>
            <section id="section4-2">
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>In order to successfully implement modeling work in the Wet Lab guidance we got, we reached out to experts in the field.</p> 
              <p>The first problem we encountered was installing the needed Dry Lab software. We were unfamiliar with using UNIX-based software, and at first, we struggled even with a basic installation of Linux. </p>
              <p>The solution to our problem came from Βochalis Christodoulos, MSc in Artificial Intelligence at the National Centre for Scientific Research "Demokritos." He was our coding Guru, guiding us through every step regarding basic terminal commands and compiling the software we implemented in our project. In addition, he showed us how to get started with the Windows Subsystem for Linux and Python coding language. </p>
              <p>He also helped us create our Software by integrating loops in the NUPACK software to obtain the thermodynamic properties and all the possible structures for the various components of our system. That way, we can model our whole reaction with the simple input of a mature circRNA sequence. Please refer to the Model and Software pages for the thermodynamic results and a detailed description of the ldn_generator.py, respectively.</p> 
              <p>After countless conversations with Mr. Bochalis, we offered him to be our advisor, and to our surprise, he accepted!</p>
              <p>Now that we had installed WSL2 and knew how to use the basic commands, our next step was to gather the software we needed to achieve a comprehensive model.</p>
              <p>The first step was the verification of the biomarkers selected with Bioinformatic analysis. We contacted Miliotis Marios: Ph.D. Candidate and Researcher at the University of Thessaly to instruct us on our first steps.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>He proposed to incorporate databases such as Gene Expression Omnibus (GEO) and Cancer-specific circRNAs database (CSCD) to analyze the expression profiles of hsa_circ_0005962, hsa_circ_0102533, hsa_circ_0070354 in patient blood samples and cancer cell lines, respectively. In GEO, datasets are derived from sequencing and microarray results. Data can be analyzed with the GEO2R converter on the website, while in CSCD, datasets from RNA-seq are presented.</p>
              <p>Although we performed a Bioinformatic analysis of our selected biomarkers, the sample size was insufficient to extract statically robust data. On the other hand, in cancer cell lines, the targeted circRNAs were found overexpressed compared to healthy controls, a fact validated by our Wet Lab experiments. Please refer to our Model page for the bioinformatic analysis results and the Results page for the biomarker validation. </p>
              <p>Finishing our conversation, he also proposed that we study the interaction of the components of our Nanostructure.</p>
              <p>For that cause, we got in touch with Kavakiotis Ioannis: Head of the Biomedical Data Science and Bioinformatics Unit. It was very insightful since his knowledge in fields such as nucleic acid interaction, structure modeling, and Molecular Dynamics gave us a good view of what to expect. </p>
              <p>He confirmed Mr. Miliotis's claim that two programs are commonly used for nucleic acid interactions, NUPACK and ViennaRNA. </p>
              <p>We successfully implemented both programs into our pipeline, NUPACK, to study the interactions between the Nanostructure's components and ViennaRNA to model the secondary structure of the circRNA targets. With NUPACK, we obtained the thermodynamic details of the hybridization between H1/H2 probes and the Linear Rolling Circle Amplification product to create the Linear DNA Nanostructure.</p>
              <p>We preferred NUPACK over ViennaRNA due to its ability to study the interaction of more than two DNA strands. With ViennaRNA, we retrieved the secondary structures of all three circRNAs by using the circular RNA molecule parameter in dot-bracket notation. That secondary structure was later used for the tertiary structure modeling. Being able to visualize our reaction components even in 2D was helpful to us because we understood how our designed structures conformed.</p>
              <p>For the Part on Molecular Dynamics, Mr. Kavakiotis suggested we approach Mr. Kourkoumelis Nikolaos: A biophysicist at the department of Medicine at the University of Ioannina expert in Drug Design and Molecular Dynamics.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>Mr. Kourkoumelis was our simulation guru; we did several ZOOM meetings to troubleshoot problems arising each time. In addition, he introduced terms such as Force Field, Simulation Box, and Molecular Dynamics in general. </p>
              <p>Mr. Kourkoumelis helped us understand the PDB file format, being the coordinates of each atom in space, and instructed us on what results we should expect from our simulations. From our results, we should deduct if our Nanostructure is structurally stable in time.</p>
              <p>He suggested Simulation programs such as YASARA, NAMD, GROMACS, and oxDNA. From there, we integrated GROMACS and oxDNA in our modeling work, the first to study the interaction between phi29 DNA Polymerase and the circular DNA template and the binding of T4 DNA ligase to the DNA template. The circular DNA template was prepared using oxDNA, a coarse-grained DNA model.</p>
              <p>A Molecular Dynamics protocol typically consists of the following steps: Simulation Box formation, Molecule solvation, Energy minimization, Structure Equilibration, and Molecular Dynamics simulation. That was the guidance Mr. Kourkoumelis provided, and we followed these steps accordingly. He also noted that our input files must be in PDB file format and that the most crucial step in Molecular Dynamics is input file preparation. Finally, he pointed us towards Laimos – Geranios Konstantinos: MSc student at the Laboratory of Medicinal Chemistry.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>Now that we had gathered the necessary information to start our first Molecular Dynamics simulation, we reached out to Mr. Laimos. During our conversation, he suggested that we convert our secondary structures to tertiary ones. </p>
              <p>For the oxDNA format files, tacoxDNA was the way to go for their conversion to PDB format. </p>
              <p>For the circular RNAs, he guided us to use 3DRNA, a web server able to generate tertiary RNA structures by importing the structure's sequence and secondary structure, dot-bracket notation. </p>
              <p>The server then minimizes the 3D structure using THE AMBER force field. "Visualization should be done with VMD," he said, "and while sometimes bond breaking might occur, you still should continue with your simulation. During conversion, these problems are common." </p>
              <p>Finally, he instructed us first to dock the circular DNA template to the protein using the HDOCK web server or the HADDOCK 2.4 webserver. We integrated the use of HDOCK into our modeling work, generating complexes with good docking scores. Please refer to the Model page to view our results.</p>
            </section>
          </section>
          <section id="section5">
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/implementation.jpg">
            <p>Taking into account all of the advice from the experts we reached throughout our human practices, we finally formed our complete proposal for addressing lung cancer diagnosis. Our next step was to consider the implementation and applicability of our proposed solution, the diagnostic tool called "syn-PNOIA."</p>
            <p>How would we do that?</p>
            <section id="section5-1">
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg">
              <p>During our visit to Thessaloniki, we contacted the Greek Medical Association in the partnership framework. In addition, we presented the diagnostic tools that we recommend and explained that in this way, we could achieve early diagnosis to increase survival rates.</p>
              <p>Administrators there confirmed that prevention and early diagnosis could dramatically change cancer death rates. Therefore, they ensured that the proposed screening technique could be applied in the Greek Health System and guided us to speak with other public sectors such as hospitals, clinics, and doctors.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>Taking into account the discussion with the members of the Greek Medical Association, we decided to organize a second interview session with the doctors we had contacted in our initial steps.</p>
              <p>Having the completed idea, the discussion with the experts focused on their opinion about it. We were mainly interested in knowing the impact that the diagnostic tool we developed might have.</p>
              <p>For example, for the oncologist and the thoracic surgeon, the main question we wanted them to answer was whether they would recommend this particular screening test to the high-risk patients under their care. Wanting to include the psychological impact, the second communication with the psychologist gave us encouraging feedback as she assured us that the existence of a diagnostic test for the early diagnosis of lung cancer would particularly relieve a potential patient.</p>
            </section>
            <section id="section5-2">
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg">
              <p>The first and prominent supporter of our team's project is the company Research Genetic Cancer Center (RGCC).</p>
              <p>From the beginning of planning our idea, when we were still looking for sponsorships to cover the project's costs, the CEO, Mr. Papasotiriou, and the supervisor, Mr. Apostolou, believed in our idea and decided to support it both financially but mainly in the laboratory part.</p>
              <p>Continuing with the development of our idea and when we visited the company's headquarters in Greece, more laboratory members thought our diagnostic test had enough potential and could develop into a primary diagnostic tool for lung cancer. After a long meeting, they gave us additional consultants, both laboratory instructions and the dry lab part, to use for further development.</p>
              <p>Finally, as soon as we completed all the required experimental procedures and the business plan regarding the so-called syn-PNOIA diagnostic tool, our team presented the now-completed vision to all company members. Their response was immediate, and we concluded that "syn-PNOIA" would undoubtedly be a diagnostic test that RGCC will promote throughout the network of patients and doctors with which it collaborates. After all, if they did not believe in our team, Patras Medicine, from the beginning, they would not finance our entire project, as Mr. Papasotiriou mentioned in one of our initial meetings.</p>
              <p>Looking for companies that could use the diagnostic tool "syn-PNOIA," we contacted Menarini Hellas. It is an international Pharmaceutical Group that has released pharmaceutical preparations in the Pharmaceutical Market, mainly in the cardiovascular and respiratory systems category.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>We had the honor of communicating with Mr. Nasigogos Dimtrios, Sales Manager at Menarini Diagnostics Hellas, whose advice played a significant role in completing the product sheet. At the beginning of the meeting, he gave his verification about the quality of the product sheet, underlining that it has all the needed parts.</p>
              <p>In addition, he stated that the cost of printing and translating the product sheet would be high if we aimed to distribute it in Greece and especially abroad. He also stated that we must not use product reference number or trademark because it has to be approved by regulatory authorities. Later, he suggested that the blood volume received for the analysis has to be as small as possible and that 1mL is the ideal volume. Finally, he advised us to avoid whole blood storage and set a price of around 130€ per kit.</p>
              <p>Regarding the implementation that the kit and the diagnostic tool could have, he told us that their company has similar tools, but they are not as innovative. However, he also pointed out the low cost at which they will be available on the market, which makes it even more affordable for a more significant portion of the population, without excluding anyone from the early diagnosis of lung cancer.</p>
            </section>
            <section id="section5-3">
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg">
              <p>Appreciating the evaluation of our idea by young scientists, we sought to communicate with a young oncologist.</p>
              <p>We hosted a zoom meeting and interviewed the oncologist, Galateia Liouta, who is currently working at General Oncologic Hospital in Kifisia, Greece. She gave us a fresh view of the pathophysiology of cancer cells in the lungs and deepened our understanding of its molecular mechanisms.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>Ms. Liouta presented us with the sequence of the necessary procedures to diagnose lung cancer, starting from an x-ray of the thoracic cavity, followed by a magnetic tomography, and the last step is a biopsy of the spot in which the tumor is located to ensure its presence.</p>
              <p>Admitting the complexity of the above procedure and after we presented her syn-PNOIA, Ms. Liouta told us that our idea seems very promising and that, after it gets approved, our examination could solve the problem of a lung cancer diagnosis.</p>
              <p>However, she underlined that to cope with the current situation, patients and doctors should be properly informed about the severity of the disease and the importance of prognosis.</p>
            </section>
            <section id="section5-4">
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg">
              <p>At this point, we had successfully contacted several experts, companies and associations who enhanced our knowledge on lung cancer and contributed to the development and improvement of our project and we additionally previewed our idea from the perspective of patients and high-risk groups.</p>
              <p>Having almost completed our Human Practices, syn-PNOIA was formed as follows: Combining the examination of blood samples, liquid biopsy, and the detection and quantification of certain overexpressed circular RNAs as specific biomarkers, we designed an innovative screening test aiming to redefine lung cancer diagnosis. Pointing out that our test is performed easily, quickly, without the need for surgery or specialized equipment, as the main advantages, our goal is to get our diagnostic tool approved for usage in molecular analysis laboratories, clinics and diagnostic centers.</p>
              <p>Such an examination can be established as an annual check up especially for people with a high risk of cancer -such as heavy smokers, consequently increasing patients’ chances of survival even up to 80%.</p>
              <p>Shielding and saving human life has been our motivation as Patras Medicine team to develop our test named syn-PNOIA and contribute to the progress of medical science.</p>
            </section>
          </section>
          <section id="section6">
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/bioethics.jpg">
            <p>After we had completed and fully developed project syn-PNOIA, we could not help but deeply investigate the legal, safety and bioethical aspects of our proposed solution. Since we were concerned about the approval process of our project we firstly got in touch with governmental associations.</p>
            <section id="section6-1">
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/bioethics.jpg">
              <p>National Organization for Medicines (EOF in Greek) is the regulatory organization in Greece for medicinal and pharmaceutical products for human and veterinary use, food supplements, medical aids and cosmetics. EOF in line with the regulations of the European Union, evaluates and approves new safe and effective products. Αmong its missions is the control of the production of in vitro diagnostic products before they are widely implemented.</p>
              <p>Communication with this sector was therefore imperative in order to ensure the safety and effectiveness of our diagnostic tool and to thoroughly investigate bioethics of our project.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>We performed an insightful zoom meeting with Ms. Nikokavoura Aspasia, chemist and employee of the Health Material Evaluation Department of the National Organization for Medicines. </p>
              <p>We found out that our diagnostic is a medical technology product and for such products there has been new legislation established ( regulation 2017 746) that has facilitated the approval process so that it is carried out more directly, including all stages of the product. </p>
              <p>All products are classified into three categories according to their specialization and ours is subject to category C. Conducting specific experiments to ensure the effectiveness of the tool is strictly defined for each category.</p>
              <p>We were also informed that the exact completion of a technical file for our product is mandatory. This file should contain detailed information not only about the process and the production stages, but also preclinical, clinical data and information about the stability and specificity of the product. </p>
              <p>After the file is completed with all of the above information, it has to be sent to a notified body and that is the last step of the approval process. </p>
              <p>Within our investigation on the procedures needed to get our product approved, we thought of contacting an association of international scope in order to cross-reference and enrich the information we had already collected.</p>
              <p>For this reason we scheduled an online meeting with our partners from the iGEM MetaThess team with a European Medical Agency (EMA) representative.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>Firstly, we described the mechanism that our diagnostic tools use and the process that a microbiologist must follow to use the DIAS and syn-PNOIA tools and obtain the diagnostic result. The EMA Representative, whose name he would prefer to remain anonymously, informed us that in 2021 the law 2017//0746 concerning medical devices for laboratory tests considered IVDs (in-vitro Diagnostics) was amended to be classified in the category of Companion Diagnostics. </p>
              <p>To file and get our tool approved for this category, we would have to associate it with a chemotherapy drug for lung cancer. So, we searched the literature and suggested that the patient should be referred for more specialized tests in cases where our diagnostic test is positive.</p>
              <p>Furthermore, once the cancerous tumor is established, cis-platin and paclitaxel should be administered to shrink the tumor. He also told us to carefully read the medical device legislation 2017/0746 and follow the steps outlined there. Finally, he recommended we contact the Ministry of Health and, more specifically, the HTA - Health Technology Assessment to inform us about the process we need to follow to add the syn-PNOIA diagnostic tool to the annual screening.</p>
              <p>Finally yet importantly, before we even started interviews and public contact, we covered any bioethical issues, including personal data. For this reason, our first meeting was with a lawyer whose name he would prefer to remain anonymous. The discussion generally concerned the current legislation regarding personal data and how the individual is protected by the state at national and European levels, also known as GDPR. We also discussed how, as a team, we could register our idea, avoiding any exploitation and interception of our work.</p>
              <p>So, understanding how strict the legislation is, we made sure to create a consent form which will be the first document we will give to the interviews to be signed by each participant. Nevertheless, as a team, we also do not want to put anyone in a difficult position and make sure everyone who has contributed to our effort is aware of their rights.</p>
            </section>
            <section id="section6-2">
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg">
              <p>Having ascertained the steps required for the approval of our kit, our next goal was to get informed of the safety factors.</p> 
              <p>For this reason, we addressed the Technical Security Office at the University of Patras, which provides a Health and Safety Guide. Each section of the guide has been drafted and approved by the Health and Safety Coordinating Committee and is based on international and Greek literature and legislation. Strict observation of the provisions for the conduct of the experimental procedure is mandatory to guarantee the project's safety. </p>
              <p>As far as the safety and security of our project are concerned, we performed additional research, which is extensively presented on our Safety page.</p>
              <p>Moreover, through our participation in the biosafety practices collaboration of iGEM Team-IISER_Mohali, we explained the protective measures and rules in the laboratory step by filming a short video.</p>
              <iframe title="Yale: Biosynthesis of an Optimized (S)-equol Pathway in Gut Microbial Species fo... (2022) - Project Promotion [English]" width="560" height="315" src="https://video.igem.org/videos/embed/4e16b958-4b57-4021-943e-f5a9b31b82d5" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
              <p>Our team had a beneficial meeting with a microbiologist, Mr. Sotiropoulos, who assisted us in blood sample preservation and handling, and he also gave us worthwhile insights about laboratory procedures.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>Fiirstly he explained that after blood collection, we centrifuge the solution to differentiate blood's various substances. Then we extract the part of the solution that contains the biomarkers we are searching for, namely the circular RNAs, and then we can use our test to measure their concentration and decide if there is lung cancer or not. He also pinpointed that blood samples could be stored at -80 celsius for up to 2-3 months. </p>
              <p>Moreover, he explained to us the procedure of blood collection and how to treat the patient, highlighting the importance of using sterile equipment and disinfecting the location of blood extraction in order to get a proper blood sample.</p> 
              <p>In conclusion, our interview with Mr. Sotiropoulos was beneficial concerning our project's biosafety and sampling procedure.</p>
              <p>Concerning the safety rules in the laboratory, we scheduled an online meeting with Mr. Apostolou Panagiotis. He is the Supervisor and Safety and Quality Manager at the Lab Facilities of the Research Genetic Cancer Center in Florina, Greece.</p>
              <p>Firstly, Mr. Apostolou informed us about the protective measures we should follow in the lab for our safety. In particular, he mentioned the dress code and the mandatory lab coats, nitrile gloves, and protective glasses. He then discussed managing bacterial cultures and disposing of bacterial debris and agarose gels after electrophoresis. Finally, he mentioned how the eukaryotic cell lines worked, their cleanliness, and mandatory processing in particular laminar flows. Finally, he asked each group to study the escape plan, which follows the laboratory that works in fire, flood, and earthquake cases.</p>
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
            currentPage: "Human Practices",
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