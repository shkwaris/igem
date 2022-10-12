<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
    </Header>

    <section class="intro">
      <p>Setting a goal to inspire and motivate young people to engage with Synthetic Biology and understand the prospects of this scientific field in solving global problems, we implemented several educational activities and presentations.</p>
    </section>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#section1`" v-scroll-to="'#section1'">Comic</a></li>
                <li><a :href="`${currentPage}/#section2`" v-scroll-to="'#section2'">Board Games</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#section2-1`" v-scroll-to="'#section2-1'" parent="section2">DNA Runner</a></li>
                  <li class="sub"><a :href="`${currentPage}/#section2-2`" v-scroll-to="'#section2-2'" parent="section2">GENE-US</a></li>
                </ul>
                <li><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'">The SynBio Dictionary</a></li>
                <li><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'">Summer Camp</a></li>
                <li><a :href="`${currentPage}/#section5`" v-scroll-to="'#section5'">Presentation at School</a></li>
                <li><a :href="`${currentPage}/#section6`" v-scroll-to="'#section6'">New Chapter</a></li>
                <li><a :href="`${currentPage}/#section7`" v-scroll-to="'#section7'">SynBio Achievements</a></li>
              </ol>
            </div>

          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="section1">
            <h2 class="main-title">Comic</h2>
            <p>Our team has an unwavering goal to fight cancer. As we know, awareness and information are the key to preventing and fighting this morbidity. Therefore, starting from childhood, we decided to create a comic that will bring children closer to our idea and our project. After all, knowledge is power.This is how we bring young people into contact with health, wellness, cancer and Igemers through a delightful story. Our comic made the rounds of Greek schools where the children had the opportunity to hear our story and read it. The comic is called the lamp of health.</p>
            <div class="gallery grid">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/education/tempimageglafu2.gif"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/education/tempimageglafu2.gif"/></a>
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/education/tempimagen0y8fc.gif"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/education/tempimagen0y8fc.gif"/></a>
            </div>
          </section>
          <section id="section2">
            <h2 class="main-title">Board Games</h2>
            <section id="section2-1">
              <h3 class="small-title">DNA Runner</h3>
              <p>This is a board game about the complementarity of DNA bases, which also includes various factors - such as DNA polymerase or mutagenic agents - that can affect it. So, in a more playful way, we educate younger children on how DNA is organized inside the cell.</p>
            </section>
            <section id="section2-2">
              <h3 class="small-title">GENE-US</h3>
              <p>This is a knowledge board game in the form of questions and answers which consists of 6 categories of cards and combines knowledge of synthetic biology, anatomy, or physiology while including a more specialized category for the most daring players!</p>
            </section>
            <figure class="gallery">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/education/tempimages3lbpl.gif"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/education/tempimages3lbpl.gif"><</a>
            </figure>
          </section>
          <section id="section3">
            <h2 class="main-title">The SynBio Dictionary</h2>
            <p>Searching for innovative approaches regarding science communication and public education for Synthetic Biology we came up with the creation of a dictionary. Our “SynBio Dictionary” contains terms scientifically and accurately defined, related to Synthetic Biology that are commonly used in our project. The terms are thoroughly explained and alphabetically sorted so that they can be easily reached from the reader. We also considered implementing this activity as a collaboration in order to enrich our dictionary with even more terms, and so we invited 2 more teams to create their own extension to our idea.</p>
          </section>
          <section id="section4">
            <h2 class="main-title">Summer Camp</h2>
            <p>In the context of "Education," we visited the Experimental High School of Patras to communicate synthetic biology to young people and students.</p>
            <p>In the workshop area of the summer camp and with the supervising professor, Mr. Arlapanos Georgios, we encountered the members of the "Ludo ergo sum" team, and we were allowed to discuss our project and the team's achievements during the competition. </p>
            <p>However, the most important thing is that our goal was to introduce the students to the concept of synthetic biology. After giving a short presentation, we played the board games we created as a team which, in addition to entertainment, also have an educational role.</p>
            <p>We noticed that the students found this way of learning particularly fun; however, during the game, we were allowed to realize any misunderstandings in the instruction manual and the design of the board games. This happened because Mr. Arlapanos and his team have experience designing board games since they actively develop blind-friendly board games as a team, receiving outstanding accolades.</p>
            <p>Thus, they knew to evaluate our work, to point out any changes to us, but most importantly, for the students to learn some initial information about synthetic biology.</p>
            <p>We learned two things from this first meeting. On the one hand, we can achieve the dissemination of synthetic biology more playfully to a portion of people who are not familiar with it. But on the other hand, we learned first-hand that knowledge is not one-sided and that the two teams within the framework of our cooperation had to learn from each other.</p>
            <p>We learned about tabletop design from the students' experience and Mr. Arlapanos, and those of us got a little taste of the concept of SynBio.</p>
            <div class="gallery grid">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/education/tempimageretzsa.gif"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/education/tempimageretzsa.gif"></a>
            </div>
          </section>
          <section id="section5">
            <h2 class="main-title">Presentation at School</h2>
            <p>Visiting a High School of Patras, we had the opportunity to simply present our project and explain in a fun way Synthetic Biology basics through the board games we created, which we played for a second time to a more significant portion of students who are striving to become upcoming medical students. We also presented the comic that we created as a team to the students, which describes in a simpler way how cancer works and how it can affect a person's life.</p> 
            <p>It is remarkable how interesting they found the activities we prepared for them and paid attention the whole time. Our role that day was not only to disseminate synthetic biology but also to inform future health scientists about the wider problem of lung cancer diagnosis and, by extension, prognosis.</p>
            <p>To sum up, through our two meetings at the Experimental High School of Patras, we conclude that as Patras Medicine, we managed to teach the students the concept of complementarity, genetics, and the various variations that occur in the DNA of each person through the DNA Runner board game. On the other hand, we use the question-answer method through the Gene-us board game, the goal of which is for students to retain some of the basic concepts of synthetic biology - we know very well that this way of learning is more efficient.</p> 
            <p>Furthermore, through the comic book "The Lamp of Health," we helped them to understand in a simple but at the same time explanatory way that many of our choices can affect our lives positively or negatively. Finally, we were given the opportunity to contribute to the vocational guidance of young people, considering that we are undergraduate students 
              in the field of health sciences, participating in a synthetic biology competition and dealing with such a combustive issue.</p>
            <p>Overall from our point of view, we feel that we have been a positive influence on the students, and our meetings have been efficacious.</p>
            <div class="gallery grid">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/education/presentation-at-school.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/education/presentation-at-school.jpg"></a>
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/education/tempimageqxrqkj.gif"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/education/tempimageqxrqkj.gif"></a>
            </div>
          </section>
          <section id="section6">
            <h2 class="main-title">New Chapter</h2>
            <p>After we had successfully visited schools and the summer camp, we got impressed by the interest students showed in our project and most importantly in Synthetic Biology. The majority of them expressed their desire to further study and explore this scientific field. We thought that it would be really helpful to integrate Synthetic Biology to their lessons’ schedule. For this reason one of our team members, our advisor, wrote a whole chapter in which Synthetic Biology is scientifically defined and further approaches and biosecurity are described in detail. This chapter is a proposed extension for the school book of high school students interested in this field, so that they will  have the opportunity to be taught more about Synthetic Biology during their school life.</p>
            <a class="link-download" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/education/synthetic-biology-chapter-docx.pdf">Download synthetic biology chapter archive</a>
          </section>
          <section id="section7">
            <p>Our team wrote a book about Synthetic Biology achievements so far. The first chapter is dedicated to Nobel prize winners on Synthetic Biology issues. This section provides information about scientists awarded since 1958, highlighting their research achievements. Lastly, we have included a timeline of Synthetic Biology's most significant dates and accomplishments, aiming to briefly present the history of this scientific field to the readers.</p>
            <figure class="gallery">
              <a href=""><img src=""></a>
            </figure>
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
            currentPage: "Education",
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