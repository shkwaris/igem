<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">

            <!---- TEAM NAME ---->
            <NuxtLink class="navbar-brand" to="/"><img
                    src="https://static.igem.wiki/teams/4118/wiki/syn-pnoia-white.png" width="100" height="43" />
            </NuxtLink>

            <!---- SMALL SCREEN MENU ICON ---->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto left-aligned">

                    <!---- HOME ---->
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                    </li>

                    <!---- TEAM ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Team
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NuxtLink class="dropdown-item" to="/team">Team</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/attributions">Attributions</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/collaborations">Collaborations</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <!---- PROJECT ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Project
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NuxtLink class="dropdown-item" to="/communication">Communication</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/contribution">Contribution</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/description">Description</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/engineering">Engineering</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/experiments">Experiments</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/implementation">Implementation</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/notebook">Notebook</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/partnership">Partnership</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/proof-of-concept">Proof of Concept</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/results">Results</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <!---- PARTS ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Parts
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NuxtLink class="dropdown-item" to="/part-collection">Part Collection</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/parts">Parts</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/improve">Improve</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <!---- SAFETY ---->
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/safety">Safety</NuxtLink>
                    </li>

                    <!---- HUMAN PRACTICES ---->
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/human-practices">Human Practices</NuxtLink>
                    </li>

                    <!---- AWARDS ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Awards
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NuxtLink class="dropdown-item" to="/education">Education</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/entrepreneurship">Entrepreneurship</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/hardware">Hardware</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/inclusivity">Inclusivity</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/measurement">Measurement</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/model">Model</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/plant">Plant</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/software">Software</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/sustainable">Sustainable</NuxtLink>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>