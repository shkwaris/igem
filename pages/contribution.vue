<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/human-practices/contr.jpg') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
    </Header>

    <!-- <section class="intro">
      <p>In this section we present our contributions to the iGEM community.</p>
    </section> -->

    <Scrollspy :currentPage="currentPage" initialSection="fundraising">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <div class="row">
              <progress min="0" max="100" value="0"></progress>
              <ol>
                <li><a :href="`${currentPage}/#fundraising`" v-scroll-to="'#fundraising'">Fundraising</a></li>
                <li><a :href="`${currentPage}/#business`" v-scroll-to="'#business'">Business plan</a></li>
              </ol>
            </div>
              
          </nav>
        </div>

        <div class="col-lg-9 main-content" id="main-content">
          <p>In this section we present our contributions to the iGEM community.</p>
          <section id="fundraising">
            <h2 class="main-title">Fundraising</h2>
            <p>For our team it is of high importance that future iGEM teams don't lose any time figuring out how to organize their fundraising. For that reason we documented our fundraising journey and prepared a plan for the future iGEM teams.</p>
            <a class="link-download" href="https://static.igem.wiki/teams/4118/wiki/website-assets/contribution/fundraising-tool.pdf" download="" target="_blank">Download the fundraising tool</a>
          </section>
          <section id="business">
            <h2 class="main-title">Business plan</h2>
            <p>A business plan can be very tricky so we are happy to provide this tool for the future iGEM teams, shaped from our experience. </p>
            <a class="link-download" href="https://static.igem.wiki/teams/4118/wiki/website-assets/contribution/business-plan-tool.pdf" download="" target="_blank">Download the business plan tool</a>
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
            currentPage: "Contribution",
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