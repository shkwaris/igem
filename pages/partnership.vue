<template>
  <div>
    <Header :title="currentPage"></Header>

    <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
      <h1 class="head-title">{{currentPage}}</h1>
    </div>

    <section class="intro">
      <h2 class="main-title">Introduction</h2>
      <p>During our fun journey to the iGEM competition, we found fellow travelers with the same dreams and goals. Thus, on March 3, excellent collaboration with the Patras Medicine 2022 team began. From our first meetings, we got to know each other, and after the presentation of the projects, we found that both teams intend to manufacture In vitro diagnostic tools for the early detection of non-small cell cancer of the lung (NSCLC). So we decided to solve the problem of the high mortality of lung cancer, reaching the top of DIAS with sun-PNOIA, that is, with collaboration. So we established meetings every Thursday to coordinate our common course and appointed responsible for the Partnership Anatoli Betsou from the Patras Medicine 2022 team and Maria Kosmidou from the MetaThess 2022 team.</p>
      <p>From our first steps, we planned to cooperate at all levels, that is, in Fundraising, in the Wet Lab, and the Dry Lab. We also organized joint actions for science communication and Synthetic Biology. We ranked interesting Collaborations among ourselves and with other teams. At the same time, in the context of Human Practices, we approached several Stakeholders who helped us improve our diagnostic tools so that they could be easily marketed. In addition, we attended a joint seminar on Safety, analyzed the 17 Goals for sustainable development of the United Nations, and organized webinars and workshops together. The most important thing was that we created a beautiful company in that we overcame difficulties and shared our anxieties and worries while having a good time in our online meetings. The best moment was when we met up close in Thessaloniki and had the time to organize joint actions together. Let's browse this page and follow us on our journey!</p>
    </section>

    <div class="container main-content">
      <h2 class="main-title">Our Journey</h2>
      <h3 class="small-title">Our first Meeting | 3.3.2022 </h3>
      <p>On the 3rd of March, we contacted Patras Medicine 2022 team on social media and arranged a video call to explore the possibility of cooperation. Thus, an online meeting took place between Maria Kosmidou and Anatoli Betsou. We briefly discussed our projects and thought of some ways of collaboration. So, we agreed to be partners and travel together in the world of Synthetic Biology. We decided to communicate every Thursday to coordinate our standard course. This is how our journey began!</p>
      <h3 class="small-title">Αcquaintance of the two teams | 10.03.2022</h3>
      <p>On the 10th of March, we scheduled an online meeting to get to know each other. In the beginning, everyone introduced themselves by saying a few things about their work, and then we presented the two projects in detail. We then created a common communication platform, and the leaders of each subgroup discussed ways of possible cooperation in their field and scheduled different calls to discuss their progress in more detail. </p>
      <h3 class="small-title">Fundraising training | 11.03.2022 </h3>
      <p>On the 11th of March, Maria Kosmidou, Leader of Fundraising of the MetaThess team, trained the Patras Medicine Team about the steps a team must follow to find sponsors. So, together we made a sponsorship booklet, which includes information about iGEM Competition, our team members, our project description, our budget analysis, and specific sponsorship packages for our potential sponsors. The selling points were about how we can advertise our potential sponsors, for example, during our actions or on social media. We also prepared a list containing approximately 207 Pharmaceutical and Medical companies with their contact details and prepared the template mail we will send to the sponsors attaching the Booklet. The next day the communications started, and soon we ended up having as a joint grand sponsor the Research Genetic Cancer Center (RGCC Group), established in 2004 by Dr. Papasotiriou Ioannis, Oncologist.</p>
      <h3 class="small-title">Update on the safety rules in the laboratory by Mr. Apostolou Panagiotis| 11.04.2022  </h3>
      <p>On the 11th of April, we scheduled an online meeting with Mr. Apostolou Panagiotis. He is the Supervisor and Safety and Quality Manager at the Lab Facilities of the Research Genetic Cancer Center in Florina, Greece. First, Mr. Apostolou informed us about the protective measures we should follow in the lab for our safety. In particular, he mentioned the dress code and the mandatory lab coats, nitrile gloves, and protective glasses. He then discussed managing bacterial cultures and disposing of bacterial debris and agarose gels after electrophoresis. Finally, he mentioned how the eukaryotic cell lines worked, their cleanliness, and mandatory processing in particular laminar flows. Finally, he asked each group to study the escape plan, which follows the laboratory that works in fire, flood, and earthquake cases.</p>
      <h3 class="small-title">Meeting with PIs of our teams | 3.05.2022</h3>
      <p>On the 3rd of May, both teams scheduled an online meeting with Mrs. Kallergi Galatea and Mrs. Kalogianni Despoina, the PIs of the Patras Medicine team, and Dr. Vizirianakis Ioannis, the PI of MetaThess team, to present our projects to them. After the presentation, they congratulated us on our innovative ideas, project design, and working method. Furthermore, they said they are particularly pleased that both teams are working on molecular diagnostic tools for the early diagnosis of lung cancer. They believe that our projects can impact the public, and with the proper steps, they could quickly be sold in diagnostic centers for the annual screening of patients for lung cancer in a few years. Also, they promised us that they would help us regarding the experimental design and the problems that may arise in the laboratory. Finally, they said they were pleased about our cooperation, wished us success in the competition, and ended their feedback by saying, “See you in Paris!” </p>
      <h3 class="small-title">The first meeting of Dry Lab teams | 19.5.2022</h3>
      <p>On the 19th of May, we started cooperating on the Dry Lab part. One of the most crucial parts of our partnership with the Patras Medicine team was the modeling process of our projects. We identified the need for a solid model that could predict and evaluate the behavior of our designed system. The partnership for the in-silico evaluation of our systems consists of 3 main parts. The first part is the evaluation of the thermodynamic properties of the designed sequence. Every project had identified the biomarker for the detection, and the next step was the design of the RNA sequences that could make the detection possible. After constructing a library of candidates’ sequences, we helped each other to select the ideal candidate. The software ViennaRNA was used to calculate the thermodynamic properties such as Minimum Free Energy structure, frequency of MFE in the ensemble, and the Concentration dependency plots. These results guided us in discerning the best candidate sequence for each biomarker.</p>
    </div>


  </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: "Partnership",
        };
    },
    start() {
      this.$nuxt.$loading.finish()
    },
}
</script>