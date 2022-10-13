<template>
    <div>
      <Header :title="currentPage"></Header>

      <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/sponsors123.jpg') center center no-repeat; background-size: cover;">
        <h1 class="head-title">{{currentPage}}</h1>
      </div>

      <section class="intro">
        <p style="text-align: center">We want to express our gratitude and thank our sponsors. Without them none of it would have been possible.</p>
      </section>

      <section class="container sponsors-content">
        <div class="row">
          <div class="col-xs-12">
            <img class="rgcc" src="https://static.igem.wiki/teams/4118/wiki/sponsors/rgcc.png" alt="RGCC" />
            <p>RGCC was launched in 2004 by genetics pioneer Dr Ioannis Papasotiriou who believes that the key to effectively treating cancer lies in personalized medicine using the information in a patient’s genes. Using world-leading technology, equipment and innovative techniques, our team of scientists have developed a range of tests that give healthcare professionals comprehensive information about a patient’s genetics, physiology and immune profiles. This diversion from a ‘one-size-fits all approach’ uses data to determine what treatment will work best. Most importantly, by looking at a person’s genetics, physiology and immune profiles, our cost-effective and highly accurate tests will give you the information you need to formulate effective personalized treatment plans.</p>
            <a href="https://www.rgcc-group.com" class="sponsors-link" target="_blank">https://www.rgcc-group.com</a>
          </div>

          <div class="col-xs-12">
            <img class="naco" src="https://static.igem.wiki/teams/4118/wiki/sponsors/naco.png" alt="Naco" />
            <p>The company with the distinctive title NACO was founded in February 1992 with headquarters in Patras and is the Authorized Representative of XEROX HELLAS. The company's main activity is the sale and maintenance of XEROX HELLAS products, which concern machines and integrated systems that can meet the needs of each customer. The company also provides commercial and public service customers with a maintenance contract to fully cover their equipment.</p>
            <a href="https://www.naco.gr/" class="sponsors-link" target="_blank">https://www.naco.gr/</a>
          </div>

          <div class="col-xs-12">
            <img class="patrasuniversity" style="width: 400px; height:auto;" src="https://static.igem.wiki/teams/4118/wiki/sponsors/university-of-patras-logo.png" alt="Patras University" />
            <p>The University of Patras was founded in the city of Patras in 1964 and started to operate in academic year 1966-1967. In June 2013 the University of Western Greece was integrated into the University of Patras. In 2019 the majority of the departments of the Technological Educational Institute of Western Greece were also integrated into the University of Patras.</p>
            <a href="https://www.upatras.gr/en" class="sponsors-link" target="_blank">https://www.upatras.gr/en</a>
          </div>

          <div class="col-xs-12">
            <img class="idt" src="https://static.igem.wiki/teams/4118/wiki/sponsors/logo-idt.png" alt="IDT" />
            <p>Integrated DNA Technologies, Inc. (IDT) is in the business of moving science forward. We are scientists working for scientists. Our innovative tools and solutions for genomics applications are breaking down barriers and inspiring you to dream big and achieve your next breakthroughs.</p>
            <a href="https://eu.idtdna.com/pages" class="sponsors-link" target="_blank">https://eu.idtdna.com/pages</a>
          </div>

          <div class="col-xs-12">
            <img class="neb" src="https://static.igem.wiki/teams/4118/wiki/sponsors/logo-peb-removebg-preview.png" alt="NEB" />
            <p>Created "by scientists for scientists", NEB is renowned for consistently providing exceptional product quality and unsurpassed technical support. For over four decades, NEB has been shaping the landscape of bioscience research by discovering, developing and supporting superior research reagents. From our founding principles – placing the advancement of science and the stewardship of the environment as our highest priorities – to our unique corporate culture, NEB’s philosophy can be distilled down to three core values: passion, humility and being genuine.
              <br><br>
            A supplier-of-choice for scientists across the globe, NEB offers the largest selection of recombinant and native enzymes for genomic research. While restriction enzymes remain part of our core product portfolio, our ever-expanding catalog also includes products related to PCR, gene expression, sample preparation for next generation sequencing, synthetic biology, glycobiology, epigenetics and RNA analysis. Additionally, NEB is focused on strengthening alliances that enable new technologies to reach key market sectors, including molecular diagnostics development.</p>
            <a href="https://international.neb.com/about-neb/neb-overview" class="sponsors-link" target="_blank">https://international.neb.com/about-neb/neb-overview</a>
          </div>
          
          <div class="col-xs-12">
            <img class="snapgene" src="https://static.igem.wiki/teams/4118/wiki/sponsors/logo-snap.png" alt="SnapGene" />
            <p>In 2004, Benjamin Glick co-founded SnapGene to eliminate the inefficiencies he observed in molecular biology research. Created by a team of scientists, software engineers, and usability experts, SnapGene has become the easiest and most secure way for scientists to plan, visualize and document everyday molecular biology procedures.</p>
            <a href="https://www.snapgene.com/" class="sponsors-link" target="_blank">https://www.snapgene.com/</a>
          </div>
        </div>
      </section>
    </div>
</template>

  <script>
  export default {
      data() {
          return {
              currentPage: "Sponsors",
          };
      },
  }
  </script>