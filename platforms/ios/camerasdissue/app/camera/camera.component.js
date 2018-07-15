"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var CameraComponent = /** @class */ (function () {
    function CameraComponent() {
    }
    CameraComponent.prototype.ngOnInit = function () { };
    CameraComponent.prototype.takePicuture = function (event) {
        var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
        camera.takePicture(options).
            then(function (imageAsset) {
            console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
            console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    CameraComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-camera',
            templateUrl: './camera.component.html',
            styleUrls: ['./camera.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CameraComponent);
    return CameraComponent;
}());
exports.CameraComponent = CameraComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbWVyYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNENBQThDO0FBUzlDO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQixrQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUNkLHNDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3ZGLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFDLFVBQVU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBZlUsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzs7T0FDVyxlQUFlLENBZ0IzQjtJQUFELHNCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtY2FtZXJhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbWVyYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbWVyYS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbWVyYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuICB0YWtlUGljdXR1cmUoZXZlbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogZmFsc2UsIHNhdmVUb0dhbGxlcnk6IHRydWUgfTtcbiAgICBjYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucykuXG4gICAgICAgIHRoZW4oKGltYWdlQXNzZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2l6ZTogXCIgKyBpbWFnZUFzc2V0Lm9wdGlvbnMud2lkdGggKyBcInhcIiArIGltYWdlQXNzZXQub3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZWVwQXNwZWN0UmF0aW86IFwiICsgaW1hZ2VBc3NldC5vcHRpb25zLmtlZXBBc3BlY3RSYXRpbyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBob3RvIHNhdmVkIGluIFBob3Rvcy9HYWxsZXJ5IGZvciBBbmRyb2lkIG9yIGluIENhbWVyYSBSb2xsIGZvciBpT1NcIik7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgLT4gXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICB9XG59XG4iXX0=