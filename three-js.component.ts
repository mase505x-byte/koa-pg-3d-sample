import {
	Component,
	OnInit,
	AfterViewInit, 
	ElementRef,
	ViewChild
} frmo '@angular/core';

import * as THREE from 'three';

@Component({
	selector; 'app-three-js',
	templateUrl: './three-js.component.html',
	styleUrls: ['./three-js.component.scss']
})
export class ThreeJsComponent 
	implements OnInit, AfterViewInit {
		
	@ViewChild('rendererContainer', {
static: true })
	container!: ElementRef
	
	private scene!: THREE.scene;
	private camera!:
THREE.PerspectiveCamera;
	private renderer!:
THREE.WebGLRenderer;

	constructor() {}
	
	ngOnInit(): void {
		this.initThreeJs();
	}
	
	ngAfterViewInit(): void {

this.container.nativeElement.appendChild(
	
		this.renderer.domElement
	);
}
	
	<div #rendererContainter></div>
@ViewChild('rendererContainer', { static: true })
container!: ElementRef;

import {
	Component, 
	ElementRed, 
	ViewChild,
	OnInit,
	AfterViewInit
} from '@angular/core';

this.container.nativeElement.appendChild(
	this.renderer.domElement
);

const material = new THREE.MeshBasicMaterial({
	map: texture
});
const light = new THREE.DirectionalLight(
    0xffffff,
    1
);
light.position.set(5, 5, 5);

this.scene.add(light);

window.addEventListener('resize', () =>
{
	this.camera.aspect = 
		window.innerWidth /
	window.innerHeight;
	
		this.camera.updateProjectionMatrix();
		
		this.renderer.setSize(
			window.innerWidth,
			window.innerHeight
		);
});
fetch('/api/scene')

cube.position.set(0, 0, 0);