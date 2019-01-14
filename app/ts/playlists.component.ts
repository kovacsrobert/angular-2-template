import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
	selector: 'playlist',
	templateUrl: 'app/ts/playlists.component.html',
	inputs: ['videos']
})

export class PlaylistComponent {

	onSelect(video: Video) {
		console.log(JSON.stringify(video));
	}
}