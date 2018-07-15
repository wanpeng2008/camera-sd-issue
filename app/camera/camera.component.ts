import { Component, OnInit } from '@angular/core';
import * as camera from "nativescript-camera";
import { Image } from "ui/image";

@Component({
  moduleId: module.id,
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  takePicuture(event) {
    var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
    camera.takePicture(options).
        then((imageAsset) => {
            console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
            console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
        }).catch((err) => {
            console.log("Error -> " + err.message);
        });
  }
}
