<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>    
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="byus">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#byus`" v-scroll-to="'#byus'">Organized by us</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#ijet`" v-scroll-to="'#ijet'" parent="byus">iJET video</a></li>
                  <li class="sub"><a :href="`${currentPage}/#dnaday`" v-scroll-to="'#dnaday'" parent="byus">World DNA day</a></li>
                  <li class="sub"><a :href="`${currentPage}/#diagnostics`" v-scroll-to="'#diagnostics'" parent="byus">Applications of Synthetic Biology in Diagnostics</a></li>
                  <li class="sub"><a :href="`${currentPage}/#tobacco`" v-scroll-to="'#tobacco'" parent="byus">World no Tobacco day</a></li>
                  <li class="sub"><a :href="`${currentPage}/#promotion`" v-scroll-to="'#promotion'" parent="byus">Promotion video translation</a></li>
                </ul>
                <li><a :href="`${currentPage}/#participated`" v-scroll-to="'#participated'">Participated in</a></li>
                <ul>
                  <li class="sub"><a :href="`${currentPage}/#msp`" v-scroll-to="'#msp'" parent="participated">MSP Vector journal</a></li>
                  <li class="sub"><a :href="`${currentPage}/#biosafety`" v-scroll-to="'#biosafety'" parent="participated">Biosafety Practices</a></li>
                  <li class="sub"><a :href="`${currentPage}/#journal`" v-scroll-to="'#journal'" parent="participated">Synthetic Biology Art Journal</a></li>
                  <li class="sub"><a :href="`${currentPage}/#pharaohs`" v-scroll-to="'#pharaohs'" parent="participated">Pharaohs CU iGEM from Egypt</a></li>
                  <li class="sub"><a :href="`${currentPage}/#emoji`" v-scroll-to="'#emoji'" parent="participated">Emoji Challenge</a></li>
                  <li class="sub"><a :href="`${currentPage}/#lymphoma`" v-scroll-to="'#lymphoma'" parent="participated">World Lymphoma day</a></li>
                  <li class="sub"><a :href="`${currentPage}/#dengue`" v-scroll-to="'#dengue'" parent="participated">World Dengue day</a></li>
                  <li class="sub"><a :href="`${currentPage}/#environment`" v-scroll-to="'#environment'" parent="participated">World Environment day</a></li>
                </ul>
                <li><a :href="`${currentPage}/#meetups`" v-scroll-to="'#meetups'">Meetups & Meetings</a></li>
              </ol>
            </div>
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <section id="byus">
            <h2 class="main-title">Organized by us</h2>
            <section id="ijet">
              <h3 class="small-title">iJET video</h3>
              <p>Considering the global impact of the iGEM Competition and inspired by the "iJET paper plane that unites the world," a collaboration video organized by iGEM Aachen 2020, we decided to develop the existing idea further. Because of this, we created a video in which several iGEM teams, represented by one or more team members, would report their experience in the competition and their motivation for participating. The iGEM members were also requested to reveal the track they selected to compete in and briefly describe their project. Our iJET paper plane traveled in 11 cities worldwide, each represented by one iGEM team sharing their own fascinating idea and excitement for iGEM Competition 2022. This collaboration video was our way to cover thousands of miles bringing young researchers together and allowing them to highlight the importance and utility of Synthetic Biology by presenting their SynBio-based solution to an existing problem.</p>
            </section>
            <section id="dnaday" class="gallery">
              <h3 class="small-title">World DNA day</h3>
              <p>On World DNA day, April 25, our team decided to bring together iGEMers from around the world by organizing an exciting collaboration. Our idea was based on creating a DNA graphic, the bases of which would be represented by pictures of iGEMers, each holding the corresponding nucleotide. Therefore, we invited other iGEM teams from many countries to photograph one of their team members holding a DNA base. Afterward, we included all images in our final poster, with more than 40 participants.</p>
              <a style="width: 50%; height: auto;" class="rounded mx-auto d-block" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/fig1.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/fig1.png"/></a>
            </section>
            <section id="diagnostics" class="gallery">
              <h3 class="small-title">Applications of Synthetic Biology in Diagnostics</h3>
              <p>As part of our partnership with the iGEM MetaThess team, we decided to co-organize a collaboration. Hence we came up with the idea of creating a poster with the title: "Applications of Synthetic Biology" in Diagnostics intending to show the multiple applications of Synthetic Biology science to this particular field of medicine. For this reason, we invited iGEM teams competing in the diagnostics track of the competition to send us a picture of them during the experiments at the laboratory. We finally merged all of the images into the poster writing down the disease each team aims to diagnose. By sharing the final result on our social media, we informed the public about how widespread Synthetic Biology provides promising solutions for many diseases.</p>
              <a style="width: 50%; height: auto;" class="rounded mx-auto d-block" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/fig2.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/fig2.png"/></a>
            </section>
            <section id="tobacco">
              <h3 class="small-title">World no Tobacco day</h3>
              <p>May 31 has been established as World No Tobacco day. Since smoking is one of the most common risk factors for developing lung tumors, we decided to raise public awareness by inviting school students and other iGEMers to create posters against smoking.</p>
              <div class="gallery grid2">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco1.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco2.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco3.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco4.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco4.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco5.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/tobacco5.jpg"/></a>
              </div>
            </section>
            <section id="promotion" class="gallery">
              <h3 class="small-title">Promotion video translation</h3>
              <p>Among our collaboration activities was translating our promotion video into different languages. Specifically, we got our promotion video script translated into Chinese by iGEM CUHK-Hong Kong, in Finnish by iGEM Aboa, in Hindi by iGEM IIT Delhi, and in Spanish by iGEM Tec Chihuahua. In addition, our team also managed to translate the script for iGEM CUHK-Hong Kong into Greek. This is a simple way to make the promotion video and, by extension, the project of the team and the concept of the iGEM Competition easily accessible and understandable by more people.</p>
            </section>
          </section>
          <section id="participated">
            <h2 class="main-title">Participated in</h2>
            <section id="msp">
              <h3 class="small-title">Scientific article writing for MSP Vector journal</h3>
              <p>One of the most remarkable collaborations we participated in is the journal organized by the MSP 2022 iGEM team. This year's journal is the third edition, and this initiative aims to highlight the most innovative investigation and research teams have done for iGEM Competition 2022. After a peer review process and expert reviews from the journal editing community members, the three best articles are selected to be published. Our scientific article was distinguished among the three best participant articles and finally published! The title of our paper is: "Redefining lung cancer diagnosis with the use of DNA nanostructures." It refers to the research done by our team, which is based on Synthetic Biology combining liquid biopsies and circRNAs as specific biomarkers for developing a new diagnostic tool for lung cancer. </p>
              <a class="link-download" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/2022-patras-medicine-msp-journal-article.pdf">Download the article</a>
            </section>
            <section id="biosafety">
              <h3 class="small-title">Biosafety Practices</h3>
              <p>Biosafety has been a crucial factor throughout the development of our project. Hence we were interested in participating in the collaboration that iGEM'22 Team-IISER_Mohali organized about a series of informative videos based on Biosafety Practices followed in Labs. Thus we filmed a short video about biosafety related to a cell line that we use as a negative control to test our diagnostic tool. BEAS 2B cell line is classified as biosafety level 2 because it contains polyoma viral DNA sequences. To minimize the risk of accidental exposure to the cells, the laboratory personnel must follow precise safety rules, which we analyzed in our video. In addition, we rigorously present safety measures in case of exposure to the cell line.</p>
              <a class="link-download" target="_blank" href="https://www.youtube.com/watch?v=noctwnApqTg">Watch the video</a>
            </section>
            <section id="journal">
              <h3 class="small-title">Synthetic Biology Art Journal</h3>
              <p>Aiming to embrace art and combine it with science, we took part in a fascinating collaboration, a Synthetic Biology art journal organized by the ASU iGEM team. Getting inspired by Synthetic Biology, we created our art pieces, a poster, and a poem, and we submitted them to be part of a collection of fragments from iGEM teams worldwide.</p>
              <div class="gallery grid2">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/art1.jpeg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/art1.jpeg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/art2.png"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/art2.png"/></a>
              </div>
            </section>
            <section id="pharaohs">
              <h3 class="small-title">Collaboration with Pharaohs CU iGEM from Egypt</h3>
              <p>In the context of our partnership with Pharaohs CU iGEM team, we were asked to film a video about Alzheimer's disease. More specifically, they invited us to translate the informative video they had already created into Greek so that more people could watch it and understand the epidemiology of Alzheimer's disease.</p>
              <p>Moreover, Pharaohs CU team invited us to translate into Greek a 30 pages book related to their project where Alzheimer's disease is described in detail and in a simple way. </p>
              <a class="link-download" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/greek-ad-book.pdf">Download the book</a>
            </section>
            <section id="emoji">
              <h3 class="small-title">Emoji Challenge</h3>
              <p>One of the most fun collaborations we were invited to is the Emoji Challenge by iGEM Aboa. Our mission was to design our own Emoji, which our project, lung cancer diagnosis, should inspire. They picked the Emoji we created as the best participation and posted it on their social media.</p>
              <div class="gallery grid2">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/emoji.jpeg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/emoji.jpeg"/></a>
              </div>
            </section>
            <section id="lymphoma">
              <h3 class="small-title">World Lymphoma day</h3>
              <p>On the occasion of World Lymphoma Day, September 15th, we were invited by iGEM UB to join an exciting collaboration. We selected information and wrote a short text about a lymphoma subtype called Peripheral T non-Hodgkin lymphoma. iGEM UB, having assigned a different lymphoma subtype to each of the 9 participant teams, finally created a joint post with all the information. It was an excellent opportunity to learn about another cancer type, apart from lung cancer which we have thoroughly studied. </p>
              <div class="gallery grid2">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/lymphoma1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/lymphoma1.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/lymphoma2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/lymphoma2.jpg"/></a>
              </div>
            </section>
            <section id="dengue">
              <h3 class="small-title">World Dengue day</h3>
              <p>On World Dengue Day, we were invited by the iGEM 2 IISER Pune team to join them in their attempt to combat dengue. Our mission was to collaborate by filming a short video in which one of our team members would take a pledge related to the prevention of the disease.</p>
            </section>
            <section id="environment">
              <h3 class="small-title">World Environment day</h3>
              <p>To celebrate world environment day, we took part in the relevant collaboration organized by the iGEM IISER Pune team, with the title "Only one earth." To contribute to making Earth a better place to live in, we pictured two of our team members collecting waste from the countryside, aiming to clean rural areas. The photo was included in a final collage and posted on social media to raise public awareness for environmental protection. </p>
              <div class="gallery grid2">
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/environment1.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/environment1.jpg"/></a>
                <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/environment2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/environment2.jpg"/></a>
              </div>
            </section>
          </section>
          <section id="meetups">
            <h2 class="main-title">Meetups & Meetings</h2>
            <p>Among the most significant collaborations, we participated in were the meet-ups, where we had the opportunity to interact with other iGEM teams, present our project, receive and give feedback, as well as exchange ideas.</p>
            <p>Thankfully, we were invited to join many meet-ups globally and communicate syn-PNOIA on four continents, gaining positive feedback and learning about other teams' projects.</p>
            <p><span>America:</span> On August 20th, we attended the Mini Jamboree, hosted by iGEM Cornell and iGEM McGill team, which was a large meet-up for iGEM teams from USA and Canada. We performed a 15-minute presentation of our project and research so far, including Dry Lab, Wet Lab, and Human Practices, in front of a panel of judges. We got an early taste of what the Grand Jamboree judging process would look like and the feedback we got helped us evolve our project, by integrating more entrepreneurial aspects.</p>
            <p><span>Africa:</span> On August 23rd, Pharaoh's CU iGEM team invited us to participate virtually in their meet-up with Egyptian iGEM teams, professors from Cairo, and African iGEM Ambassadors.</p>
            <p><span>Asia:</span> On August 6th, we joined the Worldshaper-HZ China team's meet-up among Chinese teams, where we had the opportunity to present syn-PNOIA and gain feedback.</p>
            <p><span>Europe:</span> On 22-24 of July, we took part in the Summer Mediterranean iGEM meeting organized by iGEM UBarcelona, where many iGEM teams were invited to share their knowledge, different approaches, and experience. The panel also included projects and selected scientists' presentations.</p>
            <p><span>Greece:</span> On May 28th, we attended the Pre-Aegean meeting from the iGEM Patras team, an online introductory meeting between the Greek iGEM teams to meet each other and present our initial project ideas. An extra task for the participant teams was to choose and describe a person or scientist who inspired them to participate in the competition. Thus, we selected Shirley Chisholm, who fought for public health to become a right and requested equal rights for women, minorities, immigrants, and the poor. That motivated us to engage with Synthetic Biology in Medicine and prove that science is for everyone!</p>
            <a class="link-download" download="" target="_blank" href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/shirley.pdf">Read about Shirley</a>
            <br>
            <br>
            <p>Afterward, we participated in the Aegean meeting, which took place with a physical presence in Patras on the 10-11 of July. At this event, we had the opportunity to exchange feedback on our projects and play interactive games to enhance the bonding among the Greek teams. We also presented our research to the Minister of Agriculture, an honored guest.</p>
            <div class="gallery grid2">
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/aegean2.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/aegean2.jpg"/></a>
              <a href="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/aegean.jpg"><img src="https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/aegean.jpg"/></a>
            </div>
            <p>Apart from the meet-ups we attended, we had the idea to host several online meetings throughout our journey to iGEM Competition 2022, inviting other iGEM teams from around the world to discuss our projects and share our excitement for the competition and the research process. </p>
            <p><span>These are the teams we contacted from our collaboration / meetings:</span></p>
            <p>iGEM Aachen, iGEM ICT Mumbai, iGEM WWU, iGEM CU Egypt - Pharaohs, iGEM DU DTU NSUT, iGEM Thessaloniki, Empire Gene iGEM team, iGEM Waterloo, iGEM CUHK-Hong Kong, iGEM Munster, iGEM Freiburg, iGEM Tuebingen.</p>
            <p>Through these meetings, we met incredible young people willing to work and investigate more about Synthetic Biology science, and we also gave and gained helpful advice regarding each others' projects.</p>
            <p>Particularly, iGEM ICT Mumbai helped us in our first Dry Lab steps regarding the mathematical modeling of our project, making modest suggestions such as to include molecular dynamics in our project, and we, therefore, got involved with GROMACS and oxDNA. At the same time, our team assisted iGEM ICT-Mumbai in forming and coordinating their team. Moreover, we collaborated with the iGEM Tubingen team, instructing them to do molecular dynamics simulations in GROMACS.</p>
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
            currentPage: "Collaborations",
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