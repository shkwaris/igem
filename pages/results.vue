<template>
  <div>
    <Header :title="currentPage">
      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/rectangle-hero.png') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>
      <section class="intro">
        <p>We deliver our results according to our experimental design. First, we synthesized the Linear DNA Nanostructure. Long DNA strands were synthesized in two steps: first, a DNA template circularization and then the template's Amplification with a polymerase that possesses great strand displacement activity. Then, hairpin probes H1 and H2 were installed on the linear scaffold. After our Nanostructure was assembled we optimized and validated our method’s efficacy on detecting circular RNAs. Finally, we evaluated our biomarker selection. Additional experiments are presented at the end of the section. On this page, we present only our final results. Please visit our <a href="engineering" class="link-ref">Engineering Success</a> page for more info on the process by which we reached these results.</p>
      </section>
    </Header>

    <Scrollspy :currentPage="currentPage" initialSection="section1">
      <div class="row">
        <div class="col-lg-3">
          <nav class="section-nav">
            <ol>
              <li><a :href="`${currentPage}/#synthesis`" v-scroll-to="'#synthesis'">Nanostructure Synthesis</a></li>
              <ul>
                <li class="sub"><a :href="`${currentPage}/#ligaition`" v-scroll-to="'#ligaition'" parent="synthesis">Ligation Reaction</a></li>
                <li class="sub"><a :href="`${currentPage}/#rca`" v-scroll-to="'#rca'" parent="synthesis">RCA Reaction</a></li>
                <li class="sub"><a :href="`${currentPage}/#assembly`" v-scroll-to="'#assembly'" parent="synthesis">LDN Assembly</a></li>
              </ul>
              <li><a :href="`${currentPage}/#validation`" v-scroll-to="'#validation'">Method validation</a></li>
              <ul>
                <li class="sub"><a :href="`${currentPage}/#bsj1`" v-scroll-to="'#bsj1'" parent="validation">BSJ hsa_circ_0102533</a></li>
                <li class="sub"><a :href="`${currentPage}/#bsj2`" v-scroll-to="'#bsj2'" parent="validation">BSJ hsa_circ_0005962</a></li>
                <li class="sub"><a :href="`${currentPage}/#full`" v-scroll-to="'#full'" parent="validation">Full sequence hsa_circ_0102533</a></li>
                <li class="sub"><a :href="`${currentPage}/#linear`" v-scroll-to="'#linear'" parent="validation">Linear isoform of hsa_circ_0102533</a></li>
              </ul>
              <li><a :href="`${currentPage}/#evaluation`" v-scroll-to="'#evaluation'">Biomarker evaluation</a></li>
              <ul>
                <li class="sub"><a :href="`${currentPage}/#extraction`" v-scroll-to="'#extraction'" parent="evaluation">Total RNA extraction</a></li>
                <li class="sub"><a :href="`${currentPage}/#pcr`" v-scroll-to="'#pcr'" parent="evaluation">PCR results</a></li>
                <li class="sub"><a :href="`${currentPage}/#detection`" v-scroll-to="'#detection'" parent="evaluation">Cell line circRNA detection</a></li>
              </ul>
              <li><a :href="`${currentPage}/#ancillary`" v-scroll-to="'#ancillary'">Ancillary experiments</a></li>
              <li><a :href="`${currentPage}/#references`" v-scroll-to="'#references'">References</a></li>
            </ol>
          </nav>
        </div>

        <div class="col-lg-9 main-content">

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