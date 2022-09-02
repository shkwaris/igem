<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">

            <!---- TEAM NAME ---->
            <NuxtLink class="navbar-brand" to="/"><img
                    src="https://static.igem.wiki/teams/4118/wiki/logo-syn-pnoia-white.png" width="100" height="43" />
            </NuxtLink>

            <!---- SMALL SCREEN MENU ICON ---->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">

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
                                <NuxtLink class="dropdown-item" to="/team/members">Members</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/team/attributions">Attributions</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/team/contribution">Contribution</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    
                    <!-- COLLABORATION -->
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/collaboration">Collaboration</NuxtLink>
                    </li>

                    <!---- PROJECT ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Project
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NuxtLink class="dropdown-item" to="/project/description">Description</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/project/implementation">Implementation</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/project/proof-of-concept">Proof of Concept</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <!---- LAB ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Lab
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NuxtLink class="dropdown-item" to="/lab/experiments">Experiments</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/lab/results">Results</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/lab/engineering-success">Engineering Success</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/lab/measurement">Measurement</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/lab/parts">Parts</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/lab/notebook">Notebook</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <!-- MODEL -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Model
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NuxtLink class="dropdown-item" to="/model/mathematical-model">Mathematical Model</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/model/molecular-dynamics">Molecular Dynamics</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/model/nucleic-acid-interactions">Nucleic Acid Interactions</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <!-- PARTNERSHIP -->
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/partnership">Partnership</NuxtLink>
                    </li>

                    <!---- ENTERPRENEURSHIP ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Entrepreneurship
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NuxtLink class="dropdown-item" to="/entrepreneurship/company-description">Company Description</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/entrepreneurship/market-analysis">Market Analysis</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/entrepreneurship/financial-analysis">Financial Analysis</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/entrepreneurship/prospects">Prospects</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/entrepreneurship/business-plan">Business Plan</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <!---- (INTEGRATED) HUMAN PRACTICES ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            (Integrated) Human Practicies
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NuxtLink class="dropdown-item" to="/integrated-human-practicies/human-practicies">Human Practiices</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/integrated-human-practicies/science-communication">Science Communication</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/integrated-human-practicies/education">Education</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/integrated-human-practicies/inclusivity">Inclusivity</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/integrated-human-practicies/sustainable-development-goals">Sustainable Development Goals</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <!---- SAFETY ---->
                    <!-- <li class="nav-item">
                        <NuxtLink class="nav-link" to="/safety">Safety</NuxtLink>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>