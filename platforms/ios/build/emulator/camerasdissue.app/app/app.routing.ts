import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { CameraComponent } from "./camera/camera.component";

const routes: Routes = [
    { path: "", redirectTo: "/camera", pathMatch: "full" },
    { path: "camera", component: CameraComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }