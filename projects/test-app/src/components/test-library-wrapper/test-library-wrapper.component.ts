import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-test-library-wrapper',
  templateUrl: './test-library-wrapper.component.html',
  styleUrls: ['./test-library-wrapper.component.scss'],
})
export class TestLibraryWrapperComponent implements OnInit {
  config2: ImagePickerConf = {
    borderRadius: '8px',
    language: 'es',
    width: '330px',
    objectFit: 'contain',
    aspectRatio: 4 / 3,
    compressInitial: null,
  };
   initialImage: string = "https://header.net/wp-content/uploads/2024/01/cropped-logo-header.png";
  imageSrc: any = '';
  constructor() {}

  ngOnInit(): void {
  }

  onImageChanged(dataUri: string) {
    this.imageSrc = dataUri;
  }
}
