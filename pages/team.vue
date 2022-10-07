<template>
    <div style="overflow-x: hidden">
        <Header title="Team"></Header>
        <div class="bg team" style="background: url('https://static.igem.wiki/teams/4118/wiki/website-assets/group-photo.jpg') center center no-repeat; background-size: cover;">
          <h1 class="head-title">The Team</h1>
        </div>
        <section class="container members">
            <h2 class="main-title text-center mb-5">Team Members</h2>
            <div class="row">
                <template v-for="member in memberList" v-if="memberList !== null">
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div data-aos="zoom-out" data-aos-duration="300" data-aos-offset="100">
                            <figure class="effect">
                                <img :src="getLink(member.id)" alt="img18"/>
                                <figcaption>
                                    <h3 class="name">{{member.name}}</h3>
                                    <template v-for="category in member.categories">
                                        <span class="role team-leader" v-if="category === 'Team Leader'">{{category}}</span>
                                        <span class="role web-developer" v-if="category === 'Web Developer'">{{category}}</span>
                                        <span class="role wet-lab" v-if="category === 'Wet Lab'">{{category}}</span>
                                        <span class="role dry-lab" v-if="category === 'Dry Lab'">{{category}}</span>
                                        <span class="role graphic-design" v-if="category === 'Graphic Design'">{{category}}</span>
                                        <span class="role fundraiser" v-if="category === 'Fundraiser'">{{category}}</span>
                                        <span class="role entrepreneurship" v-if="category === 'Entrepreneurship'">{{category}}</span>
                                        <span class="role human-practices" v-if="category === 'Human Practices'">{{category}}</span>
                                        <span class="role public-relations" v-if="category === 'Public Relations'">{{category}}</span>
                                    </template>
                                    <p>{{member.title}}</p>
                                    <a>View more</a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </template>
            </div>
            <br>
            <h2 class="main-title text-center mb-5" style="margin-top: 30px;">Lab Instructors</h2>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div data-aos="zoom-out" data-aos-duration="300" data-aos-offset="100">
                        <figure class="effect">
                            <img :src="getLink(3)" alt="img18"/>
                            <figcaption>
                                <h3 class="name">Panagiota Kalligosfyri</h3>
                                <span class="role lab-instructor">Lab Instructor</span>
                                <p>Chemist PhD, Postdoctoral researcher</p>
                                <a>View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div data-aos="zoom-out" data-aos-duration="300" data-aos-offset="100">
                        <figure class="effect">
                            <img :src="getLink(4)" alt="img18"/>
                            <figcaption>
                                <h3 class="name">Vasileios Vardas</h3>
                                <span class="role lab-instructor">Lab Instructor</span>
                                <p>PhD student at the University of Patras</p>
                                <a>View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div data-aos="zoom-out" data-aos-duration="300" data-aos-offset="100">
                        <figure class="effect">
                            <img :src="getLink(5)" alt="img18"/>
                            <figcaption>
                                <h3 class="name">Eleni Lamprou</h3>
                                <span class="role lab-instructor">Lab Instructor</span>
                                <p>PhD student at the University of Patras</p>
                                <a>View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <br>
            <h2 class="main-title text-center mb-5" style="margin-top: 30px;">Team Supervisors</h2>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div data-aos="zoom-out" data-aos-duration="300" data-aos-offset="100">
                        <figure class="effect">
                            <img :src="getLink(15)" alt="img18"/>
                            <figcaption>
                                <h3 class="name">Kalogianni Despina</h3>
                                <span class="role fundraiser">Team Supervisor</span>
                                <p>Assistant Professor at the University of Patras</p>
                                <a>View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div data-aos="zoom-out" data-aos-duration="300" data-aos-offset="100">
                        <figure class="effect">
                            <img :src="getLink(16)" alt="img18"/>
                            <figcaption>
                                <h3 class="name">Kallergi Galatea</h3>
                                <span class="role fundraiser">Team Supervisor</span>
                                <p>Assistant Professor at the University of Patras</p>
                                <a>View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <br>
            <h2 class="main-title text-center mb-5" style="margin-top: 30px;">Team Advisor</h2>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div data-aos="zoom-out" data-aos-duration="300" data-aos-offset="100">
                        <figure class="effect">
                            <img :src="getLink(17)" alt="img18"/>
                            <figcaption>
                                <h3 class="name">Bochalis Christodoulos</h3>
                                <span class="role team-leader">Team Advisor</span>
                                <p>MSc in Artificial Intelligence at the National Centre</p>
                                <a>View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import fetch from 'node-fetch';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    data() {
        return {
            memberList: null,
        };
    },
    mounted() {
        let url = "https://static.igem.wiki/teams/4118/wiki/website-assets/members/members2.json"
        fetch(url)
          .then(res => res.json())
          .then(data => this.memberList = data)
          .catch(err => { throw err });
        AOS.init({});
    },
    methods: {
        getLink: function(id) {
            return "https://static.igem.wiki/teams/4118/wiki/website-assets/members/"+id+".jpg";
        },
    }
}
</script>