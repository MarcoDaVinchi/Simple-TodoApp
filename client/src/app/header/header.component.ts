import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  githubLogoUrl = '../assets/img/github_png.png';
  githubRepoUrl = 'https://github.com/MarcoDaVinchi/Simple-TodoApp';

  constructor() {}

  ngOnInit(): void {}
}
