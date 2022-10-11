<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>  
      <section class="intro">
        <p>Οne of the most significant institutions promoted by iGEM Competition and, by extension, an integral part of our Human Practices as a team is the interaction and communication of society with science. Seeking to bring the public in touch with Synthetic Biology and syn-PNOIA project, we organized edifying activities aiming to inspire young people and make the public embrace science and get informed about the competition and its prospects.</p>
      </section>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="general">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#general`" v-scroll-to="'#general'">General Public</a></li>
                <li><a :href="`${currentPage}/#community`" v-scroll-to="'#community'">Academic Community</a></li>
                <li><a :href="`${currentPage}/#education`" v-scroll-to="'#education'">Education</a></li>
                <li><a :href="`${currentPage}/#events`" v-scroll-to="'#events'">Informative events</a></li>
                <li><a :href="`${currentPage}/#media`" v-scroll-to="'#media'">Media & Press Conference</a></li>
                <li><a :href="`${currentPage}/#quiz`" v-scroll-to="'#quiz'">Quiz</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="general">
            <h2 class="main-title">General Public</h2>
            <p>With the aim of attracting more and more people to get interested in Synthetic Biology, iGEM Competition and syn-PNOIA we designed a sequel of activities including presentations in fairs, even quiz games combining entertainment and educational character.</p>
            <ul class="acc">
              <li class="acc-item">
                <input id="g1" class="hide" type="checkbox">
                <label for="g1" class="acc-label icon" style="margin-bottom: 20px">Thessaloniki International Fair</label>
                <div class="acc-child">
                  <p>On September 17-18, our team attended the Thessaloniki International Fair 2022. The Thessaloniki International Fair (TIF) is an annual commercial exhibition event of great importance for Greece that takes place at the International Exhibition Center of Thessaloniki. This action took place within the framework of the Partnership since our partners from iGEM MetaThess invited us to the Academia stand.</p>
                  <p>During our stay for several hours, we were allowed to inform the public about the field in which we operate as a group and to inform the world about the problem arising from the late diagnosis of lung cancer.</p>
                  <p>We distributed brochures to interested parties, verbally informed them about our actions, and showed our comics to younger children who visited the exhibition. In addition to informing the public, we had the honor to tell the former prime minister of our country, Mr. Tsipras, about what we do now and our future goals, who congratulated us on our work.</p>
                  <p>All the presentations and the public information were done with our partners from the iGEM MetaThess Team since we both have close projects to all extents. Our presence at TIF would not have been possible without them, and we thank them for the invitation.</p>
                </div>
              </li>
              <li class="acc-item">
                <input id="g2" class="hide" type="checkbox">
                <label for="g2" class="acc-label icon" style="margin-bottom: 20px">TEDxPatras</label>
                <div class="acc-child">
                  <p>On October 8th we participated in TEDxPatras which was a great opportunity to promote our team and stimulate university students’ interest on our project. </p>
                  <p>In general, TED is an international nonpartisan nonprofit devoted to spreading ideas, covering almost all topics-including science-, while TEDx events help share ideas in communities around the world. TEDxPatras was organized in Western Greece at the University of Patras and Patras Medicine was part of it. In this event we presented our project to many young people and further informed them about iGEM Competition.</p>
                  <p>Additionally, we interacted with several university students’ voluntary and research groups, took part in educational games and finally joined a Q&A session where we were asked to properly explain our project and provide special information about it.</p>
                </div>
              </li>
              <li class="acc-item">
                <input id="g3" class="hide" type="checkbox">
                <label for="g3" class="acc-label icon" style="margin-bottom: 20px">Quiz</label>
                <div class="acc-child">
                  <p>Thinking of a simple and fun way to communicate science to the audience, we came up with the idea of creating quiz series with multiple choices. Our questions and answers online game, which was also published on our social media, includes various categories and helps the participants check and enrich their knowledge.</p>
                  <a class="primary-button" :href="`${currentPage}/#quiz`" v-scroll-to="'#quiz'">Go to Quiz section</a>
                </div>
              </li>
            </ul>
          </section>

          <section id="community">
            <h2 class="main-title">Academic Community</h2>
            <p>Even though Synthetic Biology keeps growing as a scientific field the last few years and attracts the interest of more and more young researchers, it is not yet well known and widely applied in Greece. Our duty as a research group is to communicate and highlight the achievements and opportunities offered by the branch of science we have been studying, and for this reason we intended to spread Synthetic Biology and our idea among the academic community.</p>
            <ul class="acc">
              <li class="acc-item">
                <input id="a1" class="hide" type="checkbox">
                <label for="a1" class="acc-label icon" style="margin-bottom: 20px">Scientific Conference of Medical Students of Greece</label>
                <div class="acc-child">
                  <p>On May 14, our team attended the 28th Scientific Conference of Medical Students of Greece. The SCMSG is the crown of the activities of the Scientific Society of Medical Students of Greece. It has been organized continuously since 1994 and is hosted in a different Annex every year. This year it was organized in Athens, and our team leader had the opportunity to present our idea to medical students and delegates from Medical Schools in Greece and abroad, as well as from other Academies of Health Sciences. Also, it was the first live meeting of the Greek iGEM teams since they were all invited.</p>
                </div>
              </li>
              <li class="acc-item">
                <input id="a2" class="hide" type="checkbox">
                <label for="a2" class="acc-label icon" style="margin-bottom: 20px">Synthetic Biology approaches in Cancer Translational Research</label>
                <div class="acc-child">
                  <p>During our visit to Thessaloniki, we were pleased to attend the seminar organized by our partners from iGEM MetaThess titled "Synthetic Biology approaches in Cancer Translational Research." Throughout the event, outstanding speakers gave discourses about synthetic biology and the institution of the iGEM competition. Then followed the two iGEM groups' presentations regarding explaining our project. The seminar was very engaging, and the participants were willing to ask questions about the presentations and the competition processes as they piqued their interest.</p>
                </div>
              </li>
              <li class="acc-item">
                <input id="a3" class="hide" type="checkbox">
                <label for="a3" class="acc-label icon" style="margin-bottom: 20px">Hellenic Conference “Present and Future of Oncology”</label>
                <div class="acc-child">
                  <p>On the 16th of June, our team attended the 2nd Hellenic Conference “Present and Future of Oncology”, at the University of Patras. Our Principal Investigator, Ms. Kallergi gave a presentation about the contribution of liquid biopsy in handling patients with cancer. She elaborated on the procedures needed to perform a liquid biopsy, the types of liquid biopsies, and the process from discovery to clinical application. She highlighted that more and more clinical studies focus on liquid biopsy, and that is why it is a non-invasive procedure that can provide very useful data about a person's health. Ms. Kallergi explained that according to the biomarkers detected in the patients' liquids, doctors can gain important information about the type and subtype of cancer and then select the best combination of drugs to target and eliminate cancer more efficiently. The presentation of our PI regarding liquid biopsies as the diagnostic method we have based our project on as a research team was enlightening for the academic audience who attended the conference.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="education">
            <h2 class="main-title">Education</h2>
            <p>Setting a goal to inspire and motivate young people to engage with Synthetic Biology and understand the prospects of this scientific field in solving global problems, we implemented several educational activities and presentations.</p>
            <ul class="acc">
              <li class="acc-item">
                <input id="e1" class="hide" type="checkbox">
                <label for="e1" class="acc-label icon" style="margin-bottom: 20px">Board games</label>
                <div class="acc-child">
                  <p>The goal of the Patras Medicine team is to bring children and adolescents up to 18 years old in contact with synthetic biology. For this purpose, we created 2 board games, and then we made sure to present them in schools, where students had the opportunity to play with them. More specifically:</p>
                  <ul class="bullets acc">
                    <li><span>DNA Runner:</span> This is a board game about the complementarity of DNA bases, which also includes various factors - such as DNA polymerase or mutagenic agents - that can affect it. So, in a more playful way, we educate younger children on how DNA is organized inside the cell.</li>
                    <li><span>GENE - US:</span> This is a knowledge board game in the form of questions and answers which consists of 6 categories of cards and combines knowledge of synthetic biology, anatomy, or physiology while including a more specialized category for the most daring players!</li>
                  </ul>
                </div>
              </li>
              <li class="acc-item">
                <input id="e4" class="hide" type="checkbox">
                <label for="e4" class="acc-label icon" style="margin-bottom: 20px">Comic</label>
                <div class="acc-child">
                  <p>Our team has an unwavering goal to fight cancer. As we know, awareness and information are the key to preventing and fighting this morbidity. Therefore, starting from childhood, we decided to create a comic that will bring children closer to our idea and our project. After all, knowledge is power.This is how we bring young people into contact with health, wellness, cancer and Igemers through a delightful story. Our comic made the rounds of Greek schools where the children had the opportunity to hear our story and read it. The comic is called the lamp of health.</p>
                </div>
              </li>
              <li class="acc-item">
                <input id="e5" class="hide" type="checkbox">
                <label for="e5" class="acc-label icon" style="margin-bottom: 20px">The SynBio dictionary</label>
                <div class="acc-child">
                  <p>Searching for innovative approaches regarding science communication and public education for Synthetic Biology we came up with the creation of a dictionary. Our “SynBio Dictionary” contains terms scientifically and accurately defined, related to Synthetic Biology that are commonly used in our project. The terms are thoroughly explained and alphabetically sorted so that they can be easily reached from the reader. We also considered implementing this activity as a collaboration in order to enrich our dictionary with even more terms, and so we invited 2 more teams to create their own extension to our idea.</p>
                </div>
              </li>
              <li class="acc-item">
                <input id="e6" class="hide" type="checkbox">
                <label for="e6" class="acc-label icon" style="margin-bottom: 20px">Summer camp</label>
                <div class="acc-child">
                  <p>In the context of "Education," we visited the Experimental High School of Patras to communicate synthetic biology to young people and students.</p>
                  <p>In the workshop area of the summer camp and with the supervising professor, Mr. Arlapanos Georgios, we encountered the members of the "Ludo ergo sum" team, and we were allowed to discuss our project and the team's achievements during the competition.</p>
                  <p>However, the most important thing is that our goal was to introduce the students to the concept of synthetic biology. After giving a short presentation, we played the board games we created as a team which, in addition to entertainment, also have an educational role.</p>
                  <p>We noticed that the students found this way of learning particularly fun; however, during the game, we were allowed to realize any misunderstandings in the instruction manual and the design of the board games. This happened because Mr. Arlapanos and his team have experience designing board games since they actively develop blind-friendly board games as a team, receiving outstanding accolades.</p>
                  <p>Thus, they knew to evaluate our work, to point out any changes to us, but most importantly, for the students to learn some initial information about synthetic biology.</p>
                  <p>We learned two things from this first meeting. On the one hand, we can achieve the dissemination of synthetic biology more playfully to a portion of people who are not familiar with it. But on the other hand, we learned first-hand that knowledge is not one-sided and that the two teams within the framework of our cooperation had to learn from each other. We learned about tabletop design from the students' experience and Mr. Arlapanos, and those of us got a little taste of the concept of SynBio.</p>
                </div>
              </li>
              <li class="acc-item">
                <input id="e7" class="hide" type="checkbox">
                <label for="e7" class="acc-label icon" style="margin-bottom: 20px">Presentation at School</label>
                <div class="acc-child">
                  <p>Visiting a High School of Patras, we had the opportunity to simply present our project and explain in a fun way Synthetic Biology basics through the board games we created, which we played for a second time to a more significant portion of students who are striving to become upcoming medical students. We also presented the comic that we created as a team to the students, which describes in a simpler way how cancer works and how it can affect a person's life. </p>
                  <p>It is remarkable how interesting they found the activities we prepared for them and paid attention the whole time. Our role that day was not only to disseminate synthetic biology but also to inform future health scientists about the wider problem of lung cancer diagnosis and, by extension, prognosis.</p>
                  <p>To sum up, through our two meetings at the Experimental High School of Patras, we conclude that as Patras Medicine, we managed to teach the students the concept of complementarity, genetics, and the various variations that occur in the DNA of each person through the DNA Runner board game. On the other hand, we use the question-answer method through the Gene-us board game, the goal of which is for students to retain some of the basic concepts of synthetic biology - we know very well that this way of learning is more efficient. Furthermore, through the comic book "The Lamp of Health," we helped them to understand in a simple but at the same time explanatory way that many of our choices can affect our lives positively or negatively. Finally, we were given the opportunity to contribute to the vocational guidance of young people, considering that we are undergraduate students in the field of health sciences, participating in a synthetic biology competition and dealing with such a combustive issue.</p>
                  <p>Overall from our point of view, we feel that we have been a positive influence on the students, and our meetings have been efficacious.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="events">
            <h2 class="main-title">Informative events</h2>
            <ul class="acc">
              <li class="acc-item">
                <input id="v1" class="hide" type="checkbox">
                <label for="v1" class="acc-label icon" style="margin-bottom: 20px">“A step closer to the gold medal”</label>
                <div class="acc-child">
                  <p>Within the partnership with the iGEM MetaThess team and in our effort to expand into the Science communication part, we jointly organized a webinar. More specifically, the webinar called "A step closer to the gold medal" related to familiarity with bioinformatics and graphic design will benefit other members of iGEM and other people interested in the above topics. The bioinformatics part was about software tools and was covered by the iGEM MetaThess team members. The corresponding part of graphic design examined the first steps in using adobe illustrator and was encircled by our team. The participants paid particular attention to both parts of the webinar, and at the end of it, we gave them the opportunity ....</p>
                </div>
              </li>
              <li class="acc-item">
                <input id="v2" class="hide" type="checkbox">
                <label for="v2" class="acc-label icon" style="margin-bottom: 20px">“Lung Cancer: From Epidemiology to new forms of Diagnosis and Treatment” </label>
                <div class="acc-child">
                  <p>On September 2nd, we hosted an informative Webinar with title: “Lung Cancer: From Epidemiology to new forms of Diagnosis and Treatment” along with Cancer Prevention Research Group in Greece and our partners, iGEM MetaThess and it had a great response and success, as it was attended by approximately 300 people. In this webinar young scientists have formed their presentations so that specialists and the general public can come into contact with topics such as pathophysiology, causes, epidemiology, basic symptoms and diagnostic and therapeutic approaches to lung cancer in an understandable way. In this context our team introduced project syn-PNOIA to the audience emphasizing that late diagnosis of the disease can be faced on the basis of Synthetic Biology. Among the speakers were administrative members of Cancer Prevention Research Group, doctors, associate professors of Chemistry, biologists, hygienists, health visitors, undergraduate and postgraduate students from both iGEM teams, who gave extremely interesting speeches raising public awareness.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="media">
            <h2 class="main-title">Media & Press Conference</h2>
            <ul class="acc">
              <li class="acc-item">
                <input id="m1" class="hide" type="checkbox">
                <label for="m1" class="acc-label icon" style="margin-bottom: 20px">Podcast series: The SynBio Voice</label>
                <div class="acc-child">
                  <p>Podcasts have lately been an effective, intimate and popular way to reach out especially to young people. Developing our own podcast series named “The SynBio Voice” we aim to raise public awareness about our team, Syn-Pnoia project and iGEM Competition and most importantly bring science and society together. To achieve this we included informative episodes related to health issues concerning our topic, lung cancer, and analyzed social and entrepreneurial aspects of the competition. Last but not least, we interviewed guest iGEM teams and award-winning research teams in different scientific fields who shared their experiences and passion for science inspiring the audience. Our series is easily accessible on <a href="https://open.spotify.com/show/3uL0UutbwkTXckC3YIxaqv?si=2198ae984262412f" class="link-ref">Spotify</a>.</p>
                </div>
              </li>
              <li class="acc-item">
                <input id="m2" class="hide" type="checkbox">
                <label for="m2" class="acc-label icon" style="margin-bottom: 20px">Social Media</label>
                <div class="acc-child">
                  <p>In the context of promoting our team and interacting with the public, we used social media that are extremely popular, provide immediacy and contribute to the building of a good relationship and bonding with the audience. Developing our profile on social media platforms (Instagram, Facebook, Twitter, LinkedIn) not only increased the popularity of the team and our project, but we also organized several activities.</p>
                  <ul class="bullets acc">
                    <li>For instance, we created quiz and fun fact series in order to make Synthetic Biology and our topic accessible to everyone in a fun way. </li>
                    <li>We also designed informative posts about lung cancer basics and our technique, as well as posts related to Synthetic Biology, such as The SynBio timeline and Nobel Prize on Synthetic Biology issues winners series.</li>
                    <li>Moreover, Social Media has been a useful tool to develop and take part in several collaboration invitations with other iGEM teams.</li>
                  </ul>
                </div>
              </li>
              <li class="acc-item">
                <input id="m3" class="hide" type="checkbox">
                <label for="m3" class="acc-label icon" style="margin-bottom: 20px">Article</label>
                <div class="acc-child">
                  
                </div>
              </li>
            </ul>
          </section>

          <section id="quiz">
            <div class="d-flex justify-content-between">
              <h2 class="main-title">Quiz</h2>
              <a @click="resetQuiz()" class="primary-button" >Reset quiz</a>
            </div>
            <ul class="acc">
              <li class="acc-item">
                <input id="s1" class="hide" type="checkbox">
                <label for="s1" class="acc-label icon" style="margin-bottom: 20px">Synthetic Biology</label>
                <div class="acc-child">
                  <Question question="1. Synthetic Biology combines Biology with?" :answers="['Chemistry', 'Engineering', 'Physics']" rightAnswer="Engineering" :revealed="reset"/>
                  <Question question="2. When was the term “ Synthetic Biology” first mentioned?" :answers="['1910', '1958', '1978', '1990']" rightAnswer="1910" :revealed="reset"/>
                  <Question question="3. In 1973 was produced the first genetically modified?" :answers="['Bacterium', 'Animal', 'Plant']" rightAnswer="Bacterium" :revealed="reset"/>
                  <Question question="4. Medical Applications of Synthetic Biology:" :answers="['Tissue Engineering', 'Diagnostics', 'Gene therapy', 'Vaccines', 'All of the above']" rightAnswer="All of the above" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s2" class="hide" type="checkbox">
                <label for="s2" class="acc-label icon" style="margin-bottom: 20px">Cancer disease</label>
                <div class="acc-child">
                  <Question question="1. Cancer is a disease caused when:" :answers="['There is a chromosomal rearrangement', 'The organism is infected by pathogens', 'Cells divide uncontrollably', 'All of the above']" rightAnswer="All of the above" :revealed="reset"/>
                  <Question question="2. Cancerous tumors spread into, or invade, nearby tissues and can travel to distant places in the body to form new tumors. This process is called:" :answers="['Tumorigenesis', 'Leukemia', 'Metastasis', 'Oncogenesis']" rightAnswer="Metastasis" :revealed="reset"/>
                  <Question question="3. How may normal cells become cancer cells?" :answers="['Normal 🡪 Hyperplasia 🡪 Dysplasia 🡪 Cancer', 'Normal 🡪 Ysplasia 🡪 Hyperplasia 🡪 Cancer']" rightAnswer="Normal 🡪 Ysplasia 🡪 Hyperplasia 🡪 Cancer" :revealed="reset"/>
                  <Question question="4. How many types of cancer exist?" :answers="['Less than 30', '50', '80', 'More than 100']" rightAnswer="More than 100" :revealed="reset"/>
                  <Question question="5. Which type of cancer was the most common in 2021?" :answers="['Breast cancer', 'Lung cancer', 'Prostate cancer', 'Colon and rectum cancer']" rightAnswer="Breast cancer" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s3" class="hide" type="checkbox">
                <label for="s3" class="acc-label icon" style="margin-bottom: 20px">Lung cancer</label>
                <div class="acc-child">
                  <Question question="1. How many main types of lung cancer are there?" :answers="['2', '4', '5', '6']" rightAnswer="2" :revealed="reset"/>
                  <Question question="2. In which part of the respiratory system respiration occurs?" :answers="['Mouth ', 'Bronchus', 'Alveoli', 'Trachea']" rightAnswer="Alveoli" :revealed="reset"/>
                  <Question question="3. Is lung cancer a common misdiagnosed condition with many deaths due to late diagnosis?" :answers="['Yes', 'No']" rightAnswer="Yes" :revealed="reset"/>
                  <Question question="4. What hormone does small cell lung cancer mainly produce as an ectopic site of it?" :answers="['ADH', 'Epinephrine', 'Noradrenaline', 'Cortisol']" rightAnswer="ADH" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s4" class="hide" type="checkbox">
                <label for="s4" class="acc-label icon" style="margin-bottom: 20px">Non-Small Cell Lung Cancer</label>
                <div class="acc-child">
                  <Question question="1. What is the most common NSCLC?" :answers="['Squamous cell carcinoma', 'Adenocarcinoma', 'Large cell carcinoma']" rightAnswer="Adenocarcinoma" :revealed="reset"/>
                  <Question question="2. When cancer has not spread outside the lungs it is called:" :answers="['localized NSCLC', 'regional NSCLC', 'metastatic lung cancer']" rightAnswer="localized NSCLC" :revealed="reset"/>
                  <Question question="3. Which of the following is true about adenocarcinoma?" :answers="['Men are more prone than women to develop this cancer.', 'It is the most common lung cancer type for smokers.', 'It’s the most common cancer among people who never smoked.']" rightAnswer="It’s the most common cancer among people who never smoked." :revealed="reset"/>
                  <Question question="4. Which of the following is often found in the center of the lung next to an air tube? " :answers="['Squamous cell carcinoma', 'Adenocarcinoma', 'Large cell carcinoma']" rightAnswer="Squamous cell carcinoma" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s5" class="hide" type="checkbox">
                <label for="s5" class="acc-label icon" style="margin-bottom: 20px">Biomarkers</label>
                <div class="acc-child">
                  <Question question="Which cancer biomarker is related to breast tumors?" :answers="['estrogen receptor', 'CD20 Antigen', 'BRAF']" rightAnswer="estrogen receptor" :revealed="reset"/>
                  <Question question="Which cancer biomarker is related to Leukemia/Lymphoma?" :answers="['KRAS', 'HER-2/neu', 'CD20 Antigen; CD30']" rightAnswer="CD20 Antigen; CD30" :revealed="reset"/>
                  <Question question="Which cancer biomarker is related to colorectal tumors?" :answers="['BRCA1, BRCA2', 'EGFR', 'Philadelphia Chromosome (BCR/ABL)']" rightAnswer="EGFR" :revealed="reset"/>
                  <Question question="Which cancer biomarker is related to melanoma tumors?" :answers="['c-KIT', 'BRAF', 'Philadelphia Chromosome (BCR/ABL)']" rightAnswer="BRAF" :revealed="reset"/>
                  <Question question="Which cancer biomarker is related to lung tumors?" :answers="['ALK; EGFR; KRAS', 'PML/RAR alpha, TPMT', 'FIP1L1-PDGRF alpha, PDGFR']" rightAnswer="ALK; EGFR; KRAS" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s6" class="hide" type="checkbox">
                <label for="s6" class="acc-label icon" style="margin-bottom: 20px">Nucleic acid probes</label>
                <div class="acc-child">
                  <Question question="What is a probe?" :answers="['Chemically synthesized DNA', 'Purified DNA', 'Fragmented DNA duplex', 'Either purified or synthesized single stranded DNA']" rightAnswer="Either purified or synthesized single stranded DNA" :revealed="reset"/>
                  <Question question="Why is a probe labeled?" :answers="['Improve visibility', 'Improve stability', 'Improve location identification', 'Improve binding capability']" rightAnswer="Improve location identification" :revealed="reset"/>
                  <Question question="Which of the following probe is generally used for screening cDNA libraries?" :answers="['Oligonucleotide probes', 'DNA probe', 'RNA probe']" rightAnswer="Oligonucleotide probes" :revealed="reset"/>
                  <Question question="Long probes are usually made of:" :answers="['Gene expression', 'Cloning', 'Hybridization', 'PCR']" rightAnswer="Cloning" :revealed="reset"/>
                </div>
              </li>
              <li class="acc-item">
                <input id="s7" class="hide" type="checkbox">
                <label for="s7" class="acc-label icon" style="margin-bottom: 20px">Laboratory</label>
                <div class="acc-child">
                  <Question question="Nucleic acid hybridization is used to identify:" :answers="['DNA', 'RNA', 'Proteins', 'Complementary base sequences']" rightAnswer="Complementary base sequences" :revealed="reset"/>
                  <Question question="The procedure by which DNA gel is transferred to a membrane is termed as:" :answers="['blotting', 'cloning', 'injection']" rightAnswer="blotting" :revealed="reset"/>
                  <Question question="Which of the following does not affect the formation of hybrid DNA?" :answers="['Ionic strength', 'Temperature', 'Pressure', 'Homologous DNA']" rightAnswer="Pressure" :revealed="reset"/>
                  <Question question="Which of the following is not termed as hybridization?" :answers="['DNA from male and female of same species', 'DNA and mRNA', 'DNA and cDNA', 'DNA from different species']" rightAnswer="DNA from male and female of same species" :revealed="reset"/>
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
export default {
    data() {
        return {
            currentPage: "Communication",
            reset: false
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
      resetQuiz: function () {
        this.reset = true
        setTimeout(() =>{
          this.reset = false
          }, 10)
      },
      scrolled: function () {
        document.querySelector("progress").value = window.scrollY / (document.querySelector("#main-content").offsetHeight - window.innerHeight + document.querySelector("#header").clientHeight) * 100;
      }
    }
}
</script>