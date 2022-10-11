<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <ol>
              <li><a :href="`${currentPage}/#results`" v-scroll-to="'#results'">Results</a></li>
              <li><a :href="`${currentPage}/#synthesis`" v-scroll-to="'#synthesis'">Nanostructure Synthesis</a></li>
              <ul>
                <li class="sub"><a :href="`${currentPage}/#section2-1`" v-scroll-to="'#section2-1'" parent="section2">Section 2-1</a></li>
                <li class="sub"><a :href="`${currentPage}/#section2-2`" v-scroll-to="'#section2-2'" parent="section2">Section 2-2</a></li>
                <li class="sub"><a :href="`${currentPage}/#section2-3`" v-scroll-to="'#section2-3'" parent="section2">Section 2-3</a></li>
                <li class="sub"><a :href="`${currentPage}/#section2-4`" v-scroll-to="'#section2-4'" parent="section2">Section 2-4</a></li>
              </ul>
              <li><a :href="`${currentPage}/#section3`" v-scroll-to="'#section3'">Section 3</a></li>
              <ul>
                <li class="sub"><a :href="`${currentPage}/#section3-1`" v-scroll-to="'#section3-1'" parent="section3">Section 3-1</a></li>
                <li class="sub"><a :href="`${currentPage}/#section3-2`" v-scroll-to="'#section3-2'" parent="section3">Section 3-2</a></li>
              </ul>
              <li><a :href="`${currentPage}/#section4`" v-scroll-to="'#section4'">Section 4</a></li>
              <ul>
                <li class="sub"><a :href="`${currentPage}/#section4-1`" v-scroll-to="'#section4-1'" parent="section4">Section 4-1</a></li>
                <li class="sub"><a :href="`${currentPage}/#section4-2`" v-scroll-to="'#section4-2'" parent="section4">Section 4-2</a></li>
                <li class="sub"><a :href="`${currentPage}/#section4-3`" v-scroll-to="'#section4-3'" parent="section4">Section 4-3</a></li>
              </ul>
              <li><a :href="`${currentPage}/#section5`" v-scroll-to="'#section5'">Section 5</a></li>
              <li><a :href="`${currentPage}/#section6`" v-scroll-to="'#section6'">Section 6</a></li>
            </ol>
          </nav>
        </div>

        <div class="col-lg-9 main-content">
          <section id="results">
            <h2 class="main-title">Results</h2>
            <p>We deliver our results according to our experimental design. First, we synthesized the Linear DNA Nanostructure. Long DNA strands were synthesized in two steps: first, a DNA template circularization and then the template's Amplification with a polymerase that possesses great strand displacement activity. Then, hairpin probes H1 and H2 were installed on the linear scaffold. After our Nanostructure was assembled we optimized and validated our method’s efficacy on detecting circular RNAs. Finally, we evaluated our biomarker selection. Additional experiments are presented at the end of the section. On this page, we present only our final results. Please visit our <a href="engineering" class="link-ref">Engineering Success</a> page for more info on the process by which we reached these results.</p>
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
            currentPage: "Results",
        };
    }, 
}
</script>