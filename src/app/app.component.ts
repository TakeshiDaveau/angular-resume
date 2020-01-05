import { Component } from '@angular/core';
import { IListItem } from './i-list-item';

@Component({
  selector: 'tda-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly WORK_EXPERIENCE: IListItem[] = [
    {
      src: '/assets/images/work/artips_100x.jpg',
      title: 'Chief Technology Officier',
      subtitle: '<a href="https://artips.fr" target="_blank">Artips</a> // Paris, France',
      content:
        'Management of the 6 developers, who works mainly on <a href="https://microlearning.artips.fr/" target="_blank">Antiseche</a>, and keep coding ;)',
      aside: 'Since Apr 2019'
    },
    {
      src: '/assets/images/work/artips_100x.jpg',
      title: 'Fullstack JS lead developer',
      subtitle: '<a href="https://artips.fr" target="_blank">Artips</a> // Paris, France',
      content:
        'Create <a href="https://microlearning.artips.fr/" target="_blank">Antiseche</a>, a micro-learning platform from scratch, and work on multiple side projects.',
      aside: 'May 2016 - Apr 2019'
    },
    {
      src: '/assets/images/work/cegedim_100x.jpg',
      title: 'Angular JS lead developer',
      subtitle:
        '<a href="https://cegedim.fr" target="_blank">Cegedim</a> // Boulogne Billancourt, France',
      content:
        'Development of <a href="https://www.sybycegedim.com" target="_blank">SY by Cegedim</a>, a web portal for e-invoicing',
      aside: 'Aug 2015 - May 2016'
    },
    {
      src: '/assets/images/work/bpi_100x.png',
      title: 'Web developper Java EE',
      subtitle:
        '<a href="https://www.bpifrance.fr/" target="_blank">Bpifrance</a> // Maisons-Alfort, France',
      content:
        'Software maintenance & evolution for the project <a href="https://www.bpifrance.fr/Qui-sommes-nous/Nos-partenaires/Poles-de-competitivite/Poles-de-competitivite/Presentation-AAP-FUI" target="_blank">Supports Collaborative Projects of Innovation</a>',
      aside: 'Aug 2014 - Jul 2015'
    },
    {
      src: '/assets/images/work/objectif_100x.png',
      title: 'Hybrid mobile developer',
      subtitle:
        '<a href="https://www.bpifrance.fr/" target="_blank">Bpifrance</a> // Paris, France',
      content: 'Development of Tribs, a corporate social network.',
      aside: 'May 2013 - Jul 2014'
    },
    {
      src: '/assets/images/work/sopra_100x.png',
      title: 'Data analyst',
      subtitle:
        '<a href="https://www.soprabanking.com/" target="_blank">Sopra Banking</a> // Brussels, Belgium',
      content: 'IT System migration and user testing of Thaler, a retail banking progiciel.',
      aside: 'Sept 2011 - Feb 2013'
    }
  ];
  readonly EDUCATION: IListItem[] = [
    {
      title: "Master's degree in Computer Science and Engineering",
      subtitle:
        '<a href="https://polytech.univ-nantes.fr/" target="_blank">Polytech\'Nantes</a> // Nantes, France',
      content: 'A 3 years diploma in Software Engineering and Information Systems Architecture.',
      aside: '2008 - 2011'
    },
    {
      title: 'Technical university degree',
      subtitle:
        '<a href="https://www.univ-angers.fr/fr/acces-directs/facultes-et-instituts/iut.html" target="_blank">University Institute of Technology</a> // Angers, France',
      content: 'A 2 years diploma in Electrical Engineering and Computer Science.',
      aside: '2006 - 2008'
    }
  ];
  readonly PERSONAL_PROJECTS: IListItem[] = [
    {
      src: '/assets/images/personal/sesterce_100x.png',
      title: 'Sesterce',
      content:
        '<a href="https://sesterce.io" target="_blank">Sesterce</a> is available on these platforms <a href="https://app.sesterce.io" target="_blank">web</a>, <a href="https://play.google.com/store/apps/details?id=io.sesterce.androidapp" target="_blank">Android</a> and <a href="https://apps.apple.com/app/sesterce/id1239566667" target="_blank">iOS</a>',
      aside: '1K+ Monthly active users'
    }
  ];
}
