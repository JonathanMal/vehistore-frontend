import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      // Sidebar toggle behavior
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
      });
    });


    window.addEventListener('load', function load() {
      const loader = document.getElementById('loader');
      setTimeout(function () {
        loader.classList.add('fadeOut');
      }, 300);
    });
  }

}
