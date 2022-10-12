<template>
  <div>
    <Header :title="currentPage">
      <div class="bg sustainable" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/sdg123.jpg') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="intoduction">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#intoduction`" v-scroll-to="'#intoduction'">Intoduction</a></li>
                <li><a :href="`${currentPage}/#goals`" v-scroll-to="'#goals'">Our Sustainable Development Goals</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#hunger`" v-scroll-to="'#hunger'" parent="goals">Zero Hunger</a></li>
                  <li class="sub"><a :href="`${currentPage}/#good`" v-scroll-to="'#good'" parent="goals">Good Health & Well-Being</a></li>
                  <li class="sub"><a :href="`${currentPage}/#education`" v-scroll-to="'#education'" parent="goals">Quality Education</a></li>
                  <li class="sub"><a :href="`${currentPage}/#gender`" v-scroll-to="'#gender'" parent="goals">Gender Equality</a></li>
                  <li class="sub"><a :href="`${currentPage}/#innovation`" v-scroll-to="'#innovation'" parent="goals">Industry, Innovation & Infrastructure</a></li>
                  <li class="sub"><a :href="`${currentPage}/#reduced`" v-scroll-to="'#reduced'" parent="goals">Reduced Inequalities</a></li>
                  <li class="sub"><a :href="`${currentPage}/#land`" v-scroll-to="'#land'" parent="goals">Life on Land</a></li>
                  <li class="sub"><a :href="`${currentPage}/#peace`" v-scroll-to="'#peace'" parent="goals">Peace, Justice & Strong Institutions</a></li>
                  <li class="sub"><a :href="`${currentPage}/#partnerships`" v-scroll-to="'#partnerships'" parent="goals">Partnerships for the Goals</a></li>
                </ul>
                <li><a :href="`${currentPage}/#conclusion`" v-scroll-to="'#conclusion'">Conclusion</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="intoduction">
            <h2 class="main-title">Intoduction</h2>
            <p>The concept of sustainable development, which was defined in 1987 by the Brundtland Commission, is people-centered and spans three fundamental approaches: economic, environmental, and social.</p>
            <p>The 17 Sustainable Development Goals (SDGs) are global in scope and have a timetable for implementation up to 2030. As a result, sustainable development features prominently on the UN agenda, as it aims to 'meet the needs of present generations without compromising the ability of future generations to meet their own needs.</p>
            <p>The 2030 Agenda promotes all three dimensions of Sustainable Development, intending to make our world a better place. According to the UN Secretary-General: "The Sustainable Development Goals are the path to a fairer, more peaceful and prosperous world and a healthy planet. It is also a call for solidarity between generations.</p>
            <p>However, it is not enough for states to adopt initiatives. The active participation of civil society is also necessary, which has a significant contribution to the selection and synthesis of the Goals, as it can contribute to the effort to achieve the 2030 Agenda by putting pressure on governments to adopt responsive policies.</p>
            <p>Thus, the Patras Medicine Team decided to participate in this effort and promote the 17 Goals through its work!</p>
            <div class="gallery rounded mx-auto d-block" style="width:80%;">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goals.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goals.jpg"/></a>
            </div>          
          </section>
          <section id="goals">
            <h2 class="main-title">Which Sustainable Development Goals do we target as a team?</h2>
            <section id="hunger">
              <h3 class="small-title">2. Zero Hunger</h3>
              <div class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-2-min.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-2-min.png"/></a>
              </div>
              <p>Starting with SDG number 2, we decided to contact the iGEM Patras team, whose project is related to sustainable agriculture, asking them to write a short text and check the impact of its SDGs:</p>
              <p>"Even though our team comes from Greece, a country with much potential in the primary sector, we noticed important deficiencies in the field of Agriculture, such as a lack of important data regarding soil physical and chemical properties in large and isolated  areas,  insufficient information regarding the  combination between precision agriculture tools and other technological advancements and low efficiency of crop inputs including fertilizers, tillage, pesticides, and irrigation water. Our team's project's central pillar idea is improving production quality using technology  (GPS, DSS, soil-sampling drones, ML) through precision agriculture. Some  of  the project's primary goals are access  to  agricultural  data  even  in remote and large areas, the precise prediction of soil biodiversity and crops for planting, and  the  environmental  protection  related  to  the  reduction."</p>
            </section>
            <section id="good">
              <h3 class="small-title">3. Good Health & Well-Being</h3>
              <div class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-3-min.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-3-min.png"/></a>
              </div>
              <p>SDG number 3, good health and well-being, has been our ultimate goal since we started the design of project syn-PNOIA.</p>
              <p>With lung cancer being the leading cancer death cause worldwide, engineering a new way for its early-stage diagnosis will undoubtedly provide a higher survival rate. Furthermore, our diagnostic test is centered around the innovative Liquid Biopsy methodology, a non-invasive technique requiring a simple blood sampling procedure. That way, it will attract more people to incorporate our test in their annual Health examination since the already established diagnostic methods lack the simplicity needed to be patient-friendly. Furthermore, our fast and accurate Linear DNA Nanostructure detection system can successfully identify target circRNA from a complex RNA sample in 70 minutes. The promotion of well-being is also supported by the low cost of our kit, costing just 25 Euros, making it affordable for patients ranging from different financial backgrounds. Please refer to our <a class="link-ref" href="entrepreneurship">Human Practices</a> page for our target group survey, our <a class="link-ref" href="entrepreneurship">Entrepreneurship</a> page for cost analysis, and the <a class="link-ref" href="entrepreneurship">Results</a> page for the experimental design.</p>
            </section>
            <section id="education">
              <h3 class="small-title">4. Quality Education</h3>
              <div class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-4-min.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-4-min.png"/></a>
              </div>
              <p>Our Human Practices activities for Education & Communication fulfilled SDG number 4.</p>
              <p>Pursuing quality education for all - girls and boys- we visited schools presenting the iGEM competition and our project as well. In addition, we promoted Synthetic Biology by trying to engage students in its concept. Furthermore, we created alternative ways to inform and educate the public regarding our project and Synthetic Biology, such as a podcast series, posters, board games, and a comic for younger ages.</p>
              <p>In this way, we consider contributing to the education of the youngest differently and with additional means beyond the school borders.</p>
              <a href="education" class="primary-button">visit our Education & Communication page</a>
            </section>
            <section id="gender">
              <h3 class="small-title">5. Gender Equality</h3>
              <div class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-5-min.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-5-min.png"/></a>
              </div>
              <p>As for SDG number 5, which supports gender equality, we have implemented several related activities.</p>
              <p>More specifically, we have performed an interview in our podcast with a female research group taking part in the international chemical engineering competition, Chemecar, breaking down stereotypes and professing the contribution of women in science.</p>
              <p>After all, we purposefully formed the Patras Medicine team equally consisting of males and females, and we selected two successful female scientists, professors of the University of Patras, as Principal Investigators of our team.</p>
            </section>
            <section id="innovation">
              <h3 class="small-title">9. Industry, Innovation & Infrastructure</h3>
              <div class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-9-min.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-9-min.png"/></a>
              </div>
              <p>We contribute to the 9th sustainable goal with our innovative technique.</p>
              <p>For this to apply, we took into account the phrase: "Promoting sustainable industries, and investing in scientific research and innovation, are all important ways to facilitate sustainable development."</p>
              <p>So far, there is no approved method for lung cancer diagnosis through liquid biopsies using circRNAs as biomarkers. So we created a DNA nanostructure to identify these biomarkers with a specific technique that is not widely spread and is also considered innovative.</p>
              <a href="education" class="primary-button">visit our Project Description page</a>
            </section>
            <section id="reduced">
              <h3 class="small-title">10. Reduced Inequalities</h3>
              <div class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-10-min.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-10-min.png"/></a>
              </div>
              <p>During our participation in the Pre-Aegean meetup, we hosted a presentation about Shirley Chisholm, who fought for equal rights for women, minorities, immigrants, and the poor and demanded the establishment of health as a public good accessible to everyone, as a person who inspired us to build our project. Moreover, we contacted lung cancer associations to include cancer patients in society and eliminate discrimination against them.</p>
              <p>Thus, we accomplished SDG number 10.</p>
            </section>
            <section id="land">
              <h3 class="small-title">15. Life on Land</h3>
              <div class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-15-min.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-15-min.png"/></a>
              </div>
              <p>In order to approach SDG number 15 and support life on land, we joined a collaboration organized by iGEM IISER Pune about World Environment Day. For this purpose, we took and sent a picture of our team members collecting waste from rural areas, making the environment a clean and safe place for living beings.</p>
              <p>In addition, we reached iGEM Crete, whose project relates to global food security, asking them to explain the utility and impact of their project in SDGs:</p>
              <p>"Loss of natural habitat could have devastating consequences for the planet's food supply. Our project takes seriously into consideration the need to maintain healthy crops at a time when malnutrition is increasing rapidly. Thus, it aims at an innovative method of diagnosing plant pathogens with the aim of introducing a huge advantage in agricultural diagnostics. Our proposed diagnostic method uses Lrrs instead of antibodies. This method is cheaper and much faster than the existing ones, giving the farmers the margin to save much money but also the opportunity to cultivate species that, until now, specific plant pathogens did not allow them to since the diagnosis was way more difficult."</p>
            </section>
            <section id="peace">
              <h3 class="small-title">16. Peace, Justice & Strong Institutions</h3>
              <div class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-16-min.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-16-min.png"/></a>
              </div>
              <p>As SDG number 16 attains, one of our primary goals is to create peaceful relationships and promote cooperation among people.</p>
              <p>Therefore, we hosted many collaborations aiming to bring together and connect iGEM members worldwide, for instance, the World DNA Day poster collaboration. In this context, we communicated and interacted with iGEM teams from different countries via virtual meetings.</p>
            </section>
            <section id="partnerships">
              <h3 class="small-title">17. Partnerships for the Goals</h3>
              <div class="gallery">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-17-min.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/sustainable/goal-17-min.png"/></a>
              </div>
              <p>Regarding SDG number 17, we considered that an important institution of the iGEM Competition and a fundamental criterion for the gold medal is the partnership between iGEM teams</p>
              <p>Accordingly, we developed a partnership with iGEM MetaThess having similar research subjects. Both groups contribute mainly to "Good Health and Well-being."</p>
              <p>We also cooperated with many iGEM teams to achieve our common goal, which is no other than spread Synthetic Biology and use it as a solution to an existing problem.</p>
              <p>Besides, this is the purpose of the competition. Hundreds of teams with the main focus on Synthetic Biology design projects with a variety of 12 tracks. Each team with its project contributes to more than one sustainable development goal, and all of the work is presented at the Grand Jamboree.</p>
            </section>
          </section>
          <section id="conclusion">
            <h2 class="main-title">Conclusion</h2>
            <p>It is optimistic that the SDGs and the debate around them have focused on the development and the enormous deprivations still imposed on the poorest half of humanity. Eliminating these deprivations as soon as possible is a moral imperative of the utmost importance.There is no more significant task than investing in young people's well-being. </p>
            <p>For Greece, the Development Goals provide an essential opportunity for recovery and a transition to a new development model. The implementation of the Goals involves all stakeholders, from the private sector and local government to academia, NGOs, and civil society organizations, who should work together to achieve them.</p>
            <p>It takes our concerted effort and cooperation, and the Patras Medicine team at IGEM 2022 has made an excellent start in promoting the 17 goals in Greece and globally!</p>
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
            currentPage: "Sustainable Development Impact",
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