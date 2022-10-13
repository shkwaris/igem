<template>
  <div>
    <Header :title="currentPage"></Header>

    <div class="bg" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/collaborations/parts123.jpg') center center no-repeat; background-size: cover;">
      <h1 class="head-title">{{currentPage}}</h1>
    </div>

    <section class="intro">
      <p>In this part collection which ranges from part number BBa_K4118000 to BBa_K4118008, we have successfully submitted nine basic parts to the Registry. The primary function of this collection lies with the DNA Nanostructure it entails. We have created a Nanostructure for each one of our targets (hsa_circ_0102533, hsa_circ_0005962, hsa_circ_0070354). Hence, we enlisted an H1/H2 probe couple for each target. Since all LDNs consist of the same linear scaffold, we enlisted one RCA domain, corresponding to a single repeat of the scaffold. Lastly, we enlisted the phosphorylated template and the primer from which the linear scaffold is produced through Rolling Circle Amplification. Since we aim for our technique to be implemented for detecting other circular RNAs in multiple diseases, this collection seeks to provide all the necessary info for the Nanostructure construction free-handedly.</p>
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
              <td>hsa_circ_0070354 H2 probe</td>
              <td>DNA</td>
              <td>Eleftherios Bochalis</td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118004">http://parts.igem.org/Part:BBa_K4118004</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118005</th>
              <td>hsa_circ_0102533 H2 probe</td>
              <td>DNA</td>
              <td>Eirini Ntereki</td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118005">http://parts.igem.org/Part:BBa_K4118005</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118006</th>
              <td>hsa_circ_0005962 H2 probe</td>
              <td>DNA</td>
              <td>Eirini Ntereki</td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118006">http://parts.igem.org/Part:BBa_K4118006</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118007</th>
              <td>Phosphorylated template</td>
              <td>DNA</td>
              <td>Eirini Ntereki</td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118007">http://parts.igem.org/Part:BBa_K4118007</a></td>
            </tr>
            <tr>
              <th scope="row">Part:BBa_K4118008</th>
              <td>RCA primer</td>
              <td>DNA</td>
              <td>Eirini Ntereki</td>
              <td><a class="link-primary" href="http://parts.igem.org/Part:BBa_K4118008">http://parts.igem.org/Part:BBa_K4118008</a></td>
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