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
              <a class="half-content" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco1.jpg"/></a>
            </div>
            <div class="col-xs-12 col-xl-6">
                <p>Inspired by "The iGEM Cycle," we oriented the work of our Integrated Human Practices around it. Therefore, changing the categories, we divided our own cycle into 6 new ones while maintaining the chronological order defined by the competition. We start by understanding the problem we are willing to solve, and finally, we come to a proposed implementation and some future steps.
                  If you want to follow us on the journey of Integrated Human Practices, all you have to do is consult the circle.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="intro">
        <p>Respecting personal data and the applicable laws that concern them, our team has created a <a class="link-download" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/integrated/consent-form.pdf">consent form</a> to be filled out by the participants. Some have decided to remain anonymous and not have their photos published. For this reason, not all of our interviews have photographic material.</p>
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
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section3-1`" v-scroll-to="'#section3-1'" parent="section3">Wet Lab Experts</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section3-2`" v-scroll-to="'#section3-2'" parent="section3">Dry Lab Experts</a></li>
                </ul>
                <li><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'">Design a Good Solution</a></li>
                <li><a :href="`${currentPage}/#section5`" v-scroll-to="'#section5'">Proposed Implementation</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section5-1`" v-scroll-to="'#section5-1'" parent="section5">Public Sector</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section5-2`" v-scroll-to="'#section5-2'" parent="section5">Private Sector</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section5-3`" v-scroll-to="'#section5-3'" parent="section5">Future Doctors</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section5-3`" v-scroll-to="'#section5-3'" parent="section5">Future Steps</a></li>
                </ul>
                <li><a :href="`${currentPage}/#section6`" v-scroll-to="'#section6'">Bioethics & Biosafety</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section4-1`" v-scroll-to="'#section6-1'" parent="section6">Governmental Associatons</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section4-2`" v-scroll-to="'#section6-2'" parent="section6">Biosafety & Biosecurity</a></li>
                </ul>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="section1">
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
            </figure>
            <p>Ηaving already formed our team for iGEM Competition 2022, and in the process of searching for the project we will work on, the idea arose from a lecture at the Medical School of the University of Patras.</p>
            <p>During the Pathology lesson, executed by professor Taraviras, head of the laboratory of Biological Chemistry, lung cancer emerged as a crucial and persistent medical issue. Mr. Taraviras analyzed the pathophysiology of the disease and underlined the high mortality rate of lung cancer due to late diagnosis. Τhis particular lecture became an object of reflection for our team members and immediately sparked interest in further investigation. Focusing on lung cancer diagnosis, we realized the necessity for further research in this sector.</p>
            <p>How about developing a new method to diagnose or even prognose lung cancer to save thousands of lives? </p>
            <p>We immediately came up with various ideas for the resolution of this problem, many of them being too expensive or complicated, requiring much time and technical stuff. So, after much thought, literature studying, discussions, and brainstorming, we ended up with an affordable kit, easily handled, precise, and highly sensitive. This kit is based on an innovative biochemical procedure, and it detects biomarkers in the blood that are over-increased in non-small cell lung cancer.
              First and foremost, we searched the literature to reassure that this approach could be applied and extracted some credible results. Our next step was to reach Mr. Taraviras to share our initial thoughts with him and gain further information related to lung cancer disease.
            </p>
            <p>Aiming to understand our project better, we decided to approach experts in our research field.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
            </figure>
            <p>The first official interview was with Cancer Prevention Research Group (CPRGGreece), an independent, free, non-profit group of scientists and volunteers from more than 73 countries.</p>
            <p>We scheduled an online meeting with the CEO and members of CPRG to discuss the statistics of lung cancer, the situation, the facilities, and the healthcare provided to patients with cancer, medically and psychologically. CPRGG presented useful information about the problem and gave us a clear picture of the situation.</p> 
            <p>We were informed that lung cancer is by far the leading cause of cancer deaths among both men and women, amounting to a mortality rate of  81.4%. According to the World Health Organization, lung cancer causes approximately 1.8 million deaths and 2.21 million new cases annually.</p>
            <p>“More than 50% of cancer cases could have been prevented” and “everyone as an individual should not only focus on dangers that may cause cancer, but also on the protective measures we could take to reduce the risk, such as aerobic exercise, avoidance of harmful substances, stress reduction and a healthy diet and lifestyle” were the statements that concerned us more.</p> 
            <p>Nowadays, cancer has become a blight, and technological advances have only provided minimal improvement in cancer diagnosis, management, and therapy.</p> 
            <p>However, this problem also has a more profound cultural background since people mainly depend on the healthcare system and do not care about themselves individually. As a result, they neglect their symptoms, and eventually, when they go to the hospital, it’s too late, and the condition has worsened. All of the above definitely convinced us to keep up with our research. Due to our excellent cooperation and the friendly environment between us and CPRG, we discussed the possibility of organizing some combined actions together intending to raise and concern the public.</p>
            <p>After we had formed an insight into the epidemiological and statistical data of the disease, we were looking for a valid source of information about lung cancer pathophysiology in order to get a full, complete picture of the problem we aim to solve and to compare and evaluate the currently used diagnostic methods. Therefore, it was imperative to turn to a specialist oncologist.</p>    
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
            </figure>
            <p>We contacted Mr. Nikolaos Tsoukalas, Medical Oncologist, MSc in Bioinformatics, Deputy Director of the Oncology Department at 401 General Military Hospital, Consultant at Henry Dunant Hospital Center of Athens, who shared with us scientifically-based details about lung cancer.</p>
            <p>First, he defined cancer, in general, as abnormal cell proliferation related to the dysregulation of the cell cycle. Then, he specifically explained to us that lung cancer differs from thoracic cancers such as lymphoma, and this is due to the structure of the cells but also the different utilization of the proteins on their surface. He underlined that lung cancer divides into two main types, Small Cell Lung Cancer (SCLC) and Non-Small Cell Lung Cancer (NSCLC). The first one relapses more quickly, while the second one has a greater frequency and diversity as it is divided into subtypes: adenocarcinoma and squamous carcinoma. To distinguish the type of lung cancer a patient is suffering from, molecular genetic analysis is necessary, and this separation is crucial for the disease's staging, treatment, and prognosis.</p>
            <p>Referring to the risk groups and the factors that trigger lung cancer, Mr. Tsoukalas pointed out that heavy smokers, mine workers being exposed to harmful substances and chemicals, such as asbestos, radon, or even people inhaling fibers or dust, e.g., carpenters are by far more prone to lung cancer. He also highlighted air pollution and a history of lung disease as risk factors. As far as the symptoms are concerned, he mentioned cough, fever, hemoptysis, chest pain, and weight loss as the main ones and added that, often, the diagnosis due to metastases could be prompted by symptoms such as dizziness, epilepsy, blurred vision, and bone pain.</p>
            <p>However, he emphasized that symptoms usually appear at a very advanced cancer stage, where the tumor is not curable. Consequently, the vast majority of patients do not survive. At this point, he expressed the great need for the medical community to find a more timely diagnostic method that would allow cancer to be detected at an early stage so that the therapy would be possible.</p>
            <p>Mr. Tsoukalas also referred to the diagnostic techniques for lung cancer. He told us that the most commonly used ones are tissue sample biopsy, computed tomography, bronchoscopy, collection of lung fluid for examination of cells, magnetic resonance imaging (MRI) scan, positron emission tomography (PET) scan, chest x-ray, and, occasionally, sputum cytology. However, despite a wide range of diagnostic methods, lung cancer is yet a late-diagnosed disease and has lately been the subject of intensive research.</p>
            <p>Finally, after revealing to Mr. Tsoukalas our intention to design an innovative diagnostic tool and our initial thoughts for biomarkers detection-based diagnosis, he considered our idea as an up-and-coming solution that requires lots of research to be done. Furthermore, Ηe drew attention to the validity of specialist doctors regarding the diagnosis, suggesting that the test we will create is preferable to be prescribed and carried out in a special molecular analysis laboratory by experts and not as a self-test kit.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
            </figure>
            <p>Our team organized a very interesting meeting with the Head of the thoracic surgery department of Hippocrates hospital in an effort to better acknowledge the process of surgical treatment of lung cancer and how it is affected by the diagnostic approach.</p>
            <p>Dr. Stavropoulos clarified that the patient was transferred to the proper hospital department for cancer verification according to the tumor's location in the lungs. If the tumor is located centrally and can be examined through the respiratory tract, the patient will have an endoscopy by a pulmonologist. However, if the lung tumor is distal, the patient will have surgery to extract cancer tissue and examine it.</p>
            <p>After that, if the patient has lung cancer, an oncologist board meeting will occur, in which doctors from various specialties will decide if the patient will benefit from the surgery, considering his age, other medical conditions, cancer type, and stage. The percentage of successful surgeries is related to the patient's profile, type of cancer, and complementary therapy. A typical surgery which is done with the "open" method, takes around 1-1,5 hours, and a routine surgery which is done with thoracoscopy, takes approximately 2-2,5 hours.</p>
            <p>Lastly, after presenting all these details about the procedures, he highlighted that an early diagnosis of lung cancer would facilitate his work and save thousands of lives, so he encouraged us to keep up the excellent work. In a few words, the meeting with Dr. Stavropoulos was beneficial and helped our team better understand the surgical procedures and diagnoses based on them.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
            </figure>
            <p>Our team held another interesting meeting with Mr. Symeonidis, a Hematologist at the Hematology Department at the University Hospital of Patras. The purpose of our meeting is to understand the role of a hematologist in the diagnosis of lung cancer.</p>
            <p>More specifically, he referred to the fact that other medical specialties cannot detect the symptoms of the disease in time with corresponding techniques, resulting in the patient ending up in an advanced stage. He emphasized that the specialty of the hematologist is applicable in the diagnosis of any form of cancer and can contribute to its detection at an early stage.</p>
            <p>During our discussion, he mentioned the concept of liquid biopsies, a technique we had never heard of before and piqued our interest. So, we asked for more information about them, and he broke down their applications. More specifically, he referred to liquid biopsies with blood samples relating to his field of expertise and the pros and cons they may have in cancer detection.</p>
            <p>So it gave us the idea to invest more in the field of liquid biopsies.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
            </figure>
            <p>To understand a problem fully, we should perceive all aspects of it. For example, one of the things we need to know about cancer is the patient's psychological position.</p>
            <p>Thus, our next meeting, which seemed particularly beneficial to us, was with the psychologist and psychotherapist Georgia Panitsa, a member of the association "Alma Zois." It is a Panhellenic Association of Women with Breast Cancer founded in 1988 by women who had personally experienced this type of cancer.</p>
            <p>Since Mrs. Panitsa is a psychologist in this association, we had the opportunity to talk about the patient's psychology throughout the time he was dealing with cancer. She also managed to orient us precisely around the problem since she explained in detail the everyday life of a cancer patient, from the diagnosis to the final stages of the treatment as well as the later stages of his life.</p>
            <p>Through our discussion, we understood the psychological wear and tear experienced by a patient with cancer of any type. At the same time, Mrs. Panitsa emphasized the vital prognosis achieved with the early cancer diagnosis as the key to reducing the number of patients suffering from this disease.</p>
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
            </figure>
            <p>The next step was communication with a cancer institute or association since their members are constantly in contact with patients or even work with doctors; the result is that they precisely know the prevailing situation regarding lung cancer. For this reason, we contacted the association "Pnoi Agapis," whose members started in 2007 with the vision of providing shelter to cancer patients and their companions from specific regions of Greece to undergo external treatment.</p>
            <p>Our online meeting was attended by three members of the association, two of whom were doctors, so they provided us with the statistical data that is valid to date for lung cancer both in Greece and globally, highlighting the necessity of early diagnosis.</p>
            <p>Already knowing that lung cancer is the second most common type of cancer, the discussion with the association's doctors allowed us to further search the diagnostic methods that exist to date.</p>
            <p>During the call with the patient’s association, Pnoi Agapis, we had the chance to communicate with a radiologist, Mr. George Pissakas, who not only informed us about lung cancer statistics but also helped us gain an accurate understanding touching the pros and cons of the existing diagnostics techniques, especially chest x-ray.</p>
            <p>Chest x-rays usually are the first imaging tests done by a doctor to look for lung tumors. However, they cannot differentiate malignant from benign tumors or even detect smaller tumors.</p>
            <p>Another disadvantage of this method is the often extraction of a false-negative result. For this reason, such an examination cannot be considered valuable enough to diagnose lung cancer, and consequently, the necessity for developing a new method is obvious.</p>
          </section>
          <section id="section2">
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
            </figure>
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
            <h2 class="main-title">Section 3</h2>
            <section id="section3-1">
              <h3 class="small-title">Section 3-1</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="section3-2">
              <h3 class="small-title">Section 3-2</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
          <section id="section4">
            <h2 class="main-title">Section 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <section id="section4-1">
              <h3 class="small-title">Section 4-1</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="section4-2">
              <h3 class="small-title">Section 4-2</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="section4-3">
              <h3 class="small-title">Section 4-3</h3>
              <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
          <section id="section5">
            <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
            </figure>
            <p>Taking into account all of the advice from the experts we reached throughout our human practices, we finally formed our complete proposal for addressing lung cancer diagnosis. Our next step was to consider the implementation and applicability of our proposed solution, the diagnostic tool called "syn-PNOIA."</p>
            <p>How would we do that?</p>
            <section id="section5-1">
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
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
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>The first and prominent supporter of our team's project is the company Research Genetic Cancer Center (RGCC).</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>From the beginning of planning our idea, when we were still looking for sponsorships to cover the project's costs, the CEO, Mr. Papasotiriou, and the supervisor, Mr. Apostolou, believed in our idea and decided to support it both financially but mainly in the laboratory part.</p>
              <p>Continuing with the development of our idea and when we visited the company's headquarters in Greece, more laboratory members thought our diagnostic test had enough potential and could develop into a primary diagnostic tool for lung cancer. After a long meeting, they gave us additional consultants, both laboratory instructions and the dry lab part, to use for further development.</p>
              <p>Finally, as soon as we completed all the required experimental procedures and the business plan regarding the so-called syn-PNOIA diagnostic tool, our team presented the now-completed vision to all company members. Their response was immediate, and we concluded that "syn-PNOIA" would undoubtedly be a diagnostic test that RGCC will promote throughout the network of patients and doctors with which it collaborates. After all, if they did not believe in our team, Patras Medicine, from the beginning, they would not finance our entire project, as Mr. Papasotiriou mentioned in one of our initial meetings.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>Looking for companies that could use the diagnostic tool "syn-PNOIA," we contacted Menarini Hellas. It is an international Pharmaceutical Group that has released pharmaceutical preparations in the Pharmaceutical Market, mainly in the cardiovascular and respiratory systems category.</p>
              <p>We had the honor of communicating with Mr. Nasigogos Dimtrios, Sales Manager at Menarini Diagnostics Hellas, whose advice played a significant role in completing the product sheet. At the beginning of the meeting, he gave his verification about the quality of the product sheet, underlining that it has all the needed parts.</p>
              <p>In addition, he stated that the cost of printing and translating the product sheet would be high if we aimed to distribute it in Greece and especially abroad. He also stated that we must not use product reference number or trademark because it has to be approved by regulatory authorities. Later, he suggested that the blood volume received for the analysis has to be as small as possible and that 1mL is the ideal volume. Finally, he advised us to avoid whole blood storage and set a price of around 130€ per kit.</p>
              <p>Regarding the implementation that the kit and the diagnostic tool could have, he told us that their company has similar tools, but they are not as innovative. However, he also pointed out the low cost at which they will be available on the market, which makes it even more affordable for a more significant portion of the population, without excluding anyone from the early diagnosis of lung cancer.</p>
            </section>
            <section id="section5-3">
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>Appreciating the evaluation of our idea by young scientists, we sought to communicate with a young oncologist.</p>
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>We hosted a zoom meeting and interviewed the oncologist, Galateia Liouta, who is currently working at General Oncologic Hospital in Kifisia, Greece. She gave us a fresh view of the pathophysiology of cancer cells in the lungs and deepened our understanding of its molecular mechanisms.</p>
              <p>Ms. Liouta presented us with the sequence of the necessary procedures to diagnose lung cancer, starting from an x-ray of the thoracic cavity, followed by a magnetic tomography, and the last step is a biopsy of the spot in which the tumor is located to ensure its presence.</p>
              <p>Admitting the complexity of the above procedure and after we presented her syn-PNOIA, Ms. Liouta told us that our idea seems very promising and that, after it gets approved, our examination could solve the problem of a lung cancer diagnosis.</p>
              <p>However, she underlined that to cope with the current situation, patients and doctors should be properly informed about the severity of the disease and the importance of prognosis.</p>
            </section>
            <section id="section5-4">
              <figure class="gallery">
                <a width="100%" href="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/model/fig3.jpg"/></a>
              </figure>
              <p>At this point, we had successfully contacted several experts, companies and associations who enhanced our knowledge on lung cancer and contributed to the development and improvement of our project and we additionally previewed our idea from the perspective of patients and high-risk groups.</p>
              <p>Having almost completed our Human Practices, syn-PNOIA was formed as follows: Combining the examination of blood samples, liquid biopsy, and the detection and quantification of certain overexpressed circular RNAs as specific biomarkers, we designed an innovative screening test aiming to redefine lung cancer diagnosis. Pointing out that our test is performed easily, quickly, without the need for surgery or specialized equipment, as the main advantages, our goal is to get our diagnostic tool approved for usage in molecular analysis laboratories, clinics and diagnostic centers.</p>
              <p>Such an examination can be established as an annual check up especially for people with a high risk of cancer -such as heavy smokers, consequently increasing patients’ chances of survival even up to 80%.</p>
              <p>Shielding and saving human life has been our motivation as Patras Medicine team to develop our test named syn-PNOIA and contribute to the progress of medical science.</p>
            </section>
          </section>
          <section id="section6">
            <h2 class="main-title">Section 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png" width="100%" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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