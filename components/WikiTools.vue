<template>
  <section class="wiki-tools-footer container">
    <a id="wiki-tools-link" href="https://tools.igem.org/wiki-tools/2022/patras-medicine/index">Access Wiki Tools</a>
    <a id="wiki-tools-repo" href="https://gitlab.igem.org/2022/patras-medicine">View Source Code</a>
    <img id="wiki-tools-pipeline" src="https://gitlab.igem.org/2022/patras-medicine/badges/main/pipeline.svg">
  </section>
</template>

<style>
.wiki-tools-footer {
  --bs-gutter-x: 1.5rem;
  background: #222124;
  margin: 0;
  max-width: 100%;
  padding: 1rem 3rem;
  display: flex;
  gap: 1.5em;
}

.wiki-tools-footer a {
  text-decoration: none;
  color: white;
  font-weight: 400;
  transition: color 0.3s;
}

.wiki-tools-footer a:hover {
  color: #08C784;
}

.wiki-tools-footer img {
  object-fit: contain;
}
</style>
