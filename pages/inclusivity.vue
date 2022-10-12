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
                <li><a :href="`${currentPage}/#book`" v-scroll-to="'#book'">Synthetic Biology Scientists book</a></li>
                <li><a :href="`${currentPage}/#stem`" v-scroll-to="'#stem'">Women in STEM</a></li>
                <li><a :href="`${currentPage}/#pride`" v-scroll-to="'#pride'">“String Science with PRIDE” collaboration</a></li>
                <li><a :href="`${currentPage}/#blood`" v-scroll-to="'#blood'">Homo/Trans/Bi-phobia is not a blood component</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="overview">
            <h2 class="main-title">Overview</h2>
            <p>What comes to your mind when you think of diversity and inclusion? The majority of people interpret this as emphasizing issues like gender, ethnicity, or sexual orientation. What about impairments, though? People with disabilities are routinely ignored in conversations. Many institutions neglect to incorporate disabilities in their diversity and inclusion training despite the fact that one in four persons is thought to have a disability. It is commonly known that diversity fosters scientific discovery and creativity, however people with disabilities are underrepresented in STEM fields. According to the Americans with Disabilities Act (ADA), a person with a disability is anyone who suffers from a physical or mental impairment that significantly restricts one or more major life activities, has a history of such an impairment, such as cancer that is in remission, or is perceived to have such an impairment by others, such as someone who has severe burn scars. The participation of people with disabilities in the disciplines of science, technology, engineering, and mathematics (STEM) is increasing, but at an unacceptably slow rate, according to recent school and labor data.</p>
            <p>Numerous notable scientists with impairments have made contributions to history of science. Scientists with disabilities have made significant contributions to science for centuries, from early Fellows of the Royal Society like the blind mathematician Nicholas Saunderson, who held one of the highest positions in academia, to contemporary figures like theoretical physicist Professor Stephen Hawking FRS. These scientific and technology gurus are unaffected by disabilities.
            <br><br>Because of this, PatrasMed made the decision to project and emphasize the work of these influential figures in science this year through his work, demonstrating that we are all unique but equally valuable. Today, a disability is not a barrier.
            <br><br>In all these efforts, successful people with disabilities should be given the opportunity to share the specific expertise they have developed through their own personal experiences. People with disabilities can be given opportunities to use their skills to facilitate the participation of other people with disabilities in science. We should continue to develop our understanding of the factors that influence the underrepresentation of people with disabilities, address the issues and implement creative programs to share best practices. Small steps in the community can have a big impact and bring us closer to a shared vision of equal access to opportunities in science, technology and mathematics for people with disabilities.
            </p>
          </section>
          <section id="book">
            <h2 class="main-title">Scientists with special needs</h2>
            <p>What comes to mind when you think of diversity and inclusion? </p>
            <p>Patras Medicine thinks a lot. So by focusing on people who contributed a lot to the field of science in a different and special way, we highlighted the work of personalities with disabilities in the field of science by creating a presentation and not only. Thomas Edison and Stephen Hawking are some examples.</p> 
            <p>In conclusion, Patras Medicine made it clear that people with disabilities study, work, and research at all levels and in all fields of science. However, scientists with disabilities often face barriers because of their physical and mental conditions, how others perceive those conditions, and the ability biases embedded in the fabric of our communities and societies. Famous and lesser-known scientists continue to influence their fields while promoting disability awareness.</p>
            <p>Our team made this presentation about scientists with special needs who were pioneering in their field and had a huge scientific contribution trying to showcase that disabilities are not meant to discourage and prohibit a person from accomplishing his dreams.</p>
            <p><a class="link-download" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/inclusivity/disabled-scientists.pdf">Scientists with special needs.</a></p>
          </section>
          <section id="stem">
            <h2 class="main-title">Women in STEM</h2>
            <p>Aiming to highlight the contribution of women in science, we organized a podcast episode with a group of 5 young female scientists, also known as Lamborgenius team, as guests. Lamborgenius team consists of 5 young Greek women studying Chemical Engineering at the University of Patras, participating in the international competition “Chemecar” hosted by the American Institute of Technology. Their main goal? To invent a new chemical source of propulsion for automobiles. Interviewing the team, we learned more about their project and the competition, which seemed highly challenging. The example of this girl-composed team joining a competition where men make up the vast majority of participants is auspicious. It can be a stepping stone and inspiration for more female participation.</p>
            <a href="https://open.spotify.com/episode/3sad2xQaNqcThOyvzf4grl?si=489f1b5b2de74c1a" class="link-download">Listen to our Podcast</a>
          </section>
          <section id="pride">
            <h2 class="main-title">“String Science with PRIDE” collaboration</h2>
            <p>On the occasion of the day against homophobia and pride, our team decided to highlight the value of pride through active participation and awareness-raising in actions such as the collaboration organized by iGEM IISER Tirupati, titled “String Science with PRIDE”. Reaffirming once again that " we are all different but equal" our group describes that the word "pride" means a feeling of satisfaction from one's achievements or, collectively, from the achievements of those with whom one is closely associated. In addition, the word pride means professionalism and perception (P), respect (R), integrity (I), diversity (D), and excellence (E).</p>
            <a @click="scrollToCollaborations()" class="link-download">Here you can read our prose for String Science with PRIDE collaboration</a>
          </section>
          <section id="blood">
            <h2 class="main-title">Homo/Trans/Bi-phobia is not a blood component</h2>
            <p>On the occasion of the International Day Against Homophobia, Transphobia and Biphobia, May 17th, we decided to create a post and share it on social media aiming to send a strong signal to the public. The picture we designed is a way to show that whatever one's sexual preferences are, they do not differentiate them from the people around them. The purpose of this post is to condemn any discrimination based on sexuality.</p>
            <div class="gallery rounded mx-auto d-block" style="width: 50%;">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/inclusivity/homophobia.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/inclusivity/homophobia.jpg"/></a>
            </div>
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
            currentPage: "Diversity & Inclusion",
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
      scrollToCollaborations: function () {
          this.$router.push({path: "collaborations"});
          setTimeout(() =>{
            this.$scrollTo("#pride", 350, this.options);
          }, 1000)
        },
    }
}
</script>