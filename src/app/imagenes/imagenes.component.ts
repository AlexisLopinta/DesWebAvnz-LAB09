import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {
  imagenes: any[] = [
    {
      src: 'bmw.jpg',
      title: 'BMW',
      description: 'El BMW es un sedán de lujo que combina un diseño elegante con un rendimiento excepcional. Su motor potente y su interior lujoso hacen que sea un vehículo de alto rendimiento y comodidad.'
    },
    {
      src: 'toyota.jpg',
      title: 'Toyota',
      description: 'El Toyota es un SUV familiar confiable y versátil. Ofrece un amplio espacio interior y un excelente rendimiento en carretera. Es conocido por su durabilidad y bajo consumo de combustible.'
    },
    {
      src: 'audi.jpg',
      title: 'Auidi',
      description: 'El Audi es un automóvil deportivo de gama alta que combina un diseño elegante con tecnología de vanguardia. '
    },
    {
      src: 'bmw.jpg',
      title: 'Ford',
      description: 'El Ford es una camioneta pickup robusta y resistente. Diseñada para trabajos pesados, es ideal para la carga y el remolque. También ofrece comodidad y tecnología moderna en su interior.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
