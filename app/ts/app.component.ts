import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlists.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
	videos: Array<Video>;

	constructor() {
		this.videos = [
			new Video(1, 'QS-HN1Wfyg','How Does Banksy Make Money?'),
			new Video(2, 'UeAKTjx_eKA', 'Student Finds Hidden Devices in the College Library - Are they nefarious?')
		];
	}
}
