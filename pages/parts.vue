<template>
  <div>
    <Header :title="currentPage"></Header>

    <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/parts123.jpg') center center no-repeat; background-size: cover;">
      <h1 class="head-title">{{currentPage}}</h1>
    </div>

    <section class="intro">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">Part</th>
              <th scope="col">Part Name</th>
              <th scope="col">Type</th>
              <th scope="col">Designed by</th>
              <th scope="col">Registry link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Part:BBa_K4118000</th>
              <td>RCA Domain</td>
              <td>DNA</td>
              <td>Eleftherios Bochalis</td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118000">http://parts.igem.org/Part:BBa_K4118000</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118001</th>
              <td>hsa_circ_0070354 H1 probe</td>
              <td>DNA</td>
              <td>Eleftherios Bochalis</td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118001">http://parts.igem.org/Part:BBa_K4118001</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118002</th>
              <td>hsa_circ_0102533 H1 probe</td>
              <td>DNA</td>
              <td>Eleftherios Bochalis</td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118002">http://parts.igem.org/Part:BBa_K4118002</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118003</th>
              <td>hsa_circ_0005962 H1 probe</td>
              <td>DNA</td>
              <td>Eleftherios Bochalis</td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118003">http://parts.igem.org/Part:BBa_K4118003</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118004</th>
              <td></td>
              <td>DNA</td>
              <td></td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118004">http://parts.igem.org/Part:BBa_K4118004</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118005</th>
              <td></td>
              <td>DNA</td>
              <td></td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118005">http://parts.igem.org/Part:BBa_K4118005</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118006</th>
              <td></td>
              <td>DNA</td>
              <td></td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118006">http://parts.igem.org/Part:BBa_K4118006</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118007</th>
              <td></td>
              <td>DNA</td>
              <td></td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118007">http://parts.igem.org/Part:BBa_K4118007</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118008</th>
              <td></td>
              <td>DNA</td>
              <td></td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118008">http://parts.igem.org/Part:BBa_K4118008</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118009</th>
              <td></td>
              <td>DNA</td>
              <td></td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118009">http://parts.igem.org/Part:BBa_K4118009</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: "Parts",
        };
    }, 
}
</script>