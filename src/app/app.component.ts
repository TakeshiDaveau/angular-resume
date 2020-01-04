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
      title: 'Chief Technical Officier',
      subtitle: '<a href="https://artips.fr" target="_blank">Artips</a> // Paris, France',
      content:
        'Manage a team of 6 developers ● Set-up a long term roadmap to improve security, plan new features, and improve accessibility ● Customer meeting ● Write security and architecture documents ● Keep coding ;)',
      aside: 'Since Apr 2019'
    },
    {
      src: '/assets/images/work/artips_100x.jpg',
      title: 'Fullstack JS lead developer',
      subtitle: '<a href="https://artips.fr" target="_blank">Artips</a> // Paris, France',
      content:
        'Front-end and back-end development oh the  ● Set-up the front-end and the back-end architecture of the <a href="https://microlearning.artips.fr/" target="_blank">Antiseche</a> micro-learning platform from scratch ● Write a code styleguide ● Database modeling ● Set-up the CI and automatic deployment ● Improve the tasks management',
      aside: 'May 2016 - Apr 2019'
    },
    {
      src: '/assets/images/work/cegedim_100x.jpg',
      title: 'Angular JS lead developer',
      subtitle:
        '<a href="https://cegedim.fr" target="_blank">Cegedim</a> // Boulogne Billancourt, France',
      content: 'Front-end development',
      aside: 'May 2016 - Apr 2019'
    },
    {
      src: '/assets/images/work/bpi_100x.png',
      title: 'Web developper Java EE',
      subtitle:
        '<a href="https://www.bpifrance.fr/" target="_blank">Bpifrance</a> // Boulogne Billancourt, France',
      content: 'Front-end development',
      aside: 'May 2016 - Apr 2019'
    },
    {
      src: '/assets/images/work/objectif_100x.png',
      title: 'Hybrid mobile developer',
      subtitle:
        '<a href="https://www.bpifrance.fr/" target="_blank">Bpifrance</a> // Boulogne Billancourt, France',
      content: 'Front-end development',
      aside: 'May 2016 - Apr 2019'
    },
    {
      src: '/assets/images/work/sopra_100x.png',
      title: 'Data analyst',
      subtitle:
        '<a href="https://www.soprabanking.com/" target="_blank">Sopra Banking</a> // Brussells, Belgium',
      content: 'Front-end development',
      aside: 'May 2016 - Apr 2019'
    }
  ];
}
