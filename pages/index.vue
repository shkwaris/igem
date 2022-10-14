<template>
  <div style="overflow-x: hidden">
    <Header title="Home"></Header>

    <div class="anim">
      <video playsinline autoplay loop muted>
        <source src="https://video.igem.org/download/streaming-playlists/hls/videos/e793be73-ed5b-477a-9ca9-19ae9ab0d0f0-1080-fragmented.mp4" alt=""/>
      </video>
    </div>

    <section class="bg-section">
      <div class="container">
        <div class="row home-sections justify-content-end">
          <div class="col-lg-6 order-lg-last" data-aos="fade-left" data-aos-duration="1000">
            <h3 class="main-title">What is project syn-PNOIA?</h3>
            <p>We develop a non-invasive diagnostic tool for detecting NSCLC in its early stages, aiming to increase patient chances of survival. </p>
            <a class="primary-button" href="description">Read more</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row home-sections">
          <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
            <h3 class="main-title">The Problem</h3>
            <p>Lung cancer is the leading cause of cancer death, accounting for almost 18% of all cancer deaths. Each year, more people die of lung cancer than pancreatic, breast, and prostate cancers combined. Unfortunately, symptoms usually occur when cancer has become too advanced to cure, at which point the chances of survival are extremely low. In addition, currently used diagnostic techniques lack simplicity, accuracy, and patient safety. It is, therefore, necessary to develop a diagnostic approach that will be more accessible to the patient and will be able to fill the gaps shown by existing techniques.
              <br><br>Hover over the interactive pie chart to see the mortality rates of each cancer types.
            </p>
          </div>
          <PieChart/>
        </div>
      </div>
    </section>

    <section class="stats-counter">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 count" data-aos="zoom-in" data-aos-duration="1000">
            <div class="count-icon">
              <img src="https://static.igem.wiki/teams/4118/wiki/icons/counter-first.png" width="150" height="150" alt="#1 cause of cancer deaths">
            </div>
            <div class="number">#1 cause</div>
            <span>of cancer deaths</span>
          </div>
          <div class="col-lg-4 count" data-aos="zoom-in" data-aos-duration="1000">
            <div class="count-icon">
              <img src="https://static.igem.wiki/teams/4118/wiki/icons/counter-cases.png" width="150" height="150" alt="2.2 million new cases worldwide annually">
            </div>
            <div class="number">2.2 million</div>
            <span>new cases worldwide annually</span>
          </div>
          <div class="col-lg-4 count" data-aos="zoom-in" data-aos-duration="1000">
            <div class="count-icon">
              <img src="https://static.igem.wiki/teams/4118/wiki/icons/counter-deaths.png" width="150" height="150" alt="1.8 million new deaths worldwide annually">
            </div>
            <div class="number">1.8 million</div>
            <span>new deaths worldwide annually</span>
          </div>
        </div>
      </div>
    </section>

    <section class="grid-transparent-cards">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h3 class="large-title">Our technique</h3>
        <p class="smaller" style="text-align: center !important;">
          Combining the technology of Liquid Biopsies and DNA Nanostructures, we designed a system that can detect specific biomarkers, such as circRNAs, that lung cancer cells overexpress.
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4" data-aos="fade-up-right" data-aos-duration="1000">
            <div class="card-component">
              <div class="comp">
                <img src="https://static.igem.wiki/teams/4118/wiki/icons/biopsies-icon.png" alt="" />
              </div>
              <h4 class="small-title">Liquid Biopsy</h4>
              <h5 class="excerpt">It provides a patient-friendly diagnostic approach.</h5>
              <p>Liquid Biopsy is based on the sampling and analysis of biological fluids, especially blood, for diagnosing and monitoring cancerous tumors. The main feature of liquid biopsies is the ease of sampling, providing a non-invasive, rapid alternative.</p>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-up" data-aos-duration="1000">
            <div class="card-component">
              <div class="comp">
                <img src="https://static.igem.wiki/teams/4118/wiki/icons/circrna-icon.png" alt="" />
              </div>
              <h4 class="small-title">circRNAs</h4>
              <h5 class="excerpt">They have the potential to be ideal biomarkers.</h5>
              <p>They are a recent finding in cancer research whose abnormal expression is associated with the onset and progression of cancer. They are secreted by cancer cells in patients' blood. The panel of molecules we have chosen are NSCLC specific, likely not found in other cancer types.</p>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-up-left" data-aos-duration="1000">
            <div class="card-component">
              <div class="comp">
                <img src="https://static.igem.wiki/teams/4118/wiki/icons/dna-icon.png" alt="" />
              </div>
              <h4 class="small-title">DNA</h4>
              <h5 class="excerpt">They offer unmatched possibilities and novelty.</h5>
              <p>Over the last few years, many DNA nanotechnology devices have been engineered to overcome specific bottlenecks in developing new diagnostic and analytical tools. As a result, we believe they can provide innumerable possibilities at a low cost.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="container-fluid">
      <div class="row">
        <div class="col tabbed-gallery">
          <ul class="thumbnails">
            <li>
              <input type="radio" name="select" id="image1" checked>
              <div class="item-hugger" data-aos="fade-up" data-aos-duration="1000">
                <img class="thumb-image" src="https://static.igem.wiki/teams/4118/wiki/website-assets/home-gallery/wet-lab-small.jpg" />
                <label for="image1"></label>
              </div>
              <div class="gal-content" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/home-gallery/wet1.jpg') center center no-repeat; background-size: cover;">
                <div class="item-wrapper" data-aos="fade-right" data-aos-duration="1000">
                  <div class="title">Wet lab</div>
                  <p class="txt">You can browse through our first steps. The promising results encourage us for the long way to go!</p>
                  <a href="experiments" class="pills">Check out our lab journey</a>
                </div>
              </div>
            </li>
            <li>
              <input type="radio" name="select" id="image2">
              <div class="item-hugger" data-aos="fade-up" data-aos-duration="1000">
                <img class="thumb-image" src="https://static.igem.wiki/teams/4118/wiki/website-assets/home-gallery/product-small.jpg" />
                <label for="image2"></label>
              </div>
              <div class="gal-content" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/home-gallery/product1.jpg') center center no-repeat; background-size: cover;">
                <div class="item-wrapper" data-aos="fade-right" data-aos-duration="1000">
                  <div class="title">Product</div>
                  <p class="txt">We envision our technique applied to hospitals, health clinics, and microbiological labs. All needed components will be included in a single kit to ensure ease of use.</p>
                  <a href="implementation" class="pills">Visit our product design page</a>
                </div>
              </div>
            </li>
            <li>
              <input type="radio" name="select" id="image3">
              <div class="item-hugger" data-aos="fade-up" data-aos-duration="1000">
                <img class="thumb-image" src="https://static.igem.wiki/teams/4118/wiki/website-assets/home-gallery/hp-small.jpg" />
                <label for="image3"></label>
              </div>
              <div class="gal-content" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/home-gallery/hp1.jpg') center center no-repeat; background-size: cover;">
                <div class="item-wrapper" data-aos="fade-right" data-aos-duration="1000">
                  <div class="title">(Integrated) Human Practices</div>
                  <p class="txt">See how our team communicated project syn-PNOIA with the audience and how the experts' opinion developed our the project.</p>
                  <a href="human-practices" class="pills">Check out our journey</a>
                </div>
              </div>
            </li>
            <li>
              <input type="radio" name="select" id="image4">
              <div class="item-hugger" data-aos="fade-up" data-aos-duration="1000">
                <img class="thumb-image" src="https://static.igem.wiki/teams/4118/wiki/website-assets/home-gallery/e-sc-lab-horizontal.jpg" />
                <label for="image4"></label>
              </div>
              <div class="gal-content" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/home-gallery/e-c1.jpg') center center no-repeat; background-size: cover;">
                <div class="item-wrapper" data-aos="fade-right" data-aos-duration="1000">
                  <div class="title">Education & Communication</div>
                  <p class="txt">Comics, podcasts, board games, project presentations, and many more. Did we manage to spread Syn-Bio knowledge?</p>
                  <a href="communication" class="pills">Read more</a>
                </div>
              </div>
            </li>
            <li>
              <input type="radio" name="select" id="image5">
              <div class="item-hugger" data-aos="fade-up" data-aos-duration="1000">
                <img class="thumb-image" src="https://static.igem.wiki/teams/4118/wiki/website-assets/home-gallery/model-small.jpg" />
                <label for="image5"></label>
              </div>
              <div class="gal-content" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/home-gallery/model1.jpg') center center no-repeat; background-size: cover;">
                <div class="item-wrapper" data-aos="fade-right" data-aos-duration="1000">
                  <div class="title">Model</div>
                  <p class="txt">Observe our system through different angles: Thermodynamic analysis, 2D & 3D structure modeling, Molecular Dynamics simulations, and design's kinetic behavior.</p>
                  <a href="model" class="pills">Take a look at our design</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
    AOS.init({});
  },
}
</script>
